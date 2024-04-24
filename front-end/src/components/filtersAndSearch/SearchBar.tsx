import { useState } from "react";
import { FaMagnifyingGlass, FaMicrophone } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";

const SearchBar = () => {
  const handleSpeech = () => {
    const recog = new webkitSpeechRecognition();
    recog.lang = "en-GB"
    recog.onresult = (eve) => {
      setinputText(eve.results[0][0].transcript)
    }
    recog.start()
  };
  const [inputText,setinputText] = useState("")
  return (
    <div className="container my-6">
      <div className=" border-2 w-[300px] mx-auto rounded-xl flex  items-center bg-white">
        <span className="ml-3">
          <FaMagnifyingGlass />
        </span>
        <input
          type="text"
          placeholder="Search By Title"
          className="p-3 pl-4 text-black rounded-full focus:outline-none"
          onChange={(e) => setinputText(e.target.value)}
          value={inputText}
        />
        {/* <span className="ml-3 cursor-pointer">
          <IoFilterSharp />
        </span> */}
        <span className="ml-3 cursor-pointer">
          {('webkitSpeechRecognition' in window) && (
            <FaMicrophone onClick={() => handleSpeech()} />
          )}
        </span>
      </div>
    </div>
  );
};
export default SearchBar;
