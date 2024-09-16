import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface AddPropertyInputProps {
  dataToSubmit: any;
  setDataToSubmit: (a: any) => any;
  inputLabel: string;
}

const AddPropertyInput = ({
  dataToSubmit,
  setDataToSubmit,
  inputLabel,
}: AddPropertyInputProps) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  return (
    <div className={`name-input w-[100%] lg:w-[30%]`}>
      <label htmlFor={inputLabel} className="font-bold">
        {inputLabel.charAt(0).toUpperCase() + inputLabel.slice(1)}
      </label>
      <div className="relative">
        {inputLabel == "password" ? (
          <>
            <div className="flex justify-between">
              <div className="right-2 top-1/2 -translate-y-1/2 absolute top flex cursor-pointer gap-2 text-lg opacity-60">
                {isHiddenPassword && (
                  <FaEyeSlash onClick={() => setIsHiddenPassword(false)} />
                )}
                {!isHiddenPassword && (
                  <FaEye onClick={() => setIsHiddenPassword(true)} />
                )}
              </div>
            </div>
            <input
              type={isHiddenPassword ? "password" : "text"}
              id="password"
              value={dataToSubmit.password}
              onChange={(e) => {
                setDataToSubmit({ ...dataToSubmit, password: e.target.value });
              }}
              className="peer w-full rounded-md border-2 bg-[#f9f9f9] px-3 pb-2 pt-4 text-xs focus:outline-none"
            />
          </>
        ) : (
          <>
            <input
              type={"text"}
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
            <label
              className={`absolute ${
                !dataToSubmit[inputLabel]
                  ? "top-3 text-[13px]"
                  : "top-1 text-[10px]"
              } left-3 opacity-50 duration-500 peer-focus:top-1 peer-focus:text-[10px]`}
            >
              {inputLabel.charAt(0).toLocaleUpperCase() + inputLabel.slice(1)}
            </label>
          </>
        )}
      </div>
    </div>
  );
};
export default AddPropertyInput;
