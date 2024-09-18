import { useState } from "react";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/slices/authSlice";
import { IRootState } from "../../store/store";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const ChangePasswordForm = () => {
  const user = useSelector((state: IRootState) => state.auth.user);
  const dispatch = useDispatch();
  const [password, setpassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const changePasswordHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await customAxios.post(
        `/users/password/${user?.id}`,
        password,
      );
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
  const [passwordsVisibility, setPasswordsVisibility] = useState({
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });
  return (
    <form
      onSubmit={(e) => changePasswordHandler(e)}
      className="my-10 rounded-xl border-2 border-buttonColor bg-white p-3"
    >
      <p className="border-b border-buttonColor pb-1 font-bold">
        Change Password
      </p>
      <div className="flex flex-col-reverse items-center justify-between gap-x-32 px-4 py-6 sm:flex-row">
        <div className="flex w-full flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="current-password">Current Password: </label>
            <div className="relative flex justify-between">
              <div className="top absolute right-2 top-1/2 flex -translate-y-1/2 cursor-pointer gap-2 text-lg opacity-60">
                {passwordsVisibility.currentPassword && (
                  <FaEyeSlash
                    onClick={() =>
                      setPasswordsVisibility({
                        ...passwordsVisibility,
                        currentPassword: false,
                      })
                    }
                  />
                )}
                {!passwordsVisibility.currentPassword && (
                  <FaEye
                    onClick={() =>
                      setPasswordsVisibility({
                        ...passwordsVisibility,
                        currentPassword: true,
                      })
                    }
                  />
                )}
              </div>
              <input
                type={
                  !passwordsVisibility.currentPassword ? "password" : "text"
                }
                className="w-full rounded-xl border-2 py-2 pl-3 pr-3 focus:outline-none"
                id="current-password"
                value={password.currentPassword}
                onChange={(e) =>
                  setpassword({ ...password, currentPassword: e.target.value })
                }
                placeholder="Current Password"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">New Password:</label>
            <div className="relative flex justify-between">
              <div className="top absolute right-2 top-1/2 flex -translate-y-1/2 cursor-pointer gap-2 text-lg opacity-60">
                {passwordsVisibility.newPassword && (
                  <FaEyeSlash
                    onClick={() =>
                      setPasswordsVisibility({
                        ...passwordsVisibility,
                        newPassword: false,
                      })
                    }
                  />
                )}
                {!passwordsVisibility.newPassword && (
                  <FaEye
                    onClick={() =>
                      setPasswordsVisibility({
                        ...passwordsVisibility,
                        newPassword: true,
                      })
                    }
                  />
                )}
              </div>
              <input
                type={!passwordsVisibility.newPassword ? "password" : "text"}
                className="w-full rounded-xl border-2 py-2 pl-3 pr-3 focus:outline-none"
                id="new-password"
                value={password.newPassword}
                onChange={(e) =>
                  setpassword({ ...password, newPassword: e.target.value })
                }
                placeholder="New Password"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="Confirm-new-password">Confirm New Password:</label>
            <div className="relative flex justify-between">
              <div className="top absolute right-2 top-1/2 flex -translate-y-1/2 cursor-pointer gap-2 text-lg opacity-60">
                {passwordsVisibility.confirmNewPassword && (
                  <FaEyeSlash
                    onClick={() =>
                      setPasswordsVisibility({
                        ...passwordsVisibility,
                        confirmNewPassword: false,
                      })
                    }
                  />
                )}
                {!passwordsVisibility.confirmNewPassword && (
                  <FaEye
                    onClick={() =>
                      setPasswordsVisibility({
                        ...passwordsVisibility,
                        confirmNewPassword: true,
                      })
                    }
                  />
                )}
              </div>
              <input
                type={
                  !passwordsVisibility.confirmNewPassword ? "password" : "text"
                }
                className="w-full rounded-xl border-2 py-2 pl-3 pr-3 focus:outline-none"
                id="confirme-new-password"
                value={password.confirmNewPassword}
                onChange={(e) =>
                  setpassword({
                    ...password,
                    confirmNewPassword: e.target.value,
                  })
                }
                placeholder="Confirm New Password"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        disabled={
          password?.currentPassword == "" ||
          password?.newPassword == "" ||
          password?.confirmNewPassword == ""
        }
        className="fit-content mx-auto flex rounded-xl bg-buttonColor px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        Change Password
      </button>
    </form>
  );
};
export default ChangePasswordForm;
