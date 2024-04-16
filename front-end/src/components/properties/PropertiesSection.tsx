import { Link } from "react-router-dom";
import TitleHeading from "../title-heading/TitleHeading";
import { propertiesCardsData } from "../../utils/data";
import { FaHeart, FaStar } from "react-icons/fa6";
import PropertiesCard from "./PropertiesCard";



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
        <div className="flex flex-wrap items-center justify-center sm:justify-between  gap-3 my-6">
          <PropertiesCard all={false} />
          
        </div>
      </div>
    </section>
  );
};
export default PropertiesSection;
