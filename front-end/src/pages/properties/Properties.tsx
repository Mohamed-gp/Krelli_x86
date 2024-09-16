import { useEffect, useState } from "react";
import Categories from "../../components/categories/Categories";
import PropertiesCard from "../../components/properties/PropertiesCard";
import { useSearchParams } from "react-router-dom";
import ShowMapPropertiesButton from "../../components/showMapPropertiesButton/ShowMapPropertiesButton";

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

  return (
    <>
      <Categories filter={filter} setfilter={setfilter} />
      <div className="container relative my-6 flex flex-wrap items-center justify-center gap-12 sm:justify-center">
        <PropertiesCard
          all={true}
          houses={houses}
          sethouses={sethouses}
          filter={filter}
          setfilter={setfilter}
        />
      </div>
      <ShowMapPropertiesButton />
    </>
  );
};
export default Properties;
