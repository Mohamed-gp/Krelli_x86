import Dropzone from "react-dropzone";
import { FaX } from "react-icons/fa6";

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
  const deleteImageHandler = (index: number) => {
    const newFiles = new Array(...dataToSubmit.files).filter(
      (file: any, i: number) => i !== index,
    );
    setDataToSubmit({
      ...dataToSubmit,
      files: newFiles,
    });
  };
  return (
    <div className="">
      <p className="font-bold">Upload Photo</p>

      <Dropzone
        onDrop={(acceptedFiles) => {
          console.log(acceptedFiles);
          setDataToSubmit({ ...dataToSubmit, files: acceptedFiles });
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <section className="flex-1">
            <div {...getRootProps()}>
              <input
                {...getInputProps()}
                multiple
                onChange={(e) => {
                  if (e.target.files != null) {
                    setDataToSubmit({ ...dataToSubmit, files: e.target.files });
                  }
                }}
              />
              <div className="justify-content my-1 flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-[#4561EC] py-6 text-center">
                <p className="font-bold">
                  Drag your images here, or <span>browse</span>
                </p>
                <p>Supported: JPG, JPEG, PNG</p>
              </div>
            </div>
          </section>
        )}
      </Dropzone>

      <div className="my-6 flex flex-wrap justify-center gap-3">
        {new Array(...dataToSubmit.files).map((file, index) => (
          <div
            key={index + "add-property-image"}
            className="img relative h-36 w-36 rounded-xl"
          >
            <div
              onClick={() => deleteImageHandler(index)}
              className="absolute -right-2 -top-2 cursor-pointer rounded-xl bg-red-500 p-1 text-white"
            >
              <FaX />
            </div>
            <img
              src={URL.createObjectURL(file)}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default AddProperyPhoto;
