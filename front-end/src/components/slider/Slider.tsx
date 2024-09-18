import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
interface Slider {
  slideIndex: number;
  setslideIndex: (value: number) => void;
}

export default function Slider({ slideIndex, setslideIndex }: Slider) {
  const emptyArray: number[] = [];
  for (let i = 0; i < 3; i++) {
    emptyArray.push(i);
  }
  return (
    <div className="absolute h-full w-[400px]">
      <button
        className="absolute left-12 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-black disabled:cursor-not-allowed disabled:opacity-30"
        disabled={slideIndex === 0}
        onClick={() => setslideIndex(slideIndex - 1)}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute right-12 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-black disabled:cursor-not-allowed disabled:opacity-30"
        disabled={slideIndex === 2}
        onClick={() => setslideIndex(slideIndex + 1)}
      >
        <FaArrowRight />
      </button>
      <div className="absolute bottom-4 left-1/2 z-[2000] flex -translate-x-1/2 gap-3">
        {emptyArray.map((element) => (
          <div
            className={`h-3 w-3 cursor-pointer rounded-full bg-white ${element === slideIndex ? "opacity-100" : "opacity-40"}`}
            onClick={() => setslideIndex(element)}
          ></div>
        ))}
      </div>
    </div>
  );
}
