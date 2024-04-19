import { useState } from "react";
import AddPropertyInput from "./AddPropertyInput";
import AddPropertyDescription from "./AddPropertyDescription";
import AddProperyPhoto from "./AddProperyPhoto";
import AddPropertySubmit from "./AddPropertySubmit";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";

const AddProperty = () => {
  const user = useSelector((state: IRootState) => state.auth.user);
  const [dataToSubmit, setDataToSubmit] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    title: "",
    wilaya: "",
    price: "",
    bathrooms: "",
    bedrooms: "",
    guests: "",
    description: "",
  });
  //title, wilaya, price, bathrooms, bedrooms, guests
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
        {!user && (
          <div className="flex gap-6 flex-wrap">
            <AddPropertyInput
              dataToSubmit={dataToSubmit}
              setDataToSubmit={setDataToSubmit}
              inputLabel="firstName"
            />
            <AddPropertyInput
              dataToSubmit={dataToSubmit}
              setDataToSubmit={setDataToSubmit}
              inputLabel="lastName"
            />
            <AddPropertyInput
              dataToSubmit={dataToSubmit}
              setDataToSubmit={setDataToSubmit}
              inputLabel="email"
            />
          </div>
        )}
        <div className="flex gap-6  flex-wrap">
          {!user && (
            <AddPropertyInput
              dataToSubmit={dataToSubmit}
              setDataToSubmit={setDataToSubmit}
              inputLabel="password"
            />
          )}
          <AddPropertyInput
            dataToSubmit={dataToSubmit}
            setDataToSubmit={setDataToSubmit}
            inputLabel="title"
          />
          <AddPropertyInput
            dataToSubmit={dataToSubmit}
            setDataToSubmit={setDataToSubmit}
            inputLabel="wilaya"
          />

          {user && (
            <AddPropertyInput
              dataToSubmit={dataToSubmit}
              setDataToSubmit={setDataToSubmit}
              inputLabel="guests"
            />
          )}
        </div>
        <div className="flex gap-6 flex-wrap">
          <AddPropertyInput
            dataToSubmit={dataToSubmit}
            setDataToSubmit={setDataToSubmit}
            inputLabel="price"
          />
          <AddPropertyInput
            dataToSubmit={dataToSubmit}
            setDataToSubmit={setDataToSubmit}
            inputLabel="bathrooms"
          />
          <AddPropertyInput
            dataToSubmit={dataToSubmit}
            setDataToSubmit={setDataToSubmit}
            inputLabel="bedrooms"
          />
        </div>
        <AddPropertyInput
          dataToSubmit={dataToSubmit}
          setDataToSubmit={setDataToSubmit}
          inputLabel="description"
        />

        <AddProperyPhoto />
        <AddPropertySubmit />
      </form>
    </div>
  );
};
export default AddProperty;
