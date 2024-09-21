import MarkerClusterGroup from "react-leaflet-cluster";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import PropertyCard from "../properties/PropertyCard";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";

// Custom icon for the marker displaying the price
const createCustomIcon = (price: number) => {
  return L.divIcon({
    className:
      "flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-md text-sm font-bold text-gray-800",
    html: `<div class="px-6 py-2">$${price}</div>`,
    iconSize: [50, 50],
    iconAnchor: [20, 40],
  });
};

const Markers = () => {
  const { properties } = useSelector((state: IRootState) => state.properties);
  return (
    <MarkerClusterGroup chunkedLoading maxClusterRadius={1}>
      {properties?.map((property, index: number) => (
        <Marker
          key={index + property.id + "markerfind"}
          position={[property.latitude, property.longitude]}
          title={property.title}
          icon={createCustomIcon(property.price)}
        >
          <Popup>
            <div style={{ padding: 0, margin: 0 }}>
              <PropertyCard property={property} />
            </div>
          </Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
};

export default Markers;
