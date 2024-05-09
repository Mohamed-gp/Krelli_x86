import { useState } from "react";
import AddPropertyInput from "./AddPropertyInput";
import AddProperyPhoto from "./AddProperyPhoto";
import AddPropertySubmit from "./AddPropertySubmit";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";

const AddProperty = () => {
  const user = useSelector((state: IRootState) => state.auth.user);
  const [dataToSubmit, setDataToSubmit] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    title: "",
    wilaya: "",
    category : "",
    price: "",
    bathrooms: "",
    bedrooms: "",
    guests: "",
    description: "",
    files : []
  });
  const formData = new FormData();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (dataToSubmit?.firstName?.length != 0) {
      formData.append("firstName", dataToSubmit?.firstName);
    }
    if (dataToSubmit?.lastName?.length != 0) {
      formData.append("lastName", dataToSubmit?.lastName);
    }
    if (dataToSubmit?.email?.length != 0) {
      formData.append("email", dataToSubmit?.email);
    }
    if (dataToSubmit?.password.length != 0) {
      formData.append("password", dataToSubmit?.password);
    }
    formData.append("title", dataToSubmit?.title);
    formData.append("wilaya", dataToSubmit?.wilaya);
    formData.append("price", dataToSubmit?.price);
    formData.append("bathrooms", dataToSubmit?.bathrooms);
    formData.append("bedrooms", dataToSubmit?.bedrooms);
    formData.append("guests", dataToSubmit?.guests);
    formData.append("description", dataToSubmit?.description);
    formData.append("category", dataToSubmit?.category);
    dataToSubmit?.files.forEach((file) => {
      formData.append("files", file);
    });
    console.log(dataToSubmit?.files)
    try {
      // console.log(user);
      // console.log("##@@@");
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      const url = user
        ? "/host/homes"
        : "/auth/addHome";
      console.log(url);
      const { data } = await customAxios.post(url, formData,{
        withCredentials : true,
      });
      url == "/host/homes" ? toast.success("property created successfuly") : toast.success("accout created and property add successfuly")
      console.log(data);
    } catch (error: any) {
      console.log(error)
      toast.error(error.response.data);
      console.log(error);
    }
  };

  return (
    <div className="container" id="addProperty">
      <p className="font-bold text-center text-xl">
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </p>
      <form
        onSubmit={submitHandler}
        className="flex flex-col my-6 bg-white border-2 rounded-xl border-black py-6 px-6 gap-6"
      >
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
            inputLabel="category"
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
        <div className="flex gap-6 flex-wrap">
          {!user && (
            <AddPropertyInput
              dataToSubmit={dataToSubmit}
              setDataToSubmit={setDataToSubmit}
              inputLabel="guests"
            />
          )}
          <AddPropertyInput
            dataToSubmit={dataToSubmit}
            setDataToSubmit={setDataToSubmit}
            inputLabel="description"
          />
        </div>
        <AddProperyPhoto dataToSubmit={dataToSubmit} setDataToSubmit={setDataToSubmit} />
        <AddPropertySubmit />
      </form>
    </div>
  );
};
export default AddProperty;
