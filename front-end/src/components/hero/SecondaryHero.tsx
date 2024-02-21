const SecondaryHero = () => {
  return (
    <div className="bg-bgheroColor">
      <div
        className="container flex  items-center  justify-between flex-row-reverse gap-20"
        style={{ minHeight: "calc(100vh - 68px)" }}
      >
        <div className="flex-col flex gap-4">
          <p className="text-3xl font-bold ">The Best Reference</p>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>

          <button className="text-primaryColor font-bold py-2 px-3 rounded-lg">
            Learn More
          </button>
        </div>
        <div className="w-[550px]">
          <img src="assets/images/col-md-6.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default SecondaryHero;
