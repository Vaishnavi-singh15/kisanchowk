export type Tab = "market" | "insights" | "orders" | "profile";

interface BottomNavProps {
  active: Tab;
  onNavigate: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string }[] = [
  { id: "market",   label: "Market" },
  { id: "insights", label: "Insights" },
  { id: "orders",   label: "Orders" },
  { id: "profile",  label: "Profile" },
];

function Icon({ id, active }: { id: Tab; active: boolean }) {
  const col = active ? "#1a6b3c" : "#9ca3af";
  if (id === "market") return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-10 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" stroke={col} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  if (id === "insights") return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M18 20V10M12 20V4M6 20v-6" stroke={col} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  if (id === "orders") return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="1" y="3" width="15" height="13" rx="2" stroke={col} strokeWidth="1.8"/>
      <path d="M16 8h4l3 4v4h-7V8z" stroke={col} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="5.5" cy="18.5" r="1.5" stroke={col} strokeWidth="1.8"/>
      <circle cx="18.5" cy="18.5" r="1.5" stroke={col} strokeWidth="1.8"/>
    </svg>
  );
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={col} strokeWidth="1.8"/>
      <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke={col} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export default function BottomNav({ active, onNavigate }: BottomNavProps) {
  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 flex z-50 sm:rounded-b-[44px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onNavigate(tab.id)}
          className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 press transition-all ${
            active === tab.id ? "text-[#1a6b3c]" : "text-gray-400"
          }`}
        >
          <div className={`relative flex items-center justify-center w-8 h-8 rounded-2xl transition-all duration-200 ${
            active === tab.id ? "bg-[#e8f5ee]" : ""
          }`}>
            <Icon id={tab.id} active={active === tab.id} />
          </div>
          <span className={`text-[10px] font-semibold tracking-wide transition-all ${
            active === tab.id ? "text-[#1a6b3c]" : "text-gray-400"
          }`}>
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
