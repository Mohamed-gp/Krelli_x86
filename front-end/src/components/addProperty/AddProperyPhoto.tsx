import { useEffect } from "react";

interface AddPropertyInputProps {
  formData: FormData;
}

const AddProperyPhoto = ({
  formData,
}: AddPropertyInputProps) => {
  const addImageHandler = (e) => {
    console.log(e.target.files);
    formData.append("files", e.target.files);
    console.log(formData.getAll("files"))
  };

  return (
    <div className="name-input  ">
      <label htmlFor="photoUploader" className="font-bold">
        Upload Photo
      </label>
      <label
        htmlFor="photoUploader"
        className="flex flex-col cursor-pointer justify-content items-center border-2 border-dashed rounded-xl border-[#4561EC] my-1    py-6"
      >
        <p className="font-bold">
          Drag your images here, or <span>browse</span>
        </p>
        <p>Supported: JPG, JPEG, PNG</p>
      </label>

      <input
        type="file"
        multiple
        name=""
        className="hidden"
        id="photoUploader"
        onChange={(e) => addImageHandler(e)}
      />
    </div>
  );
};
export default AddProperyPhoto;
