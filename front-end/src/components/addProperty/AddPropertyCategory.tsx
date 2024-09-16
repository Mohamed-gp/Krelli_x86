import { useState } from "react";
import { categories } from "../../utils/data";

interface AddPropertyCategoryProps {
  dataToSubmit: any;
  setDataToSubmit: (a: any) => any;
  inputLabel: string;
}

const AddPropertyCategory = ({
  dataToSubmit,
  setDataToSubmit,
  inputLabel,
}: AddPropertyCategoryProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const getIconByCategory = (category: string) => {
    let result = null;
    categories.forEach((cat) => {
      console.log("test");
      if (cat.label === category) {
        console.log("test");
        result = <cat.icon size={30} />;
      }
    });
    return result;
  };
  return (
    <div className={`name-input w-[100%] lg:w-[30%]`}>
      <label htmlFor={inputLabel} className="font-bold">
        {inputLabel.charAt(0).toUpperCase() + inputLabel.slice(1)}
      </label>
      <div className="relative">
        <button
          id="dropdown-phone-button"
          data-dropdown-toggle="dropdown-phone"
          className={`z-10 inline-flex w-full flex-shrink-0 py-2.5 items-center rounded-lg border ${
            isDropdownOpen
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300 bg-gray-100"
          } px-4 py-1 text-center text-sm font-medium ${
            isDropdownOpen ? "text-blue-900" : "text-gray-900"
          } hover:bg-gray-200 focus:outline-none`}
          type="button"
          onClick={toggleDropdown}
        >
          {dataToSubmit.category ? (
            <>
              <span className="flex-1 text-left">
                {getIconByCategory(dataToSubmit.category)}
              </span>
              <span className="flex-1 text-left">{dataToSubmit.category}</span>
            </>
          ) : (
            <span className="flex-1 text-left">Select a category</span>
          )}
          <svg
            className={`ml-2 h-5 w-5 ${
              isDropdownOpen ? "rotate-180 transform" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M10 14l6-6H4l6 6z" />
          </svg>
        </button>
        {isDropdownOpen && (
          <>
            <div
              className="fixed left-0 top-0 h-screen w-screen"
              onClick={() => setIsDropdownOpen(false)}
            >
              {" "}
            </div>

            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute z-[9999999999999] mt-2 h-[300px] w-full overflow-auto rounded-md bg-white shadow-lg"
            >
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {categories.map((category) => (
                  <div className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    <category.icon size={30} />
                    <button
                      key={category.name}
                      className={`block w-full px-4 py-2 text-left text-sm`}
                      role="menuitem"
                      onClick={() => {
                        setDataToSubmit({
                          ...dataToSubmit,
                          category: category.label,
                        });
                        toggleDropdown();
                      }}
                    >
                      {category.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddPropertyCategory;
