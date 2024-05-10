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
        onChange={(e) => {
          if (e.target.files != null) {
            // addImageHandler(e);
            setDataToSubmit({ ...dataToSubmit, files: e.target.files });
          }
        }}
      />
      <div className="flex justify-center flex-wrap gap-3 my-6">
        {new Array(...dataToSubmit.files).map((file) => (
          <>
            <div className="img w-36 h-36 rounded-xl overflow-hidden">
              <img src={URL.createObjectURL(file)} alt="" className="h-full w-full object-cover" />  
            </div>
          </>
        ))}
        {/* {dataToSubmit?.files?.forEach((file) => <div>hello</div>)} */}
        {/* 
        <div className="img">
          <img src="../../../public/heroBG.png" alt="" />
        </div>
        <div className="img">
          <img src="../../../public/heroBG.png" alt="" />
      </div>*/}
      </div>
    </div>
  );
};
export default AddProperyPhoto;
