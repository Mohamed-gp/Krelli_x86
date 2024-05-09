import { ImStatsDots } from "react-icons/im";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

import { propertiesCardsData } from "../../utils/data";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaEye,
  FaHeart,
  FaHouse,
  FaPencil,
  FaPlus,
  FaStar,
  FaTrash,
} from "react-icons/fa6";

import LeftSideNav from "../../components/leftSideNav/LeftSideNav";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <div className=" flex   mt-12 gap-6 ">
        {/* left side */}
        <LeftSideNav />
        {/* right side */}
        <div className="flex flex-col w-full">
          <p className="text-3xl font-bold mb-6">Statistics</p>
          <div className="flex items-center justify-between gap-3 my-6 m-2 xl:mx-12 xl:flex-row flex-col">
            <div className="flex bg-white xl:w-[25%] w-full h-[140px] items-start justify-between p-4 rounded-xl">
              <div className="flex flex-col">
                <p>Total Properties</p>
                <p className="font-bold">4 Properties</p>
              </div>
              <div className="div flex justify-center items-center bg-[#8280ff61] p-2 rounded-xl">
                <span className="text-[#8280FF]">
                  <FaHouse />
                </span>
              </div>
            </div>
            <div className="flex flex-wrap bg-white xl:w-[25%] w-full h-[140px] items-start justify-between p-4 rounded-xl">
              <div className="flex flex-col">
                <p>Total Views</p>
                <p className="font-bold">10293</p>
              </div>
              <div className="div flex justify-center items-center bg-[rgba(254,196,61,0.38)] p-2 rounded-xl">
                <span className="text-[#FEC53D]">
                  <FaEye />
                </span>
              </div>
              <div className="flex w-full items-center gap-2">
                <span className="text-[#00B69B]">
                  <FaArrowTrendUp />
                </span>
                <p className="font-bold">
                  <span className="text-[#00B69B]">1.3%</span> Up from past week
                </p>
              </div>
            </div>
            <div className="flex flex-wrap bg-white xl:w-[25%] w-full h-[140px] items-start justify-between p-4 rounded-xl">
              <div className="flex flex-col">
                <p>Income</p>
                <p className="font-bold">$89 / Night</p>
              </div>
              <div className="div flex justify-center items-center bg-[rgba(74,217,146,0.38)] p-2 rounded-xl">
                <span className="text-[#4AD991]">
                  <ImStatsDots />
                </span>
              </div>
              <div className="flex w-full items-center gap-2">
                <span className="text-[#F93C65]">
                  <FaArrowTrendDown />
                </span>
                <p className="font-bold">
                  <span className="text-[#F93C65]">1.3%</span> Up from past week
                </p>
              </div>
            </div>
            <div className="flex flex-wrap bg-white xl:w-[25%] w-full h-[140px] items-start justify-between p-4 rounded-xl">
              <div className="flex flex-col">
                <p>Total Views</p>
                <p className="font-bold">10293</p>
              </div>
              <div className="div flex justify-center items-center bg-[rgba(255,143,102,0.38)] p-2 rounded-xl">
                <span className="text-[#FF9066]">
                  <MdOutlineAccessTimeFilled />
                </span>
              </div>
              <div className="flex w-full items-center gap-2">
                <span className="text-[#00B69B]">
                  <FaArrowTrendUp />
                </span>
                <p className="font-bold">
                  <span className="text-[#00B69B]">1.3%</span> Up from past week
                </p>
              </div>
            </div>
          </div>
          <p className="text-3xl font-bold mb-6">Properties</p>
          <div className="bg-white rounded-xl p-6 m-2">
            <p className="font-bold mb-4 text-xl">Deals Details</p>
            <div className=" overflow-x-auto w-[180px] sm:w-[500px] lg:w-[600px]  xl:w-[1000px]  mx-auto">
              <table className="w-full rounded-xl">
                <thead>
                  <tr className="bg-[#F1F4F9] roudned-xl h-8">
                    <td className="rounded-l-xl">Property</td>
                    <td>State</td>
                    <td>Date-Time</td>
                    <td>Profit</td>
                    <td className="rounded-r-xl">Action</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Property</td>
                    <td className="h-12">
                      <span className="bg-[#FEC53D]  font-bold text-white px-3 py-1 rounded-xl w-fit">
                        Available
                      </span>
                    </td>
                    <td>2024/23/2</td>
                    <td>$34,295</td>
                    <td>
                      <div className="flex items-center justify-center gap-2 text-white w-[260px] mx-auto">
                        <button
                          className="px-3 py-1 bg-red-400 rounded-xl"
                          onClick={() => console.log("propertyDeleted")}
                        >
                          Delete Category
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Property</td>
                    <td className="h-12">
                      <span className="bg-[#FEC53D]  font-bold text-white px-3 py-1 rounded-xl w-fit">
                        Available
                      </span>
                    </td>
                    <td>2024/23/2</td>
                    <td>$34,295</td>
                    <td>
                      <div className="flex items-center justify-center gap-2 text-white w-[260px] mx-auto">
                        <button
                          className="px-3 py-1 bg-red-400 rounded-xl"
                          onClick={() => console.log("propertyDeleted")}
                        >
                          Delete Category
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Property</td>
                    <td className="h-12">
                      <span className="bg-[#FEC53D]  font-bold text-white px-3 py-1 rounded-xl w-fit">
                        Available
                      </span>
                    </td>
                    <td>2024/23/2</td>
                    <td>$34,295</td>
                    <td>
                      <div className="flex items-center justify-center gap-2 text-white w-[260px] mx-auto">
                        <button
                          className="px-3 py-1 bg-red-400 rounded-xl"
                          onClick={() => console.log("propertyDeleted")}
                        >
                          Delete Category
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-end mt-12">
              <Link to="/#addProperty" className="flex font-bold items-center gap-2 bg-[rgba(0,182,155,0.38)] px-3 py-1 rounded-2xl">
                <p className="text-[#00B69B] ">ADD PROPERTY</p>
                <span className="text-[#00B69B]">
                  <FaPlus />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashBoard;
