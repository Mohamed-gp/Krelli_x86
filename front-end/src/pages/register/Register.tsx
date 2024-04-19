import { useState } from "react";
import logo from "../../../public/Krelli LOGO 1.png";
import { registerDataInterface } from "../../interfaces/userDataInterfaces/interface";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [dataToSubmit, setdataToSubmit] = useState<registerDataInterface>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dataToSubmit.email.trim() == "" || dataToSubmit.password.trim() == "" || dataToSubmit.firstName.trim() == "" ||  dataToSubmit.lastName.trim() == "" ) {
      return toast.error("All Inputs Are Required")
    }
    try {
      const { data } = await axios.post(
        "http://localhost:3000/auth/register",
        dataToSubmit
      );
      console.log(data);
      dispatch(authActions.login({...data,password : ""}))
      navigate("/")

      return toast.success("Account Created Succefully")
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
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
          <h2 className="mt-2 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Create new account
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name:
              </label>
              <div className="">
                <input
                  id="firstName"
                  value={dataToSubmit.firstName}
                  onChange={(e) =>
                    setdataToSubmit({
                      ...dataToSubmit,
                      firstName: e.target.value,
                    })
                  }
                  name="firstName"
                  type="text"
                  //   autoComplete="email"
                  placeholder="Enter Your First Name"
                  className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name:
              </label>
              <div>
                <input
                  id="lastName"
                  value={dataToSubmit.lastName}
                  onChange={(e) =>
                    setdataToSubmit({
                      ...dataToSubmit,
                      lastName: e.target.value,
                    })
                  }
                  name="lastName"
                  type="text"
                  //   autoComplete="email"
                  placeholder="Enter Your Last Name"
                  className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address:
              </label>
              <div>
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
                  className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                <div className="text-sm">
                  {/* to do  */}
                  {/* <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a> */}
                </div>
              </div>
              <div>
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
                  className="block pl-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
