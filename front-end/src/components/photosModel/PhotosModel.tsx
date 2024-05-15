import { useEffect, useState } from "react";
import customAxios from "../../utils/axios";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const PhotosModel = () => {
  const [images, setimages] = useState([]);
  const { id } = useParams();
  const getHousePhotosById = async () => {
    try {
      const { data } = await customAxios.get(`/homes/${id}/pictures`);
      setimages(data);
      // console.log("this is hous");
      // console.log(images);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(params.id)
  useEffect(() => {
    getHousePhotosById();
  }, []);
  return (
    <div className="container  flex justify-center items-center mt-6  ">
      <Link to={`/properties/${id}`} className="flex gap-2  left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-12 top-24 absolute  items-center bg-buttonColor rounded-xl text-white px-2 hover:scale-105 duration-300">
        <FaArrowLeftLong className="text-xl cursor-pointer  w-8 h-8 p-2 rounded-lg  " />
        <p className="text-sm">Back To The Property Page</p>
      </Link>
      <div className="flex flex-col gap-5 w-[50%] justify-center items-center mt-12">
        {images.map((image) => (
          <img src={image?.url} alt={image?.url} className="rounded-2xl" />
        ))}
        {/* {house?.Pictures?.map((picture : any) => <img src={picture?.url} alt="" />)} */}
      </div>
    </div>
  );
};
export default PhotosModel;
