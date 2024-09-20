interface AddPropertySubmitProps {
  dataToSubmit: any;
  
}

const AddPropertySubmit = ({ dataToSubmit }: AddPropertySubmitProps) => {
  return (
    <input
      disabled={dataToSubmit.loading}
      value={dataToSubmit.loading ? "Loading..." : "Add New Property"}
      type="submit"
      className="w-full cursor-pointer rounded-xl bg-[#4561EC] py-4 text-center font-bold text-white duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
};
export default AddPropertySubmit;
