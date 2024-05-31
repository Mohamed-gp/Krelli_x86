import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const CalendarAndReserve = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [daysCount, setdaysCount] = useState(0);
  useEffect(() => {
    if (state[0].endDate) {
      const difference: any = new Date(state[0].endDate - state[0].startDate);
      const unixDate: any = new Date(0);
      const dif = difference - unixDate;
      setdaysCount(dif / 1000 / 3600 / 24);
    }
  }, [state]);
  return (
    <div className="flex flex-col bg-white p-6 rounded-xl h-fit ">
      <p className="my-2">
        <span className="text-2xl">$47</span> night
      </p>
      <div className="flex w-full   justify-center items-center">
        <div className="w-[342px]">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </div>
      </div>
      <button className="cursor-pointer mx-auto w-full   text-white px-6 py-1 rounded-xl bg-[#3d91ff] duration-300 hover:scale-105 justify-center my-2 flex items-center gap-2">
        Reserve
      </button>
      <div className="flex justify-between my-2 text-2xl">
        <p className="font-bold text-lg">Nights</p>
        <p>${daysCount} * 47</p>
      </div>
      <div className="flex justify-between my-2 text-2xl">
        <p className="font-bold">Total</p>
        <p>${daysCount * 47}</p>
      </div>
    </div>
  );
};
export default CalendarAndReserve;
