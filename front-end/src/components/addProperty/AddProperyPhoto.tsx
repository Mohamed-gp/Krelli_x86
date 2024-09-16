import { useEffect, useRef } from "react";

declare global {
  interface Window {
    cloudinary: any;
  }
}

interface AddPropertyInputProps {
  dataToSubmit: any;
  setDataToSubmit: (prev: any) => any;
}

const AddProperyPhoto = ({
  dataToSubmit,
  setDataToSubmit,
}: AddPropertyInputProps) => {
  return (
    <div className="">
      <p className="font-bold">Upload Photo</p>
      <label
        htmlFor="photoUploader"
        className="justify-content my-1 text-center flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-[#4561EC] py-6"
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
        onChange={(e) => {
          if (e.target.files != null) {
            // addImageHandler(e);
            setDataToSubmit({ ...dataToSubmit, files: e.target.files });
          }
        }}
      />
      <div className="my-6 flex flex-wrap justify-center gap-3">
        {new Array(...dataToSubmit.files).map((file) => (
          <>
            <div className="img h-36 w-36 overflow-hidden rounded-xl">
              <img
                src={URL.createObjectURL(file)}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default AddProperyPhoto;
