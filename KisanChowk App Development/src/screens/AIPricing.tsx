interface AIPricingProps {
  onPublish: () => void;
  onBack: () => void;
}

export default function AIPricing({ onPublish, onBack }: AIPricingProps) {
  return (
    <div className="min-h-full bg-[#f0f7f2] pb-8">
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-500">9:41</span>
      </div>
      <header className="flex items-center justify-between px-4 pb-3">
        <button onClick={onBack} className="press w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <span className="font-bold text-gray-900 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>AI Price Guidance</span>
        <div className="text-gray-400 text-xs font-medium">2 of 3</div>
      </header>

      {/* Progress */}
      <div className="px-4 mb-5 flex gap-1.5">
        <div className="h-1.5 flex-1 bg-[#1a6b3c] rounded-full"/>
        <div className="h-1.5 flex-1 bg-[#1a6b3c] rounded-full"/>
        <div className="h-1.5 flex-1 bg-gray-200 rounded-full"/>
      </div>

      <div className="px-4 flex flex-col gap-4">
        {/* Crop summary */}
        <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=100&q=80&fit=crop"
            alt="Tomatoes"
            className="w-14 h-14 rounded-2xl object-cover"
          />
          <div className="flex-1">
            <div className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>Tomatoes • 500 kg</div>
            <div className="text-gray-400 text-xs">Grade A • Ludhiana, Punjab</div>
            <div className="mt-1 inline-block bg-[#e8f5ee] text-[#1a6b3c] text-[10px] px-2 py-0.5 rounded-full font-semibold">📷 Photo Verified</div>
          </div>
        </div>

        {/* AI recommendation */}
        <div className="bg-gradient-to-br from-[#1a6b3c] to-[#0d4024] rounded-3xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center text-lg">🤖</div>
            <span className="text-white/80 text-xs font-semibold uppercase tracking-wide">KisanChowk AI Recommendation</span>
          </div>
          <div className="text-white text-xs mb-2">Recommended price per kg</div>
          <div className="text-white font-bold text-5xl mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>₹42</div>
          <div className="text-white/60 text-xs mb-4">Based on current market data</div>
          <div className="bg-white/10 rounded-2xl p-3 flex items-center gap-2">
            <span className="text-green-300">↑</span>
            <span className="text-white/80 text-xs">₹3 above regional average of ₹39/kg</span>
          </div>
        </div>

        {/* Price range */}
        <div className="bg-white rounded-2xl p-4">
          <div className="font-bold text-gray-900 text-sm mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Market Price Range Today</div>
          <div className="relative h-12 mb-3">
            <div className="absolute top-5 left-0 right-0 h-2 bg-gray-100 rounded-full">
              <div className="absolute left-[25%] right-[20%] h-full bg-gradient-to-r from-[#d1fae5] to-[#1a6b3c] rounded-full"/>
              <div className="absolute left-[60%] -translate-x-1/2 -top-3 w-5 h-5 bg-[#1a6b3c] rounded-full border-3 border-white shadow-md" style={{ border: "3px solid white" }}/>
            </div>
            <div className="absolute top-0 left-[25%] -translate-x-1/2 text-xs text-gray-400">₹32</div>
            <div className="absolute top-0 left-[60%] -translate-x-1/2 text-xs text-[#1a6b3c] font-bold">₹42 ✓</div>
            <div className="absolute top-0 right-[20%] translate-x-1/2 text-xs text-gray-400">₹50</div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Min Market</span>
            <span className="text-[#1a6b3c] font-semibold">AI Recommended</span>
            <span>Max Market</span>
          </div>
        </div>

        {/* Market insights */}
        <div className="bg-white rounded-2xl p-4">
          <div className="font-bold text-gray-900 text-sm mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Why This Price?</div>
          <div className="flex flex-col gap-2.5">
            {[
              { icon: "📈", text: "Demand up 15% this week in your region" },
              { icon: "🌦️", text: "Rain reduced nearby supply by 8%" },
              { icon: "🚚", text: "3 bulk buyers active within 40km" },
              { icon: "⭐", text: "Your Grade A quality commands 8% premium" },
            ].map((f) => (
              <div key={f.icon} className="flex items-start gap-2.5">
                <div className="w-7 h-7 bg-[#e8f5ee] rounded-xl flex items-center justify-center text-sm shrink-0">{f.icon}</div>
                <span className="text-gray-600 text-xs pt-1">{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom price */}
        <div className="bg-white rounded-2xl p-4">
          <div className="font-bold text-gray-900 text-sm mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>Set Your Price</div>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-[#f0fdf4] border-2 border-[#1a6b3c] rounded-2xl flex items-center px-4 py-3">
              <span className="text-[#1a6b3c] font-bold text-lg mr-1">₹</span>
              <input defaultValue="42" type="number" className="flex-1 font-bold text-xl text-gray-900 outline-none bg-transparent w-16"/>
              <span className="text-gray-400 text-sm">/kg</span>
            </div>
            <button className="press bg-[#e8f5ee] text-[#1a6b3c] rounded-2xl px-4 py-3 font-bold text-sm">
              Apply AI →
            </button>
          </div>
          <div className="text-gray-400 text-xs mt-2">Total estimated: <span className="text-[#1a6b3c] font-bold">₹21,000</span> for 500kg</div>
        </div>

        <button
          onClick={onPublish}
          className="press w-full bg-[#1a6b3c] text-white rounded-2xl py-4 font-bold text-[15px] shadow-lg shadow-[#1a6b3c]/30 flex items-center justify-center gap-2"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Publish Listing →
        </button>
      </div>
    </div>
  );
}
