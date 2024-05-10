import { FaHeart, FaStar } from "react-icons/fa6";
// this for static data
// import { propertiesCardsData } from "../../utils/data";
import { Link, useSearchParams } from "react-router-dom";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { BsHeart } from "react-icons/bs";
import { getWilayaIdByName, getWilayaNameById } from "../../utils/data";

interface PropertiesCardProps {
  all: boolean;
  houses: any[];
  sethouses: (a: any) => any;
  filter: any;
  setfilter: any;
}

const PropertiesCard = ({
  all,
  houses,
  sethouses,
  filter,
  setfilter,
}: PropertiesCardProps) => {
  const [SearchParams, setSearchParams] = useSearchParams();
  const getHouses = async () => {
    try {
      if (all == false) {
        location.search == "";
      }
      const { data } = await customAxios("/homes" + location.search);
      sethouses(data);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    }
  };
  useEffect(() => {
    getHouses();
  }, [SearchParams]);

  console.log(houses[0]);

  return (
    <>
      {houses.length == 0 ? (
        <div
          className="flex justify-center items-center w-full"
          style={{ height: "calc(100vh - 350px)" }}
        >
          <div className="flex flex-col items-center">
            <p className="font-bold">No Exact Much</p>
            <p className="opacity-70 text-sm mt-1 mb-3 text-center">
              Try Changing Or Removing Some Of Your Filters
            </p>
            <div
              className="border-2 font-bold border-black px-6 py-2 rounded-xl text-center cursor-pointer"
              onClick={() => setfilter({ category: "", wilaya: "" })}
            >
              Remove All Filters
            </div>
          </div>
        </div>
      ) : (
        houses?.map((property: any) => {
          return (
            <Link
              to={`/properties/${property.id}`}
              key={property.path}
              className="w-[240px] rounded-xl overflow-hidden"
            >
              <div className="img relative">
                <img src={property?.Pictures[0]?.url} alt={property.title} />
                <FaHeart className="absolute top-[11px] right-3 text-xl"/>
                
                <BsHeart className="absolute top-3 right-3 text-xl text-white"/>
              </div>
              <div className="flex flex-col gap-2 px-3 py-4">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="font-bold">{property.title}</p>
                    <p>${property.price}/ Night</p>
                  </div>
                  <div>
                    <p className="font-bold">{getWilayaNameById(property.wilaya)}</p>
                    
                  </div>
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
            </Link>
          );
        })
      )}
    </>
  );
};
export default PropertiesCard;

/* 











*/
