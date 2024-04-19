import { useEffect, useState } from "react";
import AddPropertyInput from "./AddPropertyInput";
import AddProperyPhoto from "./AddProperyPhoto";
import AddPropertySubmit from "./AddPropertySubmit";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";

const AddProperty = () => {
  const user = useSelector((state: IRootState) => state.auth.user);
  const [dataToSubmit, setDataToSubmit] = useState({
    firstName: "" ,
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
  const formData= new FormData()
  const submitHandler = (e) => {
    e.preventDefault()
  }
  useEffect(() => {
    formData.append("firstName",dataToSubmit?.firstName)
    formData.append("lastName",dataToSubmit?.lastName)
    formData.append("email",dataToSubmit?.email)
    formData.append("password",dataToSubmit.password)
    formData.append("title",dataToSubmit.title)
    formData.append("wilaya",dataToSubmit.wilaya)
    formData.append("price",dataToSubmit.price)
    formData.append("bathrooms",dataToSubmit.price)
    formData.append("bedrooms",dataToSubmit.wilaya)
    formData.append("guests",dataToSubmit.guests)
    formData.append("description",dataToSubmit.description)
  },[dataToSubmit])
  return (
    <div className="container">
      <p className="font-bold text-center text-xl">
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </p>
      <form onSubmit={submitHandler} className="flex flex-col my-6 bg-white border-2 rounded-xl border-black py-6 px-6 gap-6">
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

        <AddProperyPhoto
          dataToSubmit={dataToSubmit}
          // setDataToSubmit={setDataToSubmit}
          formData={formData}
        />
        <AddPropertySubmit />
      </form>
    </div>
  );
};
export default AddProperty;
