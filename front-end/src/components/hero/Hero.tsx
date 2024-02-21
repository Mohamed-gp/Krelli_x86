const Hero = () => {
  return (
    <div className="bg-bgheroColor">
      <div
        className="container flex items-center justify-between "
        style={{ minHeight: "calc(100vh - 68px)" }}
      >
        <div className="flex flex-col gap-4">
          <p className="font-bold text-primaryColor">For Better Future</p>
          <p className="text-3xl font-bold ">Meet the Best Hospital</p>
          <p>
            DentalCare is most focused in helping you discover your most
            beauiful smile
          </p>
          <div className="flex gap-2">
            <button className="bg-primaryColor w-[150px] text-white py-2 px-3 rounded-lg">
              Get Quote Now
            </button>
            <button className="text-primaryColor border-2 w-[150px] py-2 px-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-[550px] sm:block hidden">
          <img src="assets/images/hero-cover-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
