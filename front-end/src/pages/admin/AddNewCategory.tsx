import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const AddNewCategory = () => {
  const [category, setcategory] = useState("");
  const dispatch = useDispatch();
  const formOnSubmitHandler = (e) => {
    e.preventDefault();
    if (category.trim() === "") {
      return toast.error("category musn't be empty");
    }
    // dispatch(createCategory(category))
  };
  return (
    <form
      onSubmit={formOnSubmitHandler}
      action=""
      className="mx-auto flex flex-col gap-2 rounded-xl border-2 border-black p-3 lg:w-[450px]"
    >
      <p className="font-bold">Add New Category</p>
      <label htmlFor="categoryTitle" className="text-sm text-primary-color">
        Category Title
      </label>
      <input
        value={category}
        onChange={(e) => {
          setcategory(e.target.value);
        }}
        type="text"
        id="categoryTitle"
        className="h-10 w-full rounded-xl pl-4"
        placeholder="Enter Category Title"
      />
      <input
        type="submit"
        className="h-10 w-full rounded-xl bg-buttonColor font-bold text-white"
      />
    </form>
  );
};
export default AddNewCategory;
