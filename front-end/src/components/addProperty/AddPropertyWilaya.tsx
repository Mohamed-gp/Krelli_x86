import { useEffect, useState } from "react";
import { getWilayaIdByName, wilayasInfo } from "../../utils/data";
import Select, { StylesConfig } from "react-select";
interface AddPropertyWilayaProps {
  dataToSubmit: any;
  setDataToSubmit: (a: any) => any;
  inputLabel: string;
}

const AddPropertyWilaya = ({
  dataToSubmit,
  setDataToSubmit,
  inputLabel,
}: AddPropertyWilayaProps) => {
  const options = wilayasInfo.map((wilaya) => {
    return { value: wilaya.name, label: wilaya.name };
  });


  return (
    <div className={`name-input md:w-[30%] w-[100%] `}>
      <label htmlFor={inputLabel} className="font-bold">
        {inputLabel.charAt(0).toUpperCase() + inputLabel.slice(1)}
      </label>
      <div className="relative">
        <Select
          placeholder="chose a wilaya"
          defaultValue={null}
          onChange={(e) => {
            setDataToSubmit({ ...dataToSubmit, wilaya: e?.value });
          }}
          options={options}
        />
      </div>
    </div>
  );
};
export default AddPropertyWilaya;
