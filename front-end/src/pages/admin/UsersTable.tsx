import Swal from "sweetalert2";
import AdminSideBar from "./AdminSideBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import customAxios from "../../utils/axios";

const UsersTable = () => {
  const [users, setusers] = useState<any[]>([]);
  const getAllUsersHandler = async () => {
    try {
      const { data } = await customAxios.get("/admin/users");
      setusers(data);
    } catch (error) {
      console.log(error);
    }
  };
  const removeHandler = (userId) => {
    Swal.fire({
      title: "Are you sure to remove this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // dispatch(deleteUser(userId))
        Swal.fire({
          title: "Deleted!",
          text: "The user has been deleted.",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "the user profile is safe!",
          text: "something went wrong",
          icon: "error",
        });
      }
    });
  };
  useEffect(() => {
    getAllUsersHandler();
  });
  return (
    <div className="flex" style={{ minHeight: "calc(100vh - (72px +  48px))" }}>
      <AdminSideBar />
      <div className="flex flex-col justify-center w-full overflow-x-auto overflow-y-hidden ">
        <p className="pl-4 mx-2 mt-[2.1rem] text-2xl">Users</p>
        <div className="mx-6 w-[1000px] min-h-[330px] text-center my-2  ">
          <table className="w-full h-full ">
            <thead>
              <tr className="">
                <th>Count</th>
                <th>User</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user?._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center-center justify-start pl-4 gap-2 img min-w-[260px]">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={
                          user?.profileImage
                            ? user?.profileImage
                            : "../../../public/profile.jpg"
                        }
                      />
                      <div className="div flex flex-col items-start">
                        <span>{user?.firstName}</span>
                        <span>{user?.lastName}</span>
                      </div>
                    </div>
                  </td>
                  <td>{user?.email}</td>
                  <td>
                    <div className="flex users-center justify-center gap-2 text-white w-[260px]">
                      <button className="px-3 py-1 bg-green-400 rounded-xl">
                        <Link to={`/profile/${user._id}`}>View Profile</Link>
                      </button>
                      <button
                        className="px-3 py-1 bg-red-400 rounded-xl"
                        onClick={() => removeHandler(user._id)}
                      >
                        Delete Profile
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default UsersTable;
