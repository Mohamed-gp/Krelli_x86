import { Link } from "react-router-dom";
import TitleHeading from "../title-heading/TitleHeading";
import { propertiesCardsData } from "../../utils/data";
import { FaHeart, FaStar } from "react-icons/fa6";
import PropertiesCard from "./PropertiesCard";
import { useState } from "react";

const PropertiesSection = () => {
  const [houses, sethouses] = useState([]);

  return (
    <section>
      <div className="container flex flex-col py-12">
        <div className="flex justify-between items-center">
          <TitleHeading>list of properties</TitleHeading>
          <Link
            to="/properties"
            className="bg-[#4561EC] text-white px-2 md:px-4 py-1 md:py-2 rounded-xl md:text-base text-sm"
          >
            View all properties
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center sm:justify-between  gap-3 my-6">
          <PropertiesCard all={false} houses={houses} sethouses={sethouses} filter={null} setfilter={null} />
        </div>
      </div>
    </section>
  );
};
export default PropertiesSection;
