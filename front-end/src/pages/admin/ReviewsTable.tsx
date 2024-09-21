import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";

const ReviewsTable = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const getAllReviewsHandler = async () => {
    try {
      const { data } = await customAxios.get("/admin/reviews");
      setReviews(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllReviewsHandler();
  }, []);

  const removeHandler = (commentId) => {
    Swal.fire({
      title: "Are you sure to remove this review?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await customAxios.delete(
            `/admin/homes/${commentId}/review`,
            
          );
          toast.success(data.message);
          getAllReviewsHandler();
          Swal.fire({
            title: "Deleted!",
            text: "Review Deleted Successfuly",
            icon: "success",
          });
        } catch (error) {
          console.log(error);
          toast.error(error?.response?.data.message);
        }
      } else {
        Swal.fire({
          title: "the user comment is safe!",
          text: "something went wrong",
          icon: "error",
        });
      }
    });
  };
  return (
    <div className="flex" style={{ minHeight: "calc(100vh - (72px +  48px))" }}>
      <AdminSideBar />
      <div className="flex w-full flex-col justify-center overflow-x-auto overflow-y-hidden">
        <p className="mx-2 mt-[2.1rem] pl-4 text-2xl">Reviews</p>
        <div className="mx-6 my-2 min-h-[50px] min-w-[1000px] text-center">
          {reviews?.length === 0 ? (
            <p style={{ minHeight: "calc(100vh - 84.14px)" }}>
              No Reviews Found
            </p>
          ) : (
            <table className="h-full w-full">
              <thead>
                <tr className="">
                  <th>Count</th>
                  <th>User</th>
                  <th>Comment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {reviews?.map((review, index) => (
                  <tr key={review?._id + review.id + "review-table-row"}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="img flex min-w-[260px] items-center justify-start gap-2 pl-4">
                        <img
                          className="w-10 rounded-full"
                          src={review?.User?.profileImage}
                        />
                        {/* {console.log(review)} */}
                        <span>{review?.User.username}</span>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <span>{review?.comment}</span>
                    </td>
                    <td>
                      <div className="flex items-center justify-center gap-2 text-white">
                        <div className="mx-auto flex items-center justify-center gap-2 text-white">
                          <button
                            className="rounded-xl bg-red-400 px-3 py-1"
                            onClick={() => removeHandler(review.id)}
                          >
                            Delete Comment
                          </button>
                        </div>
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
export default ReviewsTable;
