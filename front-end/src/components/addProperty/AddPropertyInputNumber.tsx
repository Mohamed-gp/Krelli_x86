interface AddPropertyInputNumberProps {
  dataToSubmit: any;
  setDataToSubmit: (a: any) => any;
  inputLabel: string;
}

const AddPropertyInputNumber = ({
  dataToSubmit,
  setDataToSubmit,
  inputLabel,
}: AddPropertyInputNumberProps) => {
  return (
    <div className={`name-input w-[100%] lg:w-[30%]`}>
      <label htmlFor={inputLabel} className="font-bold">
        {inputLabel.charAt(0).toUpperCase() + inputLabel.slice(1)}
        {inputLabel == "price" && " In USD"} 
      </label>
      <div className="relative">
        <input
          type={"number"}
          value={dataToSubmit[inputLabel]}
          onChange={(e) =>
            setDataToSubmit({ ...dataToSubmit, [inputLabel]: e.target.value })
          }
          name={inputLabel}
          id={inputLabel}
          className="peer w-full rounded-md border-2 bg-[#f9f9f9] px-3 pb-2 pt-4 text-xs focus:outline-none"
        />
        <label
          className={`absolute ${
            (dataToSubmit[inputLabel] + "").length == 0
              ? "top-3 text-[13px]"
              : "top-1 text-[10px]"
          } pointer-events-none left-3 opacity-50 duration-500 peer-focus:top-1 peer-focus:text-[10px]`}
        >
          {inputLabel.charAt(0).toLocaleUpperCase() + inputLabel.slice(1)}
        </label>
      </div>
    </div>
  );
};
export default AddPropertyInputNumber;
