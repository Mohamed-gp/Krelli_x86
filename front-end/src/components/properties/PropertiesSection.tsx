import { Link } from "react-router-dom";
import TitleHeading from "../title-heading/TitleHeading";
import PropertiesCard from "./PropertiesCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import customAxios from "../../utils/axios";

const PropertiesSection = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    getHouses();
  }, []);
  const getHouses = async () => {
    try {
      const { data } = await customAxios.get("/homes");
      setProperties(data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
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
        <div className="my-6 flex flex-wrap items-center justify-center gap-12">
          <PropertiesCard all={false} properties={properties} />
        </div>
      </div>
    </section>
  );
};
export default PropertiesSection;
