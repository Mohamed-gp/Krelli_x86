import {
  LayerGroup,
  LayersControl,
  MapContainer,
  TileLayer,
} from "react-leaflet";
import Markers from "./Markers";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";

const Map = () => {
  const { properties } = useSelector((state: IRootState) => state.properties);
  return (
    <>
      {properties.length === 0 && (
        <p className="my-2 text-center font-bold">
          Try Changing Or Removing Some Of Your Filters
        </p>
      )}
      <MapContainer
        className="z-[49]"
        style={{ width: "calc(100%)", height: "650px" }}
        zoom={3}
        maxBounds={[
          [-90, -18000],
          [90, 18000],
        ]}
        minZoom={2}
        center={[2, 2]}
        scrollWheelZoom={false}
      >
        {/* add google map tile url  */}
        <LayersControl>
          <LayersControl.BaseLayer checked name="Google Map">
            <TileLayer
              attribution="Google Maps"
              url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Google Map Satellite">
            <LayerGroup>
              <TileLayer
                attribution="Google Maps Satellite"
                url="https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
              />
              <TileLayer url="https://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}" />
            </LayerGroup>
          </LayersControl.BaseLayer>
        </LayersControl>
        <Markers />
      </MapContainer>
    </>
  );
};
export default Map;
