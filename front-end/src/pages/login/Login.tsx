import { useState } from "react";
import { loginDataInterface } from "../../interfaces/userDataInterfaces/interface";
import toast from "react-hot-toast";
import customAxios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/authSlice";
import GoogleSignInButton from "../../components/googleSignInButton/GoogleSignInButton";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  const [dataToSubmit, setDataToSubmit] = useState<loginDataInterface>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(dataToSubmit);
    try {
      const { data } = await customAxios.post("/auth/login", dataToSubmit);
      console.log(data);
      dispatch(authActions.login({ ...data, password: "" }));
      toast.success("login Successful");
      navigate("/");
    } catch (error: any) {
      toast.error(error.response.data);
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="flex flex-1 flex-col justify-center px-6 py-2 lg:px-8"
        style={{ minHeight: "calc(100vh - 84.14px)" }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/Krelli LOGO 1.png"
            alt="Your Company"
          />
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address:
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  value={dataToSubmit.email}
                  onChange={(e) =>
                    setDataToSubmit({ ...dataToSubmit, email: e.target.value })
                  }
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter Your Email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password:
                </label>
              </div>

              <div className="relative flex justify-between">
                <div className="top absolute right-2 top-1/2 flex -translate-y-1/2 cursor-pointer gap-2 text-lg opacity-60">
                  {isHiddenPassword && (
                    <FaEyeSlash onClick={() => setIsHiddenPassword(false)} />
                  )}
                  {!isHiddenPassword && (
                    <FaEye onClick={() => setIsHiddenPassword(true)} />
                  )}
                </div>
                <input
                  type={isHiddenPassword ? "password" : "text"}
                  id="password"
                  value={dataToSubmit.password}
                  onChange={(e) => {
                    setDataToSubmit({
                      ...dataToSubmit,
                      password: e.target.value,
                    });
                  }}
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <GoogleSignInButton />
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
            <div className="mt-2 flex items-center justify-center gap-2">
              <p className="opacity-50">Don't Have An Account ? </p>
              <Link to="/register" className="text-mainColor underline">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
