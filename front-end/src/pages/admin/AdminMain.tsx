import { useDispatch, useSelector } from "react-redux";
import AddNewCategory from "./AddNewCategory";
import AdminCardLink from "./AdminCardLink";
import { useEffect, useState } from "react";
import customAxios from "../../utils/axios";
const AdminMain = () => {
  const [usersCount, setusersCount] = useState(0);
  const [homesCount, sethomesCount] = useState(0);
  // const [reviewsCount, setreviewsCount] = useState(0);

  const getUsersCount = async () => {
    try {
      const { data } = await customAxios.get("/admin/users/count");
      setusersCount(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getHomesCount = async () => {
    try {
      const { data } = await customAxios.get("/admin/homes/count");
      sethomesCount(data);
    } catch (error) {
      console.log(error);
    }
  };
  // const getReviewsCount = async () => {
  //   try {
  //     const { data } = await customAxios.get("/admin/reviews/count");
  //     setreviewsCount(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getUsersCount();
    getHomesCount();
    // getReviewsCount();
  }, []);
  return (
    <div className="w-full p-6">
      <div className="flex flex-wrap items-center justify-between gap-1 py-3 pb-4 border-b-2 border-black">
        <AdminCardLink link="users" count={usersCount} />
        <AdminCardLink link="homes" count={homesCount} />
        {/* <AdminCardLink link="categories" count={categories} /> */}
        {/* <AdminCardLink link="reviews" count={reviewsCount} /> */}
      </div>

      {/* maybe we should add it next time dinamic category adding with image */}
      {/* <div className="my-5">
                <AddNewCategory />
            </div> */}
    </div>
  );
};
export default AdminMain;
