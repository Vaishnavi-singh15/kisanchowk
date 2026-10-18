interface NotifPanelProps {
  open: boolean;
  onClose: () => void;
}

const NOTIFS = [
  {
    id: 1,
    icon: "🤝",
    title: "New offer received",
    body: "FreshMart Delhi offered ₹40/kg for your tomatoes listing.",
    time: "2 min ago",
    unread: true,
    color: "#1a6b3c",
  },
  {
    id: 2,
    icon: "📈",
    title: "Price alert",
    body: "Onion prices up 12% in your region — good time to sell!",
    time: "1 hr ago",
    unread: true,
    color: "#f59e0b",
  },
  {
    id: 3,
    icon: "🚚",
    title: "Shipment update",
    body: "Order KD-8924 is now In Transit. ETA: 2:30 PM today.",
    time: "3 hr ago",
    unread: false,
    color: "#3b82f6",
  },
  {
    id: 4,
    icon: "✅",
    title: "Payment received",
    body: "₹12,000 credited via UPI for order KD-8901.",
    time: "Yesterday",
    unread: false,
    color: "#8b5cf6",
  },
];

export default function NotifPanel({ open, onClose }: NotifPanelProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 z-50 transition-all duration-300"
        style={{
          background: open ? "rgba(0,0,0,0.35)" : "transparent",
          pointerEvents: open ? "auto" : "none",
        }}
      />

      {/* Panel — slides down from top */}
      <div
        className="absolute top-0 left-0 right-0 z-50 bg-white shadow-2xl"
        style={{
          borderRadius: "0 0 32px 32px",
          transform: open ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1a6b3c] to-[#2d8a52] px-5 pt-12 pb-4 flex items-center justify-between">
          <div>
            <div className="text-white font-bold text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>Notifications</div>
            <div className="text-white/60 text-xs">2 unread</div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Notification list */}
        <div className="px-4 py-3 flex flex-col gap-2 max-h-80 overflow-y-auto">
          {NOTIFS.map((n) => (
            <div
              key={n.id}
              className={`flex items-start gap-3 p-3 rounded-2xl transition-colors ${n.unread ? "bg-[#f0f7f2]" : "bg-gray-50"}`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                style={{ background: n.color + "22" }}
              >
                {n.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="font-semibold text-gray-900 text-xs truncate">{n.title}</div>
                  {n.unread && <div className="w-2 h-2 bg-[#1a6b3c] rounded-full shrink-0"/>}
                </div>
                <div className="text-gray-500 text-[11px] mt-0.5 leading-relaxed">{n.body}</div>
                <div className="text-gray-400 text-[10px] mt-1">{n.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 pb-5 pt-1">
          <button className="w-full text-center text-[#1a6b3c] font-semibold text-sm py-2">
            Mark all as read
          </button>
        </div>
      </div>
    </>
  );
}
