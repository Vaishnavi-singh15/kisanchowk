import { useState } from "react";

export interface Product {
  id: number;
  name: string;
  farmer: string;
  price: number;
  unit: string;
  badge?: string;
  badgeColor?: string;
  img: string;
  delivery?: string;
  farmerType?: "farm" | "fpo";
}

const PRODUCTS: Product[] = [
  { id: 1, name: "Organic Tomatoes", farmer: "Ramesh K, Punjab", price: 40, unit: "kg", badge: "Grade A", badgeColor: "#1a6b3c", img: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&q=80&fit=crop", farmerType: "farm" },
  { id: 2, name: "Basmati Rice", farmer: "Green FPO, Haryana", price: 85, unit: "kg", badge: "Premium", badgeColor: "#d97706", img: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&q=80&fit=crop", farmerType: "fpo" },
  { id: 3, name: "Fresh Spinach", farmer: "Sun Farms, UP", price: 20, unit: "bunch", delivery: "Next Day", img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80&fit=crop", farmerType: "farm" },
  { id: 4, name: "Red Onions", farmer: "Sharma Farms, MH", price: 25, unit: "kg", img: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400&q=80&fit=crop", farmerType: "farm" },
  { id: 5, name: "Baby Potatoes", farmer: "Kumar Farms, UP", price: 18, unit: "kg", badge: "Organic", badgeColor: "#1a6b3c", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80&fit=crop", farmerType: "farm" },
  { id: 6, name: "Alphonso Mangoes", farmer: "Ratnagiri FPO, MH", price: 220, unit: "dozen", badge: "Seasonal", badgeColor: "#f59e0b", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80&fit=crop", farmerType: "fpo" },
];

const CATEGORIES = ["All", "Vegetables", "Fruits", "Grains", "Dairy"];

interface MarketplaceProps {
  onAddToCart: (product: Product) => void;
  cartCount: number;
  onOpenCart: () => void;
  onMenu?: () => void;
  onNotif?: () => void;
  onAIChat?: () => void;
}

export default function Marketplace({ onAddToCart, cartCount, onOpenCart, onMenu, onAIChat }: MarketplaceProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [added, setAdded] = useState<number | null>(null);

  function handleAdd(p: Product) {
    onAddToCart(p);
    setAdded(p.id);
    setTimeout(() => setAdded(null), 800);
  }

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-full bg-[#f0f7f2] pb-24 ">
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-500">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="#374151"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4" y="4" width="3" height="7" rx="0.5"/><rect x="8" y="2" width="3" height="9" rx="0.5"/><rect x="12" y="0" width="3" height="11" rx="0.5"/></svg>
          <div className="w-5 h-2.5 border border-gray-400 rounded-sm p-px flex gap-0.5"><div className="flex-1 bg-gray-800 rounded-[1px]"/><div className="flex-1 bg-gray-800 rounded-[1px]"/><div className="w-1 bg-gray-300 rounded-[1px]"/></div>
        </div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-4 pb-2">
        <button onClick={onMenu} className="press w-9 h-9 flex items-center justify-center rounded-xl active:bg-gray-100">
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none"><rect width="18" height="2" rx="1" fill="#374151"/><rect y="5.5" width="12" height="2" rx="1" fill="#374151"/><rect y="11" width="18" height="2" rx="1" fill="#374151"/></svg>
        </button>
        <span className="text-[#1a6b3c] font-bold text-xl tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>KisanChowk</span>
        <button onClick={onOpenCart} className="press w-9 h-9 flex items-center justify-center rounded-xl relative">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-[#1a6b3c] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </header>

      {/* Search */}
      <div className="px-4 flex gap-2 mb-3">
        <div className="flex-1 flex items-center gap-2 bg-white rounded-2xl px-3.5 py-2.5 shadow-sm border border-gray-100">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search fresh produce..."
            className="flex-1 outline-none text-sm text-gray-700 bg-transparent placeholder:text-gray-400"
          />
        </div>
        <button className="press bg-white rounded-2xl w-11 h-11 flex items-center justify-center shadow-sm border border-gray-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
            <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="12" y1="18" x2="20" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 px-4 mb-4 overflow-x-auto no-scroll">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`press shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeCategory === cat ? "bg-[#1a6b3c] text-white shadow-sm shadow-[#1a6b3c]/40" : "bg-white text-gray-500 border border-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* AI Alert */}
      <button onClick={onAIChat} className="press mx-4 mb-4 bg-white rounded-2xl p-3.5 flex gap-3 border-l-4 border-[#1a6b3c] w-[calc(100%-2rem)] text-left">
        <div className="w-9 h-9 bg-[#e8f5ee] rounded-xl flex items-center justify-center text-lg shrink-0">🤖</div>
        <div className="flex-1">
          <div className="font-semibold text-gray-900 text-xs" style={{ fontFamily: "Montserrat, sans-serif" }}>KisanChowk AI</div>
          <div className="text-gray-500 text-[11px] leading-snug mt-0.5">Tomato demand peaking across north India. Tap to chat with AI →</div>
        </div>
      </button>

      {/* Products grid */}
      {filteredProducts.length === 0 ? (
        <div className="px-4 py-4">
          <div className="bg-white rounded-3xl p-6 text-center shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="w-14 h-14 bg-[#e8f5ee] rounded-2xl flex items-center justify-center text-2xl mb-3">
              🔍
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
              No produce found
            </h3>
            <p className="text-gray-500 text-xs max-w-[240px] mb-4 leading-relaxed">
              Try searching for crops like Tomatoes, Potatoes, Onions, Rice, or Wheat.
            </p>
            <button
              onClick={() => setSearch("")}
              className="press px-4 py-2 bg-[#1a6b3c] text-white text-xs font-semibold rounded-xl transition-all shadow-sm shadow-[#1a6b3c]/30"
            >
              Clear Search
            </button>
          </div>
        </div>
      ) : (
        <div className="px-4 grid grid-cols-2 gap-3 stagger">
          {filteredProducts.map((product, idx) => {
          if (idx === 2) {
            return (
              <div key={product.id} className="col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm">
                <div className="relative h-44">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover"/>
                  {product.delivery && (
                    <span className="absolute bottom-2 left-2 bg-white text-[#1a6b3c] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      🚚 {product.delivery}
                    </span>
                  )}
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>{product.name}</div>
                    <div className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                      {product.farmerType === "fpo" ? "🏭" : "📍"} {product.farmer}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#1a6b3c] font-bold text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      ₹{product.price}<span className="text-xs font-normal text-gray-400">/{product.unit}</span>
                    </span>
                    <button
                      onClick={() => handleAdd(product)}
                      className={`press px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        added === product.id ? "bg-[#1a6b3c] text-white" : "bg-[#e8f5ee] text-[#1a6b3c]"
                      }`}
                    >
                      {added === product.id ? "✓ Added" : "+ Cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm">
              <div className="relative h-36">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover"/>
                {product.badge && (
                  <span
                    className="absolute top-2 left-2 text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: product.badgeColor }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-3">
                <div className="font-bold text-gray-900 text-xs mb-0.5" style={{ fontFamily: "Montserrat, sans-serif" }}>{product.name}</div>
                <div className="text-gray-400 text-[10px] flex items-center gap-0.5 mb-2">
                  {product.farmerType === "fpo" ? "🏭" : "📍"} {product.farmer}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1a6b3c] font-bold text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    ₹{product.price}<span className="text-[10px] font-normal text-gray-400">/{product.unit}</span>
                  </span>
                  <button
                    onClick={() => handleAdd(product)}
                    className={`press w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                      added === product.id ? "bg-[#1a6b3c] text-white" : "bg-[#e8f5ee] text-[#1a6b3c]"
                    }`}
                  >
                    {added === product.id ? "✓" : "+"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
}
