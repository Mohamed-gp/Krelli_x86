import { Link } from "react-router-dom";

const PhoneApp = () => {
  return (
    <div className="container flex flex-col items-center justify-center md:flex-row">
      <div className="max-w-[700px]">
        <img
          src="/phoneAppAddGroup.png"
          alt="phoneApp"
          //   className="w-[400px]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-center text-3xl font-bold">
          GET THE MOBILE APP NOW!
        </p>
        <div className="flex justify-center gap-2">
          <div className="flex flex-col items-center justify-center">
            <div>
              <img src="/image 1.png" alt="" />
            </div>
            <div className="-mt-6">
              <img
                src="/google-play-badge.svg"
                alt="play-store-download"
                className="h-32 w-32"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <img src="/image 1.png" alt="" />
            </div>
            <div className="-mt-6">
              <img
                src="/app-store-badge.svg"
                alt="play-store-download"
                className="h-32 w-32"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PhoneApp;
