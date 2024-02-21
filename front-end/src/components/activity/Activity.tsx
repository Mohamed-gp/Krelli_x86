import { FaHeart } from "react-icons/fa6";

const Activity = () => {
  return (
    <div className="container my-40">
      <div className="flex-col flex gap-4">
        <p className="text-primaryColor font-bold">Cancer Care</p>
        <p className="text-3xl font-bold ">Our Activity</p>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <div className="flex justify-between my-10">
          <div
            className="card flex flex-col w-[20%] gap-4 items-center py-8"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <div>
              <FaHeart className="text-red-500 text-xl" />
            </div>
            <p className="font-bold border-b-2 border-b-secondaryColor">
              Book Now
            </p>
            <p className="opacity-60 text-center">
              The gradual accumulation of information about{" "}
            </p>
          </div>
          <div
            className="card flex flex-col w-[20%] gap-4 items-center py-8"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <div>
              <FaHeart className="text-red-500 text-xl" />
            </div>
            <p className="font-bold border-b-2 border-b-secondaryColor">
              Book Now
            </p>
            <p className="opacity-60 text-center">
              The gradual accumulation of information about{" "}
            </p>
          </div>
          <div
            className="card flex flex-col w-[20%] gap-4 items-center py-8"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <div>
              <FaHeart className="text-red-500 text-xl" />
            </div>
            <p className="font-bold border-b-2 border-b-secondaryColor">
              Book Now
            </p>
            <p className="opacity-60 text-center">
              The gradual accumulation of information about{" "}
            </p>
          </div>
          <div
            className="card flex flex-col w-[20%] gap-4 items-center py-8"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <div>
              <FaHeart className="text-red-500 text-xl" />
            </div>
            <p className="font-bold border-b-2 border-b-secondaryColor">
              Book Now
            </p>
            <p className="opacity-60 text-center">
              The gradual accumulation of information about{" "}
            </p>
          </div>
            
        </div>
      </div>
    </div>
  );
};
export default Activity;
