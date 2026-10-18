import { useState } from "react";

interface NegotiateProps {
  onAccept: () => void;
  onBack: () => void;
}

export default function Negotiate({ onAccept, onBack }: NegotiateProps) {
  const [accepted, setAccepted] = useState<string | null>(null);

  const offers = [
    { id: "A", buyer: "FreshMart Delhi", initials: "FM", color: "#0ea5e9", offer: 40, qty: 300, rating: 4.8, badge: "Top Buyer", badgeColor: "bg-blue-100 text-blue-700" },
    { id: "B", buyer: "Reliance Fresh", initials: "RF", color: "#8b5cf6", offer: 38, qty: 500, rating: 4.6, badge: "Bulk Order", badgeColor: "bg-purple-100 text-purple-700" },
    { id: "C", buyer: "Local Mandi", initials: "LM", color: "#f97316", offer: 35, qty: 200, rating: 4.2, badge: "Quick Pay", badgeColor: "bg-orange-100 text-orange-700" },
  ];

  function handleAccept(id: string) {
    setAccepted(id);
    setTimeout(() => onAccept(), 1200);
  }

  return (
    <div className="min-h-full bg-[#f0f7f2] pb-8">
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-500">9:41</span>
      </div>
      <header className="flex items-center justify-between px-4 pb-4">
        <button onClick={onBack} className="press w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <span className="font-bold text-gray-900 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>Buyer Offers</span>
        <span className="bg-[#1a6b3c] text-white text-xs px-2.5 py-1 rounded-full font-bold">{offers.length} Offers</span>
      </header>

      <div className="px-4 flex flex-col gap-3">
        {/* Your listing */}
        <div className="bg-white rounded-2xl p-3.5 flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=80&q=80&fit=crop"
            alt="Tomatoes"
            className="w-12 h-12 rounded-xl object-cover"
          />
          <div className="flex-1">
            <div className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>Your Listing: Tomatoes</div>
            <div className="text-gray-400 text-xs">500 kg • Grade A • ₹42/kg asking</div>
          </div>
        </div>

        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Received Offers</div>

        {offers.map((o) => (
          <div
            key={o.id}
            className={`bg-white rounded-2xl p-4 transition-all duration-300 ${accepted === o.id ? "border-2 border-[#1a6b3c] bg-[#f0fdf4]" : "border border-gray-100"}`}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ background: o.color }}>
                {o.initials}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>{o.buyer}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${o.badgeColor}`}>{o.badge}</span>
                </div>
                <div className="text-gray-400 text-xs">⭐ {o.rating} • Verified Buyer</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-3 bg-gray-50 rounded-xl p-3">
              <div className="text-center">
                <div className="font-bold text-gray-900 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>₹{o.offer}</div>
                <div className="text-gray-400 text-[10px]">per kg</div>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="font-bold text-gray-900 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>{o.qty}</div>
                <div className="text-gray-400 text-[10px]">kg required</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#1a6b3c] text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>₹{(o.offer * o.qty).toLocaleString()}</div>
                <div className="text-gray-400 text-[10px]">total</div>
              </div>
            </div>
            <div className={`flex gap-2 ${accepted === o.id ? "opacity-50" : ""}`}>
              <button className="press flex-1 border-2 border-gray-200 text-gray-600 rounded-xl py-2.5 text-xs font-bold">
                Counter Offer
              </button>
              <button
                onClick={() => handleAccept(o.id)}
                className={`press flex-1 rounded-xl py-2.5 text-xs font-bold transition-all ${
                  accepted === o.id
                    ? "bg-[#1a6b3c] text-white"
                    : "bg-[#1a6b3c] text-white"
                }`}
              >
                {accepted === o.id ? "✓ Accepted!" : "Accept Offer"}
              </button>
            </div>
          </div>
        ))}

        {/* AI advice */}
        <div className="bg-[#e8f5ee] rounded-2xl p-4 flex gap-3">
          <span className="text-xl">🤖</span>
          <div>
            <div className="font-bold text-[#1a6b3c] text-xs mb-1">AI Advice</div>
            <div className="text-gray-600 text-xs leading-relaxed">
              FreshMart's ₹40 offer is strong. Accepting now means delivery within 2 days while prices are still high.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
