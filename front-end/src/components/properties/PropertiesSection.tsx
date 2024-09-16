import { Link } from "react-router-dom";
import TitleHeading from "../title-heading/TitleHeading";
import PropertiesCard from "./PropertiesCard";
import { useState } from "react";

const PropertiesSection = () => {
  const [houses, sethouses] = useState([]);

  return (
    <section>
      <div className="container flex flex-col py-12">
        <div className="flex items-center justify-between">
          <TitleHeading>list of properties</TitleHeading>
          <Link
            to="/properties"
            className="bg-[#4561EC] px-2 py-1 text-sm text-white duration-300 hover:scale-[1.03] md:px-4 md:py-2 md:text-base"
          >
            View all properties
          </Link>
        </div>
        <div className="my-6 flex flex-wrap items-center justify-center gap-3 sm:justify-between">
          <PropertiesCard
            all={false}
            houses={houses}
            sethouses={sethouses}
            filter={null}
            setfilter={null}
          />
        </div>
      </div>
    </section>
  );
};
export default PropertiesSection;
