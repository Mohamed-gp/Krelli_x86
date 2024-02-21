import { FaStar } from "react-icons/fa6";

export default function TestimonialsCard() {
  return (
    <div
            className="card flex flex-col w-[40%] gap-4 items-center py-8 px-8"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <div className="w-fit rounded-full mx-auto overflow-hidden w-[100px]">
              <img src="/assets/images/testimonial-user-cover-2.png" alt="" />
            </div>
            <p className="text-center opacity-50 my-2">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="flex justify-center">
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="" />
            </div>
            <p className="opacity-60 text-center font-bold">John Doe</p>
            <p className="opacity-60 text-center">Patient</p>
          </div>
  )
}