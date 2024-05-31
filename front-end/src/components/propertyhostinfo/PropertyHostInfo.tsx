const PropertyHostInfo = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-2 my-3   ">
        <div className="size-10 rounded-full overflow-hidden">
          <img src="../../../public/profile.jpg" alt="" />
        </div>
        <div className="flex flex-col  opacity-90">
          <p>
            Hosted by <span className="font-bold ">Mohamed</span>
          </p>
          <p>
            Member Since <span className="">2005/12/12</span>
          </p>
        </div>
      </div>
      <button className="cursor-pointer flex gap-2 py-2 items-center text-white px-6  rounded-xl bg-[#4561EC] duration-300 hover:scale-105 ">
        Message Host
      </button>
    </div>
  );
};
export default PropertyHostInfo;
