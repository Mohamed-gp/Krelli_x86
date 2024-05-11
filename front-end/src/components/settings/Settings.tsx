import {
  FaDoorOpen,
  FaPersonWalkingArrowRight,
  FaTrash,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/slices/authSlice";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IRootState } from "../../store/store";
import Swal from "sweetalert2";

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
      toast.success(data);
      navigate("/");
    } catch (error: any) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  const [dataToSubmit, setdataToSubmit] = useState({
    firstName: "",
    lastName: "",
    // email: "",
    file: null,
  });
  const [password, setpassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const formData = new FormData();
  const submitInfohandler = async (e) => {
    e.preventDefault();
    try {
      // Update the FormData object with the latest dataToSubmit values
      formData.set("firstName", dataToSubmit?.firstName);
      formData.set("lastName", dataToSubmit?.lastName);
      // formData.set("email", dataToSubmit?.email);
      if (dataToSubmit?.file) {
        formData.set("file", dataToSubmit?.file);
      }
      console.log(formData.forEach((e) => console.log(e)));
      const { data } = await customAxios.post(`/users/${user?.id}`, formData);
      console.log(data);
      toast.success(data.message);
      dispatch(authActions.login(data.data));
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  const changePasswordHanlder = async (e) => {
    e.preventDefault();
    try {
      const { data } = await customAxios.post(
        `/users/password/${user?.id}`,
        password
      );
      console.log(data);
      toast.success(data.message);
      dispatch(authActions.login(data.data));
      setpassword({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
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
          const { data } = await customAxios.delete(`/users/${user?.id}`);
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
        className="my-10 rounded-xl border-2 border-buttonColor p-3"
      >
        <p className="border-b border-buttonColor pb-1 font-bold">
          Account Settings
        </p>
        <div className="flex  flex-col-reverse items-center justify-between gap-x-32 px-4 py-6 lg:flex-row">
          <div className="flex w-full flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName">FirstName: </label>
              <input
                className="w-full rounded-xl border-2  py-2 pl-3 pr-3  focus:outline-none"
                type="text"
                id="firstName"
                onChange={(e) =>
                  setdataToSubmit({
                    ...dataToSubmit,
                    firstName: e.target.value,
                  })
                }
                placeholder={user?.firstName}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lastName">LastName:</label>
              <input
                className="w-full rounded-xl border-2 py-2 pl-3 pr-3 focus:outline-none"
                type="text"
                id="lastName"
                onChange={(e) =>
                  setdataToSubmit({ ...dataToSubmit, lastName: e.target.value })
                }
                placeholder={user?.lastName}
              />
            </div>
            {/* <div className="flex flex-col gap-1">
              <label htmlFor="email">Email:</label>
              <input
                className="w-full rounded-xl border-2 py-2 pl-3 pr-3 focus:outline-none"
                id="email"
                onChange={(e) =>
                  setdataToSubmit({ ...dataToSubmit, email: e.target.value })
                }
                type="email"
                placeholder={user?.email}
              />
            </div> */}
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="rounded-full w-48 h-48 overflow-hidden">
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
              onChange={(e) =>
                setdataToSubmit({ ...dataToSubmit, file: e?.target?.files[0] })
              }
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
          disabled={
            dataToSubmit?.firstName == "" &&
            dataToSubmit?.lastName == "" &&
            dataToSubmit?.file == null
          }
          className=" disabled:opacity-60 disabled:cursor-not-allowed fit-content mx-auto flex rounded-lg bg-buttonColor  px-4 py-2 text-white"
        >
          Save Changes
        </button>
      </form>
      <form
        onSubmit={(e) => changePasswordHanlder(e)}
        className="my-10 rounded-xl border-2 border-buttonColor p-3"
      >
        <p className="border-b border-buttonColor pb-1 font-bold">
          Change Password
        </p>
        <div className="flex flex-col-reverse items-center justify-between gap-x-32 px-4 py-6 sm:flex-row">
          <div className="flex w-full flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="current-password">Current Password: </label>
              <input
                className="w-full rounded-xl border-2 py-2 pl-3 pr-3 focus:outline-none"
                id="current-password"
                value={password.currentPassword}
                onChange={(e) =>
                  setpassword({ ...password, currentPassword: e.target.value })
                }
                type="password"
                placeholder="Current Password"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">New Password:</label>
              <input
                className="password-icon w-full rounded-xl border-2 py-2 pl-3 pr-3 focus:outline-none"
                id="new-password"
                type="password"
                value={password.newPassword}
                onChange={(e) =>
                  setpassword({ ...password, newPassword: e.target.value })
                }
                placeholder="New Password"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Confirm-new-password">
                Confirm New Password:
              </label>
              <input
                className="password-icon w-full rounded-xl border-2 py-2 pl-3 pr-3 focus:outline-none"
                id="confirm-new-password"
                value={password.confirmNewPassword}
                onChange={(e) =>
                  setpassword({
                    ...password,
                    confirmNewPassword: e.target.value,
                  })
                }
                type="password"
                placeholder="New Password"
              />
            </div>
          </div>
        </div>
        <button
          disabled={
            password?.currentPassword == "" ||
            password?.newPassword == "" ||
            password?.confirmNewPassword == ""
          }
          className="disabled:opacity-60 disabled:cursor-not-allowed fit-content mx-auto flex rounded-xl bg-buttonColor  px-4 py-2 text-white"
        >
          Change Password
        </button>
      </form>
      <div className="flex items-center justify-between">
        <button
          onClick={() => deleteProfileHandler()}
          className="flex items-center gap-4 rounded-xl bg-red-400 hover:scale-[1.02] duration-300 px-6 py-2    text-white"
        >
          Delete Account
          <span className="text-lg">
            <FaTrash />
          </span>
        </button>
        <button
          onClick={(e) => logoutHandler(e)}
          className="flex items-center logout-setting-button gap-4 rounded-xl bg-buttonColor px-6 py-2  hover:scale-[1.02] duration-300  text-white"
        >
          Logout
          <span className="text-2xl animate-pulse ">
            <FaPersonWalkingArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};
export default Settings;
