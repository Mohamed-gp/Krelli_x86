const HeroAboutSection = () => {
  return (
    <section
      style={{ height: "calc(100vh - 84.14px)" }}
      className="py-14 lg:py-24 relative z-0 bg-gray-50"
    >
      <div className="container  sm:px-2 lg:px-4 relative text-center">
        <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-2xl  text-gray-900 mb-5 md:text-5xl md:leading-normal">
          Enhance Rental Property Management with Our{" "}
          <span className="text-indigo-600">Software Solution</span>
        </h1>
        <p className="w-full lg:w-[70%] mx-auto text-center lg:px-20 text-base font-normal leading-7 text-gray-500 mb-9">
          Efficiently oversee your rental houses, making informed decisions and
          maximizing investment returns effortlessly. Simplify operations and
          optimize wealth management with ease
        </p>
      </div>
    </section>
  );
};
export default HeroAboutSection;
