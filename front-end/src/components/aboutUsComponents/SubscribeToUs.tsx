import { useState } from "react";
import toast from "react-hot-toast";
import customAxios from "../../utils/axios";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";

const SubscribeToUs = () => {
  const user = useSelector((state: IRootState) => state.auth.user);
  const subscribeToUsHandler = async () => {
    try {
      const { data } = await customAxios.post("/subscribe", {
        email: email,
      });
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  const [email, setEmail] = useState(user?.email);
  return (
    <>
      {user?.email && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-indigo-600 p-8 xl:p-11">
              <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-white">
                Subscribe to the latest offer
              </h2>
              <p className="mx-auto mb-11 text-center text-indigo-200 max-lg:max-w-2xl">
                Join our community of subscribers and receive regular updates
                delivered straight to your inbox. It's quick, easy, and free
              </p>
              <div className="mx-auto flex max-w-md flex-col items-center justify-between gap-6 rounded-3xl border-gray-300 max-lg:py-3 lg:h-12 lg:flex-row lg:gap-0 lg:rounded-full lg:border lg:bg-transparent lg:p-1.5">
                <input
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={email}
                  className="w-full flex-1 rounded-full border-gray-300 bg-transparent px-6 py-2 text-gray-100 placeholder:text-gray-400 focus:outline-none max-lg:border max-lg:text-center lg:w-auto lg:bg-transparent lg:px-6 lg:py-2"
                  placeholder="Enter your email.."
                />
                <button
                  type="submit"
                  onClick={() => subscribeToUsHandler()}
                  className={`rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 disabled:opacity-50`}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default SubscribeToUs;
