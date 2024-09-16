import { FaMap } from "react-icons/fa6";

const PropertiesMapButton = () => {
  
  return (
    <button className="flex gap-2 items-center mx-auto bg-buttonColor text-wrap px-6 py-2 rounded-xl  text-white">
      <FaMap/>
      <span className="">Show Map</span>
    </button>
  );
};
export default PropertiesMapButton;
