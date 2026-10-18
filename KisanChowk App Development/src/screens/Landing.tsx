interface LandingProps {
  onEnter: (role: "farmer" | "buyer") => void;
  onMenu?: () => void;
  onNotif?: () => void;
}

export default function Landing({ onEnter, onMenu, onNotif }: LandingProps) {
  return (
    <div className="min-h-full bg-[#f0f7f2] flex flex-col pb-8 ">
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-500">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="#374151">
            <rect x="0" y="7" width="3" height="4" rx="0.5"/>
            <rect x="4" y="4" width="3" height="7" rx="0.5"/>
            <rect x="8" y="2" width="3" height="9" rx="0.5"/>
            <rect x="12" y="0" width="3" height="11" rx="0.5"/>
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M8 2.4C5.6 2.4 3.45 3.37 1.9 4.95L0 3.05C2.05 1.1 4.88 0 8 0s5.95 1.1 8 3.05l-1.9 1.9C12.55 3.37 10.4 2.4 8 2.4z" fill="#374151"/>
            <path d="M8 5.8c-1.5 0-2.86.6-3.86 1.58L2.24 5.48C3.73 4.01 5.76 3.1 8 3.1s4.27.91 5.76 2.38L11.86 7.38C10.86 6.4 9.5 5.8 8 5.8z" fill="#374151"/>
            <circle cx="8" cy="10" r="1.8" fill="#374151"/>
          </svg>
          <div className="flex items-center gap-0.5">
            <div className="w-5 h-2.5 border border-gray-400 rounded-sm p-px flex gap-0.5">
              <div className="flex-1 bg-gray-800 rounded-[1px]"/>
              <div className="flex-1 bg-gray-800 rounded-[1px]"/>
              <div className="w-1 bg-gray-300 rounded-[1px]"/>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-5 py-2">
        <button onClick={onMenu} className="press w-9 h-9 flex items-center justify-center rounded-xl bg-white/60">
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
            <rect width="18" height="2" rx="1" fill="#374151"/>
            <rect y="5.5" width="12" height="2" rx="1" fill="#374151"/>
            <rect y="11" width="18" height="2" rx="1" fill="#374151"/>
          </svg>
        </button>
        <span className="text-[#1a6b3c] font-bold text-xl tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
          KisanChowk
        </span>
        <button onClick={onNotif} className="press w-9 h-9 flex items-center justify-center rounded-xl bg-white/60 relative">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"/>
        </button>
      </header>

      {/* Hero */}
      <div className="mx-4 rounded-3xl overflow-hidden h-56 relative">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&q=85&fit=crop"
          alt="Farmer in a green field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"/>
        <div className="absolute bottom-0 left-0 p-5">
          <h1 className="text-white font-bold text-[26px] leading-[1.2] mb-1.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
            From Farm to<br />Market, Directly.
          </h1>
          <p className="text-white/80 text-xs leading-relaxed max-w-[220px]">
            Connect farmers with consumers and bulk buyers — AI-powered logistics, fair prices.
          </p>
        </div>
      </div>

      {/* CTAs */}
      <div className="px-4 mt-4 flex flex-col gap-3">
        <button
          onClick={() => onEnter("buyer")}
          className="press w-full bg-[#1a6b3c] text-white rounded-2xl py-4 font-bold text-[15px] flex items-center justify-center gap-2 shadow-lg shadow-[#1a6b3c]/30"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <span className="text-lg">🛒</span> Start Buying →
        </button>
        <button
          onClick={() => onEnter("farmer")}
          className="press w-full bg-white text-[#1a6b3c] rounded-2xl py-4 font-bold text-[15px] flex items-center justify-center gap-2 border-2 border-[#1a6b3c]/20"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <span className="text-lg">🌱</span> Start Selling
        </button>
      </div>

      {/* How it works */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-1">
          <h2 className="font-bold text-gray-900 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>How it Works</h2>
          <span className="text-gray-400 text-xs">Seed to table</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 mt-3 stagger">
          {[
            { icon: "📋", title: "Farmer Lists", desc: "Upload crops & set prices easily", color: "#e8f5ee" },
            { icon: "🛒", title: "Buyer Orders", desc: "Direct purchase, no middlemen", color: "#fef3c7" },
            { icon: "🤖", title: "AI Optimises", desc: "Smart routing & demand forecasts", color: "#ede9fe" },
            { icon: "🚚", title: "Same-Day Delivery", desc: "Fresh, efficient last-mile logistics", color: "#fce7f3" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-3.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl mb-2" style={{ background: item.color }}>
                {item.icon}
              </div>
              <div className="font-semibold text-gray-900 text-xs mb-0.5" style={{ fontFamily: "Montserrat, sans-serif" }}>{item.title}</div>
              <div className="text-gray-400 text-[11px] leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Value props */}
      <div className="px-4 mt-4 grid grid-cols-2 gap-3">
        <div className="bg-[#1a6b3c] rounded-3xl overflow-hidden relative">
          <div className="p-4">
            <div className="text-white font-bold text-sm mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>For Farmers</div>
            <div className="space-y-1">
              <div className="text-white/85 text-xs flex items-center gap-1.5"><span className="text-green-300">✓</span> Guaranteed Fair Prices</div>
              <div className="text-white/85 text-xs flex items-center gap-1.5"><span className="text-green-300">✓</span> AI Demand Forecasting</div>
              <div className="text-white/85 text-xs flex items-center gap-1.5"><span className="text-green-300">✓</span> Real-time Market Alerts</div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=200&q=80&fit=crop"
            alt="Farmer"
            className="w-full h-24 object-cover opacity-40"
          />
        </div>
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100">
          <div className="p-4">
            <div className="text-[#1a6b3c] font-bold text-sm mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>For Buyers</div>
            <div className="space-y-1">
              <div className="text-gray-600 text-xs flex items-center gap-1.5"><span className="text-[#1a6b3c]">✓</span> 100% Farm Fresh</div>
              <div className="text-gray-600 text-xs flex items-center gap-1.5"><span className="text-[#1a6b3c]">✓</span> Transparent Pricing</div>
              <div className="text-gray-600 text-xs flex items-center gap-1.5"><span className="text-[#1a6b3c]">✓</span> Bulk Discounts</div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=200&q=80&fit=crop"
            alt="Fresh produce"
            className="w-full h-24 object-cover"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="mx-4 mt-4 bg-gradient-to-br from-[#1a6b3c] to-[#0d4024] rounded-3xl p-5">
        <div className="grid grid-cols-3 gap-0 text-center">
          {[
            { val: "10K+", label: "Farmers\nConnected" },
            { val: "30%", label: "More\nEarnings" },
            { val: "24/7", label: "Real-time\nLogistics" },
          ].map((s, i) => (
            <div key={s.val} className={`${i < 2 ? "border-r border-white/20" : ""} px-2`}>
              <div className="text-white font-bold text-2xl" style={{ fontFamily: "Montserrat, sans-serif" }}>{s.val}</div>
              <div className="text-white/65 text-[10px] leading-tight mt-0.5 whitespace-pre-line">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
