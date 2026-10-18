-- ==============================================================================
-- KisanChowk Database Schema (Supabase / PostgreSQL)
-- Description: Core tables, Row Level Security (RLS) policies, triggers & seed data
-- ==============================================================================

-- 1. PROFILES TABLE (Linked with Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role TEXT NOT NULL CHECK (role IN ('farmer', 'buyer', 'fpo')),
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    state TEXT DEFAULT 'Punjab',
    district TEXT DEFAULT 'Ludhiana',
    aadhaar_number TEXT,
    is_verified BOOLEAN DEFAULT true,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. CROP LISTINGS TABLE
CREATE TABLE IF NOT EXISTS public.crop_listings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    farmer_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    farmer_name TEXT NOT NULL,
    crop_name TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('Vegetables', 'Fruits', 'Grains', 'Dairy')),
    quantity NUMERIC NOT NULL CHECK (quantity > 0),
    unit TEXT NOT NULL DEFAULT 'kg',
    grade TEXT NOT NULL DEFAULT 'Grade A',
    asking_price NUMERIC NOT NULL CHECK (asking_price > 0),
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    photo_url TEXT,
    color_score INTEGER DEFAULT 94,
    moisture_score INTEGER DEFAULT 88,
    defect_rate INTEGER DEFAULT 3,
    freshness_score INTEGER DEFAULT 96,
    ai_recommendation TEXT,
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'pending_negotiation', 'sold', 'archived')),
    views_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. BUYER OFFERS TABLE (Negotiation engine)
CREATE TABLE IF NOT EXISTS public.buyer_offers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    listing_id UUID REFERENCES public.crop_listings(id) ON DELETE CASCADE,
    buyer_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    buyer_name TEXT NOT NULL,
    buyer_initials TEXT NOT NULL,
    badge TEXT DEFAULT 'Verified Buyer',
    badge_color TEXT DEFAULT 'bg-blue-100 text-blue-700',
    offer_price NUMERIC NOT NULL CHECK (offer_price > 0),
    requested_qty NUMERIC NOT NULL CHECK (requested_qty > 0),
    rating NUMERIC(2,1) DEFAULT 4.8,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'countered', 'accepted', 'rejected')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. ORDERS TABLE (Delivery & Logistics)
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_number TEXT UNIQUE NOT NULL, -- e.g. 'KD-89240'
    buyer_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    buyer_name TEXT NOT NULL,
    delivery_address TEXT NOT NULL,
    delivery_slot TEXT DEFAULT 'Tomorrow, 8:00 AM - 10:00 AM',
    payment_method TEXT DEFAULT 'upi' CHECK (payment_method IN ('upi', 'card', 'netbanking')),
    total_amount NUMERIC NOT NULL,
    status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'driver_assigned', 'picked_up', 'in_transit', 'delivered')),
    driver_name TEXT DEFAULT 'Gurpreet Singh',
    driver_phone TEXT DEFAULT '+91 98140 23456',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. ORDER ITEMS TABLE
CREATE TABLE IF NOT EXISTS public.order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
    product_name TEXT NOT NULL,
    quantity NUMERIC NOT NULL,
    unit TEXT NOT NULL,
    price_per_unit NUMERIC NOT NULL,
    subtotal NUMERIC NOT NULL
);

-- 6. NOTIFICATIONS TABLE
CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.crop_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.buyer_offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Profiles: Public can read public farmer details; Users can update their own
CREATE POLICY "Public profiles are viewable by everyone" 
ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Crop Listings: Anyone can view active listings; Farmers can manage their own
CREATE POLICY "Active listings are viewable by everyone" 
ON public.crop_listings FOR SELECT USING (true);

CREATE POLICY "Farmers can insert listings" 
ON public.crop_listings FOR INSERT WITH CHECK (auth.uid() = farmer_id);

CREATE POLICY "Farmers can update own listings" 
ON public.crop_listings FOR UPDATE USING (auth.uid() = farmer_id);

-- Buyer Offers: Farmers can view offers for their crops; Buyers can view their own
CREATE POLICY "Offers viewable by involved parties" 
ON public.buyer_offers FOR SELECT USING (
    auth.uid() = buyer_id OR 
    EXISTS (SELECT 1 FROM public.crop_listings WHERE crop_listings.id = buyer_offers.listing_id AND crop_listings.farmer_id = auth.uid())
);

CREATE POLICY "Buyers can submit offers" 
ON public.buyer_offers FOR INSERT WITH CHECK (auth.uid() = buyer_id);

CREATE POLICY "Involved parties can update offers" 
ON public.buyer_offers FOR UPDATE USING (
    auth.uid() = buyer_id OR 
    EXISTS (SELECT 1 FROM public.crop_listings WHERE crop_listings.id = buyer_offers.listing_id AND crop_listings.farmer_id = auth.uid())
);

-- Orders: Buyers can view and insert their own orders
CREATE POLICY "Buyers can view their own orders" 
ON public.orders FOR SELECT USING (auth.uid() = buyer_id);

CREATE POLICY "Buyers can create orders" 
ON public.orders FOR INSERT WITH CHECK (auth.uid() = buyer_id);

CREATE POLICY "Order items viewable by order owners" 
ON public.order_items FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.orders WHERE orders.id = order_items.order_id AND orders.buyer_id = auth.uid())
);

CREATE POLICY "Buyers can add order items" 
ON public.order_items FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.orders WHERE orders.id = order_items.order_id AND orders.buyer_id = auth.uid())
);

-- Notifications
CREATE POLICY "Users view their own notifications" 
ON public.notifications FOR SELECT USING (auth.uid() = user_id);

-- ==============================================================================
-- INITIAL SEED DATA (For immediate hackathon testing & demo)
-- ==============================================================================

INSERT INTO public.crop_listings (
    farmer_name, crop_name, category, quantity, unit, grade, asking_price, city, state, photo_url, color_score, moisture_score, defect_rate, freshness_score, ai_recommendation, status
) VALUES 
('Ramesh Kumar', 'Organic Tomatoes', 'Vegetables', 500, 'kg', 'Grade A', 40, 'Ludhiana', 'Punjab', 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&q=85&fit=crop', 94, 92, 3, 96, 'Premium export quality. List at ₹40-42/kg for rapid wholesale clearance.', 'active'),
('Green FPO', 'Basmati Rice', 'Grains', 2000, 'kg', 'Grade A', 85, 'Karnal', 'Haryana', 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=85&fit=crop', 90, 14, 2, 95, 'High head-rice ratio. Direct procurement by retail chains recommended.', 'active'),
('Sun Farms', 'Fresh Spinach', 'Vegetables', 300, 'bunch', 'Grade A', 20, 'Meerut', 'Uttar Pradesh', 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&q=85&fit=crop', 96, 95, 2, 98, 'Harvested today. Perfect for quick morning dispatch to NCR.', 'active'),
('Sharma Farms', 'Red Onions', 'Vegetables', 3500, 'kg', 'Grade A', 25, 'Nashik', 'Maharashtra', 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&q=85&fit=crop', 91, 72, 4, 93, 'Uniform skin quality. Stored in climate-controlled shed.', 'active'),
('Kumar Farms', 'Baby Potatoes', 'Vegetables', 1200, 'kg', 'Grade A', 18, 'Agra', 'Uttar Pradesh', 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=85&fit=crop', 88, 78, 5, 90, 'High starch content. Ideal for restaurant processing and supermarkets.', 'active'),
('Ratnagiri FPO', 'Alphonso Mangoes', 'Fruits', 800, 'dozen', 'Grade A', 220, 'Ratnagiri', 'Maharashtra', 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=85&fit=crop', 95, 82, 1, 98, 'GI-tagged authentic Ratnagiri Alphonso. Pre-ripened naturally.', 'active')
ON CONFLICT DO NOTHING;
