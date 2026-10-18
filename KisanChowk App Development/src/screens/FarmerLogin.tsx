import { useState } from "react";

interface FarmerLoginProps {
  onLogin: (role: "farmer" | "buyer" | "fpo") => void;
  onBack: () => void;
  lang?: string;
  onLangChange?: (lang: string) => void;
}

const LANGS = [
  { code: "en", label: "EN",  name: "English"    },
  { code: "hi", label: "हि",  name: "हिंदी"       },
  { code: "ta", label: "த",   name: "தமிழ்"      },
  { code: "ml", label: "മ",   name: "മലയാളം"     },
  { code: "kn", label: "ಕ",   name: "ಕನ್ನಡ"      },
  { code: "pa", label: "ਪੰ",  name: "ਪੰਜਾਬੀ"     },
  { code: "gu", label: "ગ",   name: "ગુજરાતી"    },
];

const T: Record<string, Record<string, string>> = {
  en: {
    welcomeBack: "Welcome back",
    signIn: "Sign in to KisanChowk",
    farmer: "Farmer",
    buyer: "Buyer",
    fpo: "FPO",
    mobile: "Mobile Number",
    mobileSub: "अपना मोबाइल नंबर दर्ज करें",
    pin: "PIN",
    pinSub: "4 अंकों का PIN डालें",
    profile: "Punjab Farmer • Verified ✓",
    signInBtn: "Sign In as Farmer →",
    signInBuyerBtn: "Sign In as Buyer →",
    signInFPOBtn: "Verify & Enter FPO Hub →",
    noAccount: "Don't have an account?",
    register: "Register Free",
    hint: "किसान के रूप में लॉगिन करने के लिए अपना\nपंजीकृत मोबाइल नंबर और PIN दर्ज करें।",
    aadhaar: "Aadhaar Number",
    aadhaarSub: "12-digit Aadhaar number",
    otp: "OTP Verification",
    otpSub: "6-digit OTP sent to your Aadhaar-linked mobile",
    sendOtp: "Send OTP via UIDAI",
    fpoHint: "FPO सदस्य के रूप में लॉगिन करने के लिए\nआधार कार्ड नंबर और OTP दर्ज करें।",
    fpoProfile: "Verified FPO Member · Maharashtra",
  },
  hi: {
    welcomeBack: "वापस स्वागत है",
    signIn: "KisanChowk में साइन इन करें",
    farmer: "किसान",
    buyer: "खरीदार",
    fpo: "एफपीओ",
    mobile: "मोबाइल नंबर",
    mobileSub: "अपना मोबाइल नंबर दर्ज करें",
    pin: "पिन",
    pinSub: "4 अंकों का PIN डालें",
    profile: "पंजाब किसान • सत्यापित ✓",
    signInBtn: "किसान के रूप में साइन इन करें →",
    signInBuyerBtn: "खरीदार के रूप में साइन इन करें →",
    signInFPOBtn: "सत्यापित करें और FPO Hub दर्ज करें →",
    noAccount: "खाता नहीं है?",
    register: "मुफ्त पंजीकरण",
    hint: "किसान के रूप में लॉगिन करने के लिए अपना\nपंजीकृत मोबाइल नंबर और PIN दर्ज करें।",
    aadhaar: "आधार नंबर",
    aadhaarSub: "12 अंकों का आधार नंबर",
    otp: "OTP सत्यापन",
    otpSub: "आधार से जुड़े मोबाइल पर 6 अंकों का OTP",
    sendOtp: "UIDAI द्वारा OTP भेजें",
    fpoHint: "FPO सदस्य के रूप में लॉगिन करने के लिए\nआधार कार्ड नंबर और OTP दर्ज करें।",
    fpoProfile: "सत्यापित FPO सदस्य · महाराष्ट्र",
  },
  pa: {
    welcomeBack: "ਵਾਪਸ ਆਉਣ ਦਾ ਸੁਆਗਤ ਹੈ",
    signIn: "KisanChowk ਵਿੱਚ ਸਾਈਨ ਇਨ ਕਰੋ",
    farmer: "ਕਿਸਾਨ",
    buyer: "ਖਰੀਦਦਾਰ",
    fpo: "ਐੱਫਪੀਓ",
    mobile: "ਮੋਬਾਈਲ ਨੰਬਰ",
    mobileSub: "ਆਪਣਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਾਖਲ ਕਰੋ",
    pin: "ਪਿੰਨ",
    pinSub: "4 ਅੰਕਾਂ ਦਾ PIN ਦਾਖਲ ਕਰੋ",
    profile: "ਪੰਜਾਬ ਕਿਸਾਨ • ਤਸਦੀਕ ✓",
    signInBtn: "ਕਿਸਾਨ ਵਜੋਂ ਸਾਈਨ ਇਨ ਕਰੋ →",
    signInBuyerBtn: "ਖਰੀਦਦਾਰ ਵਜੋਂ ਸਾਈਨ ਇਨ ਕਰੋ →",
    signInFPOBtn: "ਤਸਦੀਕ ਕਰੋ ਅਤੇ FPO Hub ਦਾਖਲ ਕਰੋ →",
    noAccount: "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
    register: "ਮੁਫ਼ਤ ਰਜਿਸਟਰ ਕਰੋ",
    hint: "ਕਿਸਾਨ ਵਜੋਂ ਲਾਗਇਨ ਕਰਨ ਲਈ ਆਪਣਾ\nਰਜਿਸਟਰਡ ਮੋਬਾਈਲ ਨੰਬਰ ਅਤੇ PIN ਦਾਖਲ ਕਰੋ।",
    aadhaar: "ਆਧਾਰ ਨੰਬਰ",
    aadhaarSub: "12 ਅੰਕਾਂ ਦਾ ਆਧਾਰ ਨੰਬਰ",
    otp: "OTP ਤਸਦੀਕ",
    otpSub: "ਆਧਾਰ ਨਾਲ ਜੁੜੇ ਮੋਬਾਈਲ ਤੇ 6 ਅੰਕਾਂ ਦਾ OTP",
    sendOtp: "UIDAI ਰਾਹੀਂ OTP ਭੇਜੋ",
    fpoHint: "FPO ਮੈਂਬਰ ਵਜੋਂ ਲਾਗਇਨ ਕਰਨ ਲਈ\nਆਧਾਰ ਨੰਬਰ ਅਤੇ OTP ਦਾਖਲ ਕਰੋ।",
    fpoProfile: "ਤਸਦੀਕਸ਼ੁਦਾ FPO ਮੈਂਬਰ · ਮਹਾਰਾਸ਼ਟਰ",
  },
  ta: {
    welcomeBack: "மீண்டும் வரவேற்கிறோம்",
    signIn: "KisanChowk-ல் உள்நுழைக",
    farmer: "விவசாயி",
    buyer: "வாங்குபவர்",
    fpo: "FPO",
    mobile: "மொபைல் எண்",
    mobileSub: "உங்கள் மொபைல் எண்ணை உள்ளிடவும்",
    pin: "PIN",
    pinSub: "4 இலக்க PIN உள்ளிடவும்",
    profile: "பஞ்சாப் விவசாயி • சரிபார்க்கப்பட்டது ✓",
    signInBtn: "விவசாயியாக உள்நுழைக →",
    signInBuyerBtn: "வாங்குபவராக உள்நுழைக →",
    signInFPOBtn: "சரிபார்த்து FPO Hub நுழைக →",
    noAccount: "கணக்கு இல்லையா?",
    register: "இலவசமாக பதிவு செய்க",
    hint: "விவசாயியாக உள்நுழைய\nமொபைல் எண் மற்றும் PIN உள்ளிடவும்।",
    aadhaar: "ஆதார் எண்",
    aadhaarSub: "12 இலக்க ஆதார் எண்",
    otp: "OTP சரிபார்ப்பு",
    otpSub: "ஆதாருடன் இணைந்த மொபைலில் 6 இலக்க OTP",
    sendOtp: "UIDAI மூலம் OTP அனுப்பு",
    fpoHint: "FPO உறுப்பினராக உள்நுழைய\nஆதார் எண் மற்றும் OTP உள்ளிடவும்।",
    fpoProfile: "சரிபார்க்கப்பட்ட FPO உறுப்பினர் · மகாராஷ்டிரா",
  },
  ml: {
    welcomeBack: "തിരിച്ചു സ്വാഗതം",
    signIn: "KisanChowk-ൽ സൈൻ ഇൻ ചെയ്യുക",
    farmer: "കർഷകൻ",
    buyer: "വാങ്ങുന്നവർ",
    fpo: "FPO",
    mobile: "മൊബൈൽ നമ്പർ",
    mobileSub: "നിങ്ങളുടെ മൊബൈൽ നമ്പർ നൽകുക",
    pin: "PIN",
    pinSub: "4 അക്ക PIN നൽകുക",
    profile: "പഞ്ചാബ് കർഷകൻ • സ്ഥിരീകരിച്ചു ✓",
    signInBtn: "കർഷകനായി സൈൻ ഇൻ →",
    signInBuyerBtn: "വാങ്ങുന്നവരായി സൈൻ ഇൻ →",
    signInFPOBtn: "സ്ഥിരീകരിക്കുക & FPO Hub പ്രവേശിക്കുക →",
    noAccount: "അക്കൗണ്ട് ഇല്ലേ?",
    register: "സൗജന്യമായി രജിസ്റ്റർ ചെയ്യുക",
    hint: "കർഷകനായി ലോഗിൻ ചെയ്യാൻ\nമൊബൈൽ നമ്പറും PIN-ഉം നൽകുക।",
    aadhaar: "ആധാർ നമ്പർ",
    aadhaarSub: "12 അക്ക ആധാർ നമ്പർ",
    otp: "OTP സ്ഥിരീകരണം",
    otpSub: "ആധാറുമായി ബന്ധിപ്പിച്ച മൊബൈലിൽ 6 അക്ക OTP",
    sendOtp: "UIDAI വഴി OTP അയക്കുക",
    fpoHint: "FPO അംഗമായി ലോഗിൻ ചെയ്യാൻ\nആധാർ നമ്പറും OTP-ഉം നൽകുക।",
    fpoProfile: "സ്ഥിരീകരിച്ച FPO അംഗം · മഹാരാഷ്ട്ര",
  },
  kn: {
    welcomeBack: "ಮತ್ತೆ ಸ್ವಾಗತ",
    signIn: "KisanChowk-ಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ",
    farmer: "ರೈತ",
    buyer: "ಖರೀದಿದಾರ",
    fpo: "FPO",
    mobile: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    mobileSub: "ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
    pin: "PIN",
    pinSub: "4 ಅಂಕಿಗಳ PIN ನಮೂದಿಸಿ",
    profile: "ಪಂಜಾಬ್ ರೈತ • ಪರಿಶೀಲಿಸಲಾಗಿದೆ ✓",
    signInBtn: "ರೈತರಾಗಿ ಸೈನ್ ಇನ್ →",
    signInBuyerBtn: "ಖರೀದಿದಾರರಾಗಿ ಸೈನ್ ಇನ್ →",
    signInFPOBtn: "ಪರಿಶೀಲಿಸಿ & FPO Hub ಪ್ರವೇಶಿಸಿ →",
    noAccount: "ಖಾತೆ ಇಲ್ಲವೇ?",
    register: "ಉಚಿತವಾಗಿ ನೋಂದಾಯಿಸಿ",
    hint: "ರೈತರಾಗಿ ಲಾಗಿನ್ ಮಾಡಲು\nಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಮತ್ತು PIN ನಮೂದಿಸಿ।",
    aadhaar: "ಆಧಾರ್ ಸಂಖ್ಯೆ",
    aadhaarSub: "12 ಅಂಕಿಗಳ ಆಧಾರ್ ಸಂಖ್ಯೆ",
    otp: "OTP ಪರಿಶೀಲನೆ",
    otpSub: "ಆಧಾರ್ ಜೊತೆ ಸಂಪರ್ಕಿಸಿದ ಮೊಬೈಲ್‌ಗೆ 6 ಅಂಕಿ OTP",
    sendOtp: "UIDAI ಮೂಲಕ OTP ಕಳುಹಿಸಿ",
    fpoHint: "FPO ಸದಸ್ಯರಾಗಿ ಲಾಗಿನ್ ಮಾಡಲು\nಆಧಾರ್ ಸಂಖ್ಯೆ ಮತ್ತು OTP ನಮೂದಿಸಿ।",
    fpoProfile: "ಪರಿಶೀಲಿಸಲಾದ FPO ಸದಸ್ಯ · ಮಹಾರಾಷ್ಟ್ರ",
  },
  gu: {
    welcomeBack: "પાછા આવ્યા",
    signIn: "KisanChowk માં સાઇન ઇન કરો",
    farmer: "ખેડૂત",
    buyer: "ખરીદનાર",
    fpo: "FPO",
    mobile: "મોબાઈલ નંબર",
    mobileSub: "તમારો મોબાઈલ નંબર દાખલ કરો",
    pin: "PIN",
    pinSub: "4 અંકનો PIN દાખલ કરો",
    profile: "પંજાબ ખેડૂત • ચકાસાયેલ ✓",
    signInBtn: "ખેડૂત તરીકે સાઇન ઇન →",
    signInBuyerBtn: "ખરીદનાર તરીકે સાઇન ઇન →",
    signInFPOBtn: "ચકાસો & FPO Hub માં પ્રવેશ →",
    noAccount: "એકાઉન્ટ નથી?",
    register: "મફત નોંધણી",
    hint: "ખેડૂત તરીકે લોગિન કરવા\nનોંધાયેલ મોબાઈલ નંબર અને PIN દાખલ કરો।",
    aadhaar: "આધાર નંબર",
    aadhaarSub: "12 અંકનો આધાર નંબर",
    otp: "OTP ચકાસણી",
    otpSub: "આધાર સાથે જોડાયેલ મોબાઈલ પર 6 અંકનો OTP",
    sendOtp: "UIDAI દ્વારા OTP મોકલો",
    fpoHint: "FPO સભ્ય તરીકે લોગિન કરવા\nઆધાર નંબર અને OTP દાખલ કરો।",
    fpoProfile: "ચકાસાયેલ FPO સભ્ય · મહારાષ્ટ્ર",
  },
};

function formatAadhaar(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 12);
  return digits.replace(/(\d{4})(?=\d)/g, "$1-");
}

export default function FarmerLogin({ onLogin, onBack, lang = "en", onLangChange }: FarmerLoginProps) {
  const [role, setRole] = useState<"farmer" | "buyer" | "fpo">("farmer");
  const [showPin, setShowPin] = useState(false);
  const [aadhaar, setAadhaar] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSending, setOtpSending] = useState(false);
  const [aadhaarVerified, setAadhaarVerified] = useState(false);
  const t = T[lang] ?? T.en;

  function handleSendOtp() {
    setOtpSending(true);
    setTimeout(() => { setOtpSent(true); setOtpSending(false); }, 1500);
  }

  function handleVerifyOtp() {
    setAadhaarVerified(true);
    setTimeout(() => onLogin("fpo"), 700);
  }

  function switchRole(r: "farmer" | "buyer" | "fpo") {
    setRole(r);
    setOtpSent(false);
    setAadhaarVerified(false);
    setOtp("");
    setAadhaar("");
  }

  const aadhaarDigits = aadhaar.replace(/\D/g, "");

  return (
    <div className="min-h-full flex flex-col overflow-x-hidden" style={{ background: "#f0e8a0" }}>
      {/* Hero */}
      <div className="relative h-52 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=700&q=85&fit=crop"
          alt="Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"/>
        <button
          onClick={onBack}
          className="absolute top-10 left-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        {/* Language chips — horizontal scroll, top-right */}
        <div className="absolute top-10 right-4 flex items-center gap-1.5 overflow-x-auto no-scroll max-w-[220px]">
          <span className="text-white/70 text-sm shrink-0">🌐</span>
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => onLangChange?.(l.code)}
              className={`press shrink-0 px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
                lang === l.code
                  ? "bg-white text-[#163009]"
                  : "bg-white/20 text-white backdrop-blur-sm"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="absolute bottom-5 left-5">
          <div className="font-black text-2xl" style={{ fontFamily: "Montserrat, sans-serif", color: "#d4a017" }}>{t.welcomeBack}</div>
          <div className="text-white/75 text-sm">{t.signIn}</div>
        </div>
      </div>

      <div className="flex-1 px-5 pt-6 pb-8 flex flex-col gap-4">
        {/* 3-way role toggle */}
        <div className="rounded-2xl p-1 flex gap-1" style={{ background: "#e8dd8a" }}>
          {(["farmer", "buyer", "fpo"] as const).map((r) => (
            <button
              key={r}
              onClick={() => switchRole(r)}
              className={`flex-1 rounded-xl py-2.5 font-bold text-xs flex items-center justify-center gap-1 transition-all ${role === r ? "text-white shadow-sm" : "text-gray-600"}`}
              style={{ fontFamily: "Montserrat, sans-serif", background: role === r ? "#163009" : "transparent" }}
            >
              {r === "farmer" ? "🌱" : r === "buyer" ? "🛒" : "🌿"} {t[r]}
            </button>
          ))}
        </div>

        {/* Info banner */}
        <div className="rounded-2xl px-4 py-3 flex gap-2.5 border" style={{ background: "#fef3a0", borderColor: "#d4c040" }}>
          <span className="text-xl shrink-0">ℹ️</span>
          <p className="text-amber-800 text-xs leading-relaxed whitespace-pre-line">
            {role === "fpo" ? t.fpoHint : t.hint}
          </p>
        </div>

        {/* === FPO Aadhaar flow === */}
        {role === "fpo" && (
          <div className="flex flex-col gap-3">

            {/* STEP 1: Aadhaar entry */}
            {!otpSent && (
              <>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-0.5 block">{t.aadhaar}</label>
                  <div className="text-[10px] text-gray-400 mb-1.5">{t.aadhaarSub}</div>
                  <div className={`bg-white/80 rounded-2xl border flex items-center px-4 py-3.5 gap-3 transition-all ${aadhaarDigits.length === 12 ? "border-[#1a6b3c]/50" : "border-gray-100"}`}>
                    <span className="text-xl shrink-0">🪪</span>
                    <input
                      type="text"
                      value={aadhaar}
                      onChange={(e) => setAadhaar(formatAadhaar(e.target.value))}
                      placeholder="XXXX - XXXX - XXXX"
                      maxLength={14}
                      className="flex-1 text-sm outline-none text-gray-800 bg-transparent tracking-widest"
                    />
                    {aadhaarDigits.length === 12 && (
                      <span className="text-[#1a6b3c] text-xs font-bold shrink-0">✓</span>
                    )}
                  </div>
                </div>

                {aadhaarDigits.length === 12 && (
                  <div className="bg-gradient-to-br from-[#1a3a6b] to-[#0d2244] rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl">🪪</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white/60 text-[10px] font-semibold uppercase tracking-widest">Aadhaar Card</div>
                      <div className="text-white font-black text-sm tracking-widest truncate" style={{ fontFamily: "Montserrat, sans-serif" }}>
                        {aadhaar}
                      </div>
                      <div className="text-white/50 text-[10px] mt-0.5">Government of India · UIDAI</div>
                    </div>
                    <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-sm">🇮🇳</span>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleSendOtp}
                  disabled={aadhaarDigits.length < 12 || otpSending}
                  className="press w-full rounded-2xl py-3.5 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    background: aadhaarDigits.length === 12 && !otpSending ? "#163009" : "#d1d5db",
                    color: aadhaarDigits.length === 12 && !otpSending ? "#fff" : "#9ca3af",
                  }}
                >
                  {otpSending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"/>
                      Connecting to UIDAI…
                    </>
                  ) : `📱 ${t.sendOtp}`}
                </button>
              </>
            )}

            {/* STEP 2: OTP entry + profile card + verify */}
            {otpSent && (
              <>
                <div className="bg-green-50 border border-green-200 rounded-2xl px-4 py-2.5 flex items-center gap-2">
                  <span className="text-green-600 text-base shrink-0">✓</span>
                  <span className="text-green-700 text-xs font-semibold">OTP sent to Aadhaar-linked mobile</span>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-0.5 block">{t.otp}</label>
                  <div className="text-[10px] text-gray-400 mb-1.5">{t.otpSub}</div>
                      {/* 6 individual OTP digit boxes — tap to open keyboard */}
                  <div className="flex gap-2 justify-center" onClick={() => (document.querySelector("input[type=tel]") as HTMLInputElement)?.focus()}>
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`w-10 h-12 rounded-xl border-2 flex items-center justify-center text-lg font-black transition-all ${
                          i < otp.length
                            ? "border-[#1a6b3c] bg-[#f0fdf4] text-[#1a6b3c]"
                            : "border-gray-200 bg-white text-gray-300"
                        }`}
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {otp[i] ?? "•"}
                      </div>
                    ))}
                  </div>
                  {/* Hidden real input captures keypresses */}
                  <input
                    type="tel"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    maxLength={6}
                    autoFocus
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-gray-400 text-[10px]">Did not receive?</span>
                    <button onClick={handleSendOtp} className="text-[#1a6b3c] text-[10px] font-bold">Resend OTP</button>
                  </div>
                </div>

                <div className="bg-white/80 rounded-2xl p-3.5 flex items-center gap-3 border border-yellow-300/60">
                  <div className="w-10 h-10 bg-[#1a6b3c] rounded-2xl flex items-center justify-center text-xl shrink-0">🌿</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>KisanChowk FPO</div>
                    <div className="text-gray-400 text-xs truncate">{t.fpoProfile}</div>
                  </div>
                  <div className="bg-[#e8f5ee] text-[#1a6b3c] text-[10px] px-2 py-1 rounded-full font-bold shrink-0">AgriStack ✓</div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-gray-200"/>
                  <span className="text-blue-600 text-[10px] font-bold px-1">🏛️ Aadhaar eKYC · UIDAI Secured</span>
                  <div className="flex-1 h-px bg-gray-200"/>
                </div>

                <button
                  onClick={handleVerifyOtp}
                  disabled={otp.length < 6}
                  className="press w-full rounded-2xl py-4 font-bold text-[15px] flex items-center justify-center gap-2 transition-all"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    background: otp.length === 6 ? "#163009" : "#d1d5db",
                    color: otp.length === 6 ? "#fff" : "#9ca3af",
                  }}
                >
                  {aadhaarVerified ? "✓ Verified! Entering FPO Hub…" : t.signInFPOBtn}
                </button>
              </>
            )}
          </div>
        )}

        {/* === Farmer / Buyer flow === */}
        {role !== "fpo" && (
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-0.5 block">{t.mobile}</label>
              <div className="text-[10px] text-gray-400 mb-1.5">{t.mobileSub}</div>
              <div className="bg-white/80 rounded-2xl border border-yellow-200/60 flex items-center px-4 py-3.5 gap-3">
                <span className="text-gray-400 text-sm font-medium">🇮🇳 +91</span>
                <div className="w-px h-5 bg-gray-200"/>
                <input
                  type="tel"
                  placeholder="98765 43210"
                  defaultValue="98765 43210"
                  className="flex-1 text-sm outline-none text-gray-800 bg-transparent"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-0.5 block">{t.pin}</label>
              <div className="text-[10px] text-gray-400 mb-1.5">{t.pinSub}</div>
              <div className="bg-white/80 rounded-2xl border border-yellow-200/60 flex items-center px-4 py-3.5 gap-3">
                <input
                  type={showPin ? "text" : "password"}
                  placeholder="••••"
                  defaultValue="1234"
                  className="flex-1 text-sm outline-none text-gray-800 bg-transparent tracking-widest"
                />
                <button onClick={() => setShowPin((s) => !s)} className="text-gray-400 text-sm">{showPin ? "🙈" : "👁"}</button>
              </div>
            </div>

            {role === "farmer" && (
              <div className="bg-white/80 rounded-2xl p-4 flex items-center gap-3 border border-yellow-300/60">
                <div className="w-12 h-12 bg-[#1a6b3c] rounded-2xl flex items-center justify-center text-white font-bold text-lg">RK</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>Ramesh Kumar</div>
                  <div className="text-gray-400 text-xs">{t.profile}</div>
                </div>
                <div className="bg-[#e8f5ee] text-[#1a6b3c] text-xs px-2.5 py-1 rounded-full font-semibold">🌾 {t.farmer}</div>
              </div>
            )}

            <button
              onClick={() => onLogin(role)}
              className="press w-full text-white rounded-2xl py-4 font-bold text-[15px] shadow-lg flex items-center justify-center gap-2"
              style={{ background: "#163009", fontFamily: "Montserrat, sans-serif" }}
            >
              {role === "farmer" ? t.signInBtn : t.signInBuyerBtn}
            </button>
          </div>
        )}

        <div className="text-center">
          <span className="text-gray-400 text-xs">{t.noAccount} </span>
          <button className="text-xs font-bold" style={{ color: "#163009" }}>{t.register}</button>
        </div>
      </div>
    </div>
  );
}
