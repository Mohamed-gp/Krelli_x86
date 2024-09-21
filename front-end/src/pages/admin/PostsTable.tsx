import Swal from "sweetalert2";
import AdminSideBar from "./AdminSideBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import customAxios from "../../utils/axios";

const PostsTable = () => {
  const [properties, setproperties] = useState<any[]>([]);
  const [remove, setremove] = useState(0);
  const getAllPropertiesHandler = async () => {
    try {
      const { data } = await customAxios.get("/admin/homes");
      setproperties(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const removeHandler = (id) => {
    Swal.fire({
      title: "Are you sure to remove this Property?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await customAxios.delete(`/admin/homes/${id}`);
          Swal.fire({
            title: "Deleted!",
            text: "Property Deleted Successfuly",
            icon: "success",
          });
          setremove((prev) => prev + 1);
        } catch (error) {
          console.log(error);
          toast.error(error?.response?.data.message);
        }
      } else {
        Swal.fire({
          title: "your profile is safe!",
          text: "something went wrong",
          icon: "error",
        });
      }
    });
  };
  useEffect(() => {
    getAllPropertiesHandler();
  }, [remove]);
  return (
    <div className="flex" style={{ minHeight: "calc(100vh - (72px +  48px))" }}>
      <AdminSideBar />
      <div className="flex w-full flex-col justify-center overflow-x-auto overflow-y-hidden">
        <p className="mx-2 mt-[2.1rem] pl-4 text-2xl">Posts</p>
        <div className="mx-6 my-2 min-h-[50px] min-w-[1000px] text-center">
          {properties?.length === 0 ? (
            <p style={{ minHeight: "calc(100vh - 84.14px)" }}>
              No Reviews Found
            </p>
          ) : (
            <table className="h-full w-full">
              <thead>
                <tr className="">
                  <th>Count</th>
                  <th>Property</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {properties?.map((post, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="img flex w-[260px] items-center justify-center gap-2 pl-4">
                        <img
                          className="h-11 w-11 rounded-full object-cover"
                          src={post?.Pictures[0]?.url}
                        />
                        <img
                          className="h-11 w-11 rounded-full object-cover"
                          src={post?.Pictures[1]?.url}
                        />
                        <img
                          className="h-11 w-11 rounded-full object-cover"
                          src={post?.Pictures[2]?.url}
                        />
                        <img
                          className="h-11 w-11 rounded-full object-cover"
                          src={post?.Pictures[3]?.url}
                        />
                        <img
                          className="h-11 w-11 rounded-full object-cover"
                          src={post?.Pictures[4]?.url}
                        />
                      </div>
                    </td>
                    <td>{post?.title}</td>

                    <td>
                      <div className="flex w-[320px] items-center justify-center gap-2 text-white">
                        <button className="min-w-[150px] rounded-xl bg-green-400 px-3 py-1">
                          <Link to={`/properties/${post?.id}`}>
                            View Property
                          </Link>
                        </button>
                        <button
                          className="min-w-[150px] rounded-xl bg-red-400 px-3 py-1"
                          onClick={() => removeHandler(post?.id)}
                        >
                          Delete Property
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
export default PostsTable;
