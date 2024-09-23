import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const InProgressApp = () => {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 84.14px)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative flex items-center"
    >
      <div className="absolute left-0 top-0 h-full w-full"></div>
      <div className="container relative flex h-full items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="w-full text-center text-2xl !leading-snug md:text-5xl lg:text-left">
            I haven't deployed the app to the Play Store and App Store yet.
          </p>
          <p className="md:text-1xl w-full text-center text-lg !leading-snug opacity-50 lg:w-1/2 lg:text-left">
            When I deploy it, this link will take you to the Play Store or App
            Store, depending on your mobile device.
          </p>
          <Link
            to="/"
            className="my-2 flex w-full cursor-pointer items-center justify-center gap-2 bg-[#4561EC] px-6 py-1 text-center text-white duration-300 hover:scale-[1.03] lg:w-fit lg:text-left"
          >
            <span>Go To Home Page</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default InProgressApp;
