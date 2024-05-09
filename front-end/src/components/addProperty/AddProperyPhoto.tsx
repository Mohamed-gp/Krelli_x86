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
  setDataToSubmit,
}: AddPropertyInputProps) => {
  const cloudinryRef = useRef<any>();
  const widgetRef = useRef<any>();
  useEffect(() => {
    cloudinryRef.current = window.cloudinary;
    if (cloudinryRef.current) {
      widgetRef.current = cloudinryRef.current.createUploadWidget({
        cloudName: "drf3vogno",
        uploadPreset: "kbym49ai",
      }, (error: any) => {
        console.log(error);
      });
    }
  }, []);
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
      <button className="hidden" id="photoUploader"  onClick={() => {widgetRef.current.open()}}>
        Upload
      </button>
      {/* <input
        type="file"
        multiple
        name=""
        className="hidden"
        id="photoUploader"
        onChange={(e) => {
          if (e.target.files != null) {
            setDataToSubmit({ ...dataToSubmit, files: dataToSubmit.files });
            // files: [...formData.files, e.target.files[0]]
          }
        }}
      /> */}
    </div>
  );
};
export default AddProperyPhoto;
