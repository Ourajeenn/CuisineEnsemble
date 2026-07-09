import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

const createMealIcon = (emoji) => L.divIcon({
  html: `<div style="font-size: 20px; background: white; padding: 4px; border-radius: 50%; box-shadow: 0 4px 12px rgba(200, 90, 50, 0.2); border: 2px solid #c85a32; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; transition: all 0.2s;">${emoji || '🥘'}</div>`,
  className: 'custom-meal-marker',
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36]
});

// Component to dynamically change map view center
function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom);
    }
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 200);
    return () => clearTimeout(timer);
  }, [center, zoom, map]);
  return null;
}

export default function MapView({ meals, activeMeal, onSelectMeal, userLocation }) {
  const defaultCenter = [48.8566, 2.3522]; // Paris
  const center = userLocation || (activeMeal ? [activeMeal.lat, activeMeal.lng] : defaultCenter);
  const zoom = activeMeal ? 15 : 13;

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={true}
    >
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {meals.map((meal) => {
        // extract an emoji from the title/desc or use default
        const emojiMatch = meal.title.match(/[\u{1F300}-\u{1F9FF}]/u);
        const emoji = emojiMatch ? emojiMatch[0] : "🥘";

        return (
          <Marker
            key={meal.id}
            position={[meal.lat, meal.lng]}
            icon={createMealIcon(emoji)}
            eventHandlers={{
              click: () => {
                if (onSelectMeal) onSelectMeal(meal);
              },
            }}
          >
            <Popup>
              <div style={{ fontFamily: "Outfit, sans-serif" }}>
                <h4 style={{ margin: "0 0 5px 0", fontSize: "0.95rem" }}>{meal.title}</h4>
                <p style={{ margin: "0 0 8px 0", fontSize: "0.8rem", color: "#666" }}>
                  {meal.address}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: "bold", color: "#c85a32" }}>
                    {meal.calculated_price_per_person.toFixed(2)}€/pers
                  </span>
                  <span style={{ fontSize: "0.75rem", background: "#f0f0f0", padding: "2px 6px", borderRadius: "10px" }}>
                    {meal.current_guests}/{meal.max_guests} convives
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
