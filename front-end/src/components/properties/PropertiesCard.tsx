import { useSearchParams } from "react-router-dom";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";

interface PropertiesCardProps {
  all: boolean;
  filter: any;
  setfilter: any;
}

const PropertiesCard = ({ all, filter, setfilter }: PropertiesCardProps) => {
  const [properties, setProperties] = useState([]);

  const [SearchParams] = useSearchParams();
  const getHouses = async () => {
    try {
      if (all == false) {
        location.search == "";
      }
      const { data } = await customAxios.get("/homes" + location.search);
      if (all == false) {
        setProperties(data.data?.slice(0, 4));
      } else {
        setProperties(data.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
  };

  useEffect(() => {
    getHouses();
  }, [SearchParams]);

  return (
    <>
      {properties?.length == 0 && all ? (
        <div
          className="flex w-full items-center justify-center"
          style={{ height: "calc(100vh - 350px)" }}
        >
          <div className="flex flex-col items-center">
            <p className="font-bold">No Exact Much</p>
            <p className="mb-3 mt-1 text-center text-sm opacity-70">
              Try Changing Or Removing Some Of Your Filters
            </p>
            <div
              className="cursor-pointer rounded-xl border-2 border-black px-6 py-2 text-center font-bold"
              onClick={() => setfilter({ category: "" })}
            >
              Remove All Filters
            </div>
          </div>
        </div>
      ) : properties?.length > 0 ? (
        <>
          {properties?.map((property) => <PropertyCard property={property} />)}
        </>
      ) : null}
    </>
  );
};
export default PropertiesCard;
