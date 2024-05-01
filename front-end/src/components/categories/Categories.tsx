import { categories } from "../../utils/data";

const Categories = () => {
  return (
    <div className="container flex gap-6 overflow-x-auto  my-3 pb-7 justify-start lg:justify-center">
      {categories.map((category) => (
        <div
          key={category.label}
          className={`${"text-grayColor"} flex items-center space-x-2 flex-col gap-x-2  duration-300 cursor-pointer justify-center   hover:text-black hover:border-b-black hover:border-b-2 hover:-translate-y-1 `}
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
