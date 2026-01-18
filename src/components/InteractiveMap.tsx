import { useState, useEffect, useRef } from "react";
import EuropeMap from "../assets/europe.svg";
import { universities, type University } from "../data/data";

export const InteractiveMap = () => {
  const [selectedUniversity, setSelectedUniversity] =
    useState<University | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const divRef = useRef(null);

  useEffect(() => {
    const el = divRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        console.log("Width:", entry.contentRect.width);
      }
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);
  /*   useEffect(() => {
    setIsVisible(true);
  }, []); */

  const handleMarkerClick = (university: University) => {
    setSelectedUniversity(university);
  };

  const closePopup = () => {
    setSelectedUniversity(null);
  };

  // Convert lat/lng to pixel coordinates for the map
  const getMarkerPosition = (lat: number, lng: number) => {
    // Simple projection for California area
    const mapWidth = 400;
    const mapHeight = 300;
    const minLat = 37.0;
    const maxLat = 38.5;
    const minLng = -123.0;
    const maxLng = -121.5;

    const x = ((lng - minLng) / (maxLng - minLng)) * mapWidth;
    const y = ((maxLat - lat) / (maxLat - minLat)) * mapHeight;

    return {
      x: Math.max(20, Math.min(mapWidth - 20, x)),
      y: Math.max(20, Math.min(mapHeight - 20, y)),
    };
  };

  return (
    <div className="relative">
      {/* Map Container */}
      <div
        className={`relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={() => setIsVisible(true)}
      >
        {/* Map Background */}
        <div className="relative w-full h-auto bg-gradient-to-br from-green-100 via-blue-50 to-indigo-100 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600">
          {/* Map transform: scale(1.5) translate(-35px, -30px); */}
          <img
            src={EuropeMap}
            ref={divRef}
            alt="Europe map"
            className={`transition-all duration-700 ease-out 
    ${
      isVisible
        ? "opacity-100 scale-150 translate-x-[-35px] translate-y-[-30px]"
        : "opacity-50 scale-100 translate-y-0 translate-x-0"
    }
  `}
          />

          {/* University Markers */}
          {universities.map((university, index) => {
            const position = getMarkerPosition(university.lat, university.lng);
            return (
              <div
                key={university.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                  animationDelay: `${index * 0.5}s`,
                }}
                onClick={() => handleMarkerClick(university)}
              >
                {/* Marker */}
                <div
                  className={`relative w-8 h-8 bg-gradient-to-r ${university.color} rounded-full shadow-lg group-hover:scale-125 transition-all duration-300 animate-bounce-in`}
                >
                  <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>

                  {/* Pulse effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${university.color} rounded-full animate-ping opacity-20`}
                  ></div>
                </div>

                {/* University name on hover */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {university.name}
                </div>
              </div>
            );
          })}

          {/* Connection line between universities */}
          {universities.length > 1 && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient
                  id="connectionGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path
                d={`M ${
                  getMarkerPosition(universities[0].lat, universities[0].lng).x
                } ${
                  getMarkerPosition(universities[0].lat, universities[0].lng).y
                } L ${
                  getMarkerPosition(universities[1].lat, universities[1].lng).x
                } ${
                  getMarkerPosition(universities[1].lat, universities[1].lng).y
                }`}
                stroke="url(#connectionGradient)"
                strokeWidth="3"
                strokeDasharray="5,5"
                fill="none"
                className="animate-pulse"
              />
            </svg>
          )}
        </div>

        {/* Map Title */}
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
            Education Journey
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Click markers to explore
          </p>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            <span className="text-slate-700 dark:text-slate-300">Master's</span>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full ml-2"></div>
            <span className="text-slate-700 dark:text-slate-300">
              Bachelor's
            </span>
          </div>
        </div>
      </div>

      {/* University Details Popup */}
      {selectedUniversity && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6 animate-bounce-in">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedUniversity.logo}
                  alt={selectedUniversity.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {selectedUniversity.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {selectedUniversity.degree}
                  </p>
                </div>
              </div>
              <button
                onClick={closePopup}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Duration:
                </span>
                <span className="text-slate-900 dark:text-white font-medium">
                  {selectedUniversity.year}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">GPA:</span>
                <span className="text-slate-900 dark:text-white font-medium">
                  {selectedUniversity.gpa}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Location:
                </span>
                <span className="text-slate-900 dark:text-white font-medium">
                  California, USA
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              <button
                onClick={closePopup}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


