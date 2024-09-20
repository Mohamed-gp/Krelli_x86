import { useEffect, useState } from "react";
import Categories from "../../components/categories/Categories";
import PropertiesCard from "../../components/properties/PropertiesCard";
import { useSearchParams } from "react-router-dom";
import ShowMapPropertiesButton from "../../components/showMapPropertiesButton/ShowMapPropertiesButton";
import {
  LayerGroup,
  LayersControl,
  MapContainer,
  TileLayer,
} from "react-leaflet";
import ShowListPropertiesButton from "../../components/showListPropertiesButton/ShowListPropertiesButton";
import { IRootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { propertiesActions } from "../../store/slices/propertiesSlice";
import customAxios from "../../utils/axios";
import Markers from "../../components/map/Markers";
import Map from "../../components/map/Map";

const Properties = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState({ category: "" });
  const [viewType, setViewType] = useState<"list" | "map">("list");
  const { properties } = useSelector((state: IRootState) => state.properties);
  const getHouses = async () => {
    try {
      const { data } = await customAxios.get("/homes" + location.search);
      dispatch(propertiesActions.setPropeties(data.data));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setSearchParams({ category: filter.category });
  }, [filter, searchParams]);
  useEffect(() => {
    getHouses();
  }, [searchParams]);

  return (
    <>
      <Categories filter={filter} setFilter={setFilter} />
      {viewType == "list" && (
        <div className="container relative my-6 flex flex-wrap items-center justify-center gap-12 overflow-y-auto sm:justify-center">
          <PropertiesCard
            all={true}
            setFilter={setFilter}
            properties={properties}
          />
        </div>
      )}
      {viewType == "map" && <Map />}
      {viewType == "list" ? (
        <ShowMapPropertiesButton setViewType={setViewType} />
      ) : (
        <ShowListPropertiesButton setViewType={setViewType} />
      )}
    </>
  );
};

export default Properties;
