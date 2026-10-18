interface OrderConfirmationProps {
  orderId: string;
  onTrackOrder: () => void;
  onContinueShopping: () => void;
}

export default function OrderConfirmation({ orderId, onTrackOrder, onContinueShopping }: OrderConfirmationProps) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateStr = tomorrow.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });

  return (
    <div className="min-h-full bg-[#f0f7f2] flex flex-col ">
      {/* Green top band */}
      <div className="bg-gradient-to-b from-[#1a6b3c] to-[#2d8a52] pt-14 pb-16 px-6 flex flex-col items-center text-center">
        <div className="anim-pop w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl mb-5">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a6b3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h1 className="text-white font-bold text-3xl mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>Order Placed!</h1>
        <p className="text-white/75 text-sm">Your order is confirmed and being prepared.</p>
      </div>

      {/* White card floating over green */}
      <div className="px-4 -mt-8 flex flex-col gap-3 pb-8">
        {/* Order ID card */}
        <div className="bg-white rounded-3xl p-5 shadow-lg">
          <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-100">
            <div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Order ID</div>
              <div className="font-bold text-gray-900 font-mono text-base">{orderId}</div>
            </div>
            <span className="bg-[#e8f5ee] text-[#1a6b3c] text-xs px-3 py-1 rounded-full font-bold">Confirmed ✓</span>
          </div>

          <div className="pt-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#e8f5ee] rounded-2xl flex items-center justify-center text-2xl">🚚</div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">Estimated Delivery</div>
                <div className="font-bold text-gray-900 text-sm">{dateStr}</div>
                <div className="text-gray-400 text-xs">8:00 AM – 10:00 AM</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-[#e8f5ee] rounded-2xl flex items-center justify-center text-2xl">📍</div>
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">Delivering to</div>
                <div className="font-bold text-gray-900 text-sm">Ramesh Kumar (Farm)</div>
                <div className="text-gray-400 text-xs">Plot 42, Sector 22, Chandigarh</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress tracker */}
        <div className="bg-white rounded-3xl p-5">
          <div className="font-bold text-gray-900 text-sm mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>Order Progress</div>
          <div className="flex items-start">
            {["Order Placed", "Packed", "In Transit", "Delivered"].map((step, i) => (
              <div key={step} className="flex-1 flex flex-col items-center relative">
                {i > 0 && (
                  <div className={`absolute top-3 right-1/2 w-full h-0.5 ${i === 1 ? "bg-gray-200" : "bg-gray-200"}`}/>
                )}
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold z-10 ${
                  i === 0 ? "bg-[#1a6b3c] text-white" : "bg-gray-100 text-gray-400"
                }`}>
                  {i === 0 ? "✓" : i + 1}
                </div>
                <span className="text-[9px] text-gray-400 mt-1.5 text-center leading-tight font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Savings highlight */}
        <div className="bg-gradient-to-r from-[#1a6b3c] to-[#2d8a52] rounded-3xl p-4 flex items-center gap-3">
          <div className="text-3xl">🌾</div>
          <div>
            <div className="text-white font-bold text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>You supported local farmers!</div>
            <div className="text-white/75 text-xs">75% of your payment goes directly to the grower.</div>
          </div>
        </div>

        {/* CTAs */}
        <button
          onClick={onTrackOrder}
          className="press w-full bg-[#1a6b3c] text-white rounded-2xl py-4 font-bold text-[15px] flex items-center justify-center gap-2 shadow-lg shadow-[#1a6b3c]/30"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          🗺️ Track My Order
        </button>
        <button
          onClick={onContinueShopping}
          className="press w-full bg-white text-gray-700 rounded-2xl py-4 font-semibold text-[14px] border border-gray-100"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
