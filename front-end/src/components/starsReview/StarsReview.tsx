import { FaStar } from "react-icons/fa6";

interface StarsReviewProps {
  rating: number;
}

const StarsReview = ({ rating }: StarsReviewProps) => {
  return (
    <div className="inline-flex">

      <FaStar className={`${rating >= 1 ? "text-yellow-300" : ""}`} />
      <FaStar className={`${rating >= 2 ? "text-yellow-300" : ""}`} />
      <FaStar className={`${rating >= 3 ? "text-yellow-300" : ""}`} />
      <FaStar className={`${rating >= 4 ? "text-yellow-300" : ""}`} />
      <FaStar className={`${rating >= 5 ? "text-yellow-300" : ""}`} />
    </div>
  );
};
export default StarsReview;
