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
      setproperties(data);
      console.log(data,"test")
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
          const { data } = await customAxios.delete(`/admin/homes/${id}`);
          Swal.fire({
            title: "Deleted!",
            text: "Property Deleted Successfuly",
            icon: "success",
          });
          setremove((prev) => prev + 1);
        } catch (error) {
          console.log(error);
          toast.error(error?.response?.data);
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
      <div className="flex flex-col justify-center w-full overflow-x-auto overflow-y-hidden ">
        <p className="pl-4 mx-2 mt-[2.1rem] text-2xl">Posts</p>
        <div className="mx-6 w-[1000px] min-h-[330px] text-center my-2  ">
          <table className="w-full h-full ">
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
                    <div className="flex items-center justify-center gap-2 img w-[260px] pl-4">
                      <img className="w-11 h-11 rounded-full object-cover" src={post?.Pictures[0]?.url} />
                      <img className="w-11 h-11 rounded-full object-cover" src={post?.Pictures[1]?.url} />
                      <img className="w-11 h-11 rounded-full object-cover" src={post?.Pictures[2]?.url} />
                      <img className="w-11 h-11 rounded-full object-cover" src={post?.Pictures[3]?.url} />
                      <img className="w-11 h-11 rounded-full object-cover" src={post?.Pictures[4]?.url} />
                    </div>
                  </td>
                  <td>{post?.title}</td>
                  <td>
                    <div className="flex items-center justify-center gap-2 text-white w-[320px]">
                      <button className="px-3 py-1 bg-green-400 rounded-xl min-w-[150px]">
                        <Link to={`/properties/${post?.id}`}>View Property</Link>
                      </button>
                      <button
                        className="px-3 py-1 bg-red-400 rounded-xl min-w-[150px]"
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
        </div>
      </div>
    </div>
  );
};
export default PostsTable;
