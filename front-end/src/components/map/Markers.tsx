import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

interface MarkerProps {
  properties: any;
}
const Markers = ({ properties }: MarkerProps) => {
  const map = useMap();
  useEffect(() => {
    const markers = L.markerClusterGroup({
      maxClusterRadius: 1,
    });
    properties?.forEach((house) => {
      const marker = L.marker([house.latitude, house.longitude]).bindPopup(
        "Suppose To Be Your House Location",
      );
      markers.addLayer(marker);
    });
    map.addLayer(markers);
    return () => {
      map.removeLayer(markers);
    };
  }, [map, properties]);

  return null;
};

export default Markers;
