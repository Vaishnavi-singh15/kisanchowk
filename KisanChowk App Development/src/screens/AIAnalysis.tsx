import { useState, useEffect } from "react";

interface AIAnalysisProps {
  onDone: () => void;
  cropType?: string;
  cropQty?: string;
}

const CROP_DATA: Record<string, { color: number; moisture: number; defect: number; freshness: number; grade: string; tip: string }> = {
  Tomatoes: { color: 94, moisture: 92, defect: 3, freshness: 96, grade: "A", tip: "Your Tomatoes qualify for premium export markets. List ₹10–15 above standard rate." },
  Potatoes: { color: 88, moisture: 78, defect: 5, freshness: 90, grade: "A", tip: "Excellent starch content. Ideal for wholesale and processing units." },
  Onions: { color: 91, moisture: 72, defect: 4, freshness: 93, grade: "A", tip: "Outer skin uniformity is high. Premium grade for retail & exports." },
  Wheat: { color: 85, moisture: 12, defect: 2, freshness: 97, grade: "A", tip: "Low moisture ensures long shelf life. Ideal for flour mills & procurement." },
  Rice: { color: 90, moisture: 14, defect: 3, freshness: 95, grade: "A", tip: "Head rice ratio is strong. Excellent for premium retail packaging." },
};

const STEPS = [
  { label: "Scanning crop image quality", icon: "📷" },
  { label: "Detecting color uniformity", icon: "🎨" },
  { label: "Checking moisture & defects", icon: "💧" },
  { label: "Assigning quality grade", icon: "🏆" },
];

export default function AIAnalysis({ onDone, cropType = "Tomatoes", cropQty = "500" }: AIAnalysisProps) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const data = CROP_DATA[cropType] ?? CROP_DATA.Tomatoes;

  useEffect(() => {
    setStep(0);
    setDone(false);
    const timers: ReturnType<typeof setTimeout>[] = [];
    STEPS.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), (i + 1) * 900));
    });
    timers.push(setTimeout(() => setDone(true), STEPS.length * 900 + 500));
    return () => timers.forEach(clearTimeout);
  }, []);

  const gradeColor = data.grade === "A" ? "#1a6b3c" : data.grade === "B" ? "#d97706" : "#dc2626";

  return (
    <div className="min-h-full bg-[#1a6b3c] flex flex-col items-center px-5 py-8">
      <div className="w-full max-w-xs flex flex-col items-center">
        {/* Animated orb */}
        <div className="relative mb-7">
          <div
            className={`w-28 h-28 rounded-full bg-white/10 flex items-center justify-center transition-all duration-700 ${done ? "scale-110" : "scale-100"}`}
            style={{ boxShadow: done ? "0 0 0 20px rgba(255,255,255,0.1), 0 0 0 40px rgba(255,255,255,0.05)" : "0 0 0 12px rgba(255,255,255,0.08)" }}
          >
            <div className={`w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-4xl transition-all duration-500 ${done ? "scale-110" : ""}`}>
              {done ? "✓" : "🤖"}
            </div>
          </div>
          {!done && (
            <div className="absolute inset-0 rounded-full border-2 border-white/30 border-t-white animate-spin" />
          )}
        </div>

        <div className="text-white font-bold text-2xl mb-1 text-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
          {done ? "Analysis Complete!" : "KisanChowk AI"}
        </div>
        <div className="text-white/60 text-sm mb-6 text-center">
          {done ? `${cropType} · ${cropQty} kg analyzed` : "Analysing your crop photo…"}
        </div>

        {/* Steps */}
        <div className="w-full flex flex-col gap-2.5 mb-5">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 p-3 rounded-2xl transition-all duration-500 ${
                i < step ? "bg-white/15 opacity-100" : i === step ? "bg-white/10 opacity-70" : "opacity-30"
              }`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 transition-all ${i < step ? "bg-white/20" : "bg-white/10"}`}>
                {i < step ? "✓" : s.icon}
              </div>
              <span className="text-white text-sm font-medium">{s.label}</span>
              {i < step && <span className="ml-auto text-green-300 text-xs font-semibold">Done</span>}
            </div>
          ))}
        </div>

        {/* Results card */}
        {done && (
          <div className="w-full mb-5">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              {/* Grade banner */}
              <div className="px-5 pt-5 pb-4 text-center" style={{ background: `${gradeColor}18` }}>
                <div className="text-5xl font-black mb-1" style={{ fontFamily: "Montserrat, sans-serif", color: gradeColor }}>
                  Grade {data.grade}
                </div>
                <div className="text-sm font-semibold" style={{ color: gradeColor }}>
                  {data.grade === "A" ? "Export Quality — Premium" : data.grade === "B" ? "Market Standard" : "Processing Grade"}
                </div>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-px bg-gray-100">
                {[
                  { label: "Color Uniformity", value: `${data.color}%`, icon: "🎨", good: data.color >= 88 },
                  { label: "Freshness Score", value: `${data.freshness}%`, icon: "✨", good: data.freshness >= 88 },
                  { label: "Defect Rate", value: `${data.defect}%`, icon: "🔍", good: data.defect <= 6 },
                  { label: "Moisture Level", value: `${data.moisture}%`, icon: "💧", good: true },
                ].map((m) => (
                  <div key={m.label} className="bg-white px-4 py-3.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-base">{m.icon}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-wide ${m.good ? "text-[#1a6b3c]" : "text-amber-600"}`}>
                        {m.good ? "Excellent" : "Caution"}
                      </span>
                    </div>
                    <div className="font-black text-xl text-gray-900" style={{ fontFamily: "Montserrat, sans-serif" }}>{m.value}</div>
                    <div className="text-gray-400 text-[10px]">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Recommendation */}
              <div className="px-4 py-3.5 bg-[#f0f7f2]">
                <div className="flex gap-2 items-start">
                  <span className="text-lg shrink-0">💡</span>
                  <div>
                    <div className="text-[#1a6b3c] font-bold text-xs mb-0.5">AI Recommendation</div>
                    <div className="text-gray-600 text-[11px] leading-relaxed">{data.tip}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {done && (
          <button
            onClick={onDone}
            className="press w-full bg-white text-[#1a6b3c] rounded-2xl py-4 font-bold text-[15px] shadow-xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Get AI Price Guidance →
          </button>
        )}
      </div>
    </div>
  );
}
