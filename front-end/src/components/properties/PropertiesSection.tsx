import { Link } from "react-router-dom";
import TitleHeading from "../title-heading/TitleHeading";
import { propertiesCardsData } from "../../utils/data";
import { FaHeart, FaStar } from "react-icons/fa6";

const PropertiesSection = () => {
  return (
    <section>
      <div className="container flex flex-col py-12">
        <div className="flex justify-between">
          <TitleHeading>list of properties</TitleHeading>
          <Link
            to="/properties"
            className="bg-[#4561EC] text-white px-4 py-2 rounded-xl"
          >
            View all properties
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 my-6">
          {propertiesCardsData.map((property) => {
            return (
              <div className="w-[240px] rounded-xl overflow-hidden">
                <div className="img">
                  <img
                    src={`../../../public/${property.path}`}
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
    </section>
  );
};
export default PropertiesSection;
