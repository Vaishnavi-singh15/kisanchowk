# KisanChowk Mobile Application (Flutter & Android)

**From Farm to Market, Directly.**  
A native Flutter/Dart Android mobile application connecting farmers, bulk buyers, and FPOs through transparent pricing, AI quality grading, and direct logistics.

---

## 📱 Architecture & Features Overview

### 1. Farmer Journey
- **Multilingual Sign-In**: Supports 7 Indian languages (English, Hindi, Punjabi, Tamil, Malayalam, Kannada, Gujarati) with phone and PIN validation.
- **Crop Upload (Step 1 of 3)**: Crop selection (Tomatoes, Potatoes, Onions, Wheat, Rice, etc.), photo capture/preview, harvest quantity, unit (kg, quintal, tonne), and GPS location auto-detection.
- **AI Computer Vision Quality Grading**: Scanning animation with real-time detection of color uniformity, moisture levels, defect rate, and official quality certification (Grade A Export Quality).
- **AI Pricing Guidance (Step 2 of 3)**: Recommended farmgate price (e.g., ₹42/kg), APMC regional benchmark scale (Min/Recommended/Max), market intelligence drivers, and instant projected revenue calculations.
- **Listing Live (Step 3 of 3)**: Instant marketplace activation, engagement counters (Views, Interested, Offers), and live incoming offer alerts.
- **Offer Negotiation**: Real-time buyer bids (e.g. FreshMart Delhi, Reliance Fresh, Local Mandi), counter-offer modal dialog, and instant offer acceptance.
- **Pickup Scheduled & Timeline**: Automated order confirmation (`KD-8924`), scheduled pickup window, 5-stage logistics timeline, and extra earnings tracker (+₹900 vs mandi).

### 2. Buyer Journey
- **Marketplace**: Clean product catalog with categories (Vegetables, Fruits, Grains, Dairy), live search, Grade badges, and animated Add-to-Cart.
- **Shopping Cart & Checkout**: Quantity controllers (+/−), delivery address selection, delivery time slots, and payment method options (UPI, Cards, Net Banking).
- **Order Confirmation**: Order ID badge, 4-stage progress tracker (Placed -> Packed -> In Transit -> Delivered), and direct farmer contribution metrics (75% to farmer).

### 3. FPO & Ecosystem Portals
- **Logistics Corridor**: Live transit simulator with route waypoints (Ludhiana -> Ambala -> Panipat -> Delhi), real-time animated truck marker, ETA, and direct driver calling.
- **Price Transparency**: Transparent cost breakdown (75% Farmer, 16.6% Logistics, 8.3% Platform fee) with comparison to retail mandi prices.
- **AI Demand Forecast**: Regional demand heatmaps, weekly peak demand windows (Thu-Sat), trending crop demand, and 4-week price prediction curve for Rice.
- **KisanChowk AI Chatbot**: Agricultural advisor answering questions on MSP rates, crop diseases (tomato blight), government schemes (PM-KISAN), and optimal selling times.
- **FPO Hub & Bulk Buyer Portals**: Cluster supply aggregation and institutional tender RFP submissions.

---

## 🗄️ Backend Setup (Supabase)

The backend schema is located in `supabase/schema.sql`.

### Quick Setup Steps:
1. Go to [supabase.com](https://supabase.com) and create a free project.
2. In the Supabase Dashboard, navigate to the **SQL Editor**.
3. Open `flutter_app/supabase/schema.sql`, copy all contents, and click **Run**.
4. This will create:
   - `profiles` table with user roles (`farmer`, `buyer`, `fpo`)
   - `crop_listings` table with quality scores and status
   - `buyer_offers` table for negotiation
   - `orders` and `order_items` tables for logistics
   - Strict Row Level Security (RLS) policies protecting farmer data
   - Realistic seed data for immediate demonstration.
5. In Project Settings > API, copy your `Project URL` and `anon public` key.
6. Pass them to Flutter during run:
   ```bash
   flutter run --dart-define=SUPABASE_URL=https://your-project.supabase.co --dart-define=SUPABASE_ANON_KEY=your-anon-key
   ```
*(Note: If no Supabase credentials are provided, the app automatically runs in High-Fidelity Demo Mode so that hackathon pitches are completely resilient to network failure!)*

---

## 🛠️ Build & Run Commands

### 1. Install Dependencies
```bash
cd flutter_app
flutter pub get
```

### 2. Run Locally on Android Phone or Emulator
```bash
flutter run
```

### 3. Build Release APK for Phone Installation
```bash
flutter build apk --release
```
**Output APK Path:**
`flutter_app/build/app/outputs/flutter-apk/app-release.apk`

---

## 📲 Phone Sideloading Instructions

1. Connect your Android phone to your PC via USB cable.
2. Enable **Developer Options** and **USB Debugging** on your phone (or simply send the generated APK file to your phone via Google Drive, WhatsApp, or USB File Transfer).
3. Tap on the APK file on your phone.
4. If prompted with *"Install Unknown Apps"*, toggle **Allow from this source**.
5. Tap **Install** and open **KisanChowk**!
