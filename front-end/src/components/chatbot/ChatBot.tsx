import { useState } from "react";
// import axios from "axios";
import customAxios from "../../utils/axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { userActions } from "../../store/slices/userSlice";
import { FaMicrophone } from "react-icons/fa6";

const ChatBot = () => {
  const dispatch = useDispatch();
  const [ismodelOpen, setismodelOpen] = useState(false);
  const history = useSelector((state: IRootState) => state.user.history);

  const sendMessageToGPT = async (e: any, message: string) => {
    e.preventDefault();
    if (message.trim() == "") {
      return toast.error("Message musn't be empty");
    }
    dispatch(userActions.appendHistory(message));
    setmessage("");
    try {
      const { data } = await customAxios.post("/gemini", {
        message,
        history,
      });
      dispatch(userActions.appendHistory(data.message));
    } catch (error) {
      console.log(error);
    }
  };
  const [message, setmessage] = useState("");

  const handleSpeech = (e) => {
    const recog = new webkitSpeechRecognition();
    recog.lang = "en-GB";
    recog.onresult = (eve) => {
      const transcript = eve.results[0][0].transcript
      setmessage(transcript);
      sendMessageToGPT(eve,transcript);
      
    };
    recog.start();
  };
  return (
    <>
      <button
        onClick={() => setismodelOpen((prev) => !prev)}
        className="fixed !bg-[#4880ff] bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900 z-10"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
      >
        <svg
          xmlns=" http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white block border-gray-200 align-middle"
        >
          <path
            d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
            className="border-gray-200"
          ></path>
        </svg>
      </button>
      {ismodelOpen && (
        <div className="fixed flex flex-col bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] min-w-[300px] h-[434px]">
          {/* <!-- Heading --> */}
          <div className="flex flex-col space-y-1.5 pb-6">
            <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
            <p className="text-sm text-[#6b7280] leading-3">
              Powered by Krelli
            </p>
          </div>

          {/* <!-- Chat Container --> */}
          <div className="pr-4 max-h-[474px] overflow-y-auto py-2 flex-1">
            {/* <!--  User Chat Message --> */}
            {history?.map((input, index) => (
              <>
                {index % 2 == 0 ? (
                  <div
                    key={index}
                    className="flex gap-3 my-4 text-gray-600 text-sm flex-1"
                  >
                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                      <div className="rounded-full bg-gray-100 border p-1">
                        <svg
                          stroke="none"
                          fill="black"
                          strokeWidth="0"
                          viewBox="0 0 16 16"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                        </svg>
                      </div>
                    </span>
                    <p className="leading-relaxed">
                      <span className="block font-bold text-gray-700">
                        You{" "}
                      </span>
                      {input?.parts[0]?.text}
                    </p>
                  </div>
                ) : (
                  <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                      <div className="rounded-full bg-gray-100 border p-1">
                        <svg
                          stroke="none"
                          fill="black"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          height="20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                          ></path>
                        </svg>
                      </div>
                    </span>
                    <p className="leading-relaxed">
                      <span className="block font-bold text-gray-700">AI </span>
                      {input?.parts[0]?.text}
                    </p>
                  </div>
                )}
              </>
            ))}

            {/* <!-- Ai Chat Message  -->
            
            <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    ></path>
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed">
                <span className="block font-bold text-gray-700">AI </span>krelli is an software application that help people find and manage renting houses in algeria
              </p>
            </div> */}
          </div>
          {/* <!-- Input box  --> */}
          <div className="flex items-center pt-0">
            <form className="flex items-center justify-center w-full space-x-2">
              <div className="flex w-full">
                <input
                  className="flex h-10 w-full  rounded-md border border-[#e5e7eb] px-3 py-2 pr-6 text-sm placeholder-[#6b7280] focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                  placeholder="Type your message"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                />
                {"webkitSpeechRecognition" in window && (
                  <FaMicrophone
                    onClick={(e) => handleSpeech(e)}
                    className="right-6 relative top-3 cursor-pointer"
                  />
                )}
              </div>
              <button
                onClick={(e) => sendMessageToGPT(e, message)}
                disabled={message.trim().length == 0}
                className=" inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-buttonColor hover:bg-[#2348ff] h-10 px-4 py-2"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default ChatBot;
