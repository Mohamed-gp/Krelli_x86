import { propertiesCardsData } from "../../utils/data";
import { FaHeart, FaStar } from "react-icons/fa6";


import LeftSideNav from "../../components/leftSideNav/LeftSideNav";

const Favorites = () => {
  return (
    <>
      <div className=" flex    mt-12 gap-6 ">
        {/* left side */}
        <LeftSideNav />
        {/* right side */}
        <div>
          <p className="text-3xl font-bold mb-6">Favorites</p>

          <div className="flex flex-wrap items-center justify-between gap-3 my-6 mx-12">
            {propertiesCardsData.map((property) => {
              return (
                <div className="w-[240px] rounded-xl overflow-hidden">
                  <div className="img">
                    <img
                      src={property.path}
                      alt={property.title}
                    />
                  </div>
                  <div className="flex flex-col gap-2 px-3 py-4">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="font-bold">{property.title}</p>
                        <p>$120.00/ Night</p>
                      </div>
                      <FaHeart />
                    </div>
                    <div className="flex gap-1">
                      <span className="flex text-yellow-400">
                        <FaStar />
                      </span>
                      <span className="flex text-yellow-400">
                        <FaStar />
                      </span>
                      <span className="flex text-yellow-400">
                        <FaStar />
                      </span>
                      <span className="flex text-yellow-400">
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Favorites;
