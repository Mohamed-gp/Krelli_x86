import { categories } from "../../utils/data";

interface CategoriesInterface {
  filter: { category: string };
  setfilter: (e: any) => any;
}

const Categories = ({ filter, setfilter }: CategoriesInterface) => {
  const setFilterHandler = (categoryLabel : string) => {
    if (filter.category == categoryLabel) {
      return setfilter({ ...filter, category: "" })
      
    }
    setfilter({ ...filter, category: categoryLabel })
  }
  return (
    <div className="container flex gap-6 overflow-x-auto py-7  my-6 pb-7 justify-start lg:justify-center">
      {categories.map((category) => (
        <div
          onClick={() => setFilterHandler(category.label)}
          key={category.label}
          className={`${"text-grayColor"} ${category.label == filter.category ? "text-black border-b-black border-b-2 " : ""} flex items-center space-x-2 flex-col gap-x-2  duration-300 cursor-pointer justify-center   hover:text-black hover:border-b-black hover:border-b-2 hover:-translate-y-1 `}
        >
          <category.icon size={30} />
          {/* <span className="text-3xl">{icon()}</span> */}
          <h3 className="text-sm w-full">{category.label}</h3>
        </div>
      ))}
    </div>
  );
};
export default Categories;
