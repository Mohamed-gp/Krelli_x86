import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

import LeftSideNav from "../../components/leftSideNav/LeftSideNav";
import customAxios from "../../utils/axios";
import { Link } from "react-router-dom";

const Chat = () => {
  const [messageInput, setmessageInput] = useState("");
  const [inbox, setinbox] = useState([]);
  const getChats = async () => {
    try {
      const { data } = await customAxios.get("/messages");
      console.log(data);
      setinbox(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getChats();
  }, []);
  return (
    <>
      <div className=" flex    mt-12 gap-6 ">
        {/* left side */}
        <LeftSideNav />
        {/* right side */}
        <div className="flex-1">
          <p className="text-3xl font-bold mb-6">Inbox</p>
          <div className="  flex md:flex-row gap-6 justify-center flex-col">
            <div className="flex flex-col px-6 gap-6">
              <div className="flex justify-center">
                <div className="justify-center  flex flex-col items-center  gap-6">
                  {inbox?.length == 0 ? (
                    <div
                      className="flex justify-center items-center w-full"
                      style={{ height: "calc(100vh - 350px)" }}
                    >
                      <div className="flex flex-col items-center">
                        <p className="font-bold">No Chat Found</p>
                        <p className="opacity-70 text-sm mt-1 mb-3 text-center">
                          Try Connecting With Properties Hoster Or Rent Houses
                        </p>
                        <div className="flex gap-2 flex-wrap justify-center">
                          <Link
                            to="/properties"
                            className="border-2 w-[160px] font-bold border-black px-6 py-2 rounded-xl text-center cursor-pointer"
                          >
                            Find Rent
                          </Link>
                          <Link
                            to="/#addProperty"
                            className="border-2 w-[160px] font-bold border-black px-6 py-2 rounded-xl text-center cursor-pointer"
                          >
                            Rent A House
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {inbox.map((host) => (
                        <div className="flex gap-3 items-center relative bg-white rounded-xl py-2 justify-center">
                          <div>
                            <img
                              src={
                                host?.picture
                                  ? host?.picture
                                  : "../../../public/profile.jpg"
                              }
                              alt="avatar"
                              className="w-10 h-10 object-cover rounded-full"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-sm">Safi Achraf</p>
                            <p>Property owner</p>
                          </div>
                          <div>
                            <img
                              src={
                                host?.picture
                                  ? host?.picture
                                  : "../../../public/profile.jpg"
                              }
                              className="w-10 h-10 rounded-xl object-cover"
                              alt=""
                            />
                          </div>
                        </div>
                      ))}
                    </>
                  )}

                  {/* <div className="flex gap-3 items-center relative bg-white rounded-xl py-2 justify-center">
                  <div>
                      <img
                        src="../../../public/profile.jpg"
                        alt="avatar"
                        className="w-10 h-10 object-cover rounded-full"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <p className="text-sm">Safi Achraf</p>
                      <p>Property owner</p>
                    </div>
                    <div>
                      <img
                        src="../../../public/heroBG.png"
                        className="w-10 h-10 rounded-xl object-cover"
                        alt=""
                      />
                    </div>
                  </div> */}
                  {/* <div className="flex gap-3 items-center relative bg-white rounded-xl py-2 justify-center">
                    <div>
                      <img
                        src="../../../public/profile.jpg"
                        alt="avatar"
                        className="w-10 h-10 object-cover rounded-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm">Safi Achraf</p>
                      <p>Property owner</p>
                    </div>
                    <div>
                      <img
                        src="../../../public/heroBG.png"
                        className="w-10 h-10 rounded-xl object-cover"
                        alt=""
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col rounded-xl bg-white px-6 py-6 gap-6 flex-1 max-w-[700px] mx-4">
              <div className="flex border-b-2 justify-between">
                <p className="">Achraf Safi</p>
                <FaTrash />
              </div>
              <div className="flex items-end gap-2">
                <img
                  src="../../../public/profile.jpg"
                  alt=""
                  className="w-12 h-12 object-cover rounded-full"
                />
                <p className="bg-[#F5F5F5] p-6 rounded-xl">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
              </div>
              <div className="flex items-end gap-2">
                <p className="bg-[#4880FF] text-white p-6 rounded-xl">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <img
                  src="../../../public/profile.jpg"
                  alt=""
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
              <div className="flex items-end gap-2">
                <p className="bg-[#4880FF] text-white p-6 rounded-xl">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <img
                  src="../../../public/profile.jpg"
                  alt=""
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
              <div className="flex items-end gap-2">
                <img
                  src="../../../public/profile.jpg"
                  alt=""
                  className="w-12 h-12 object-cover rounded-full"
                />
                <p className="bg-[#F5F5F5] p-6 rounded-xl">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Write Message"
                  value={messageInput}
                  onChange={(e) => setmessageInput(e.target.value)}
                  className="focus:outline-none w-full border-t-2 py-6"
                />
                <button
                  className={`flex text-white  font-bold gap-2 bg-[#4880FF] items-center px-6 py-2 rounded-xl opacity-50 ${
                    messageInput.length < 1
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100"
                  }`}
                  disabled={messageInput.length < 1}
                >
                  <p>Send</p>
                  <IoMdSend />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
