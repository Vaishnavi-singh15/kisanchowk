interface PickupScheduledProps {
  onTrack: () => void;
}

export default function PickupScheduled({ onTrack }: PickupScheduledProps) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateStr = tomorrow.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });

  return (
    <div className="min-h-full bg-[#f0f7f2] pb-8">
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-500">9:41</span>
      </div>

      {/* Green top hero */}
      <div className="bg-gradient-to-b from-[#1a6b3c] to-[#2d8a52] px-5 pt-4 pb-14 text-center">
        <div className="anim-pop w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
          <span className="text-4xl">🤝</span>
        </div>
        <h1 className="text-white font-bold text-2xl mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>Deal Confirmed!</h1>
        <p className="text-white/70 text-sm">Order accepted. Pickup is now scheduled.</p>
      </div>

      <div className="px-4 -mt-8 flex flex-col gap-3">
        {/* Order summary */}
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-100">
            <div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Order ID</div>
              <div className="font-bold text-gray-900 font-mono text-sm">KD-{Math.floor(10000 + Math.random() * 90000)}</div>
            </div>
            <span className="bg-[#e8f5ee] text-[#1a6b3c] text-xs px-3 py-1 rounded-full font-bold">Confirmed ✓</span>
          </div>

          <div className="pt-4 flex flex-col gap-3.5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#e8f5ee] rounded-2xl flex items-center justify-center text-2xl">🧅</div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">Sold To</div>
                <div className="font-bold text-gray-900 text-sm">FreshMart Delhi</div>
                <div className="text-gray-400 text-xs">300 kg Tomatoes • ₹40/kg = <span className="text-[#1a6b3c] font-bold">₹12,000</span></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#e8f5ee] rounded-2xl flex items-center justify-center text-2xl">🚚</div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">Pickup Scheduled</div>
                <div className="font-bold text-gray-900 text-sm">{dateStr}</div>
                <div className="text-gray-400 text-xs">7:00 AM – 9:00 AM from your farm</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#e8f5ee] rounded-2xl flex items-center justify-center text-2xl">💰</div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">Payment</div>
                <div className="font-bold text-[#1a6b3c] text-sm">₹12,000 via UPI</div>
                <div className="text-gray-400 text-xs">Released on delivery confirmation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery timeline */}
        <div className="bg-white rounded-2xl p-4">
          <div className="font-bold text-gray-900 text-sm mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Delivery Timeline</div>
          <div className="flex flex-col gap-0">
            {[
              { label: "Order Accepted", time: "Now", done: true },
              { label: "KisanChowk Driver Assigned", time: "In 2 hours", done: true },
              { label: "Pickup from Your Farm", time: dateStr.split(",")[0], done: false },
              { label: "In Transit to Buyer", time: "+4 hours", done: false },
              { label: "Delivered • Payment Released", time: "End of Day", done: false },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${step.done ? "bg-[#1a6b3c]" : "border-2 border-gray-200 bg-white"}`}>
                    {step.done && <span className="text-white text-[10px]">✓</span>}
                  </div>
                  {i < arr.length - 1 && <div className={`w-0.5 h-8 mt-1 ${step.done ? "bg-[#1a6b3c]" : "bg-gray-200"}`}/>}
                </div>
                <div className="pb-3">
                  <div className={`text-xs font-semibold ${step.done ? "text-[#1a6b3c]" : "text-gray-600"}`}>{step.label}</div>
                  <div className="text-gray-400 text-[10px]">{step.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Earnings */}
        <div className="bg-gradient-to-r from-[#1a6b3c] to-[#2d8a52] rounded-2xl p-4 flex items-center gap-3">
          <div className="text-3xl">🌾</div>
          <div className="flex-1">
            <div className="text-white font-bold text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>You earned ₹3 more/kg</div>
            <div className="text-white/70 text-xs">vs traditional mandi average of ₹37/kg</div>
          </div>
          <div className="text-right">
            <div className="text-white font-bold text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>+₹900</div>
            <div className="text-white/60 text-[10px]">extra earned</div>
          </div>
        </div>

        <button
          onClick={onTrack}
          className="press w-full bg-[#1a6b3c] text-white rounded-2xl py-4 font-bold text-[15px] shadow-lg shadow-[#1a6b3c]/30 flex items-center justify-center gap-2"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          🗺️ Track Live Delivery
        </button>
      </div>
    </div>
  );
}
