const AddPropertyInput = ({ data, setData }) => {
  return (
    <div className="name-input  md:w-[30%] w-[100%]">
      <label htmlFor="name" className="font-bold">
        Name
      </label>
      <div className="relative">
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          name="name"
          id="name"
          className="peer w-full pt-5 pb-2 px-3 border-2 text-xs   focus:outline-none rounded-md bg-[#E6E6E6]"
        />
        <label
          htmlFor="name"
          className={`absolute ${
            !data.name ? "text-[13px] top-3" : "text-[10px] top-1 "
          }  peer-focus:text-[10px] peer-focus:top-1 duration-500 left-3  opacity-50`}
        >
          Name
        </label>
      </div>
    </div>
  );
};
export default AddPropertyInput;
