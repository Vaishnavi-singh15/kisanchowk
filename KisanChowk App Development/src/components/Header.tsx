interface HeaderProps {
  title?: string;
  onBack?: () => void;
  rightElement?: React.ReactNode;
}

export default function Header({ title = "KisanChowk", onBack, rightElement }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#f0f7f2]">
      {onBack ? (
        <button onClick={onBack} className="text-[#1a6b3c] text-xl font-bold">←</button>
      ) : (
        <button className="text-gray-600">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <rect width="20" height="2" rx="1" fill="#374151"/>
            <rect y="6" width="20" height="2" rx="1" fill="#374151"/>
            <rect y="12" width="20" height="2" rx="1" fill="#374151"/>
          </svg>
        </button>
      )}
      <span
        className="text-[#1a6b3c] font-bold text-lg"
        style={{ fontFamily: "Montserrat:Bold, Montserrat, sans-serif" }}
      >
        {title}
      </span>
      {rightElement ?? (
        <button className="text-[#1a6b3c]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>
      )}
    </header>
  );
}
