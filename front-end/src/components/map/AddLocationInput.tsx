import React, { useEffect, useState } from "react";
import {
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

// Import the images
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for Leaflet's default icon not being displayed
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface AddLocationInputProps {
  dataToSubmit: any;
  setDataToSubmit: (a: any) => any;
  inputLabel: string;
}
const AddLocationInput = ({
  dataToSubmit,
  setDataToSubmit,
}: AddLocationInputProps) => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setDataToSubmit({
          ...dataToSubmit,
          latitude: e.latlng.lat,
          longitude: e.latlng.lng,
        });
      },
    });
    return null;
  };

  return (
    <>
      <div
        onClick={() => setIsMapOpen(true)}
        className={`name-input w-[100%] lg:w-[30%]`}
      >
        <label htmlFor={"location"} className="font-bold">
          Location
        </label>

        <p className="peer w-full cursor-pointer rounded-md border-2 bg-[#f9f9f9] px-3 py-2.5 text-xs focus:outline-none">
          {isMapOpen
            ? `${dataToSubmit.latitude} ${dataToSubmit.longitude}`
            : "Add The Location Of Your House"}
        </p>
      </div>

      {isMapOpen && (
        <MapContainer
          className="z-[500] mx-auto h-[500px]"
          style={{ width: "calc(100%)", height: "500px" }}
          zoom={2}
          maxBounds={[
            [-90, -18000],
            [90, 18000],
          ]}
          minZoom={2}
          center={[dataToSubmit.latitude, dataToSubmit.longitude]}
          scrollWheelZoom={false}
        >
          <MapClickHandler />

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
          <Marker position={[dataToSubmit.latitude, dataToSubmit.longitude]}>
            <Popup>House Location</Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
};

export default AddLocationInput;
