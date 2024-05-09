import { Link } from "react-router-dom";

const PhoneApp = () => {
  return (
    <div className="container flex justify-center md:flex-row flex-col items-center">
      <div className="max-w-[700px]">
        <img
          src="../../../public/phoneAppAddGroup.png"
          alt="phoneApp"
          //   className="w-[400px]"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <p className="text-3xl font-bold text-center">
          GET THE MOBILE APP NOW!
        </p>
        <div className="flex gap-2 justify-center">
          <div className="flex flex-col items-center justify-center">
            <div>
              <img src="../../../public/image 1.png" alt="" />
            </div>
            <Link to="" className="cursor-pointer -mt-6">
              <img
                src="../../../public/google-play-badge.svg"
                alt="play-store-download"
                className="w-32 h-32 "
              />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <img src="../../../public/image 1.png" alt="" />
            </div>
            <Link to="/" className="cursor-pointer -mt-6">
              <img
                src="../../../public/app-store-badge.svg"
                alt="play-store-download"
                className="w-32 h-32 "
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PhoneApp;
