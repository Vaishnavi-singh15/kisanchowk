import { useState, useEffect, useRef } from "react";

interface FPOHubProps {
  onMenu?: () => void;
  onNotif?: () => void;
}

const MEMBERS = [
  { initials: "RP", name: "Ramesh Patil", verified: true, cluster: "Kaiwari, Nashik", grade: "Grade A+", moisture: "12% moisture", qty: 120, est: "₹3,18,000 est.", color: "#1a6b3c" },
  { initials: "SJ", name: "Sunita Jadhav", verified: true, cluster: "Dindori Cluster", grade: "Grade A+", moisture: "13% moisture", qty: 85, est: "₹2,25,250 est.", color: "#7c3aed" },
  { initials: "MS", name: "Mahadev Shinde", verified: true, cluster: "Niphad Belt", grade: "Grade A+", moisture: "11.5% moisture", qty: 150, est: "₹3,87,500 est.", color: "#d97706" },
];

const OFFERS = [
  { logo: "🏭", buyer: "ITC AgriHub Procurement", delivery: "Direct Depot (Warehouse Gate)", price: 2920, badge: "Highest Bid", badgeColor: "#1a6b3c", diff: null },
  { logo: "🛒", buyer: "BigBasket Institutional", delivery: "FOB Farmgate Delivery", price: 2880, badge: "Outbid −₹40", badgeColor: "#dc2626", diff: -40 },
];

const COUNTER_SEQUENCE = [
  { step: 1, actor: "BigBasket", text: "Placed opening bid at ₹2,880/Qt for entire 750 Qt lot." },
  { step: 2, actor: "Joint FPO Board", text: "Countered at ₹2,960/Qt quoting certified protein score of 13.8%." },
  { step: 3, actor: "ITC AgriHub", text: "Revised offer to ₹2,920/Qt with 48h fast-settlement guarantee." },
];

const ESCROW_ROWS = [
  { icon: "🏦", label: "Direct Farmer Bank Deposit (Aadhaar Escrow)", pct: 92, perQt: "₹2,686.40", total: "₹20,14,800 Total", color: "#1a6b3c" },
  { icon: "🚛", label: "FPO Logistics, Bagging & Working Capital", pct: 5, perQt: "₹146.00", total: "₹1,09,500 Retained Pool", color: "#d97706" },
  { icon: "⭐", label: "Quality Uniformity Bonus Incentive", pct: 3, perQt: "₹87.60", total: "₹65,709 Top-tier bonus", color: "#7c3aed" },
];

const CROPS_LOT = ["Nashik Red Onion", "Sharbati Wheat", "Baby Potatoes", "Alphonso Mango"];
const LOT_IMAGES: Record<string, string> = {
  "Nashik Red Onion": "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500&q=80&fit=crop",
  "Sharbati Wheat": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&q=80&fit=crop",
  "Baby Potatoes": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&q=80&fit=crop",
  "Alphonso Mango": "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&q=80&fit=crop",
};

const MY_LOTS = [
  { id: 1, name: "Red Onions",    qty: "2,000kg", grade: "Grade A",   status: "active", responses: 3 },
  { id: 2, name: "Basmati Rice",  qty: "5,000kg", grade: "Premium",   status: "draft",  responses: 0 },
];

const QUOTATIONS = [
  { initials: "SP", name: "Sharma Produce", starred: true,  price: 25, grade: "A+", distance: 45,  delivery: "2 Days", color: "#1a6b3c" },
  { initials: "RK", name: "Raj Kumar",      starred: false, price: 24, grade: "A",  distance: 120, delivery: "3 Days", color: "#d97706" },
  { initials: "MF", name: "Metro Fresh",    starred: false, price: 26, grade: "A+", distance: 60,  delivery: "1 Day",  color: "#7c3aed" },
];

const DELIVERIES = [
  { lot: "Tomatoes",   buyer: "BigBasket",     date: "25 Sep", qty: "500kg",   status: "In Transit" },
  { lot: "Wheat",      buyer: "ITC AgriHub",   date: "28 Sep", qty: "1,200kg", status: "Scheduled"  },
];

export default function FPOHub({ onMenu, onNotif }: FPOHubProps) {
  const [activeTab, setActiveTab] = useState<"lots" | "pooling" | "negotiate">("lots");
  const [pooled, setPooled] = useState(740);
  const target = 1000;
  const [quorum, setQuorum] = useState(84);
  const [activeLotId, setActiveLotId] = useState(1);
  const [acceptedQuote, setAcceptedQuote] = useState<string | null>(null);
  const [showHelpline, setShowHelpline] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [showContrib, setShowContrib] = useState(false);
  const [myQty, setMyQty] = useState("50");
  const [myGrade, setMyGrade] = useState("Grade A+");
  const [contribDone, setContribDone] = useState(false);
  const [activeLot, setActiveLot] = useState(0);
  const [timeLeft, setTimeLeft] = useState(42 * 60); // 42 min in seconds
  const [offerPrices, setOfferPrices] = useState([2920, 2880]);
  const [counterInput, setCounterInput] = useState("2950");
  const [counterSent, setCounterSent] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  function formatTime(s: number) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}m ${sec.toString().padStart(2, "0")}s`;
  }

  function handleContrib() {
    const q = parseInt(myQty) || 0;
    if (q > 0) {
      setPooled((p) => Math.min(p + q, target));
      setQuorum((v) => Math.min(v + 3, 100));
      setContribDone(true);
      setTimeout(() => { setShowContrib(false); setContribDone(false); }, 1200);
    }
  }

  function handleCounter() {
    const price = parseInt(counterInput) || 2950;
    setOfferPrices([price, offerPrices[1]]);
    setCounterSent(true);
    setQuorum((v) => Math.min(v + 5, 100));
  }

  const poolPct = Math.round((pooled / target) * 100);

  return (
    <div className="min-h-full bg-[#f0f7f2] pb-24">
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-500">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="#374151"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4" y="4" width="3" height="7" rx="0.5"/><rect x="8" y="2" width="3" height="9" rx="0.5"/><rect x="12" y="0" width="3" height="11" rx="0.5"/></svg>
        </div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-4 pb-2">
        <button onClick={onMenu} className="press w-9 h-9 flex items-center justify-center rounded-xl active:bg-gray-100">
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none"><rect width="18" height="2" rx="1" fill="#374151"/><rect y="5.5" width="12" height="2" rx="1" fill="#374151"/><rect y="11" width="18" height="2" rx="1" fill="#374151"/></svg>
        </button>
        <div className="text-center">
          <div className="text-[#1a6b3c] font-black text-base tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>KisanChowk FPO Hub</div>
          <div className="flex items-center justify-center gap-1">
            <span className="bg-green-100 text-green-700 text-[9px] font-bold px-1.5 py-0.5 rounded-full">AgriStack</span>
          </div>
        </div>
        <button onClick={onNotif} className="press w-9 h-9 flex items-center justify-center rounded-xl relative">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"/>
        </button>
      </header>

      {/* FPO Identity card */}
      <div className="mx-4 mb-3 bg-[#1a6b3c] rounded-2xl p-4 flex items-center gap-3">
        <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center text-2xl">🌿</div>
        <div className="flex-1">
          <div className="text-white font-bold text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>KisanChowk</div>
          <div className="text-white/60 text-xs">#MH-412</div>
        </div>
        <div className="text-right">
          <div className="text-white font-black text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>98.4%</div>
          <div className="text-white/60 text-[10px]">Trust Rating</div>
        </div>
      </div>

      {/* Season tags + tabs */}
      <div className="px-4 mb-3">
        <div className="flex gap-2 flex-wrap mb-2">
          {["Kharif 2025", "Rabi 2025"].map((s) => (
            <span key={s} className="bg-white border border-gray-200 text-gray-600 text-[11px] font-semibold px-3 py-1 rounded-full">{s}</span>
          ))}
          <span className="bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-semibold px-3 py-1 rounded-full">+ बोनस बोली लगाएं</span>
        </div>
        {/* Lot switcher */}
        <div className="flex gap-1.5 overflow-x-auto no-scroll mb-2">
          {CROPS_LOT.map((lot, i) => (
            <button
              key={lot}
              onClick={() => setActiveLot(i)}
              className={`press shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all ${activeLot === i ? "bg-[#1a6b3c] text-white" : "bg-white text-gray-500 border border-gray-200"}`}
            >
              {lot}
            </button>
          ))}
        </div>
        <div className="flex gap-1.5">
          {([
            { key: "lots",      label: "📋 My Lots"      },
            { key: "pooling",   label: "🏊 Pooling"      },
            { key: "negotiate", label: "🤝 Negotiate"    },
          ] as const).map((tb) => (
            <button
              key={tb.key}
              onClick={() => setActiveTab(tb.key)}
              className={`press flex-1 py-2 rounded-xl text-[11px] font-bold transition-all ${activeTab === tb.key ? "bg-[#1a6b3c] text-white" : "bg-white text-gray-500 border border-gray-200"}`}
            >
              {tb.label}
            </button>
          ))}
        </div>
      </div>

      {/* ===== MY LOTS TAB ===== */}
      {activeTab === "lots" && (
        <div className="px-4 flex flex-col gap-3 mb-6">
          {/* Lot cards */}
          <div className="font-bold text-gray-800 text-sm mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>My Listed Lots</div>
          {MY_LOTS.map((lot) => (
            <button
              key={lot.id}
              onClick={() => setActiveLotId(lot.id)}
              className={`press w-full bg-white rounded-2xl p-4 text-left border-2 transition-all shadow-sm ${activeLotId === lot.id ? "border-[#1a6b3c]" : "border-gray-100"}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>{lot.name}</span>
                <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${lot.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                  {lot.status === "active" ? "Active" : "Draft"}
                </span>
              </div>
              <div className="text-gray-400 text-xs">Qty: {lot.qty} • {lot.grade}</div>
              <div className="flex items-center gap-1 mt-1.5">
                <span className="text-[#1a6b3c] text-xs">💬</span>
                <span className="text-xs font-semibold text-gray-500">{lot.responses} Response{lot.responses !== 1 ? "s" : ""}</span>
              </div>
            </button>
          ))}

          {/* Received Quotations */}
          <div className="flex items-center justify-between mt-1">
            <div className="font-bold text-gray-800 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>Received Quotations</div>
            <span className="text-[11px] text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full font-medium">
              For: {MY_LOTS.find((l) => l.id === activeLotId)?.name ?? "—"}
            </span>
          </div>

          {activeLotId === 1 ? (
            <div className="flex flex-col gap-3">
              {QUOTATIONS.map((q) => {
                const isAccepted = acceptedQuote === q.name;
                return (
                  <div
                    key={q.name}
                    className={`bg-white rounded-2xl p-4 shadow-sm border-2 transition-all ${isAccepted ? "border-[#1a6b3c] bg-[#f0fdf4]" : "border-gray-100"}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black text-sm shrink-0" style={{ background: q.color }}>
                        {q.initials}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-sm flex items-center gap-1">
                          {q.name}
                          {q.starred && <span className="text-amber-400">⭐</span>}
                        </div>
                      </div>
                      {isAccepted && (
                        <span className="bg-[#1a6b3c] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">✓ Accepted</span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div>
                        <div className="text-gray-400 text-[10px]">Price</div>
                        <div className="font-black text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>₹{q.price}/kg</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-[10px]">Grade</div>
                        <div className="font-bold text-gray-900 text-sm">{q.grade}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-[10px]">Distance</div>
                        <div className="font-bold text-gray-900 text-sm">{q.distance} km</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-[10px]">Delivery</div>
                        <div className="font-bold text-gray-900 text-sm">{q.delivery}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setAcceptedQuote(isAccepted ? null : q.name)}
                      className={`press w-full rounded-xl py-2.5 font-bold text-sm transition-all ${isAccepted ? "bg-gray-100 text-gray-500" : "text-white shadow-sm"}`}
                      style={{ fontFamily: "Montserrat, sans-serif", background: isAccepted ? undefined : "#163009" }}
                    >
                      {isAccepted ? "Accepted ✓" : "Accept Quote"}
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-2 text-center shadow-sm border border-gray-100">
              <span className="text-3xl">📭</span>
              <div className="font-semibold text-gray-500 text-sm">No quotations yet</div>
              <div className="text-gray-400 text-xs">Publish this lot to start receiving buyer offers</div>
              <button className="press mt-2 bg-[#1a6b3c] text-white rounded-xl px-5 py-2 text-xs font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Publish Lot →
              </button>
            </div>
          )}

          {/* Upcoming Deliveries */}
          <div className="font-bold text-gray-800 text-sm mt-2" style={{ fontFamily: "Montserrat, sans-serif" }}>Upcoming Deliveries</div>
          {DELIVERIES.map((d) => (
            <div key={d.lot + d.date} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#e8f5ee] rounded-xl flex items-center justify-center text-xl shrink-0">🚚</div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 text-sm">{d.lot}</div>
                <div className="text-gray-400 text-xs">{d.buyer} · {d.qty}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-[#1a6b3c] text-xs">{d.date}</div>
                <div className="text-gray-400 text-[10px] mt-0.5">{d.status}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ===== POOLING / NEGOTIATE TABS ===== */}
      {activeTab !== "lots" && (
        <>

      {/* Active Collective Lot */}
      <div className="mx-4 mb-4 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
        {/* Lot image */}
        <div className="relative h-36 overflow-hidden">
          <img
            src={LOT_IMAGES[CROPS_LOT[activeLot]]}
            alt={CROPS_LOT[activeLot]}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
          <div className="absolute top-2 left-2 flex gap-1.5">
            <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full">ACTIVE COLLECTIVE LOT</span>
            <span className="bg-amber-400 text-amber-900 text-[10px] font-black px-2 py-0.5 rounded-full">Export Grade A+</span>
          </div>
          <div className="absolute bottom-2 left-3">
            <div className="text-white font-black text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>{CROPS_LOT[activeLot]}</div>
            <div className="text-white/70 text-xs">Target Quota: 1,000 Qt</div>
          </div>
        </div>
        <div className="px-4 pt-3 pb-1">
          <div className="text-gray-400 text-[11px] mt-0.5">ITC &amp; Reliance Retail MOQ Procurement Contract #EXP-771</div>
        </div>

        {/* Pooling progress */}
        <div className="px-4 py-3">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs font-bold text-gray-700">{pooled}/1,000 Qt Pooled ({poolPct}%)</span>
            <span className="text-xs font-semibold text-amber-600">{target - pooled} Qt to Target</span>
          </div>
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#1a6b3c] to-[#34d399] rounded-full transition-all" style={{ width: `${poolPct}%` }}/>
          </div>
        </div>

        {/* Price info */}
        <div className="grid grid-cols-2 gap-px bg-gray-100 mx-4 rounded-2xl overflow-hidden mb-3">
          <div className="bg-white px-3 py-2.5">
            <div className="text-gray-400 text-[10px]">Min Gate Price</div>
            <div className="font-black text-[#1a6b3c] text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>₹2,410/Qt</div>
          </div>
          <div className="bg-white px-3 py-2.5">
            <div className="text-gray-400 text-[10px]">Collective Bid Target</div>
            <div className="font-black text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>₹2,680/Qt</div>
          </div>
        </div>

        {/* AI insight */}
        <div className="mx-4 mb-3 bg-[#f0f7f2] rounded-2xl px-3 py-2.5 flex gap-2">
          <span className="text-base shrink-0">🤖</span>
          <div className="text-xs text-gray-700 leading-relaxed">
            <span className="font-bold text-[#1a6b3c]">AI Uniformity: 86.2% Consistency</span>
            <span className="text-gray-500"> · Bulk Tier Unlocked: </span>
            <span className="font-bold text-[#1a6b3c]">+₹240/Qt</span>
            <span className="text-gray-500"> collective premium</span>
          </div>
        </div>

        <div className="px-4 pb-4">
          <button
            onClick={() => setShowContrib(true)}
            className="press w-full bg-[#1a6b3c] text-white rounded-2xl py-3.5 font-bold text-sm flex items-center justify-center gap-2"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span>+</span> Add My Farm Contribution (पोलिंग जोड़े)
          </button>
        </div>
      </div>

      {/* Member Contributors */}
      <div className="mx-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>Member Contributors</div>
          <div className="flex items-center gap-1.5 bg-blue-50 px-2.5 py-1 rounded-full">
            <span className="text-blue-600 text-[10px] font-bold">✓ Aadhaar KYC</span>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          {MEMBERS.map((m) => (
            <div key={m.initials} className="bg-white rounded-2xl p-3.5 flex items-start gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ background: m.color }}>
                {m.initials}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="font-bold text-gray-900 text-sm">{m.name}</span>
                  <span className="text-[#1a6b3c] text-xs">✓</span>
                </div>
                <div className="text-gray-400 text-[10px]">{m.cluster} · {m.grade} ({m.moisture})</div>
              </div>
              <div className="text-right">
                <div className="font-black text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>{m.qty} Qt</div>
                <div className="text-gray-400 text-[10px]">{m.est}</div>
              </div>
            </div>
          ))}
          <div className="bg-[#f0f7f2] rounded-2xl px-4 py-2.5 text-center text-gray-500 text-xs font-semibold">
            +18 other marginal farmers contributed remaining 385 Quintals
          </div>
        </div>
      </div>

      {/* Live Auction */}
      <div className="mx-4 mb-4 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
        <div className="bg-red-50 border-b border-red-100 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"/>
            <span className="text-red-600 text-xs font-bold">Live Auction #RFQ-8843</span>
          </div>
          <span className="text-red-500 text-xs font-bold tabular-nums">{formatTime(timeLeft)}</span>
        </div>
        <div className="px-4 pt-3 pb-1">
          <div className="font-black text-gray-900 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>Bulk Batch: 750 Qt Sharbati Wheat</div>
          <div className="text-gray-400 text-xs mt-0.5">Joint Lot: Sahyadri FPO (500 Qt) + Godavari Federation (250 Qt)</div>
        </div>
        <div className="grid grid-cols-2 gap-px bg-gray-100 mx-4 my-3 rounded-2xl overflow-hidden">
          <div className="bg-white px-3 py-2.5">
            <div className="text-gray-400 text-[10px]">FPO Collective Reserve</div>
            <div className="font-black text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>₹2,950/Qt</div>
          </div>
          <div className="bg-white px-3 py-2.5">
            <div className="text-gray-400 text-[10px]">AI Fair Band</div>
            <div className="font-black text-[#1a6b3c] text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>₹2,940–₹2,980</div>
          </div>
        </div>

        {/* Institutional Offers */}
        <div className="px-4 mb-3">
          <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">Institutional Live Offers</div>
          <div className="flex flex-col gap-2">
            {OFFERS.map((o, idx) => (
              <div key={o.buyer} className="bg-gray-50 rounded-2xl p-3 flex items-center gap-3">
                <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center text-lg shadow-sm shrink-0">{o.logo}</div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-xs">{o.buyer}</div>
                  <div className="text-gray-400 text-[10px]">{o.delivery}</div>
                </div>
                <div className="text-right">
                  <div className="font-black text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>₹{offerPrices[idx].toLocaleString("en-IN")}/Qt</div>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: `${o.badgeColor}18`, color: o.badgeColor }}>
                    {idx === 0 ? "Highest Bid" : `Outbid −₹${offerPrices[0] - offerPrices[1]}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Counter-Offer Sequence */}
        <div className="px-4 mb-3">
          <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2">Counter-Offer Sequence</div>
          <div className="flex flex-col gap-2">
            {COUNTER_SEQUENCE.map((c) => (
              <div key={c.step} className="flex gap-2.5">
                <div className="w-6 h-6 bg-[#1a6b3c] rounded-full flex items-center justify-center text-white text-[10px] font-black shrink-0 mt-0.5">{c.step}</div>
                <div className="flex-1 bg-gray-50 rounded-xl px-3 py-2">
                  <div className="font-bold text-[#1a6b3c] text-[10px] mb-0.5">{c.actor}</div>
                  <div className="text-gray-600 text-[11px] leading-relaxed">{c.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quorum */}
        <div className="mx-4 mb-3 bg-[#f0f7f2] rounded-2xl px-4 py-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-gray-700">FPO Member Consensus to Accept ₹2,935 Counter</span>
            <span className="text-[#1a6b3c] font-black text-sm">{quorum}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
            <div className="h-full bg-[#1a6b3c] rounded-full" style={{ width: `${quorum}%` }}/>
          </div>
          <div className="text-[#1a6b3c] text-[10px] font-bold">Quorum Reached ✓</div>
          <div className="text-gray-400 text-[10px] mt-0.5">18/21 voting committee members approved counter-settlement proposal.</div>
        </div>

        {/* Counter input — only in Negotiate tab */}
        {activeTab === "negotiate" && !counterSent && (
          <div className="mx-4 mb-3 bg-white rounded-2xl p-3.5 border border-[#1a6b3c]/20">
            <div className="text-xs font-bold text-gray-700 mb-2">Submit Your Counter Offer</div>
            <div className="flex gap-2">
              <div className="flex-1 bg-[#f0f7f2] rounded-xl flex items-center px-3 py-2.5 gap-1.5">
                <span className="text-gray-500 text-sm font-semibold">₹</span>
                <input
                  type="number"
                  value={counterInput}
                  onChange={(e) => setCounterInput(e.target.value)}
                  className="flex-1 text-sm font-black text-gray-900 outline-none bg-transparent"
                />
                <span className="text-gray-400 text-xs">/Qt</span>
              </div>
              <button
                onClick={handleCounter}
                className="press bg-[#1a6b3c] text-white rounded-xl px-4 py-2.5 text-xs font-bold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Send
              </button>
            </div>
          </div>
        )}
        {counterSent && (
          <div className="mx-4 mb-3 bg-green-50 border border-green-200 rounded-2xl px-4 py-3 flex items-center gap-2">
            <span className="text-green-600 text-base">✓</span>
            <span className="text-green-700 text-xs font-bold">Counter ₹{counterInput}/Qt submitted — awaiting buyer response</span>
          </div>
        )}

        {/* Counter & Split */}
        <div className="mx-4 mb-3 grid grid-cols-2 gap-2">
          <div className="bg-[#1a6b3c]/10 rounded-2xl px-4 py-3 text-center">
            <div className="text-[10px] text-gray-500 mb-0.5">Counter</div>
            <div className="font-black text-[#1a6b3c] text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>₹{counterInput}/Qt</div>
          </div>
          <div className="bg-amber-50 rounded-2xl px-4 py-3 text-center">
            <div className="text-[10px] text-gray-500 mb-0.5">Split Lot</div>
            <div className="font-black text-amber-700 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>60/40</div>
          </div>
        </div>

        <div className="px-4 pb-4">
          <button
            onClick={() => setAccepted(true)}
            className={`press w-full rounded-2xl py-4 font-bold text-sm flex items-center justify-center gap-2 transition-all ${accepted ? "bg-gray-200 text-gray-500" : "bg-[#1a6b3c] text-white shadow-lg shadow-[#1a6b3c]/30"}`}
            style={{ fontFamily: "Montserrat, sans-serif" }}
            disabled={accepted}
          >
            {accepted ? "✓ Bid Accepted & Locked" : "Accept Bid & Lock Escrow (सौदा पक्का करें)"}
          </button>
        </div>
      </div>

      {/* Escrow & Dividend Split */}
      <div className="mx-4 mb-4 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <div className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>Escrow & Dividend Split</div>
          <span className="bg-[#1a6b3c] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">T+6 Instant</span>
        </div>
        <div className="text-gray-400 text-[11px] px-4 pb-3">Automated smart contract payout structure</div>

        <div className="grid grid-cols-2 gap-px bg-gray-100 mx-4 rounded-2xl overflow-hidden mb-3">
          <div className="bg-white px-3 py-2.5">
            <div className="text-gray-400 text-[10px]">Settlement Benchmark</div>
            <div className="font-black text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>₹2,920.00/Qt</div>
          </div>
          <div className="bg-white px-3 py-2.5">
            <div className="text-gray-400 text-[10px]">Total Batch Gross</div>
            <div className="font-black text-[#1a6b3c] text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>₹21,90,000</div>
          </div>
        </div>

        <div className="px-4 flex flex-col gap-2.5 mb-3">
          {ESCROW_ROWS.map((r) => (
            <div key={r.label} className="bg-gray-50 rounded-2xl p-3.5 flex items-start gap-3">
              <div className="text-xl shrink-0">{r.icon}</div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-gray-700 leading-tight mb-0.5">{r.label}</div>
                <div className="text-gray-400 text-[10px]">{r.perQt}/Quintal · {r.total}</div>
              </div>
              <div className="font-black text-sm shrink-0" style={{ color: r.color, fontFamily: "Montserrat, sans-serif" }}>{r.pct}%</div>
            </div>
          ))}
        </div>

        <div className="mx-4 mb-3 bg-green-50 border border-green-200 rounded-2xl px-4 py-3 flex items-center gap-3">
          <span className="text-xl">💬</span>
          <div>
            <div className="font-bold text-green-800 text-xs">WhatsApp Statement Dispatch</div>
            <div className="text-green-600 text-[10px] mt-0.5">Send individual PDF receipts to each farmer automatically</div>
          </div>
          <div className="ml-auto w-10 h-5 bg-green-500 rounded-full flex items-center justify-end px-0.5">
            <div className="w-4 h-4 bg-white rounded-full shadow-sm"/>
          </div>
        </div>

        <div className="mx-4 mb-4 bg-blue-50 border border-blue-200 rounded-2xl px-4 py-3 flex items-center gap-2">
          <span className="text-base">🏛️</span>
          <div className="text-blue-700 text-[10px] font-semibold leading-relaxed">
            Verified by Maharashtra State Agrimarketing Board (MSAMB)
          </div>
        </div>
      </div>

      {/* Helpline Section */}
      <div className="mx-4 mb-6">
        <button
          onClick={() => setShowHelpline((s) => !s)}
          className="press w-full bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3.5 flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-xl shrink-0">📞</div>
          <div className="flex-1 text-left">
            <div className="font-bold text-amber-800 text-sm">Kisan Helpline &amp; Support</div>
            <div className="text-amber-600 text-[11px]">Government toll-free agricultural helplines</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"
            style={{ transform: showHelpline ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>

        {showHelpline && (
          <div className="bg-white rounded-2xl mt-2 overflow-hidden shadow-sm border border-gray-100">
            {[
              { icon: "🌾", name: "Kisan Call Centre (KCC)", number: "1800-180-1551", note: "Toll-Free · 24×7 · All languages" },
              { icon: "💰", name: "PM-KISAN Helpline", number: "155261", note: "Payment & registration queries" },
              { icon: "📊", name: "AgriStack / e-NAM", number: "1800-270-0224", note: "Digital market platform support" },
              { icon: "🏛️", name: "MSAMB Helpline", number: "1800-233-6166", note: "Maharashtra · Toll-Free" },
              { icon: "🚨", name: "Crop Insurance (PMFBY)", number: "1800-200-7710", note: "Claim & policy support" },
              { icon: "🌦️", name: "IMD Weather Agri Line", number: "1800-180-1717", note: "Weather & sowing advisories" },
            ].map((h) => (
              <a
                key={h.number}
                href={`tel:${h.number}`}
                className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-50 last:border-0 active:bg-gray-50"
              >
                <div className="w-9 h-9 bg-[#f0f7f2] rounded-xl flex items-center justify-center text-lg shrink-0">{h.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-xs">{h.name}</div>
                  <div className="text-gray-400 text-[10px]">{h.note}</div>
                </div>
                <div>
                  <div className="font-black text-[#1a6b3c] text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>{h.number}</div>
                  <div className="text-right text-[10px] text-gray-400">Tap to call</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

        </>
      )}

      {/* Contribution Modal */}
      {showContrib && (
        <div className="absolute inset-0 bg-black/50 z-50 flex items-end" onClick={() => setShowContrib(false)}>
          <div
            className="bg-white w-full rounded-t-3xl p-5 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="font-bold text-gray-900 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Add Farm Contribution
              </div>
              <button onClick={() => setShowContrib(false)} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-sm">✕</button>
            </div>

            <div className="bg-[#f0f7f2] rounded-2xl p-3.5 flex items-center gap-3">
              <img src={LOT_IMAGES[CROPS_LOT[activeLot]]} alt={CROPS_LOT[activeLot]} className="w-12 h-12 rounded-xl object-cover"/>
              <div>
                <div className="font-bold text-gray-900 text-sm">{CROPS_LOT[activeLot]}</div>
                <div className="text-gray-400 text-xs">{pooled}/{target} Qt pooled ({poolPct}%)</div>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Quantity (Quintals)</label>
              <div className="bg-[#f0f7f2] rounded-2xl flex items-center px-4 py-3 gap-2">
                <input
                  type="number"
                  value={myQty}
                  onChange={(e) => setMyQty(e.target.value)}
                  className="flex-1 text-xl font-black text-gray-900 outline-none bg-transparent"
                />
                <span className="text-gray-500 text-sm font-semibold">Qt</span>
              </div>
              <div className="flex gap-2 mt-2">
                {["25", "50", "100", "200"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setMyQty(v)}
                    className={`press flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${myQty === v ? "bg-[#1a6b3c] text-white" : "bg-gray-100 text-gray-600"}`}
                  >
                    {v}Qt
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Quality Grade</label>
              <div className="flex gap-2">
                {["Grade A+", "Grade A", "Grade B"].map((g) => (
                  <button
                    key={g}
                    onClick={() => setMyGrade(g)}
                    className={`press flex-1 py-2 rounded-xl text-xs font-bold transition-all ${myGrade === g ? "bg-[#1a6b3c] text-white" : "bg-gray-100 text-gray-600"}`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated payout */}
            <div className="bg-[#1a6b3c]/8 rounded-2xl px-4 py-3 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500">Estimated Payout</div>
                <div className="text-[#1a6b3c] font-black text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  ₹{(parseInt(myQty || "0") * 2686).toLocaleString("en-IN")}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">At ₹2,686/Qt · 92% direct</div>
                <div className="text-xs text-[#1a6b3c] font-semibold">{myGrade} · Aadhaar escrow</div>
              </div>
            </div>

            <button
              onClick={handleContrib}
              className={`press w-full rounded-2xl py-4 font-bold text-[15px] flex items-center justify-center gap-2 transition-all ${contribDone ? "bg-green-500 text-white" : "bg-[#1a6b3c] text-white shadow-lg shadow-[#1a6b3c]/30"}`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {contribDone ? "✓ Contribution Added!" : `+ Add ${myQty} Qt to Pool (पोलिंग जोड़े)`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
