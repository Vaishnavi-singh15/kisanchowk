import { useEffect, useRef, useState } from "react";

interface LogisticsProps {
  onMenu?: () => void;
  onNotif?: () => void;
}
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";

// Fix leaflet default icon paths broken by bundlers
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Custom icons
const farmIcon = L.divIcon({
  className: "",
  html: `<div style="width:36px;height:36px;background:#1a6b3c;border-radius:50%;border:3px solid white;
    box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;font-size:16px;">🌾</div>`,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
});

const destIcon = L.divIcon({
  className: "",
  html: `<div style="width:36px;height:36px;background:#ef4444;border-radius:50%;border:3px solid white;
    box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;font-size:16px;">🏪</div>`,
  iconSize: [36, 36],
  iconAnchor: [18, 18],
});

const truckIcon = L.divIcon({
  className: "",
  html: `<div style="width:40px;height:40px;background:#f59e0b;border-radius:50%;border:3px solid white;
    box-shadow:0 3px 12px rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;font-size:18px;">🚚</div>`,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

// Farm: Ludhiana Punjab, Dest: Delhi market, Truck: midpoint
const FARM:  [number, number] = [30.9010, 75.8573]; // Ludhiana
const DEST:  [number, number] = [28.7041, 77.1025]; // Delhi
const ROUTE: [number, number][] = [
  [30.9010, 75.8573],
  [30.3398, 76.3869], // Ambala
  [29.6857, 76.9905], // Panipat
  [28.8955, 76.6066], // Rohtak
  [28.7041, 77.1025], // Delhi
];

// Interpolate truck position along route (0-1)
function interpolateRoute(t: number): [number, number] {
  const idx = Math.min(Math.floor(t * (ROUTE.length - 1)), ROUTE.length - 2);
  const frac = (t * (ROUTE.length - 1)) - idx;
  const a = ROUTE[idx], b = ROUTE[idx + 1];
  return [a[0] + (b[0] - a[0]) * frac, a[1] + (b[1] - a[1]) * frac];
}

function MapFit() {
  const map = useMap();
  useEffect(() => {
    map.fitBounds([FARM, DEST], { padding: [40, 40] });
  }, [map]);
  return null;
}

const SHIPMENTS = [
  { id: "KD-8924", product: "50kg Wheat",    eta: "2:30 PM", progress: 2 },
  { id: "KD-8925", product: "20kg Tomatoes", eta: "4:15 PM", progress: 1 },
];
const STAGES = ["Farm", "Sorting", "Transit", "Delivered"];

export default function Logistics({ onMenu, onNotif }: LogisticsProps) {
  const [truckT, setTruckT] = useState(0.42); // starts mid-route
  const [isMoving, setIsMoving] = useState(false);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const startTRef = useRef(0.42);

  function startDelivery() {
    if (isMoving) return;
    setIsMoving(true);
    startRef.current = performance.now();
    startTRef.current = truckT;
    const duration = (1 - truckT) * 18000; // remaining distance proportional

    function tick(now: number) {
      const elapsed = now - startRef.current;
      const frac = Math.min(elapsed / duration, 1);
      const eased = frac < 0.5 ? 2 * frac * frac : 1 - Math.pow(-2 * frac + 2, 2) / 2;
      const newT = startTRef.current + (1 - startTRef.current) * eased;
      setTruckT(newT);
      if (frac < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setIsMoving(false);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const truckPos = interpolateRoute(truckT);
  const pctDone = Math.round(truckT * 100);

  return (
    <div className="min-h-full bg-[#f0f7f2] pb-24">
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-3 pb-1">
        <span className="text-xs font-semibold text-gray-500">9:41</span>
        <div className="flex items-center gap-1.5">
          <svg width="15" height="11" viewBox="0 0 15 11" fill="#374151">
            <rect x="0" y="7" width="3" height="4" rx="0.5"/>
            <rect x="4" y="4" width="3" height="7" rx="0.5"/>
            <rect x="8" y="2" width="3" height="9" rx="0.5"/>
            <rect x="12" y="0" width="3" height="11" rx="0.5"/>
          </svg>
        </div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-4 pb-3">
        <button onClick={onMenu} className="press w-9 h-9 flex items-center justify-center rounded-xl active:bg-gray-100">
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
            <rect width="18" height="2" rx="1" fill="#374151"/>
            <rect y="5.5" width="12" height="2" rx="1" fill="#374151"/>
            <rect y="11" width="18" height="2" rx="1" fill="#374151"/>
          </svg>
        </button>
        <span className="text-[#1a6b3c] font-bold text-xl tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
          KisanChowk
        </span>
        <button onClick={onNotif} className="press w-9 h-9 flex items-center justify-center rounded-xl active:bg-gray-100 relative">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"/>
        </button>
      </header>

      {/* Live Map */}
      <div className="mx-4 rounded-3xl overflow-hidden" style={{ height: 220 }}>
        <MapContainer
          center={[29.8, 76.5]}
          zoom={7}
          style={{ width: "100%", height: "100%" }}
          zoomControl={false}
          attributionControl={false}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; CARTO'
            subdomains="abcd"
            maxZoom={19}
          />
          <MapFit/>

          {/* Route polyline */}
          <Polyline
            positions={ROUTE}
            pathOptions={{ color: "#d1d5db", weight: 4, dashArray: "8 6", opacity: 0.6 }}
          />
          {/* Completed route */}
          <Polyline
            positions={ROUTE.slice(0, Math.min(Math.ceil(truckT * (ROUTE.length - 1)) + 1, ROUTE.length))}
            pathOptions={{ color: "#1a6b3c", weight: 4, opacity: 0.85 }}
          />

          {/* Farm marker */}
          <Marker position={FARM} icon={farmIcon}>
            <Popup>🌾 Ramesh Kumar's Farm, Ludhiana</Popup>
          </Marker>

          {/* Destination marker */}
          <Marker position={DEST} icon={destIcon}>
            <Popup>🏪 FreshMart, Delhi</Popup>
          </Marker>

          {/* Live truck */}
          <Marker position={truckPos} icon={truckIcon}>
            <Popup>🚚 KD-8924 · ETA 2:30 PM</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Live progress + Simulate button */}
      <div className="mx-4 mt-3 bg-gradient-to-r from-[#1a6b3c] to-[#2d8a52] rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center text-lg">🛣️</div>
            <div>
              <div className="text-white font-bold text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>Smart Routing Active</div>
              <div className="text-white/70 text-xs">Ludhiana → Delhi · {pctDone}% complete</div>
            </div>
          </div>
          <button
            onClick={startDelivery}
            disabled={isMoving || truckT >= 0.99}
            className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${
              truckT >= 0.99 ? "bg-white/20 text-white/50" :
              isMoving      ? "bg-white/20 text-white/70 animate-pulse" :
                              "bg-white text-[#1a6b3c] press"
            }`}
          >
            {truckT >= 0.99 ? "Delivered ✓" : isMoving ? "Moving…" : "▶ Simulate"}
          </button>
        </div>
        {/* Progress bar */}
        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-200"
            style={{ width: `${pctDone}%` }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-white/60 text-[10px]">🌾 Ludhiana Farm</span>
          <span className="text-white/60 text-[10px]">ETA: 2:30 PM · Delhi 🏪</span>
        </div>
      </div>

      {/* Shipments */}
      <div className="px-4 mt-4">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-gray-900 text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>Active Shipments</span>
          <button className="text-[#1a6b3c] text-xs font-semibold">View All ›</button>
        </div>
        <div className="flex flex-col gap-3">
          {SHIPMENTS.map((s) => (
            <div key={s.id} className="bg-white rounded-2xl p-4">
              <div className="flex justify-between items-start mb-1">
                <span className="text-gray-400 text-xs">Order #{s.id}</span>
                <span className="bg-[#e8f5ee] text-[#1a6b3c] text-xs px-2 py-0.5 rounded-full font-semibold">ETA: {s.eta}</span>
              </div>
              <div className="font-bold text-gray-900 text-sm mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>{s.product}</div>
              <div className="flex items-center">
                {STAGES.map((stage, i) => (
                  <div key={stage} className="flex-1 flex flex-col items-center relative">
                    {i > 0 && (
                      <div className={`absolute top-2 right-1/2 w-full h-0.5 ${i <= s.progress ? "bg-[#1a6b3c]" : "bg-gray-200"}`}/>
                    )}
                    <div className={`w-4 h-4 rounded-full z-10 border-2 transition-all ${
                      i <= s.progress ? "bg-[#1a6b3c] border-[#1a6b3c]" : "bg-white border-gray-200"
                    }`}/>
                    <span className={`text-[9px] mt-1.5 font-semibold ${i === s.progress ? "text-[#1a6b3c]" : "text-gray-400"}`}>{stage}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="px-4 mt-4">
        <div className="font-bold text-gray-900 text-base mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>Logistics Insights</div>
        <div className="bg-white rounded-2xl p-4 flex items-start gap-3">
          <div className="w-11 h-11 bg-[#e8f5ee] rounded-2xl flex items-center justify-center text-2xl shrink-0">✳️</div>
          <div>
            <div className="font-bold text-gray-900 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>Order Grouping</div>
            <div className="text-gray-500 text-xs mt-1 leading-relaxed">
              3 orders grouped into 1 vehicle — reducing empty trips and carbon footprint.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
