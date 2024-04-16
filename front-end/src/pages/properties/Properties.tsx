import Categories from "../../components/categories/Categories";
import SearchBar from "../../components/filtersAndSearch/SearchBar";
import PropertiesCard from "../../components/properties/PropertiesCard";

const Properties = () => {
  return (
    <>
      <SearchBar />
      <Categories />
      <div className="container flex flex-wrap items-center justify-center sm:justify-between  gap-3 my-6">
        <PropertiesCard all={true} />
      </div>
    </>
  );
};
export default Properties;
