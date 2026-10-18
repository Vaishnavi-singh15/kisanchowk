interface ListingLiveProps {
  onViewOffers: () => void;
}

export default function ListingLive({ onViewOffers }: ListingLiveProps) {
  return (
    <div className="min-h-full bg-[#f0f7f2] pb-8">
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-500">9:41</span>
      </div>
      <header className="flex items-center justify-between px-4 pb-3">
        <div className="w-9"/>
        <span className="font-bold text-gray-900 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>Listing Published</span>
        <div className="text-gray-400 text-xs font-medium">3 of 3</div>
      </header>

      {/* Progress */}
      <div className="px-4 mb-5 flex gap-1.5">
        <div className="h-1.5 flex-1 bg-[#1a6b3c] rounded-full"/>
        <div className="h-1.5 flex-1 bg-[#1a6b3c] rounded-full"/>
        <div className="h-1.5 flex-1 bg-[#1a6b3c] rounded-full"/>
      </div>

      <div className="px-4 flex flex-col gap-4">
        {/* Success */}
        <div className="bg-gradient-to-br from-[#1a6b3c] to-[#0d4024] rounded-3xl p-6 flex flex-col items-center text-center">
          <div className="anim-pop w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-xl">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div className="text-white font-bold text-xl mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>Listing is Live!</div>
          <div className="text-white/70 text-sm">Your tomatoes are now visible to buyers across Punjab & Haryana</div>
        </div>

        {/* Listing card */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="relative h-36">
            <img
              src="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500&q=80&fit=crop"
              alt="Tomatoes"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#1a6b3c] text-white text-xs px-2.5 py-1 rounded-full font-bold">● Live</span>
            <span className="absolute top-3 right-3 bg-white text-gray-700 text-xs px-2.5 py-1 rounded-full font-semibold">Grade A</span>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold text-gray-900 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>Farm Fresh Tomatoes</div>
                <div className="text-gray-400 text-xs mt-0.5">📍 Ludhiana, Punjab • 500 kg available</div>
              </div>
              <div className="text-[#1a6b3c] font-bold text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>₹42<span className="text-xs text-gray-400 font-normal">/kg</span></div>
            </div>
          </div>
        </div>

        {/* Live stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { val: "142", label: "Views", icon: "👁️" },
            { val: "8", label: "Interested", icon: "❤️" },
            { val: "3", label: "Offers", icon: "💬" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-3 text-center">
              <div className="text-lg mb-1">{s.icon}</div>
              <div className="font-bold text-gray-900 text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>{s.val}</div>
              <div className="text-gray-400 text-[10px]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Offer alert */}
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-2xl p-4 flex items-start gap-3">
          <span className="text-2xl">🔔</span>
          <div>
            <div className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>New Offer Received!</div>
            <div className="text-gray-500 text-xs mt-0.5">
              <span className="font-semibold">FreshMart Delhi</span> offered <span className="text-[#1a6b3c] font-bold">₹40/kg</span> for 300 kg
            </div>
          </div>
        </div>

        <button
          onClick={onViewOffers}
          className="press w-full bg-[#1a6b3c] text-white rounded-2xl py-4 font-bold text-[15px] shadow-lg shadow-[#1a6b3c]/30 flex items-center justify-center gap-2"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          View & Negotiate Offers →
        </button>
      </div>
    </div>
  );
}
