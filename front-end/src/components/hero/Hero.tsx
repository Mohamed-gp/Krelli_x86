import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 84.14px)",
        background: "url(/heroBG.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
      className="relative flex items-center"
    >
      <div className="absolute left-0 top-0 h-full w-full bg-black/50"></div>
      <div className="container relative flex h-full items-center justify-between text-white">
        <div className="flex flex-col gap-2">
          <p className="w-full text-center text-2xl !leading-snug sm:text-left md:text-5xl">
            Find Your Perfect Rental Home
          </p>
          <p className="md:text-1xl w-full text-center text-lg !leading-snug opacity-50 sm:w-1/2 sm:text-left">
            Discover a wide range of rental properties, from cozy apartments to
            spacious homes, all tailored to your needs and budget.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to="/properties"
              className="my-2 w-full cursor-pointer bg-white px-6 py-1 text-center font-bold text-buttonColor duration-300 hover:scale-[1.03] sm:w-fit sm:text-left"
            >
              Find Now
            </Link>
            <a
              href="#addProperty"
              className="my-2 flex w-full cursor-pointer items-center justify-center gap-2 bg-[#4561EC] px-6 py-1 text-center text-white duration-300 hover:scale-[1.03] sm:w-fit sm:text-left"
            >
              <span>Rent Your House</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
