import { useState } from "react";
import logo from "../../../public/Krelli LOGO 1.png";
import { loginDataInterface } from "../../interfaces/userDataInterfaces/interface";
import toast from "react-hot-toast";
import customAxios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataToSubmit, setdataToSubmit] = useState<loginDataInterface>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(dataToSubmit)
    try {
      const { data } = await customAxios.post("/auth/login", dataToSubmit,{
        withCredentials : true
      });
      
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
        className="flex flex-col justify-center flex-1 px-6 py-12 lg:px-8"
        style={{ height: "calc(100vh - 84.14px)" }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="w-auto h-10 mx-auto" src={logo} alt="Your Company" />
          <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                    setdataToSubmit({ ...dataToSubmit, email: e.target.value })
                  }
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter Your Email"
                  required
                  className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={dataToSubmit.password}
                  onChange={(e) =>
                    setdataToSubmit({
                      ...dataToSubmit,
                      password: e.target.value,
                    })
                  }
                  autoComplete="current-password"
                  placeholder="Enter Your Password"
                  required
                  className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
