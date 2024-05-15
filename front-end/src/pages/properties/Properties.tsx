import { useEffect, useState } from "react";
import Categories from "../../components/categories/Categories";
import SearchBar from "../../components/filtersAndSearch/SearchBar";
import PropertiesCard from "../../components/properties/PropertiesCard";
import { useSearchParams } from "react-router-dom";
import { getWilayaIdByName } from "../../utils/data";

const Properties = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [houses, sethouses] = useState([]);
  const [filter, setfilter] = useState({ category: "", wilaya: "" });

  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const id = getWilayaIdByName(filter.wilaya)
    setSearchParams({ wilaya: id, category: filter.category });
  }, [filter]);

  return (
    <>
      <SearchBar filter={filter} setfilter={setfilter} />
      <Categories filter={filter} setfilter={setfilter} />
      <div className="container flex flex-wrap items-center justify-center sm:justify-center  gap-12 my-6">
        <PropertiesCard all={true} houses={houses} sethouses={sethouses} filter={filter} setfilter={setfilter} />
      </div>
    </>
  );
};
export default Properties;
