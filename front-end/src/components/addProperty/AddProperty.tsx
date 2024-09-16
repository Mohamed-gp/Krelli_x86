import { useState } from "react";
import AddPropertyInput from "./AddPropertyInput";
import AddProperyPhoto from "./AddProperyPhoto";
import AddPropertySubmit from "./AddPropertySubmit";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { authActions } from "../../store/slices/authSlice";
import AddPropertyCategory from "./AddPropertyCategory";
import AddLocationInput from "../maps/AddLocationInput";
import AddPropertyInputNumber from "./AddPropertyInputNumber";

const AddProperty = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: IRootState) => state.auth.user);
  const [dataToSubmit, setDataToSubmit] = useState({
    username: "",
    email: "",
    password: "",
    title: "",
    latitude: 36.66,
    longitude: 2.87,
    category: "",
    price: 10,
    bathrooms: 0,
    bedrooms: 0,
    guests: 0,
    description: "",
    files: [],
  });
  const formData = new FormData();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (dataToSubmit.price < 10 || dataToSubmit.price > 10000) {
      return toast.error("price must be greater than $10 and less than $10000");
    }
    if (dataToSubmit.guests < 1) {
      return toast.error("guests must be greater than 0");
    }
    if (dataToSubmit.bathrooms < 1) {
      return toast.error("bathrooms must be greater than 0");
    }
    if (dataToSubmit.bedrooms < 1) {
      return toast.error("bedrooms must be greater than 0");
    }
    if (
      dataToSubmit.title == "" ||
      dataToSubmit.category == "" ||
      dataToSubmit.description == "" ||
      !dataToSubmit.latitude ||
      !dataToSubmit.longitude
    ) {
      return toast.error("all Fields Are Required");
    }
    if (dataToSubmit.files.length < 5) {
      return toast.error("you must enter more than 4 images of the house");
    }

    formData.set("username", dataToSubmit?.username);
    formData.set("email", dataToSubmit?.email);
    formData.set("password", dataToSubmit?.password);
    formData.set("title", dataToSubmit?.title);
    formData.set("price", String(dataToSubmit?.price));
    formData.set("bathrooms", String(dataToSubmit?.bathrooms));
    formData.set("bedrooms", String(dataToSubmit?.bedrooms));
    formData.set("latitude", String(dataToSubmit?.latitude));
    formData.set("longitude", String(dataToSubmit?.longitude));
    formData.set("guests", String(dataToSubmit?.guests));
    formData.set("description", dataToSubmit?.description);
    formData.set("category", dataToSubmit?.category);
    for (let i = 0; i < dataToSubmit.files.length; i++) {
      formData.append("files", dataToSubmit.files[i]);
    }

    try {
      const url = user ? "/host/homes" : "/auth/addHome";

      if (
        (dataToSubmit.username == "" ||
          dataToSubmit.email == "" ||
          dataToSubmit.password == "") &&
        url == "/auth/addHome"
      ) {
        return toast.error("all Fields Are Required");
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
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
  };

  return (
    <div className="container" id="addProperty">
      <p className="text-center text-xl font-bold">
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </p>
      <form
        onSubmit={submitHandler}
        className="my-6 flex flex-col gap-6 rounded-xl border-2 border-black bg-white px-6 py-6"
      >
        <p className="text-center font-bold text-[#4561EC]">
          Add A New Property
        </p>
        {!user && (
          <div className="flex flex-wrap justify-between gap-6">
            <AddPropertyInput
              dataToSubmit={dataToSubmit}
              setDataToSubmit={setDataToSubmit}
              inputLabel="username"
            />
            <AddPropertyInput
              dataToSubmit={dataToSubmit}
              setDataToSubmit={setDataToSubmit}
              inputLabel="email"
            />
            <AddPropertyInput
              dataToSubmit={dataToSubmit}
              setDataToSubmit={setDataToSubmit}
              inputLabel="password"
            />
          </div>
        )}
        <div className="gap flex flex-wrap justify-between gap-6">
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

          <AddLocationInput
            dataToSubmit={dataToSubmit}
            setDataToSubmit={setDataToSubmit}
            inputLabel="location"
          />
          {user && (
            <AddPropertyInputNumber
              dataToSubmit={dataToSubmit}
              setDataToSubmit={setDataToSubmit}
              inputLabel="guests"
            />
          )}
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          <AddPropertyInputNumber
            dataToSubmit={dataToSubmit}
            setDataToSubmit={setDataToSubmit}
            inputLabel="price"
          />
          <AddPropertyInputNumber
            dataToSubmit={dataToSubmit}
            setDataToSubmit={setDataToSubmit}
            inputLabel="bathrooms"
          />

          <AddPropertyInputNumber
            dataToSubmit={dataToSubmit}
            setDataToSubmit={setDataToSubmit}
            inputLabel="bedrooms"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-6">
          {!user && (
            <AddPropertyInputNumber
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
          <div className="invisible w-[100%] md:w-[30%]">
            <AddPropertyInput
              dataToSubmit={dataToSubmit}
              setDataToSubmit={setDataToSubmit}
              inputLabel="description"
            />
          </div>
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
