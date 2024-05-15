import { useEffect, useState } from "react";
import AddPropertyInput from "./AddPropertyInput";
import AddProperyPhoto from "./AddProperyPhoto";
import AddPropertySubmit from "./AddPropertySubmit";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { authActions } from "../../store/slices/authSlice";
import AddPropertyWilaya from "./AddPropertyWilaya";
import AddPropertyCategory from "./AddPropertyCategory";
import { getWilayaIdByName } from "../../utils/data";

const AddProperty = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: IRootState) => state.auth.user);
  const [dataToSubmit, setDataToSubmit] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    title: "",
    wilaya: "",
    category: "",
    price: "",
    bathrooms: "",
    bedrooms: "",
    guests: "",
    description: "",
    files: [],
  });
  const formData = new FormData();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (dataToSubmit?.firstName?.length != 0) {
      formData.set("firstName", dataToSubmit?.firstName);
    }
    if (dataToSubmit?.lastName?.length != 0) {
      formData.set("lastName", dataToSubmit?.lastName);
    }
    if (dataToSubmit?.email?.length != 0) {
      formData.set("email", dataToSubmit?.email);
    }
    if (dataToSubmit?.password.length != 0) {
      formData.set("password", dataToSubmit?.password);
    }
    formData.set("title", dataToSubmit?.title);
    formData.set("wilaya", dataToSubmit?.wilaya);
    formData.set("price", dataToSubmit?.price);
    formData.set("bathrooms", dataToSubmit?.bathrooms);
    formData.set("bedrooms", dataToSubmit?.bedrooms);
    formData.set("guests", dataToSubmit?.guests);
    formData.set("description", dataToSubmit?.description);
    formData.set("category", dataToSubmit?.category);
    for (let i = 0; i < dataToSubmit.files.length; i++) {
      formData.append("files", dataToSubmit.files[i]);
    }

    try {
      const url = user ? "/host/homes" : "/auth/addHome";

      if (
        (formData.get("firstName") == "" ||
          formData.get("lastName") == "" ||
          formData.get("email") == "" ||
          formData.get("password") == "") &&
        url == "/auth/addHome"
      ) {
        return toast.error("all Fields Are Required");
      }
      if (
        formData.get("price") == "" ||
        formData.get("wilaya") == "" ||
        formData.get("title") == "" ||
        formData.get("category") == "" ||
        formData.get("description") == "" ||
        formData.get("guests") == "" ||
        formData.get("bedrooms") == "" ||
        formData.get("bathrooms") == ""
      ) {
        return toast.error("all Fields Are Required");
      }
      formData.set("wilaya", getWilayaIdByName(formData.get("wilaya") as string));
      // @ts-ignore
      if (+formData.get("price") != formData.get("price")) {
        return toast.error("price Field Should be a number");
      }
      // @ts-ignore
      if (+formData.get("bathrooms") != formData.get("bathrooms")) {
        return toast.error("bathrooms Field Should be an integer");
      }
      // @ts-ignore
      if (+formData.get("bedrooms") != formData.get("bedrooms")) {
        return toast.error("bedrooms Field Should be an integer");
      }
      // @ts-ignore
      if (+formData.get("guests") != formData.get("guests")) {
        return toast.error("guests Field Should be an integer");
      }
      if (formData.getAll("files").length < 5) {
        return toast.error("you must enter more than 4 images of the house");
      }

      const { data } = await customAxios.post(url, formData, {
        withCredentials: true,
      });

      if (url == "/auth/addHome") {
        dispatch(authActions.login({ ...data.user }));
        toast.success("account created and property added successfully");
        scrollTo(0, 0);
      } else {
        toast.success("property created successfuly");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
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

          <AddPropertyCategory
            dataToSubmit={dataToSubmit}
            setDataToSubmit={setDataToSubmit}
            inputLabel="category"
          />
          <AddPropertyWilaya
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
        <AddProperyPhoto
          dataToSubmit={dataToSubmit}
          setDataToSubmit={setDataToSubmit}
        />
        <AddPropertySubmit />
      </form>
    </div>
  );
};
export default AddProperty;
