import axios from "axios";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function page() {
  const [username, setusername] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const submiteHandler = async (e) => {
    e.preventDefault();
    if (email.trim() == "") {
      return toast.error("email is required");
    }
    if (username.trim() == "") {
      return toast.error("username is required");
    }
    if (password.trim() == "") {
      return toast.error("password is required");
    }
    try {
      const { data } = await axios.post("http://localhost:3000/auth/register", {
        username,
        email,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div
          style={{
            minHeight: "calc(100vh - 70.94px)",
            boxShadow: "rgb(255 255 255 / 30%) 0px 0px 74px 55px",
          }}
          className="flex flex-col justify-center w-auto h-full px-6 md:w-1/2"
        >
          <p className="text-xl font-bold">Sign Up</p>
          <p className="text-sm">
            Sign up for free to access to in any of our products{" "}
          </p>
          <button className="flex justify-center w-full gap-2 py-2 my-2 border-2 rounded-xl text-mainColor">
            <img
              src="assets/images/google-logo-png-29546.png"
              alt="google"
              width={20}
              height={20}
            />
            <p>Continue With Google</p>
          </button>
          <div className="relative my-2 text-center or-sign-up ">
            <span className="relative z-20 px-2 mx-auto font-bold bg-white">
              OR
            </span>
          </div>
          <form action="" className="flex flex-col" onSubmit={submiteHandler}>
            <label htmlFor="username">Username : </label>
            <input
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
              type="text"
              id="username"
              className="py-1 pl-2 mt-1 mb-2 border-2 rounded-lg focus:outline-none"
            />

            <label htmlFor="email">Email : </label>
            <input
              value={email}
              type="email"
              id="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="py-1 pl-2 mt-1 mb-2 border-2 rounded-lg focus:outline-none"
            />
            <div className="flex justify-between">
              <label htmlFor="email" className="">
                Password
              </label>
              <div className="flex gap-2 mr-2 text-lg cursor-pointer opacity-60">
                <FaEyeSlash />
              </div>
            </div>
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              type="password"
              id="password"
              className="py-2 pl-2 mt-1 mb-2 border-2 rounded-lg focus:outline-none"
            />
            <span className="mt-1 mb-2 text-center opacity-50 text-bgColorDanger">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </span>
            <button
              type="submit"
              className="px-6 py-2 mx-auto text-xl font-bold text-white w-fit rounded-xl bg-mainColor"
            >
              Sign Up
            </button>
            <div className="flex items-center justify-center gap-2 mt-2">
              <p className="opacity-50">Already Have An Account ? </p>
              <Link href="/login" className="underline text-mainColor">
                Sign In
              </Link>
            </div>
          </form>
        </div>
        <div
          className="hidden w-1/2 h-full md:block"
          style={{
            minHeight: "calc(100vh - 70.94px)",
            backgroundImage: `url(assets/images/${"purple-wallpaper-with-swirly-background.jpg"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
}
