import { FaPersonWalkingArrowRight, FaTrash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/slices/authSlice";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IRootState } from "../../store/store";
import Swal from "sweetalert2";
import ChangePasswordForm from "../changePasswordForm/ChangePasswordForm";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: IRootState) => state.auth.user);
  const { id } = useParams();
  useEffect(() => {
    if (user?.id != id) {
      navigate("/");
    }
  }, []);

  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(authActions.logout());
      const { data } = await customAxios.get("/auth/logout");
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const [dataToSubmit, setdataToSubmit] = useState({
    username: "",
    // email: "",
    file: null,
  });

  const formData = new FormData();
  const submitInfohandler = async (e) => {
    e.preventDefault();
    try {
      // Update the FormData object with the latest dataToSubmit values
      formData.set("username", dataToSubmit?.username);
      // formData.set("email", dataToSubmit?.email);
      if (dataToSubmit?.file) {
        formData.set("file", dataToSubmit?.file);
      }
      const { data } = await customAxios.post(`/users/${user?.id}`, formData);
      toast.success(data.message);
      dispatch(authActions.login(data.data));
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data.message);
    }
  };

  const deleteProfileHandler = () => {
    Swal.fire({
      title: "Are you sure to delete your profile?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await customAxios.delete(`/users/${user?.id}`);
          dispatch(authActions.logout());
          Swal.fire({
            title: "Deleted!",
            text: "Your Profile has been deleted.",
            icon: "success",
          });
          navigate("/");
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
  return (
    <div
      className="container py-16 sm:px-32"
      style={{ minHeight: "calc(100vh - 70.94px)" }}
    >
      <form
        onSubmit={(e) => submitInfohandler(e)}
        className="my-10 rounded-xl border-2 border-buttonColor bg-white p-3"
      >
        <p className="border-b border-buttonColor pb-1 font-bold">
          Account Settings
        </p>
        <div className="flex flex-col-reverse items-center justify-between gap-x-32 gap-y-4 px-4 py-6 lg:flex-row">
          <div className="flex w-full flex-col">
            <div className="my-2 flex flex-col">
              <label htmlFor="username">Username:</label>
              <input
                className="w-full rounded-xl border-2 py-2 pl-3 pr-3 focus:outline-none"
                type="text"
                id="username"
                onChange={(e) =>
                  setdataToSubmit({ ...dataToSubmit, username: e.target.value })
                }
                placeholder={user?.username}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex h-32 w-32 overflow-hidden rounded-full sm:h-48 sm:w-48">
              <img
                src={
                  dataToSubmit?.file
                    ? URL.createObjectURL(dataToSubmit?.file)
                    : user?.profileImage
                }
                alt="avatar"
                className=""
              />
            </div>
            <input
              type="file"
              id="image-change"
              onChange={(e) => {
                if (e.target.files != null) {
                  setdataToSubmit({
                    ...dataToSubmit,
                    file: e?.target?.files[0],
                  });
                }
              }}
              className="hidden"
            />
            <label
              htmlFor="image-change"
              className="w-[142px] cursor-pointer rounded-lg border-2 border-buttonColor bg-white px-3 py-1 text-center font-bold text-buttonColor"
            >
              Choose Image
            </label>
          </div>
        </div>
        <button
          type="submit"
          disabled={dataToSubmit?.username == "" && dataToSubmit?.file == null}
          className="fit-content mx-auto flex rounded-lg bg-buttonColor px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          Save Changes
        </button>
      </form>
      {user?.provider == "credentials" && <ChangePasswordForm />}
      <div className="flex items-center justify-between">
        <button
          onClick={() => deleteProfileHandler()}
          className="flex items-center gap-4 rounded-xl bg-red-400 px-6 py-2 text-white duration-300 hover:scale-[1.02]"
        >
          Delete Account
          <span className="text-lg">
            <FaTrash />
          </span>
        </button>
        {user?.id == id && (
          <button
            onClick={(e) => logoutHandler(e)}
            className="logout-setting-button flex items-center gap-4 rounded-xl bg-buttonColor px-6 py-2 text-white duration-300 hover:scale-[1.02]"
          >
            Logout
            <span className="animate-pulse text-2xl">
              <FaPersonWalkingArrowRight />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
export default Settings;
