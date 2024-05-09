import { FaDoorOpen, FaPersonWalkingArrowRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/authSlice";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(authActions.logout());
      const { data } = await customAxios.get("/auth/logout");
      toast.success(data);
      navigate("/")
      
    } catch (error: any) {
      toast.error(error.message);
      console.log(error.message);
    }
  };
  return (
    <div
      className="container py-16"
      style={{ minHeight: "calc(100vh - 70.94px)" }}
    >
      <div className="my-10 rounded-xl border-2 border-buttonColor p-3">
        <p className="border-b border-buttonColor pb-1 font-bold">Account Settings</p>
        <div className="flex flex-col-reverse items-center justify-between gap-x-32 px-4 py-6 sm:flex-row">
          <div className="flex w-full flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="username">Username: </label>
              <input
                className="w-full rounded-xl border-2  py-2 pl-3 pr-3 focus:outline-none"
                id="username"
                type="text"
                placeholder="John"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">LastName:</label>
              <input
                className="w-full rounded-xl border-2 py-2 pl-3 pr-3 focus:outline-none"
                id="email"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="rounded-full w-48 h-48 overflow-hidden">
              <img
                src="../../../public/profile.jpg"
                alt="avatar"
                className=""
              />
            </div>
            <input type="file" id="image-change" className="hidden" />
            <label
              htmlFor="image-change"
              className="w-[142px] cursor-pointer rounded-xl border-2 border-buttonColor bg-white px-3 py-1 text-center font-bold text-buttonColor"
            >
              Chose Image
            </label>
          </div>
        </div>
        <button className="fit-content mx-auto flex rounded-xl bg-buttonColor  px-4 py-2 text-white">
          Save Changes
        </button>
      </div>
      <div className="my-10 rounded-xl border-2 border-buttonColor p-3">
        <p className="border-b border-buttonColor pb-1 font-bold">Change Password</p>
        <div className="flex flex-col-reverse items-center justify-between gap-x-32 px-4 py-6 sm:flex-row">
          <div className="flex w-full flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="current-password">Current Password: </label>
              <input
                className="w-full rounded-xl border-2 py-2 pl-3 pr-3 focus:outline-none"
                id="current-password"
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
                type="password"
                placeholder="New Password"
              />
            </div>
          </div>
        </div>
        <button className="fit-content mx-auto flex rounded-xl bg-buttonColor  px-4 py-2 text-white">
          Change Password
        </button>
      </div>
      <div className="flex items-center justify-end">
        <button onClick={(e) => logoutHandler(e)} className="flex items-center gap-4 rounded-xl bg-buttonColor px-6 py-2    text-white">
          Logout
          <span className="text-2xl">
            <FaPersonWalkingArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};
export default Profile;
