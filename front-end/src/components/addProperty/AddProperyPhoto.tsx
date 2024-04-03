const AddProperyPhoto = () => {
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
      <input type="file" name="" className="hidden" id="photoUploader" />
    </div>
  );
};
export default AddProperyPhoto;
