import { useState, useEffect, useRef } from "react";
import Landing from "./screens/Landing";
import FarmerLogin from "./screens/FarmerLogin";
import CropUpload from "./screens/CropUpload";
import AIAnalysis from "./screens/AIAnalysis";
import AIPricing from "./screens/AIPricing";
import ListingLive from "./screens/ListingLive";
import Negotiate from "./screens/Negotiate";
import PickupScheduled from "./screens/PickupScheduled";
import Marketplace, { type Product } from "./screens/Marketplace";
import Cart, { type CartItem } from "./screens/Cart";
import OrderConfirmation from "./screens/OrderConfirmation";
import Logistics from "./screens/Logistics";
import PriceTransparency from "./screens/PriceTransparency";
import DemandForecast from "./screens/DemandForecast";
import BulkBuyer from "./screens/BulkBuyer";
import AIChat from "./screens/AIChat";
import FPOHub from "./screens/FPOHub";
import BottomNav, { type Tab } from "./components/BottomNav";
import SideDrawer from "./components/SideDrawer";
import NotifPanel from "./components/NotifPanel";

type Screen =
  | "splash" | "landing"
  | "farmerlogin" | "cropupload" | "aianalysis" | "aipricing" | "listinglive" | "negotiate" | "pickup"
  | "marketplace" | "cart" | "confirmation" | "logistics" | "price" | "forecast" | "bulk" | "aibot" | "fpohub";

const TAB_FOR_SCREEN: Partial<Record<Screen, Tab>> = {
  marketplace: "market", cart: "market", confirmation: "market",
  logistics: "orders",
  price: "insights", forecast: "insights",
  bulk: "profile", fpohub: "profile",
};

const FARMER_FLOW: Screen[] = ["farmerlogin", "cropupload", "aianalysis", "aipricing", "listinglive", "negotiate", "pickup", "logistics"];
const BUYER_FORWARD: Screen[] = ["cart", "confirmation", "pickup"];

function generateOrderId() {
  return "KD-" + Math.floor(10000 + Math.random() * 90000);
}

function SplashScreen() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center screen-fade" style={{ background: "#1e3d0f" }}>
      <div className="anim-pop flex flex-col items-center gap-4">
        {/* App icon */}
        <div
          className="w-28 h-28 flex items-center justify-center shadow-2xl"
          style={{ background: "#2a5216", borderRadius: 28 }}
        >
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            {/* Left wheat stalk */}
            <path d="M28 62 C28 62 26 44 24 36 C22 28 18 22 18 22" stroke="#d4a017" strokeWidth="3" strokeLinecap="round"/>
            <ellipse cx="18" cy="19" rx="5" ry="8" fill="#d4a017" transform="rotate(-15 18 19)"/>
            <ellipse cx="22" cy="30" rx="4" ry="6.5" fill="#d4a017" transform="rotate(-10 22 30)"/>
            <ellipse cx="25" cy="40" rx="3.5" ry="6" fill="#d4a017" transform="rotate(-5 25 40)"/>
            {/* Right wheat stalk */}
            <path d="M44 62 C44 62 46 44 48 36 C50 28 54 22 54 22" stroke="#d4a017" strokeWidth="3" strokeLinecap="round"/>
            <ellipse cx="54" cy="19" rx="5" ry="8" fill="#d4a017" transform="rotate(15 54 19)"/>
            <ellipse cx="50" cy="30" rx="4" ry="6.5" fill="#d4a017" transform="rotate(10 50 30)"/>
            <ellipse cx="47" cy="40" rx="3.5" ry="6" fill="#d4a017" transform="rotate(5 47 40)"/>
            {/* Center stalk */}
            <path d="M36 62 C36 62 36 42 36 32 C36 24 36 16 36 16" stroke="#d4a017" strokeWidth="3.5" strokeLinecap="round"/>
            <ellipse cx="36" cy="13" rx="5.5" ry="9" fill="#d4a017"/>
            <ellipse cx="36" cy="25" rx="4.5" ry="7" fill="#d4a017"/>
          </svg>
        </div>

        {/* Name */}
        <div>
          <div className="text-white font-black text-3xl tracking-tight text-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
            KisanChowk
          </div>
          <div className="text-white/50 text-sm text-center mt-1">From Farm to Market, Directly.</div>
        </div>
      </div>

      {/* Bottom dots — three equal circles as in screenshot */}
      <div className="absolute bottom-20 flex gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-2 h-2 bg-white/60 rounded-full"/>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [insightsTab, setInsightsTab] = useState<"price" | "forecast">("forecast");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderId, setOrderId] = useState("");
  const [screenKey, setScreenKey] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [cropType, setCropType] = useState("Tomatoes");
  const [cropQty, setCropQty] = useState("500");
  const screenRef = useRef<Screen>("splash");

  // Detect standalone mode (installed PWA) or small screen (actual phone)
  const [isNative, setIsNative] = useState(false);
  useEffect(() => {
    const checkNative = () => {
      const standalone = window.matchMedia("(display-mode: standalone)").matches
        || (navigator as any).standalone === true
        || window.innerWidth < 640;
      setIsNative(standalone);
    };
    checkNative();
    window.addEventListener("resize", checkNative);
    const mq = window.matchMedia("(display-mode: standalone)");
    mq.addEventListener("change", checkNative);
    return () => {
      window.removeEventListener("resize", checkNative);
      mq.removeEventListener("change", checkNative);
    };
  }, []);

  useEffect(() => {
    if (screen !== "splash") return;
    const t = setTimeout(() => navigate("farmerlogin"), 2000);
    return () => clearTimeout(t);
  }, [screen]);

  function navigate(next: Screen) {
    screenRef.current = next;
    setScreen(next);
    setScreenKey((k) => k + 1);
  }

  function addToCart(product: Product) {
    setCartItems((prev) => {
      const ex = prev.find((i) => i.id === product.id);
      return ex
        ? prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...product, qty: 1 }];
    });
  }

  function updateQty(id: number, qty: number) {
    setCartItems((prev) =>
      qty === 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => i.id === id ? { ...i, qty } : i)
    );
  }

  function placeOrder() {
    setOrderId(generateOrderId());
    navigate("confirmation");
  }

  function handleTabChange(tab: Tab) {
    const dest: Record<Tab, Screen> = {
      market: "marketplace",
      insights: insightsTab === "price" ? "price" : "forecast",
      orders: "logistics",
      profile: "bulk",
    };
    navigate(dest[tab]);
  }

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  const showNav = !["splash", "landing", "farmerlogin", "cropupload", "aianalysis",
    "aipricing", "listinglive", "negotiate", "pickup", "cart", "confirmation", "aibot"].includes(screen);

  const isForward = [...FARMER_FLOW, ...BUYER_FORWARD].includes(screen);
  const animClass =
    screen === "splash" || screen === "landing" ? "screen-fade" :
    screen === "aianalysis"                      ? "screen-scale" :
    isForward                                    ? "screen-slide-right" :
                                                   "screen-fade-up";

  const activeTab = (TAB_FOR_SCREEN[screen] ?? "market") as Tab;

  /* ── Shared screen content ── */
  const screenContent = (
    <>
      <div
        key={screenKey}
        className={`absolute inset-0 overflow-y-auto overflow-x-hidden ${animClass}`}
        style={{
          WebkitOverflowScrolling: "touch",
          paddingTop: isNative ? "env(safe-area-inset-top, 0px)" : undefined,
          paddingBottom: isNative ? "env(safe-area-inset-bottom, 0px)" : undefined,
        }}
      >
        {screen === "splash"       && <SplashScreen/>}
        {screen === "landing"      && <Landing onEnter={(role) => navigate(role === "farmer" ? "farmerlogin" : "marketplace")} onMenu={() => setDrawerOpen(true)} onNotif={() => setNotifOpen(true)}/>}
        {screen === "farmerlogin"  && <FarmerLogin onLogin={(role) => navigate(role === "farmer" ? "cropupload" : role === "fpo" ? "fpohub" : "marketplace")} onBack={() => navigate("landing")} lang={lang} onLangChange={setLang}/>}
        {screen === "cropupload"   && <CropUpload onNext={(c, q) => { setCropType(c); setCropQty(q); navigate("aianalysis"); }} onBack={() => navigate("farmerlogin")}/>}
        {screen === "aianalysis"   && <AIAnalysis onDone={() => navigate("aipricing")} cropType={cropType} cropQty={cropQty}/>}
        {screen === "aipricing"    && <AIPricing onPublish={() => navigate("listinglive")} onBack={() => navigate("cropupload")}/>}
        {screen === "listinglive"  && <ListingLive onViewOffers={() => navigate("negotiate")}/>}
        {screen === "negotiate"    && <Negotiate onAccept={() => navigate("pickup")} onBack={() => navigate("listinglive")}/>}
        {screen === "pickup"       && <PickupScheduled onTrack={() => navigate("logistics")}/>}
        {screen === "marketplace"  && <Marketplace onAddToCart={addToCart} cartCount={cartCount} onOpenCart={() => navigate("cart")} onMenu={() => setDrawerOpen(true)} onAIChat={() => navigate("aibot")}/>}
        {screen === "aibot"        && <AIChat onBack={() => navigate("marketplace")}/>}
        {screen === "cart"         && <Cart items={cartItems} onUpdateQty={updateQty} onPlaceOrder={placeOrder} onBack={() => navigate("marketplace")}/>}
        {screen === "confirmation" && (
          <OrderConfirmation
            orderId={orderId}
            onTrackOrder={() => navigate("logistics")}
            onContinueShopping={() => { setCartItems([]); navigate("marketplace"); }}
          />
        )}
        {screen === "logistics"    && <Logistics onMenu={() => setDrawerOpen(true)} onNotif={() => setNotifOpen(true)}/>}
        {screen === "price"        && <PriceTransparency onMenu={() => setDrawerOpen(true)} onNotif={() => setNotifOpen(true)}/>}
        {screen === "forecast"     && <DemandForecast onMenu={() => setDrawerOpen(true)} onNotif={() => setNotifOpen(true)}/>}
        {screen === "bulk"         && <BulkBuyer onMenu={() => setDrawerOpen(true)} onNotif={() => setNotifOpen(true)}/>}
        {screen === "fpohub"      && <FPOHub onMenu={() => setDrawerOpen(true)} onNotif={() => setNotifOpen(true)}/>}
      </div>

      {/* Insights sub-tabs */}
      {(screen === "price" || screen === "forecast") && (
        <div className="absolute bottom-[72px] left-0 right-0 px-4 z-40">
          <div className="flex bg-white/95 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-gray-100">
            <button
              onClick={() => { setInsightsTab("forecast"); navigate("forecast"); }}
              className={`press flex-1 rounded-xl py-2 text-xs font-bold transition-all ${screen === "forecast" ? "bg-[#1a6b3c] text-white shadow-sm" : "text-gray-500"}`}
            >
              📈 Demand Forecast
            </button>
            <button
              onClick={() => { setInsightsTab("price"); navigate("price"); }}
              className={`press flex-1 rounded-xl py-2 text-xs font-bold transition-all ${screen === "price" ? "bg-[#1a6b3c] text-white shadow-sm" : "text-gray-500"}`}
            >
              💰 Price Transparency
            </button>
          </div>
        </div>
      )}

      {showNav && <BottomNav active={activeTab} onNavigate={handleTabChange}/>}

      {/* Global overlays */}
      <SideDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onNavigate={(s) => navigate(s as Screen)}
        onSignOut={() => { setCartItems([]); navigate("splash"); }}
        lang={lang}
        onLangChange={setLang}
      />
      <NotifPanel open={notifOpen} onClose={() => setNotifOpen(false)}/>
    </>
  );

  /* ── Native / standalone PWA mode: fullscreen, no bezel ── */
  if (isNative) {
    return (
      <div className="h-screen w-screen overflow-hidden bg-[#f0f7f2] relative">
        {screenContent}
      </div>
    );
  }

  /* ── Desktop browser: phone simulator with bezel ── */
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-[#0a2e14] via-[#1a5c35] to-[#0a2e14]
                    flex items-center justify-center">
      <div className="relative w-[360px] h-[720px] shrink-0">
        {/* Physical buttons */}
        <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-gray-700 rounded-l-full"/>
        <div className="absolute -left-[3px] top-36 w-[3px] h-14 bg-gray-700 rounded-l-full"/>
        <div className="absolute -left-[3px] top-52 w-[3px] h-14 bg-gray-700 rounded-l-full"/>
        <div className="absolute -right-[3px] top-32 w-[3px] h-20 bg-gray-700 rounded-r-full"/>

        {/* Outer ring (bezel) */}
        <div className="absolute inset-0 rounded-[52px] bg-gray-900 shadow-2xl ring-1 ring-white/10 overflow-hidden">
          {/* Inner screen area */}
          <div className="absolute inset-[10px] rounded-[44px] bg-gray-950 overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-50 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-800"/>
              <div className="w-3 h-3 rounded-full bg-gray-800 border border-gray-700"/>
            </div>

            {/* App viewport */}
            <div className="absolute inset-0 rounded-[44px] bg-[#f0f7f2] overflow-hidden">
              {screenContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
