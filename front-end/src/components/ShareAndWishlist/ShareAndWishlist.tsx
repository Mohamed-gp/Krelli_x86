import toast from "react-hot-toast";
import { FaRegHeart } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";

const ShareAndWishlist = () => {
  const copy = () => {
    const input = document.createElement("input");
    input.setAttribute("value", location.href);
    document.body.appendChild(input);
    input.select();
    const result = document.execCommand("copy");
    document.body.removeChild(input);
    toast.success("copied succefuly to clipBoard,share it with your friends");
    return result;
  };
  return (
    <>
      <div className="flex gap-6 items-center">
        <div
          onClick={() => copy()}
          className="flex gap-2 items-center cursor-pointer hover:opacity-75"
        >
          <LuUpload />
          <p className="underline">Share</p>
        </div>
        <div className="flex gap-1 items-center">
          <FaRegHeart />
        </div>
      </div>
    </>
  );
};
export default ShareAndWishlist;
