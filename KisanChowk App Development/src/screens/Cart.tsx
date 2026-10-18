import { useState } from "react";
import type { Product } from "./Marketplace";

export interface CartItem extends Product { qty: number; }

interface CartProps {
  items: CartItem[];
  onUpdateQty: (id: number, qty: number) => void;
  onPlaceOrder: () => void;
  onBack: () => void;
}

const METHODS = [
  { id: "upi",        label: "UPI (GPay, PhonePe, Paytm)", icon: "📱" },
  { id: "card",       label: "Credit / Debit Card",         icon: "💳" },
  { id: "netbanking", label: "Net Banking",                  icon: "🏦" },
];

export default function Cart({ items, onUpdateQty, onPlaceOrder, onBack }: CartProps) {
  const [method, setMethod] = useState("upi");
  const itemTotal  = items.reduce((s, i) => s + i.price * i.qty, 0);
  const handling   = 15;
  const toPay      = itemTotal + handling;

  return (
    <div className="min-h-full flex flex-col" style={{ background: "#f0e8a0" }}>
      {/* Header */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-500">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="#374151"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4" y="4" width="3" height="7" rx="0.5"/><rect x="8" y="2" width="3" height="9" rx="0.5"/><rect x="12" y="0" width="3" height="11" rx="0.5"/></svg>
        </div>
      </div>
      <header className="flex items-center justify-between px-4 pb-3">
        <button onClick={onBack} className="press w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div className="text-center">
          <div className="font-bold text-gray-900 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>Secure Checkout</div>
        </div>
        <div className="w-9 h-9 flex items-center justify-center text-[#1a6b3c] text-xl">🔒</div>
      </header>

      {/* Progress */}
      <div className="px-6 mb-5">
        <div className="flex">
          {["Cart", "Address", "Payment"].map((step, i) => (
            <div key={step} className="flex-1 flex flex-col items-center">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-1.5 ${
                i < 2 ? "bg-[#1a6b3c] text-white" : "border-2 border-[#1a6b3c] text-[#1a6b3c] bg-white"
              }`}>
                {i < 2 ? "✓" : "3"}
              </div>
              <span className={`text-[10px] font-semibold ${i === 2 ? "text-[#1a6b3c]" : "text-gray-400"}`}>{step}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-1 mt-2 mx-3.5">
          <div className="flex-1 h-1 bg-[#1a6b3c] rounded-full"/>
          <div className="flex-1 h-1 bg-[#1a6b3c] rounded-full"/>
          <div className="flex-1 h-1 bg-gray-200 rounded-full"/>
        </div>
      </div>

      <div className="px-4 pb-4 flex flex-col gap-3 flex-1">
        {/* Address */}
        <div className="bg-white/90 rounded-2xl p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2 font-semibold text-gray-800 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <span>📍</span> Delivery Address
            </div>
            <button className="text-[#1a6b3c] text-xs font-semibold">Change</button>
          </div>
          <div className="text-gray-500 text-xs leading-relaxed">
            <div className="font-semibold text-gray-800 text-[13px]">Ramesh Kumar (Farm)</div>
            Plot 42, Sector 22, Near Main Mandi<br />Chandigarh, 160022
          </div>
        </div>

        {/* Delivery slot */}
        <div className="bg-white/90 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">⏰</span>
            <div>
              <div className="font-semibold text-gray-800 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>Delivery Slot</div>
              <div className="text-gray-400 text-xs">Tomorrow, 8:00 AM – 10:00 AM</div>
            </div>
          </div>
          <button className="text-[#1a6b3c] text-xs font-semibold">Change</button>
        </div>

        {/* Order review */}
        <div className="bg-white/90 rounded-2xl p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>Order Review</span>
            <span className="bg-[#e8f5ee] text-[#1a6b3c] text-xs px-2.5 py-0.5 rounded-full font-semibold">
              {items.length} item{items.length !== 1 ? "s" : ""}
            </span>
          </div>
          {items.length === 0 ? (
            <div className="text-center py-6">
              <div className="text-4xl mb-2">🛒</div>
              <div className="text-gray-400 text-sm">Your cart is empty</div>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img src={item.img} alt={item.name} className="w-14 h-14 rounded-2xl object-cover shrink-0"/>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-sm truncate" style={{ fontFamily: "Montserrat, sans-serif" }}>{item.name}</div>
                    <div className="text-gray-400 text-xs">{item.qty} {item.unit} • Grade A</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-bold text-gray-900 text-sm">₹{item.price * item.qty}</div>
                    <div className="flex items-center gap-1.5 mt-1 justify-end">
                      <button onClick={() => onUpdateQty(item.id, item.qty - 1)} className="press w-6 h-6 bg-gray-100 rounded-lg text-xs flex items-center justify-center font-bold">−</button>
                      <span className="text-xs font-semibold w-4 text-center">{item.qty}</span>
                      <button onClick={() => onUpdateQty(item.id, item.qty + 1)} className="press w-6 h-6 bg-[#e8f5ee] text-[#1a6b3c] rounded-lg text-xs flex items-center justify-center font-bold">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Payment method */}
        <div className="bg-white/90 rounded-2xl p-4">
          <div className="font-bold text-gray-900 text-sm mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Payment Method</div>
          <div className="flex flex-col gap-2">
            {METHODS.map((m) => (
              <button
                key={m.id}
                onClick={() => setMethod(m.id)}
                className={`press flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
                  method === m.id ? "border-[#1a6b3c] bg-[#f0fdf4]" : "border-gray-100 bg-white"
                }`}
              >
                <div className={`shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                  method === m.id ? "border-[#1a6b3c]" : "border-gray-300"
                }`}>
                  {method === m.id && <div className="w-2 h-2 bg-[#1a6b3c] rounded-full"/>}
                </div>
                <span className="flex-1 text-[13px] text-gray-700 font-medium text-left">{m.label}</span>
                <span className="shrink-0 text-lg">{m.icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Price breakdown */}
        <div className="bg-white/90 rounded-2xl p-4">
          <div className="font-bold text-gray-900 text-sm mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Price Breakdown</div>
          <div className="flex flex-col gap-2.5 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Item Total</span>
              <span className="font-semibold text-gray-800">₹{itemTotal}.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Handling Fee</span>
              <span className="font-semibold text-gray-800">₹{handling}.00</span>
            </div>
            <div className="flex items-center justify-between text-[#1a6b3c]">
              <span className="flex items-center gap-1.5 font-medium">🚚 Delivery Fee</span>
              <span className="font-semibold flex items-center gap-1.5">
                <s className="text-gray-300 text-xs">₹40.00</s>
                <span className="font-bold">Free</span>
              </span>
            </div>
            <div className="border-t border-dashed border-gray-200 pt-2.5 flex items-center justify-between">
              <span className="font-bold text-gray-900 text-base">To Pay</span>
              <span className="font-black text-[#1a6b3c] text-xl" style={{ fontFamily: "Montserrat, sans-serif" }}>₹{toPay}.00</span>
            </div>
          </div>
        </div>

        {/* Farm fresh guarantee — fills empty space */}
        <div className="bg-white/90 rounded-2xl px-4 py-3.5 flex items-center gap-3">
          <span className="text-2xl shrink-0">🌾</span>
          <div className="flex-1">
            <div className="font-bold text-gray-800 text-xs">Farm Fresh Guarantee</div>
            <div className="text-gray-400 text-[11px] mt-0.5">100% direct from verified farmers · No middlemen</div>
          </div>
          <span className="text-[#1a6b3c] text-[10px] font-bold bg-[#e8f5ee] px-2 py-0.5 rounded-full shrink-0">✓ Verified</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: "🔒", label: "Secure\nPayment" },
            { icon: "🚚", label: "Fast\nDelivery" },
            { icon: "↩️", label: "Easy\nReturns" },
          ].map((b) => (
            <div key={b.label} className="bg-white/90 rounded-2xl py-3 flex flex-col items-center gap-1">
              <span className="text-xl">{b.icon}</span>
              <span className="text-[10px] font-semibold text-gray-500 text-center whitespace-pre-line leading-tight">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar — sticky to scroll container bottom, never overlaps content */}
      <div className="sticky bottom-0 z-40 mt-auto" style={{ background: "#f0e8a0", borderTop: "1.5px solid #d4c87a" }}>
        <div className="px-4 pt-3 pb-4 flex items-center justify-between gap-3">
          <div className="shrink-0 flex flex-col gap-0.5">
            <div className="text-[10px] text-gray-500 font-medium leading-none">Total Amount</div>
            <div className="font-black text-gray-900 text-[22px] leading-none" style={{ fontFamily: "Montserrat, sans-serif" }}>₹{toPay}</div>
            <div className="text-[10px] text-[#1a6b3c] font-semibold flex items-center gap-0.5 leading-none">
              <span>🔒</span> Safe &amp; Secure
            </div>
          </div>
          <button
            onClick={onPlaceOrder}
            className="press flex-1 text-white rounded-2xl py-3.5 font-bold text-sm shadow-lg flex items-center justify-center gap-2"
            style={{ background: "#163009", fontFamily: "Montserrat, sans-serif" }}
          >
            Place Order →
          </button>
        </div>
      </div>
    </div>
  );
}
