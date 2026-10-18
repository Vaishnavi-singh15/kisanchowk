import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const SYSTEM_PROMPT = `You are KisanChowk AI, a helpful agricultural assistant for Indian farmers and buyers. You help with:
- Crop prices and market trends in India
- Best farming practices and crop diseases
- Soil health and fertilizer advice
- Weather impact on crops
- Government schemes for farmers (PM-KISAN, MSP, etc.)
- Logistics and storage tips
- Negotiation advice for selling produce
Keep answers short, practical, and relevant to Indian agriculture. Use ₹ for prices. Be friendly and encouraging.`;

const SUGGESTIONS = [
  "What's the current MSP for wheat?",
  "How to prevent tomato blight?",
  "Best time to sell onions?",
  "PM-KISAN scheme details",
];

interface AIChatProps {
  onBack: () => void;
}

export default function AIChat({ onBack }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Namaste! 🌾 I am KisanChowk AI. Ask me anything about crop prices, farming tips, or market trends across India." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY as string | undefined;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;
    if (!apiKey) {
      setError("API key not set. Add VITE_ANTHROPIC_API_KEY in your environment.");
      return;
    }
    setError("");
    const userMsg: Message = { role: "user", text: text.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-allow-browser": "true",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5",
          max_tokens: 512,
          system: SYSTEM_PROMPT,
          messages: next.map((m) => ({ role: m.role, content: m.text })),
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error((err as { error?: { message?: string } }).error?.message ?? `HTTP ${res.status}`);
      }

      const data = await res.json() as { content: Array<{ type: string; text: string }> };
      const reply = data.content.find((c) => c.type === "text")?.text ?? "Sorry, I could not generate a response.";
      setMessages([...next, { role: "assistant", text: reply }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-full bg-[#f0f7f2] flex flex-col">
      {/* Header */}
      <div className="bg-[#1a6b3c] px-4 pt-12 pb-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="press w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <div className="w-10 h-10 bg-white/15 rounded-2xl flex items-center justify-center text-2xl">🤖</div>
          <div className="flex-1">
            <div className="text-white font-bold text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>KisanChowk AI</div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
              <span className="text-white/60 text-xs">Online · Farm expert</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} gap-2`}>
            {m.role === "assistant" && (
              <div className="w-8 h-8 bg-[#1a6b3c] rounded-full flex items-center justify-center text-sm shrink-0 mt-0.5">🤖</div>
            )}
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-[#1a6b3c] text-white rounded-br-sm"
                  : "bg-white text-gray-800 shadow-sm rounded-bl-sm"
              }`}
              style={{ fontFamily: "sans-serif" }}
            >
              {m.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start gap-2">
            <div className="w-8 h-8 bg-[#1a6b3c] rounded-full flex items-center justify-center text-sm shrink-0">🤖</div>
            <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
              {[0, 150, 300].map((d) => (
                <div key={d} className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }}/>
              ))}
            </div>
          </div>
        )}

        {error && (
          <div className="mx-auto bg-red-50 border border-red-200 rounded-2xl px-4 py-3 text-red-700 text-xs max-w-[90%] text-center">
            ⚠️ {error}
          </div>
        )}

        {!apiKey && !error && (
          <div className="mx-auto bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 text-amber-800 text-xs max-w-[90%] text-center">
            🔑 Set <strong>VITE_ANTHROPIC_API_KEY</strong> in your environment to enable real AI responses.
          </div>
        )}

        <div ref={bottomRef}/>
      </div>

      {/* Quick suggestions */}
      {messages.length <= 1 && (
        <div className="px-4 mb-2 flex gap-2 overflow-x-auto no-scroll">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => sendMessage(s)}
              className="press shrink-0 bg-white border border-[#1a6b3c]/30 text-[#1a6b3c] rounded-full px-3 py-1.5 text-xs font-semibold"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="px-4 pb-6 pt-2 bg-white border-t border-gray-100">
        <div className="flex items-center gap-2 bg-[#f0f7f2] rounded-2xl px-4 py-2.5">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Ask about crops, prices, farming…"
            className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-400"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading}
            className={`press w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
              input.trim() && !loading ? "bg-[#1a6b3c]" : "bg-gray-200"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={input.trim() && !loading ? "white" : "#9ca3af"} strokeWidth="2.5">
              <path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
