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
          <p className="w-full text-center text-2xl !leading-snug sm:text-left md:text-5xl">
            I didn't deploy app in playstore and app store yet
          </p>
          <p className="md:text-1xl w-full text-center text-lg !leading-snug opacity-50 sm:w-1/2 sm:text-left">
            when i deploy it this link goona take to playstore or appstore
            depend on your mbile
          </p>
          <Link
            to="/"
            className="my-2 flex w-full cursor-pointer items-center justify-center gap-2 bg-[#4561EC] px-6 py-1 text-center text-white duration-300 hover:scale-[1.03] sm:w-fit sm:text-left"
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
