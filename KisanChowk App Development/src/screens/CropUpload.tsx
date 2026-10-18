import { useState } from "react";

interface CropUploadProps {
  onNext: (crop: string, qty: string) => void;
  onBack: () => void;
}

const CROP_IMAGES: Record<string, string> = {
  Tomatoes:  "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600&q=85&fit=crop",
  Potatoes:  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=85&fit=crop",
  Onions:    "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&q=85&fit=crop",
  Wheat:     "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=85&fit=crop",
  Rice:      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=85&fit=crop",
  Maize:     "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&q=85&fit=crop",
  Sugarcane: "https://images.unsplash.com/photo-1621684541892-bf70f4e67dba?w=600&q=85&fit=crop",
  Cotton:    "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&q=85&fit=crop",
  Soybean:   "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=600&q=85&fit=crop",
  Groundnut: "https://images.unsplash.com/photo-1567892320421-7e6c4ca2a2ac?w=600&q=85&fit=crop",
};

const CROPS = Object.keys(CROP_IMAGES);

const LOCATIONS = [
  { city: "Ludhiana", state: "Punjab" },
  { city: "Nashik", state: "Maharashtra" },
  { city: "Pune", state: "Maharashtra" },
  { city: "Amritsar", state: "Punjab" },
  { city: "Agra", state: "Uttar Pradesh" },
  { city: "Lucknow", state: "Uttar Pradesh" },
  { city: "Jaipur", state: "Rajasthan" },
  { city: "Jodhpur", state: "Rajasthan" },
  { city: "Indore", state: "Madhya Pradesh" },
  { city: "Nagpur", state: "Maharashtra" },
  { city: "Hyderabad", state: "Telangana" },
  { city: "Warangal", state: "Telangana" },
  { city: "Coimbatore", state: "Tamil Nadu" },
  { city: "Madurai", state: "Tamil Nadu" },
  { city: "Mysuru", state: "Karnataka" },
  { city: "Hubli", state: "Karnataka" },
  { city: "Patna", state: "Bihar" },
  { city: "Gaya", state: "Bihar" },
  { city: "Bhopal", state: "Madhya Pradesh" },
  { city: "Raipur", state: "Chhattisgarh" },
];

export default function CropUpload({ onNext, onBack }: CropUploadProps) {
  const [photoAdded, setPhotoAdded] = useState(false);
  const [qty, setQty] = useState("500");
  const [crop, setCrop] = useState("Tomatoes");
  const [grade, setGrade] = useState("Grade A");
  const [locationIdx, setLocationIdx] = useState(0);
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [locationSearch, setLocationSearch] = useState("");
  const [detecting, setDetecting] = useState(false);

  const loc = LOCATIONS[locationIdx];

  function detectLocation() {
    setDetecting(true);
    setTimeout(() => {
      setLocationIdx(0);
      setDetecting(false);
    }, 1500);
  }

  const filtered = LOCATIONS.filter(
    (l) =>
      l.city.toLowerCase().includes(locationSearch.toLowerCase()) ||
      l.state.toLowerCase().includes(locationSearch.toLowerCase())
  );

  return (
    <div className="min-h-full bg-[#f0f7f2] pb-8">
      {/* Header */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-500">9:41</span>
      </div>
      <header className="flex items-center justify-between px-4 pb-4">
        <button onClick={onBack} className="press w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <span className="font-bold text-gray-900 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>List Your Crop</span>
        <div className="text-gray-400 text-xs font-medium">1 of 3</div>
      </header>

      {/* Progress */}
      <div className="px-4 mb-5 flex gap-1.5">
        <div className="h-1.5 flex-1 bg-[#1a6b3c] rounded-full"/>
        <div className="h-1.5 flex-1 bg-gray-200 rounded-full"/>
        <div className="h-1.5 flex-1 bg-gray-200 rounded-full"/>
      </div>

      <div className="px-4 flex flex-col gap-4">
        {/* Photo upload / preview */}
        <div>
          <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Crop Photo</label>
          {photoAdded ? (
            <div className="relative rounded-2xl overflow-hidden h-44">
              <img
                src={CROP_IMAGES[crop]}
                alt={crop}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
              <button
                onClick={() => setPhotoAdded(false)}
                className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white text-sm"
              >✕</button>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="text-white text-xs font-semibold bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                  ✓ {crop} photo added
                </span>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setPhotoAdded(true)}
              className="press w-full h-44 bg-white rounded-2xl border-2 border-dashed border-[#1a6b3c]/40 flex flex-col items-center justify-center gap-3"
            >
              <div className="w-14 h-14 bg-[#e8f5ee] rounded-2xl flex items-center justify-center text-3xl">📷</div>
              <div className="text-center">
                <div className="font-semibold text-[#1a6b3c] text-sm">Tap to add crop photo</div>
                <div className="text-gray-400 text-xs mt-0.5">Good lighting = better price</div>
              </div>
            </button>
          )}
        </div>

        {/* Crop type */}
        <div>
          <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Crop Type</label>
          <div className="flex gap-2 flex-wrap">
            {CROPS.map((c) => (
              <button
                key={c}
                onClick={() => setCrop(c)}
                className={`press px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all ${
                  crop === c ? "border-[#1a6b3c] bg-[#1a6b3c] text-white" : "border-gray-200 bg-white text-gray-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          {/* Mini crop preview strip */}
          {photoAdded && (
            <div className="mt-2 flex gap-2 overflow-x-auto no-scroll pb-1">
              {CROPS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCrop(c)}
                  className={`shrink-0 rounded-xl overflow-hidden border-2 transition-all ${crop === c ? "border-[#1a6b3c]" : "border-transparent"}`}
                >
                  <img src={CROP_IMAGES[c]} alt={c} className="w-14 h-10 object-cover"/>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Quantity Available</label>
          <div className="bg-white rounded-2xl border border-gray-100 flex items-center px-4">
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="flex-1 py-3.5 text-sm font-bold text-gray-900 outline-none bg-transparent"
            />
            <span className="text-gray-400 text-sm font-medium">kg</span>
          </div>
          <div className="mt-1.5 flex gap-2">
            {["100", "250", "500", "1000"].map((v) => (
              <button
                key={v}
                onClick={() => setQty(v)}
                className={`press px-3 py-1 rounded-lg text-xs font-semibold transition-all ${qty === v ? "bg-[#1a6b3c] text-white" : "bg-white text-gray-500"}`}
              >
                {v}kg
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Location</label>
          <div
            onClick={() => setShowLocationPicker(true)}
            className="bg-white rounded-2xl border border-gray-100 flex items-center gap-3 px-4 py-3.5 cursor-pointer"
          >
            <span className="text-lg">📍</span>
            <div className="flex-1">
              <div className="text-sm font-semibold text-gray-900">{loc.city}, {loc.state}</div>
              <div className="text-gray-400 text-xs">Auto-detected · Tap to change</div>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); detectLocation(); }}
              className={`press text-[#1a6b3c] text-xs font-bold px-2 py-1 rounded-lg bg-[#e8f5ee] transition-all ${detecting ? "opacity-50" : ""}`}
            >
              {detecting ? "..." : "Detect"}
            </button>
          </div>

          {/* Location picker modal */}
          {showLocationPicker && (
            <div className="mt-2 bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
              <div className="px-3 pt-3 pb-2">
                <input
                  autoFocus
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                  placeholder="Search city or state…"
                  className="w-full bg-[#f0f7f2] rounded-xl px-3 py-2 text-sm outline-none text-gray-800 placeholder:text-gray-400"
                />
              </div>
              <div className="max-h-48 overflow-y-auto">
                {filtered.map((l, i) => {
                  const origIdx = LOCATIONS.indexOf(l);
                  return (
                    <button
                      key={i}
                      onClick={() => { setLocationIdx(origIdx); setShowLocationPicker(false); setLocationSearch(""); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left border-b border-gray-50 last:border-0 transition-colors ${origIdx === locationIdx ? "bg-[#e8f5ee]" : "hover:bg-gray-50"}`}
                    >
                      <span className="text-base">📍</span>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{l.city}</div>
                        <div className="text-gray-400 text-xs">{l.state}</div>
                      </div>
                      {origIdx === locationIdx && <span className="ml-auto text-[#1a6b3c] font-bold text-xs">✓</span>}
                    </button>
                  );
                })}
              </div>
              <div className="px-4 py-2 border-t border-gray-100">
                <button onClick={() => setShowLocationPicker(false)} className="w-full text-gray-400 text-xs py-1">Close</button>
              </div>
            </div>
          )}
        </div>

        {/* Grade */}
        <div>
          <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2 block">Quality Grade</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { g: "Grade A", d: "Export quality" },
              { g: "Grade B", d: "Market standard" },
              { g: "Grade C", d: "Processing" },
            ].map((item) => (
              <button
                key={item.g}
                onClick={() => setGrade(item.g)}
                className={`press p-3 rounded-2xl border-2 text-left transition-all ${grade === item.g ? "border-[#1a6b3c] bg-[#f0fdf4]" : "border-gray-100 bg-white"}`}
              >
                <div className={`font-bold text-xs mb-0.5 ${grade === item.g ? "text-[#1a6b3c]" : "text-gray-700"}`}>{item.g}</div>
                <div className="text-gray-400 text-[10px]">{item.d}</div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => onNext(crop, qty)}
          className="press w-full bg-[#1a6b3c] text-white rounded-2xl py-4 font-bold text-[15px] shadow-lg shadow-[#1a6b3c]/30 flex items-center justify-center gap-2 mt-2"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Get AI Price Guidance →
        </button>
      </div>
    </div>
  );
}
