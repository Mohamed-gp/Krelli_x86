interface AddPropertyInputProps {
  dataToSubmit : any,
  setDataToSubmit : (a : any) => any,
  inputLabel : string,
}



const AddPropertyInput = ({ dataToSubmit,setDataToSubmit ,inputLabel } : AddPropertyInputProps) => {

  return (
    <div className={`name-input md:w-[30%] w-[100%] `}>
      <label htmlFor={inputLabel} className="font-bold">
        {inputLabel.charAt(0).toUpperCase() + inputLabel.slice(1)}
      </label>
      <div className="relative">
        <input
          type="text"
          value={dataToSubmit[inputLabel]}
          onChange={(e) => setDataToSubmit({ ...dataToSubmit,[inputLabel] : e.target.value })}
          name={inputLabel}
          id={inputLabel}
          className="peer w-full pt-5 pb-2 px-3 border-2 text-xs   focus:outline-none rounded-md bg-[#E6E6E6]"
        />
        <label
          htmlFor="name"
          className={`absolute ${
            !dataToSubmit[inputLabel] ? "text-[13px] top-3" : "text-[10px] top-1 "
          }  peer-focus:text-[10px] peer-focus:top-1 duration-500 left-3  opacity-50`}
        >
          {inputLabel.charAt(0).toLocaleUpperCase() + inputLabel.slice(1)}
        </label>
      </div>
    </div>
  );
};
export default AddPropertyInput;
