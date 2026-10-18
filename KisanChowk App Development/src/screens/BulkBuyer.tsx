import { useState } from "react";

interface BulkBuyerProps {
  onMenu?: () => void;
  onNotif?: () => void;
}

const QUOTES = [
  { initials: "SP", name: "Sharma Produce", star: true, price: 25, grade: "A+", dist: "45 km", delivery: "2 Days", color: "#1a6b3c", featured: true },
  { initials: "RK", name: "Raj Kumar Farms", star: false, price: 24, grade: "A", dist: "120 km", delivery: "3 Days", color: "#f97316", featured: false },
];

const CROPS = ["Red Onions", "Tomatoes", "Potatoes", "Basmati Rice", "Wheat", "Spinach", "Mangoes", "Other"];
const GRADES = ["Grade A", "Grade B", "Grade C", "Premium", "Organic"];
const UNITS = ["kg", "quintal", "tonne", "dozen"];

interface Requirement {
  id: string; name: string; qty: string; unit: string; grade: string;
  price: string; deadline: string; status: "Active" | "Draft"; responses: number;
}

// Negotiation threads between buyers and farmers/FPOs
const INITIAL_THREADS = [
  {
    id: "N001",
    product: "Red Onions",
    qty: "2,000 kg",
    buyer: { name: "FreshMart Delhi", initials: "FM", color: "#3b82f6", type: "Wholesale Buyer" },
    seller: { name: "Ramesh Kumar", initials: "RK", color: "#1a6b3c", type: "Farmer · Punjab", verified: true },
    buyerOffer: 22,
    sellerAsk: 25,
    lastOffer: 23,
    status: "active" as "active" | "accepted" | "rejected",
    messages: [
      { from: "buyer", text: "We need 2,000 kg Grade A Red Onions. Offering ₹22/kg.", time: "10:30 AM" },
      { from: "seller", text: "Minimum ₹25/kg for Grade A. Quality is certified.", time: "10:45 AM" },
      { from: "buyer", text: "Can you do ₹23/kg? We'll take 2,500 kg instead.", time: "11:00 AM" },
    ],
  },
  {
    id: "N002",
    product: "Basmati Rice",
    qty: "5,000 kg",
    buyer: { name: "Reliance Fresh", initials: "RF", color: "#8b5cf6", type: "Wholesale Buyer" },
    seller: { name: "Green FPO", initials: "GF", color: "#f59e0b", type: "FPO · Haryana", verified: true },
    buyerOffer: 80,
    sellerAsk: 88,
    lastOffer: 84,
    status: "active" as "active" | "accepted" | "rejected",
    messages: [
      { from: "buyer", text: "Need 5,000 kg Premium Basmati. Offering ₹80/kg.", time: "9:00 AM" },
      { from: "seller", text: "Our price is ₹88/kg. This is certified organic.", time: "9:20 AM" },
      { from: "buyer", text: "₹84/kg final offer. We need by next week.", time: "9:45 AM" },
    ],
  },
  {
    id: "N003",
    product: "Tomatoes",
    qty: "500 kg",
    buyer: { name: "BigBasket", initials: "BB", color: "#ef4444", type: "E-Commerce Buyer" },
    seller: { name: "Sunita Devi", initials: "SD", color: "#1a6b3c", type: "Farmer · UP", verified: false },
    buyerOffer: 18,
    sellerAsk: 22,
    lastOffer: 20,
    status: "accepted" as "active" | "accepted" | "rejected",
    messages: [
      { from: "buyer", text: "500 kg fresh tomatoes needed. ₹18/kg.", time: "Yesterday" },
      { from: "seller", text: "₹22/kg, just harvested this morning.", time: "Yesterday" },
      { from: "buyer", text: "₹20/kg, deal?", time: "Yesterday" },
      { from: "seller", text: "Deal! ₹20/kg. Pickup tomorrow 6 AM.", time: "Yesterday" },
    ],
  },
];

function NegotiationTab() {
  const [threads, setThreads] = useState(INITIAL_THREADS);
  const [active, setActive] = useState<string | null>(null);
  const [reply, setReply] = useState("");
  const [counterVal, setCounterVal] = useState<Record<string, string>>({});

  const activeThread = threads.find((t) => t.id === active);

  function sendMessage(id: string) {
    if (!reply.trim()) return;
    setThreads((prev) => prev.map((t) => t.id === id
      ? { ...t, messages: [...t.messages, { from: "seller", text: reply.trim(), time: "Now" }] }
      : t
    ));
    setReply("");
  }

  function sendCounter(id: string, val: string) {
    if (!val) return;
    setThreads((prev) => prev.map((t) => t.id === id
      ? { ...t, lastOffer: Number(val), messages: [...t.messages, { from: "seller", text: `Counter offer: ₹${val}/kg. Final.`, time: "Now" }] }
      : t
    ));
    setCounterVal((p) => ({ ...p, [id]: "" }));
  }

  function accept(id: string) {
    setThreads((prev) => prev.map((t) => t.id === id
      ? { ...t, status: "accepted", messages: [...t.messages, { from: "seller", text: `✅ Deal accepted at ₹${t.lastOffer}/kg!`, time: "Now" }] }
      : t
    ));
  }

  function reject(id: string) {
    setThreads((prev) => prev.map((t) => t.id === id
      ? { ...t, status: "rejected", messages: [...t.messages, { from: "seller", text: "❌ Offer declined.", time: "Now" }] }
      : t
    ));
  }

  if (activeThread) {
    return (
      <div className="flex flex-col" style={{ minHeight: "calc(100vh - 180px)" }}>
        {/* Thread header */}
        <div className="flex items-center gap-3 mb-3 px-4">
          <button onClick={() => setActive(null)} className="press w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-gray-900 text-sm truncate" style={{ fontFamily: "Montserrat, sans-serif" }}>{activeThread.product}</div>
            <div className="text-gray-400 text-xs">{activeThread.qty} · {activeThread.buyer.name}</div>
          </div>
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
            activeThread.status === "accepted" ? "bg-[#e8f5ee] text-[#1a6b3c]" :
            activeThread.status === "rejected" ? "bg-red-50 text-red-500" :
            "bg-amber-50 text-amber-700"
          }`}>
            {activeThread.status === "accepted" ? "✅ Accepted" : activeThread.status === "rejected" ? "❌ Declined" : "🔄 Active"}
          </span>
        </div>

        {/* Offer summary */}
        <div className="mx-4 mb-3 bg-white rounded-2xl p-3 flex items-center justify-around text-center">
          <div>
            <div className="text-[10px] text-gray-400 mb-0.5">Buyer Offers</div>
            <div className="font-bold text-blue-600 text-base">₹{activeThread.buyerOffer}/kg</div>
          </div>
          <div className="text-2xl">⟷</div>
          <div>
            <div className="text-[10px] text-gray-400 mb-0.5">Last Counter</div>
            <div className="font-bold text-[#1a6b3c] text-base">₹{activeThread.lastOffer}/kg</div>
          </div>
          <div className="text-2xl">⟷</div>
          <div>
            <div className="text-[10px] text-gray-400 mb-0.5">Your Ask</div>
            <div className="font-bold text-gray-900 text-base">₹{activeThread.sellerAsk}/kg</div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 px-4 flex flex-col gap-2 mb-3">
          {activeThread.messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "seller" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[78%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                m.from === "seller"
                  ? "bg-[#1a6b3c] text-white rounded-br-sm"
                  : "bg-white text-gray-800 rounded-bl-sm"
              }`}>
                {m.text}
                <div className={`text-[9px] mt-0.5 ${m.from === "seller" ? "text-white/60" : "text-gray-400"}`}>{m.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        {activeThread.status === "active" && (
          <div className="px-4 pb-4 flex flex-col gap-2">
            {/* Counter offer */}
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-semibold">₹</span>
                <input
                  type="number"
                  placeholder="Counter offer /kg"
                  value={counterVal[activeThread.id] ?? ""}
                  onChange={(e) => setCounterVal((p) => ({ ...p, [activeThread.id]: e.target.value }))}
                  className="w-full bg-white border border-gray-200 rounded-xl pl-7 pr-3 py-2.5 text-sm outline-none focus:border-[#1a6b3c]"
                />
              </div>
              <button
                onClick={() => sendCounter(activeThread.id, counterVal[activeThread.id] ?? "")}
                className="press bg-amber-500 text-white rounded-xl px-4 text-xs font-bold"
              >
                Counter
              </button>
            </div>
            {/* Quick reply */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(activeThread.id)}
                className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#1a6b3c]"
              />
              <button onClick={() => sendMessage(activeThread.id)} className="press bg-[#1a6b3c] text-white rounded-xl w-10 flex items-center justify-center text-lg">
                ↑
              </button>
            </div>
            {/* Accept / Reject */}
            <div className="flex gap-2">
              <button onClick={() => accept(activeThread.id)} className="press flex-1 bg-[#1a6b3c] text-white rounded-xl py-2.5 text-xs font-bold">✅ Accept ₹{activeThread.lastOffer}/kg</button>
              <button onClick={() => reject(activeThread.id)} className="press flex-1 bg-red-50 text-red-500 border border-red-100 rounded-xl py-2.5 text-xs font-bold">❌ Decline</button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="px-4">
      <div className="text-gray-400 text-xs mb-3">
        {threads.filter((t) => t.status === "active").length} active · {threads.filter((t) => t.status === "accepted").length} accepted
      </div>
      <div className="flex flex-col gap-3">
        {threads.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className="bg-white rounded-2xl p-4 text-left w-full"
          >
            <div className="flex items-start gap-3">
              {/* Avatars stacked */}
              <div className="relative w-10 h-10 shrink-0">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold absolute top-0 left-0" style={{ background: t.buyer.color }}>{t.buyer.initials}</div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold absolute bottom-0 right-0 border-2 border-white" style={{ background: t.seller.color }}>{t.seller.initials}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>{t.product}</div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ml-2 shrink-0 ${
                    t.status === "accepted" ? "bg-[#e8f5ee] text-[#1a6b3c]" :
                    t.status === "rejected" ? "bg-red-50 text-red-500" :
                    "bg-amber-50 text-amber-600"
                  }`}>
                    {t.status === "accepted" ? "✅ Done" : t.status === "rejected" ? "❌ Declined" : "🔄 Negotiating"}
                  </span>
                </div>
                <div className="text-gray-400 text-xs mt-0.5">{t.buyer.name} ↔ {t.seller.name}</div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="text-xs">
                    <span className="text-gray-400">Buyer: </span>
                    <span className="font-bold text-blue-600">₹{t.buyerOffer}/kg</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Counter: </span>
                    <span className="font-bold text-amber-600">₹{t.lastOffer}/kg</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Ask: </span>
                    <span className="font-bold text-[#1a6b3c]">₹{t.sellerAsk}/kg</span>
                  </div>
                </div>
                <div className="text-gray-400 text-[11px] mt-1.5 truncate">
                  {t.messages[t.messages.length - 1].text}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function PostModal({ onClose, onPost }: { onClose: () => void; onPost: (r: Requirement) => void }) {
  const [crop, setCrop] = useState("Red Onions");
  const [customCrop, setCustomCrop] = useState("");
  const [qty, setQty] = useState("");
  const [unit, setUnit] = useState("kg");
  const [grade, setGrade] = useState("Grade A");
  const [price, setPrice] = useState("");
  const [deadline, setDeadline] = useState("");
  const [notes, setNotes] = useState("");
  const [step, setStep] = useState<"form" | "success">("form");

  function handleSubmit() {
    if (!qty) return;
    const id = "KD-" + Math.floor(10000 + Math.random() * 90000);
    onPost({ id, name: crop === "Other" ? customCrop || "Custom Crop" : crop, qty: `${qty}${unit} • ${grade}`, unit, grade, price, deadline, status: "Active", responses: 0 });
    setStep("success");
  }

  const cropName = crop === "Other" ? customCrop : crop;

  return (
    <>
      <div className="absolute inset-0 z-50" style={{ background: "rgba(0,0,0,0.5)" }} onClick={onClose}/>
      <div className="absolute bottom-0 left-0 right-0 z-50 bg-white flex flex-col" style={{ borderRadius: "28px 28px 0 0", maxHeight: "90%" }}>
        <div className="flex justify-center pt-3 pb-1"><div className="w-10 h-1 bg-gray-200 rounded-full"/></div>
        {step === "success" ? (
          <div className="flex flex-col items-center px-6 py-8 gap-4">
            <div className="w-20 h-20 bg-[#e8f5ee] rounded-full flex items-center justify-center text-4xl anim-pop">✅</div>
            <div className="text-center">
              <div className="font-bold text-gray-900 text-xl mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>Requirement Posted!</div>
              <div className="text-gray-500 text-sm leading-relaxed">Farmers and FPOs in your region will start responding shortly.</div>
            </div>
            <div className="bg-[#f0f7f2] rounded-2xl p-4 w-full text-sm">
              {[["Product", cropName], ["Quantity", `${qty} ${unit}`], ["Grade", grade]].map(([k, v]) => (
                <div key={k} className="flex justify-between mb-2 last:mb-0">
                  <span className="text-gray-500">{k}</span>
                  <span className="font-semibold text-gray-900">{v}</span>
                </div>
              ))}
            </div>
            <button onClick={onClose} className="press w-full bg-[#1a6b3c] text-white rounded-2xl py-4 font-bold text-sm shadow-lg shadow-[#1a6b3c]/30" style={{ fontFamily: "Montserrat, sans-serif" }}>Done</button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between px-5 pb-3">
              <div>
                <div className="font-bold text-gray-900 text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>Post Requirement</div>
                <div className="text-gray-400 text-xs">Tell farmers what you need</div>
              </div>
              <button onClick={onClose} className="press w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1L11 11M11 1L1 11" stroke="#374151" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </button>
            </div>
            <div className="overflow-y-auto px-5 pb-6 flex flex-col gap-4">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Crop / Product</label>
                <div className="flex flex-wrap gap-2">
                  {CROPS.map((c) => (
                    <button key={c} onClick={() => setCrop(c)} className={`press px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${crop === c ? "bg-[#1a6b3c] text-white" : "bg-gray-100 text-gray-600"}`}>{c}</button>
                  ))}
                </div>
                {crop === "Other" && <input className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#1a6b3c]" placeholder="Enter crop name..." value={customCrop} onChange={(e) => setCustomCrop(e.target.value)}/>}
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Quantity Required</label>
                <div className="flex gap-2">
                  <input type="number" className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#1a6b3c]" placeholder="e.g. 2000" value={qty} onChange={(e) => setQty(e.target.value)}/>
                  <div className="flex gap-1">
                    {UNITS.map((u) => <button key={u} onClick={() => setUnit(u)} className={`press px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${unit === u ? "bg-[#1a6b3c] text-white" : "bg-gray-100 text-gray-600"}`}>{u}</button>)}
                  </div>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Grade / Quality</label>
                <div className="flex gap-2 flex-wrap">
                  {GRADES.map((g) => <button key={g} onClick={() => setGrade(g)} className={`press px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${grade === g ? "bg-[#1a6b3c] text-white" : "bg-gray-100 text-gray-600"}`}>{g}</button>)}
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Target Price (optional)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">₹</span>
                  <input type="number" className="w-full border border-gray-200 rounded-xl pl-8 pr-4 py-2.5 text-sm outline-none focus:border-[#1a6b3c]" placeholder="per kg / unit" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Needed By</label>
                <input type="date" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#1a6b3c] text-gray-700" value={deadline} onChange={(e) => setDeadline(e.target.value)}/>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Additional Notes</label>
                <textarea rows={2} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#1a6b3c] resize-none" placeholder="Any special requirements, packaging, delivery preferences..." value={notes} onChange={(e) => setNotes(e.target.value)}/>
              </div>
              <button onClick={handleSubmit} disabled={!qty} className={`press w-full rounded-2xl py-4 font-bold text-sm shadow-lg transition-all ${qty ? "bg-[#1a6b3c] text-white shadow-[#1a6b3c]/30" : "bg-gray-200 text-gray-400"}`} style={{ fontFamily: "Montserrat, sans-serif" }}>
                Post Requirement →
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default function BulkBuyer({ onMenu, onNotif }: BulkBuyerProps) {
  const [tab, setTab] = useState<"requirements" | "negotiations">("requirements");
  const [showPost, setShowPost] = useState(false);
  const [requirements, setRequirements] = useState([
    { id: "KD-7001", name: "Red Onions",   qty: "2,000kg • Grade A",  status: "Active" as const, responses: 3 },
    { id: "KD-7002", name: "Basmati Rice", qty: "5,000kg • Premium",  status: "Draft"  as const, responses: 0 },
  ]);

  function handlePost(r: Requirement) {
    setRequirements((prev) => [{ id: r.id, name: r.name, qty: r.qty, status: r.status, responses: r.responses }, ...prev]);
  }

  return (
    <div className="min-h-full bg-[#f0f7f2] pb-24">
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-500">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="#374151"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4" y="4" width="3" height="7" rx="0.5"/><rect x="8" y="2" width="3" height="9" rx="0.5"/><rect x="12" y="0" width="3" height="11" rx="0.5"/></svg>
        </div>
      </div>

      <header className="flex items-center justify-between px-4 pb-3">
        <button onClick={onMenu} className="press w-9 h-9 flex items-center justify-center rounded-xl active:bg-gray-100">
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none"><rect width="18" height="2" rx="1" fill="#374151"/><rect y="5.5" width="12" height="2" rx="1" fill="#374151"/><rect y="11" width="18" height="2" rx="1" fill="#374151"/></svg>
        </button>
        <span className="text-[#1a6b3c] font-bold text-xl tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>KisanChowk</span>
        <button onClick={onNotif} className="press w-9 h-9 flex items-center justify-center rounded-xl active:bg-gray-100 relative">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"/>
        </button>
      </header>

      <div className="px-4 mb-4">
        <h1 className="font-bold text-gray-900 text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>Bulk Buyer Portal</h1>
        <p className="text-gray-400 text-sm">Manage your large-scale requirements and orders.</p>
      </div>

      {/* Tab switcher */}
      <div className="mx-4 mb-4 bg-white rounded-2xl p-1 flex gap-1">
        <button
          onClick={() => setTab("requirements")}
          className={`press flex-1 rounded-xl py-2.5 text-xs font-bold transition-all ${tab === "requirements" ? "bg-[#1a6b3c] text-white" : "text-gray-500"}`}
        >
          📋 Requirements
        </button>
        <button
          onClick={() => setTab("negotiations")}
          className={`press flex-1 rounded-xl py-2.5 text-xs font-bold transition-all flex items-center justify-center gap-1 ${tab === "negotiations" ? "bg-[#1a6b3c] text-white" : "text-gray-500"}`}
        >
          🤝 Negotiations
          <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${tab === "negotiations" ? "bg-white/30 text-white" : "bg-amber-100 text-amber-700"}`}>2</span>
        </button>
      </div>

      {tab === "requirements" ? (
        <div className="px-4">
          <button
            onClick={() => setShowPost(true)}
            className="press w-full bg-[#1a6b3c] text-white rounded-2xl py-4 font-bold text-sm flex items-center justify-center gap-2 mb-5 shadow-lg shadow-[#1a6b3c]/30"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            ＋ Post New Bulk Requirement
          </button>

          <div className="font-bold text-gray-900 text-base mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Active Requirements</div>
          <div className="flex flex-col gap-3 mb-5">
            {requirements.map((r) => (
              <div key={r.id} className="bg-white rounded-2xl p-4">
                <div className="flex justify-between items-start mb-1.5">
                  <div>
                    <div className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>{r.name}</div>
                    <div className="text-gray-400 text-xs">Qty: {r.qty}</div>
                  </div>
                  <span className={`text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold ${r.status === "Active" ? "bg-[#1a6b3c]" : "bg-gray-300"}`}>{r.status}</span>
                </div>
                <div className={`flex items-center gap-1.5 text-xs font-semibold mt-2 ${r.responses > 0 ? "text-[#1a6b3c]" : "text-gray-400"}`}>
                  <span>💬</span> {r.responses} Response{r.responses !== 1 ? "s" : ""}
                </div>
              </div>
            ))}
          </div>

          {/* Quotations */}
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-gray-900 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>Received Quotations</span>
            <span className="text-gray-400 text-xs">For: Red Onions</span>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scroll pb-1 mb-5">
            {QUOTES.map((q) => (
              <div key={q.name} className={`shrink-0 w-52 bg-white rounded-2xl p-4 ${q.featured ? "border-2 border-[#1a6b3c]" : "border border-gray-100"}`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: q.color }}>{q.initials}</div>
                  <span className="font-bold text-gray-800 text-xs">{q.name} {q.star && "⭐"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                  {[["Price", `₹${q.price}/kg`], ["Grade", q.grade], ["Distance", q.dist], ["Delivery", q.delivery]].map(([k, v]) => (
                    <div key={k}><div className="text-gray-400">{k}</div><div className="font-bold text-gray-900">{v}</div></div>
                  ))}
                </div>
                {q.featured && <button className="press w-full bg-[#1a6b3c] text-white rounded-xl py-2 text-xs font-bold">Accept Quote</button>}
              </div>
            ))}
          </div>

          {/* Upcoming delivery */}
          <div className="font-bold text-gray-900 text-base mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Upcoming Deliveries</div>
          <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
            <div className="w-11 h-11 bg-[#e8f5ee] rounded-2xl flex items-center justify-center text-2xl">🚚</div>
            <div className="flex-1">
              <div className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>Tomatoes (1,500kg)</div>
              <div className="text-gray-400 text-xs">Order #KD-892</div>
              <div className="flex items-center gap-1.5 mt-2">
                {["Dispatched", "In Transit", "Delivered"].map((s, i) => (
                  <div key={s} className="flex items-center gap-1">
                    <div className={`w-2.5 h-2.5 rounded-full ${i <= 1 ? "bg-[#1a6b3c]" : "bg-gray-200"}`}/>
                    {i < 2 && <div className={`w-6 h-0.5 ${i === 0 ? "bg-[#1a6b3c]" : "bg-gray-200"}`}/>}
                  </div>
                ))}
                <span className="text-[10px] text-[#1a6b3c] font-semibold ml-1">In Transit</span>
              </div>
            </div>
            <span className="text-[#1a6b3c] font-bold text-sm">Today</span>
          </div>
        </div>
      ) : (
        <NegotiationTab/>
      )}

      {showPost && <PostModal onClose={() => setShowPost(false)} onPost={handlePost}/>}
    </div>
  );
}
