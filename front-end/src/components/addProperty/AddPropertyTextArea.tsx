interface AddPropertyInputProps {
  dataToSubmit: any;
  setDataToSubmit: (a: any) => any;
  inputLabel: string;
}

const AddPropertyTextArea = ({
  dataToSubmit,
  setDataToSubmit,
  inputLabel,
}: AddPropertyInputProps) => {
  return (
    <div className={`name-input w-[100%]`}>
      <label htmlFor={inputLabel} className="font-bold">
        {inputLabel.charAt(0).toUpperCase() + inputLabel.slice(1)}
      </label>
      <div className="relative">
        <div>
          <textarea
            value={dataToSubmit[inputLabel]}
            onChange={(e) =>
              setDataToSubmit({
                ...dataToSubmit,
                [inputLabel]: e.target.value,
              })
            }
            name={inputLabel}
            id={inputLabel}
            className="peer w-full rounded-md border-2 bg-[#f9f9f9] px-3 pb-2 pt-4 text-xs focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
export default AddPropertyTextArea;
