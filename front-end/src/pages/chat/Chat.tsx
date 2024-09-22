import { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import LeftSideNav from "../../components/leftSideNav/LeftSideNav";
import customAxios from "../../utils/axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import io from "socket.io-client";
import toast from "react-hot-toast";

const Chat = () => {
  const user = useSelector((state: IRootState) => state.auth.user);
  const [messageInput, setmessageInput] = useState("");
  const [inbox, setinbox] = useState([]);
  const [activeInboxIndex, setactiveInboxIndex] = useState(0);
  const getChats = async () => {
    try {
      const { data } = await customAxios.get("/messages");
      setinbox(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [singleMessages, setsingleMessages] = useState([]);
  const getSingleMessages = async () => {
    try {
      const { data } = await customAxios.get(
        `/messages/${inbox[activeInboxIndex]?.id}`,
      );
      setsingleMessages(data.data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const createMessage = async (e) => {
    e.preventDefault();
    try {
      const { data } = await customAxios.post(
        `/messages/${inbox[activeInboxIndex]?.id}/messages`,
        {
          text: messageInput,
        },
      );
      setmessageInput("");
    } catch (error) {
      toast.error(error.resonse.data.message);
    }
  };
  useEffect(() => {
    getChats();
  }, []);
  useEffect(() => {
    getSingleMessages();
  }, [activeInboxIndex, inbox]);

  useEffect(() => {
    const socket = io(
      import.meta.env.VITE_ENV == "development"
        ? "http://localhost:3001"
        : "https://krelli1.production-server.tech",
      {
        query: {  
          userId: user?.id,
        },
      },
    );

    socket.on("message", (message) => {
      setsingleMessages((prevMessages) => {
        if (prevMessages.Messages?.length === 0) {
          return { Messages: [message] };
        } else {
          return { Messages: [...prevMessages.Messages, message] };
        }
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      <div className="mt-12 flex gap-6">
        {/* left side */}
        <LeftSideNav />
        {/* right side */}
        <div className="flex-1">
          <p className="mb-6 text-3xl font-bold">Inbox</p>
          <div className="flex flex-col justify-center gap-6 md:flex-row">
            <div className="flex flex-col gap-6 px-6">
              <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center gap-6">
                  {inbox?.length == 0 ? (
                    <div
                      className="flex w-full items-center justify-center"
                      style={{ height: "calc(100vh - 350px)" }}
                    >
                      <div className="flex flex-col items-center">
                        <p className="font-bold">No Chat Found</p>
                        <p className="mb-3 mt-1 text-center text-sm opacity-70">
                          Try Connecting With Properties Hoster Or Rent Houses
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                          <Link
                            to="/properties"
                            className="w-[160px] cursor-pointer rounded-xl border-2 border-black px-6 py-2 text-center font-bold"
                          >
                            Find Rent
                          </Link>
                          <Link
                            to="/#addProperty"
                            className="w-[160px] cursor-pointer rounded-xl border-2 border-black px-6 py-2 text-center font-bold"
                          >
                            Rent A House
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {inbox?.map((host, index) => (
                        // i neeed to fix the view of the hoster
                        <div
                          onClick={() => setactiveInboxIndex(index)}
                          className={`relative flex w-[250px] cursor-pointer items-center justify-center gap-3 rounded-xl bg-white px-2 py-2 duration-300 hover:opacity-85 ${
                            index == activeInboxIndex
                              ? "!bg-buttonColor text-white"
                              : ""
                          }`}
                        >
                          <div>
                            <img
                              src={
                                host?.users[0]?.id == user?.id
                                  ? host?.users[1]?.profileImage
                                  : host?.users[0]?.profileImage
                              }
                              alt="avatar"
                              className="h-12 w-12 rounded-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            {host?.users[0]?.id == user?.id ? (
                              <>
                                <p className="text-sm">
                                  {host?.users[1]?.username.slice(0, 11)}...
                                </p>
                                <p>Property Tenant</p>
                              </>
                            ) : (
                              <>
                                <p className="text-sm">
                                  {host?.users[0]?.username.slice(0, 11)}...
                                </p>
                                <p>Property owner</p>
                              </>
                            )}
                          </div>
                          <div>
                            <img
                              src={host?.picture}
                              className="h-12 w-12 rounded-xl object-cover"
                              alt=""
                            />
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
            {inbox?.length != 0 && (
              <div className="mx-4 flex max-w-[700px] flex-1 flex-col gap-6 rounded-xl bg-white px-6 py-6">
                <div className="flex justify-between border-b-2">
                  <p className="">
                    {inbox[activeInboxIndex]?.users[1].id == user?.id
                      ? inbox[activeInboxIndex]?.users[0]?.username
                      : inbox[activeInboxIndex]?.users[1]?.username}
                  </p>
                  {/* <FaTrash /> */}
                </div>
                <div className="mx-4 flex max-h-[300px] flex-1 flex-col gap-6 overflow-auto rounded-xl bg-white px-6 py-6">
                  {singleMessages?.Messages?.map((message) => (
                    <>
                      {message?.userId == user?.id && (
                        <div className="flex items-end gap-2">
                          <p className="w-full rounded-xl bg-[#4880FF] p-6 text-white">
                            {message?.message}
                          </p>
                          <img
                            src={user.profileImage}
                            alt=""
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        </div>
                      )}
                      {message?.userId != user?.id && (
                        <div className="flex items-end gap-2">
                          <img
                            src={
                              user?.id ==
                              inbox[activeInboxIndex]?.users[0]?.profileImage
                                ? inbox[activeInboxIndex]?.users[0]
                                    ?.profileImage
                                : inbox[activeInboxIndex]?.users[1]
                                    ?.profileImage
                            }
                            alt=""
                            className="h-12 w-12 rounded-full object-cover"
                          />
                          <p className="rounded-xl bg-[#F5F5F5] p-6">
                            {message.message}
                          </p>
                        </div>
                      )}
                    </>
                  ))}
                </div>
                <form
                  onSubmit={(e) => createMessage(e)}
                  className="flex items-center justify-between"
                >
                  <input
                    type="text"
                    placeholder="Write Message"
                    value={messageInput}
                    onChange={(e) => setmessageInput(e.target.value)}
                    className="w-full border-t-2 py-6 focus:outline-none"
                  />
                  <button
                    type="submit"
                    // onClick={() => createMessage()}
                    className={`flex items-center gap-2 rounded-xl bg-[#4880FF] px-6 py-2 font-bold text-white disabled:opacity-50 ${
                      messageInput.length < 1
                        ? "cursor-not-allowed opacity-50"
                        : "opacity-100"
                    }`}
                    disabled={messageInput.length < 1}
                  >
                    <p>Send</p>
                    <IoMdSend />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
