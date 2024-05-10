import { useEffect, useState } from "react";
import { categories } from "../../utils/data";
import Select from "react-select";
interface AddPropertyCategoryProps {
  dataToSubmit: any;
  setDataToSubmit: (a: any) => any;
  inputLabel: string;
}

const AddPropertyCategory = ({
  dataToSubmit,
  setDataToSubmit,
  inputLabel,
}: AddPropertyCategoryProps) => {
  const options = categories.map((category) => {
    return { value: category.label, label: category.label };
  });

  return (
    <div className={`name-input md:w-[30%] w-[100%] `}>
      <label htmlFor={inputLabel} className="font-bold">
        {inputLabel.charAt(0).toUpperCase() + inputLabel.slice(1)}
      </label>
      <div className="relative">
        <Select
          className=""
          placeholder="chose a category"
          defaultValue={null}
          onChange={(e) => {
            setDataToSubmit({...dataToSubmit,category : e?.label});
          }}
          options={options}
        />
      </div>
      
    </div>
  );
};
export default AddPropertyCategory;
