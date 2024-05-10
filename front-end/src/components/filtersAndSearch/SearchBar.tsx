// import { FaMagnifyingGlass, FaMicrophone } from "react-icons/fa6";
// import { IoFilterSharp } from "react-icons/io5";
// import { useEffect, useState } from "react";
import { wilayasInfo } from "../../utils/data";
import Select from "react-select";

interface SearchBarProps {
  filter : {category : string,wilaya : string},
  setfilter : (e : any) => any
}


const SearchBar = ({filter,setfilter} : SearchBarProps) => {

  const options = wilayasInfo.map((wilaya) => {
    return { value: wilaya.name, label: wilaya.name };
  });
  return (
    // <div className="container my-6">
    //   <div className=" border-2 w-[300px] mx-auto rounded-xl flex  items-center bg-white">
    //     <span className="ml-3">
    //       <FaMagnifyingGlass />
    //     </span>
    //     <input
    //       type="text"
    //       placeholder="Search By Title"
    //       className="p-3 pl-4 text-black rounded-full focus:outline-none"
    //       onChange={(e) => setinputText(e.target.value)}
    //       value={inputText}
    //     />
    //     {/* <span className="ml-3 cursor-pointer">
    //       <IoFilterSharp />
    //     </span> */}
    //     <span className="ml-3 cursor-pointer">
    //       {('webkitSpeechRecognition' in window) && (
    //         <FaMicrophone onClick={() => handleSpeech()} />
    //       )}
    //     </span>
    //   </div>
    // </div>
    <div className={`name-input md:w-[30%] w-[100%] mx-auto container my-6`}>
      <div className="relative">
        <Select
          className=""
          placeholder="chose by Wilaya"
          defaultValue={null}
          onChange={(e) => {setfilter({...filter,wilaya : e?.value})}}
          options={options}
        />
      </div>
    </div>
  );
};
export default SearchBar;
