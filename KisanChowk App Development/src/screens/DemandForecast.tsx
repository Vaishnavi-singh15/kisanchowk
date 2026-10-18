interface DemandForecastProps {
  onMenu?: () => void;
  onNotif?: () => void;
}

const DAYS = [
  { d: "Mon", v: 40 }, { d: "Tue", v: 55 }, { d: "Wed", v: 35 },
  { d: "Thu", v: 70, hi: true }, { d: "Fri", v: 85, hi: true },
  { d: "Sat", v: 60, hi: true }, { d: "Sun", v: 45 },
];

const PRICE_WKS = [{ w: "Wk1", v: 2300 }, { w: "Wk2", v: 2350 }, { w: "Wk3", v: 2420 }, { w: "Wk4", v: 2450 }];

export default function DemandForecast({ onMenu, onNotif }: DemandForecastProps) {
  const maxBar = Math.max(...DAYS.map((d) => d.v));
  const minP = Math.min(...PRICE_WKS.map((w) => w.v));
  const maxP = Math.max(...PRICE_WKS.map((w) => w.v));
  const span = maxP - minP + 100;

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
        <h1 className="font-bold text-gray-900 text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>AI Demand Insights</h1>
        <p className="text-gray-400 text-sm mb-4">Actionable market forecasts to maximise your yield.</p>

        {/* Top alert */}
        <div className="bg-white rounded-2xl p-4 flex gap-3 mb-4">
          <div className="w-11 h-11 bg-[#1a6b3c] rounded-2xl flex items-center justify-center text-2xl shrink-0">📈</div>
          <div>
            <div className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Market needs more potatoes next week
            </div>
            <div className="text-gray-500 text-xs leading-relaxed">
              Demand expected to spike 15% due to unseasonal rain in neighbouring states.
            </div>
          </div>
        </div>

        {/* Heatmap */}
        <div className="bg-white rounded-2xl p-4 mb-4">
          <div className="font-bold text-gray-900 text-sm mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Regional Demand Heatmap</div>
          <div className="relative rounded-xl overflow-hidden h-36 bg-green-50">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=70&fit=crop" alt="Map" className="w-full h-full object-cover opacity-40"/>
            <div className="absolute top-4 left-8 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">High</div>
            <div className="absolute top-10 right-10 bg-yellow-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">Medium</div>
            <div className="absolute bottom-5 left-20 bg-[#1a6b3c] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">Low</div>
          </div>
          <div className="flex gap-4 mt-3 justify-center">
            {[["#ef4444", "High"], ["#f59e0b", "Medium"], ["#1a6b3c", "Low"]].map(([c, l]) => (
              <span key={l} className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: c }}/>
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* Trending */}
        <div className="mb-4">
          <div className="font-bold text-gray-900 text-sm mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Trending Products</div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Potatoes", trend: "+15%", dir: "up", desc: "High demand expected" },
              { name: "Onions",   trend: "-5%",  dir: "dn", desc: "Oversupply detected" },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-3.5">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>{t.name}</span>
                  <span className={`text-xs font-bold ${t.dir === "up" ? "text-[#1a6b3c]" : "text-red-500"}`}>
                    {t.dir === "up" ? "↑" : "↓"}{t.trend}
                  </span>
                </div>
                <div className="text-gray-400 text-[11px]">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended action */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4 flex gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <div className="text-amber-700 font-bold text-xs mb-1">Recommended Action</div>
            <div className="text-gray-700 text-sm">Increase Wheat supply for November — expected 20% spike in price.</div>
          </div>
        </div>

        {/* Bar chart */}
        <div className="bg-white rounded-2xl p-4 mb-4">
          <div className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>Weekly Demand Pattern</div>
          <div className="text-gray-400 text-xs mb-4">Thu–Sat peak demand window</div>
          <div className="flex items-end gap-1.5 h-24">
            {DAYS.map((b) => (
              <div key={b.d} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-xl transition-all"
                  style={{ height: `${(b.v / maxBar) * 100}%`, background: (b as {hi?: boolean}).hi ? "#1a6b3c" : "#d1fae5" }}
                />
                <span className={`text-[10px] font-semibold ${(b as {hi?: boolean}).hi ? "text-[#1a6b3c]" : "text-gray-400"}`}>{b.d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price prediction line */}
        <div className="bg-white rounded-2xl p-4">
          <div className="font-bold text-gray-900 text-sm mb-0.5" style={{ fontFamily: "Montserrat, sans-serif" }}>Rice Price Prediction (4 Wks)</div>
          <div className="text-[#1a6b3c] font-bold text-2xl mb-0.5" style={{ fontFamily: "Montserrat, sans-serif" }}>₹2,450<span className="text-xs font-normal text-gray-400"> / quintal</span></div>
          <div className="text-xs text-[#1a6b3c] mb-3">↑ Projected Peak &nbsp;<span className="text-gray-400">Current: ₹2,300</span></div>
          <svg viewBox="0 0 280 80" className="w-full" fill="none">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a6b3c" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#1a6b3c" stopOpacity="0"/>
              </linearGradient>
            </defs>
            {/* Grid lines */}
            {[0,1,2].map(i => <line key={i} x1="0" y1={20+i*20} x2="280" y2={20+i*20} stroke="#f0f0f0" strokeWidth="1"/>)}
            {/* Area */}
            <path
              d={`M 20 ${80 - ((2300 - minP + 50) / span) * 70} L 100 ${80 - ((2350 - minP + 50) / span) * 70} L 180 ${80 - ((2420 - minP + 50) / span) * 70} L 260 ${80 - ((2450 - minP + 50) / span) * 70} L 260 80 L 20 80 Z`}
              fill="url(#lineGrad)"
            />
            {/* Line */}
            <polyline
              points={PRICE_WKS.map((w, i) => `${20 + i * 80},${80 - ((w.v - minP + 50) / span) * 70}`).join(" ")}
              stroke="#1a6b3c" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"
            />
            {/* Dots */}
            {PRICE_WKS.map((w, i) => (
              <circle key={w.w} cx={20 + i * 80} cy={80 - ((w.v - minP + 50) / span) * 70} r="4" fill="#1a6b3c" stroke="white" strokeWidth="2"/>
            ))}
          </svg>
          <div className="flex justify-between mt-1">
            {PRICE_WKS.map(w => <span key={w.w} className="text-[10px] text-gray-400 font-medium">{w.w}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
