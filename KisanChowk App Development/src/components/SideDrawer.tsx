import { useState } from "react";

interface SideDrawerProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (screen: string) => void;
  onSignOut: () => void;
  lang: string;
  onLangChange: (lang: string) => void;
}

const NAV_ITEMS = [
  { icon: "🛒", label: "Marketplace",       labelHi: "बाज़ार",          labelPa: "ਬਾਜ਼ਾਰ",        screen: "marketplace" },
  { icon: "📈", label: "Demand Forecast",   labelHi: "मांग पूर्वानुमान", labelPa: "ਮੰਗ ਪੂਰਵਾਨੁਮਾਨ", screen: "forecast"    },
  { icon: "💰", label: "Price Insights",    labelHi: "मूल्य अंतर्दृष्टि", labelPa: "ਕੀਮਤ ਜਾਣਕਾਰੀ", screen: "price"       },
  { icon: "🚚", label: "Logistics",         labelHi: "लॉजिस्टिक्स",     labelPa: "ਲੌਜਿਸਟਿਕਸ",     screen: "logistics"   },
  { icon: "🏢", label: "Bulk Buyer Portal", labelHi: "थोक खरीदार पोर्टल", labelPa: "ਬਲਕ ਖਰੀਦਦਾਰ",  screen: "bulk"        },
  { icon: "🌿", label: "FPO Hub",           labelHi: "एफपीओ हब",           labelPa: "ਐੱਫਪੀਓ ਹੱਬ",     screen: "fpohub"      },
];

const LANGUAGES = [
  { code: "en", label: "English",    native: "EN" },
  { code: "hi", label: "हिंदी",      native: "हि" },
  { code: "pa", label: "ਪੰਜਾਬੀ",    native: "ਪੰ" },
  { code: "ta", label: "தமிழ்",     native: "த" },
  { code: "te", label: "తెలుగు",    native: "తె" },
];

function getLabel(item: typeof NAV_ITEMS[0], lang: string) {
  if (lang === "hi") return item.labelHi;
  if (lang === "pa") return item.labelPa;
  return item.label;
}

export default function SideDrawer({ open, onClose, onNavigate, onSignOut, lang, onLangChange }: SideDrawerProps) {
  const [showLang, setShowLang] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 z-50 transition-all duration-300"
        style={{
          background: open ? "rgba(0,0,0,0.45)" : "transparent",
          pointerEvents: open ? "auto" : "none",
        }}
      />

      {/* Drawer panel */}
      <div
        className="absolute top-0 left-0 h-full w-[80%] z-50 bg-white flex flex-col shadow-2xl"
        style={{
          borderRadius: "0 32px 32px 0",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-[#1a6b3c] to-[#2d8a52] px-5 pt-12 pb-5" style={{ borderRadius: "0 32px 0 0" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">🌾</div>
            <div>
              <div className="text-white font-bold text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>KisanChowk</div>
              <div className="text-white/60 text-xs">Farm to Market, Directly.</div>
            </div>
          </div>
          {/* User card */}
          <div className="bg-white/15 rounded-2xl p-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a6b3c] font-bold text-base">RK</div>
            <div>
              <div className="text-white font-semibold text-sm">Ramesh Kumar</div>
              <div className="text-white/60 text-xs">✅ Verified Farmer · Punjab</div>
            </div>
          </div>
        </div>

        {/* Language picker */}
        <div className="px-4 pt-3 pb-2">
          <button
            onClick={() => setShowLang((s) => !s)}
            className="w-full flex items-center justify-between bg-[#f0f7f2] rounded-2xl px-4 py-2.5"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">🌐</span>
              <span className="text-sm font-semibold text-gray-700">
                {LANGUAGES.find((l) => l.code === lang)?.label ?? "English"}
              </span>
            </div>
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"
              style={{ transform: showLang ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
          {showLang && (
            <div className="mt-1 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { onLangChange(l.code); setShowLang(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${lang === l.code ? "bg-[#e8f5ee]" : "hover:bg-gray-50"}`}
                >
                  <div className="w-8 h-8 bg-[#f0f7f2] rounded-lg flex items-center justify-center text-xs font-bold text-[#1a6b3c]">
                    {l.native}
                  </div>
                  <span className={`text-sm font-medium ${lang === l.code ? "text-[#1a6b3c] font-bold" : "text-gray-700"}`}>
                    {l.label}
                  </span>
                  {lang === l.code && <span className="ml-auto text-[#1a6b3c] text-sm">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto px-3 pb-2">
          <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest px-2 mb-1">
            {lang === "hi" ? "नेविगेट करें" : lang === "pa" ? "ਨੈਵੀਗੇਟ ਕਰੋ" : "Navigate"}
          </div>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.screen}
              onClick={() => { onNavigate(item.screen); onClose(); }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-left mb-0.5 hover:bg-[#f0f7f2] transition-colors group"
            >
              <div className="w-10 h-10 bg-[#e8f5ee] rounded-xl flex items-center justify-center text-xl group-hover:bg-[#1a6b3c]/10 shrink-0">
                {item.icon}
              </div>
              <span className="font-semibold text-gray-800 text-sm">{getLabel(item, lang)}</span>
            </button>
          ))}

          <div className="border-t border-gray-100 my-2"/>
          <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest px-2 mb-1">
            {lang === "hi" ? "अन्य" : lang === "pa" ? "ਹੋਰ" : "More"}
          </div>
          {[
            { icon: "⚙️", label: "Settings",   labelHi: "सेटिंग्स",    labelPa: "ਸੈਟਿੰਗਾਂ" },
            { icon: "❓", label: "Help & FAQ",  labelHi: "सहायता",      labelPa: "ਮਦਦ" },
            { icon: "📞", label: "Contact Us",  labelHi: "संपर्क करें",  labelPa: "ਸੰਪਰਕ ਕਰੋ" },
          ].map((item) => (
            <button key={item.label} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-left mb-0.5 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-xl shrink-0">{item.icon}</div>
              <span className="font-medium text-gray-600 text-sm">
                {lang === "hi" ? item.labelHi : lang === "pa" ? item.labelPa : item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Helpline */}
        <div className="px-4 pt-2 pb-1">
          <a
            href="tel:1800-180-1551"
            className="w-full flex items-center gap-3 px-3 py-3 rounded-2xl bg-amber-50 border border-amber-200"
          >
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl shrink-0">📞</div>
            <div className="flex-1">
              <div className="font-bold text-amber-800 text-xs">Kisan Helpline (KCC)</div>
              <div className="font-black text-[#1a6b3c] text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>1800-180-1551</div>
            </div>
            <span className="text-amber-500 text-xs font-semibold">Free</span>
          </a>
        </div>

        {/* Sign Out */}
        <div className="px-4 pb-8 pt-2 border-t border-gray-100">
          <button
            onClick={() => { onSignOut(); onClose(); }}
            className="press w-full flex items-center gap-3 px-3 py-3 rounded-2xl text-left hover:bg-red-50 transition-colors"
          >
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-xl shrink-0">🚪</div>
            <span className="font-semibold text-red-500 text-sm">
              {lang === "hi" ? "साइन आउट" : lang === "pa" ? "ਸਾਈਨ ਆਊਟ" : "Sign Out"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
