import { useEffect, useState } from "react";
import customAxios from "../../utils/axios";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const PhotosModel = () => {
  const [images, setimages] = useState([]);
  const { id } = useParams();
  const getHousePhotosById = async () => {
    try {
      const { data } = await customAxios.get(`/homes/${id}/pictures`);
      setimages(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(params.id)
  useEffect(() => {
    getHousePhotosById();
  }, []);
  return (
    <div className="container mt-6 flex items-center justify-center">
      <Link
        to={`/properties/${id}`}
        className="absolute left-1/2 top-24 flex -translate-x-1/2 items-center gap-2 rounded-xl bg-buttonColor px-2 text-white duration-300 hover:scale-105 sm:left-12 sm:translate-x-0"
      >
        <FaArrowLeftLong className="h-8 w-8 cursor-pointer rounded-lg p-2 text-xl" />
        <p className="text-sm">Back To The Property Page</p>
      </Link>
      <div className="mt-12 flex w-[50%] flex-col items-center justify-center gap-5">
        {images.map((image) => (
          <img src={image?.url} alt={image?.url} className="rounded-2xl" />
        ))}
        {/* {house?.Pictures?.map((picture : any) => <img src={picture?.url} alt="" />)} */}
      </div>
    </div>
  );
};
export default PhotosModel;
