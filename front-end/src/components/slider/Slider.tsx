import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
interface Slider {
  slideIndex: number;
  setslideIndex: (value: number) => void;
  imagesLength: number;
}

export default function Slider({
  slideIndex,
  setslideIndex,
  imagesLength,
}: Slider) {
  const emptyArray: number[] = [];
  for (let i = 0; i < imagesLength; i++) {
    emptyArray.push(i);
  }
  return (
    <div
      className="absolute h-full w-full"
      onClick={(e) => e.stopPropagation()}
    >
      {/* todo do the behaviour like tailwind  */}
      <button
        className="absolute left-2 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/80 p-2 text-[16px] text-black disabled:cursor-not-allowed disabled:opacity-30"
        disabled={slideIndex === 0}
        onClick={(e) => {
          e.preventDefault();
          setslideIndex(slideIndex - 1);
        }}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute right-2 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/80 p-2 text-[16px] text-black disabled:cursor-not-allowed disabled:opacity-30"
        disabled={slideIndex === imagesLength - 1}
        onClick={(e) => {
          e.preventDefault();
          setslideIndex(slideIndex + 1);
        }}
      >
        <FaArrowRight />
      </button>
      <div className="absolute bottom-4 left-1/2 z-[2000] flex -translate-x-1/2 gap-3">
        {emptyArray.map((element, index) => (
          <div
          
            key={element + index + "ele"}
            className={`h-3 w-3 cursor-pointer rounded-full bg-white ${element === slideIndex ? "opacity-100" : "opacity-40"}`}
            onClick={(e) => {
              e.preventDefault();
              setslideIndex(element);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
