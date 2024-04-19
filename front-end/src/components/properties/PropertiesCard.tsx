import { FaHeart, FaStar } from "react-icons/fa6";
import { propertiesCardsData } from "../../utils/data";
import { useEffect } from "react";

interface PropertiesCardProps {
  all : boolean
}


const PropertiesCard = ({all}: PropertiesCardProps) => {
  
  let propertiesUsed = all ? propertiesCardsData : propertiesCardsData.slice(1,5)
  return (
    <>
    {propertiesUsed.map((property : any) => {
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
    </>
  )
}
export default PropertiesCard