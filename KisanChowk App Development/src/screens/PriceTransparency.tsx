interface PriceTransparencyProps {
  onMenu?: () => void;
  onNotif?: () => void;
}

const BREAKDOWN = [
  { label: "Farmer Price",  desc: "Goes directly to the grower", amount: 18, pct: 75,   color: "#1a6b3c", icon: "🚜", barColor: "#1a6b3c" },
  { label: "Logistics",     desc: "Transport & packaging",        amount: 4,  pct: 16.6, color: "#d97706", icon: "🚚", barColor: "#f59e0b" },
  { label: "Platform Fee",  desc: "App maintenance",              amount: 2,  pct: 8.3,  color: "#6b7280", icon: "🏬", barColor: "#d1d5db" },
];

export default function PriceTransparency({ onMenu, onNotif }: PriceTransparencyProps) {
  return (
    <div className="min-h-full bg-[#f0f7f2] pb-32 ">
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-500">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="#374151"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4" y="4" width="3" height="7" rx="0.5"/><rect x="8" y="2" width="3" height="9" rx="0.5"/><rect x="12" y="0" width="3" height="11" rx="0.5"/></svg>
        </div>
      </div>
      <header className="flex items-center justify-between px-4 pb-3">
        <button onClick={onMenu} className="press w-9 h-9 flex items-center justify-center rounded-xl active:bg-gray-100">
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none"><rect width="18" height="2" rx="1" fill="#374151"/><rect y="5.5" width="12" height="2" rx="1" fill="#374151"/><rect y="11" width="18" height="2" rx="1" fill="#374151"/></svg>
        </button>
        <span className="text-[#1a6b3c] font-bold text-xl tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>KisanChowk</span>
        <button onClick={onNotif} className="press w-9 h-9 flex items-center justify-center rounded-xl active:bg-gray-100 relative">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"/>
        </button>
      </header>

      <div className="px-4">
        <h1 className="font-bold text-gray-900 text-2xl leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Where does your<br/>money go?
        </h1>
        <p className="text-gray-500 text-sm mt-1 mb-5">Transparency you can trust.</p>

        {/* Selected product */}
        <div className="bg-white rounded-2xl p-4 flex items-center gap-3 mb-4">
          <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&q=80&fit=crop" alt="Organic Potatoes" className="w-14 h-14 rounded-2xl object-cover"/>
          <div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest">Selected Product</div>
            <div className="font-bold text-gray-900 text-base mt-0.5" style={{ fontFamily: "Montserrat, sans-serif" }}>Organic Potatoes (1kg)</div>
          </div>
        </div>

        {/* Segmented bar */}
        <div className="bg-white rounded-2xl p-5 mb-4">
          <div className="flex h-5 rounded-full overflow-hidden gap-0.5 mb-6">
            {BREAKDOWN.map((b) => (
              <div key={b.label} className="rounded-full transition-all" style={{ width: `${b.pct}%`, background: b.barColor }}/>
            ))}
          </div>
          <div className="space-y-4">
            {BREAKDOWN.map((b) => (
              <div key={b.label} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl shrink-0" style={{ background: b.color + "18" }}>
                  {b.icon}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>{b.label}</div>
                  <div className="text-gray-400 text-xs">{b.desc}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900 text-base">₹{b.amount}.00</div>
                  <div className="text-xs font-semibold" style={{ color: b.color }}>{b.pct}%</div>
                </div>
              </div>
            ))}
            <div className="border-t border-dashed border-gray-100 pt-4 flex justify-between items-center">
              <span className="font-bold text-gray-900 text-base">Final Price</span>
              <span className="font-bold text-[#1a6b3c] text-2xl" style={{ fontFamily: "Montserrat, sans-serif" }}>₹24.00</span>
            </div>
          </div>
        </div>

        {/* Savings callout */}
        <div className="bg-gradient-to-br from-[#1a6b3c] to-[#0d4024] rounded-3xl p-5">
          <div className="inline-block bg-white/20 rounded-full px-3 py-0.5 text-white/80 text-xs mb-3">
            Retail Price Elsewhere: ₹35.00
          </div>
          <p className="text-white font-bold text-lg leading-snug mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>
            You saved ₹11 while the farmer earned ₹3 more than traditional markets.
          </p>
          <p className="text-white/65 text-sm">A fairer deal for everyone.</p>
        </div>
      </div>
    </div>
  );
}
