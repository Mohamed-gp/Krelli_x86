import React, { useEffect, useState } from "react";
import Categories from "../../components/categories/Categories";
import PropertiesCard from "../../components/properties/PropertiesCard";
import { useSearchParams } from "react-router-dom";
import ShowMapPropertiesButton from "../../components/showMapPropertiesButton/ShowMapPropertiesButton";
import {
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import ShowListPropertiesButton from "../../components/showListPropertiesButton/ShowListPropertiesButton";

const Properties = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [houses, sethouses] = useState([]);
  const [filter, setfilter] = useState({ category: "" });

  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setSearchParams({ category: filter.category });
  }, [filter]);

  const [viewType, setViewType] = useState<"list" | "map">("list");
  return (
    <>
      <Categories filter={filter} setfilter={setfilter} />
      {viewType == "list" && (
        <div className="container relative my-6 flex flex-wrap items-center justify-center gap-12 overflow-y-auto sm:justify-center">
          <PropertiesCard
            all={true}
            houses={houses}
            sethouses={sethouses}
            filter={filter}
            setfilter={setfilter}
          />
        </div>
      )}
      {viewType == "map" && (
        <MapContainer
          className="z-[50]"
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
          {houses.map((house) => (
            <Marker position={[2, 2]}>
              <Popup>Suppose To Be Your House Location</Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
      {viewType == "list" ? (
        <ShowMapPropertiesButton setViewType={setViewType} />
      ) : (
        <ShowListPropertiesButton setViewType={setViewType} />
      )}
    </>
  );
};
export default Properties;
