import { useState } from "react";
import AddPropertyInput from "./AddPropertyInput";
import AddPropertyDescription from "./AddPropertyDescription";
import AddProperyPhoto from "./AddProperyPhoto";
import AddPropertySubmit from "./AddPropertySubmit";

const AddProperty = () => {
  const [data, setData] = useState({ name: "" });
  return (
    <div className="container">
      <p className="font-bold text-center text-xl">
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </p>
      <form className="flex flex-col my-6 bg-white border-2 rounded-xl border-black py-6 px-6 gap-6">
        <p className="text-center font-bold text-[#4561EC]">
          Add A New Property
        </p>
        <div className="flex gap-6">
          <AddPropertyInput data={data} setData={setData} />
          <AddPropertyInput data={data} setData={setData} />
          <AddPropertyInput data={data} setData={setData} />
        </div>
        <div className="flex gap-6">
          <AddPropertyInput data={data} setData={setData} />
          <AddPropertyInput data={data} setData={setData} />
          <AddPropertyInput data={data} setData={setData} />
        </div>
        <div className="flex gap-6">
          <AddPropertyInput data={data} setData={setData} />
          <AddPropertyInput data={data} setData={setData} />
        </div>
        <AddPropertyDescription />
        <AddProperyPhoto />
        <AddPropertySubmit />
      </form>
    </div>
  );
};
export default AddProperty;
