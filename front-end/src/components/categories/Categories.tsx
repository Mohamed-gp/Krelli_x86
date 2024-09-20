import { categories } from "../../utils/data";

interface CategoriesInterface {
  filter: { category: string };
  setFilter: (e: any) => any;
}

const Categories = ({ filter, setFilter }: CategoriesInterface) => {
  const setFilterHandler = (categoryLabel: string) => {
    if (filter.category == categoryLabel) {
      return setFilter({ ...filter, category: "" });
    }
    setFilter({ ...filter, category: categoryLabel });
  };
  return (
    <div className="container my-6 flex justify-start gap-6 overflow-x-auto py-7 pb-7 lg:justify-center">
      {categories.map((category) => (
        <div
          onClick={() => setFilterHandler(category.label)}
          key={category.label}
          className={`${"text-grayColor"} ${category.label == filter.category ? "border-b-2 border-b-black text-black" : ""} flex cursor-pointer flex-col items-center justify-center gap-x-2 space-x-2 duration-300 hover:-translate-y-1 hover:border-b-2 hover:border-b-black hover:text-black`}
        >
          <category.icon size={30} />
          {/* <span className="text-3xl">{icon()}</span> */}
          <h3 className="w-full text-sm">{category.label}</h3>
        </div>
      ))}
    </div>
  );
};
export default Categories;
