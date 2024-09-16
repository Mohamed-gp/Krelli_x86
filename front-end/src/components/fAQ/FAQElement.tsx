import { useState } from "react";
import { motion } from "framer-motion";

interface FAQElementInterface {
  question: string;
  answer: string;
}

const FAQElement = ({ question, answer }: FAQElementInterface) => {
  const [open, setopen] = useState(false);
  return (
    <div className="w-full p-1">
      <div
        onClick={() => setopen((prev) => !prev)}
        className="shadow-10xl cursor-pointer rounded-2xl border-2 bg-white bg-opacity-60 px-8 py-7 duration-500 hover:border-indigo-600"
      >
        <div className="-m-5 flex flex-wrap justify-between">
          <div className="flex-1 p-2">
            <h3 className="text-lg font-semibold leading-normal">{question}</h3>
            {open && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={`font-medium text-gray-600`}
              >
                {answer}
              </motion.p>
            )}
          </div>
          <div className="w-auto p-2">
            <svg
              className={`relative top-1 cursor-pointer ${
                open ? "rotate-0" : "rotate-180"
              } duration-500`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                stroke="#4F46E5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQElement;
