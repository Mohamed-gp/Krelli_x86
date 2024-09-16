import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <section className=" " id="contact-us">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center">
          <p className="text-center text-5xl font-medium">Contact us</p>

          <p className="mt-3 text-gray-500 text-center dark:text-gray-400">
            Our friendly team would love to hear from you.
          </p>
        </div>

        <div className="mt-12 flex flex-col justify-center flex-wrap gap-12 sm:flex-row">
          <div className="flex w-full flex-col items-center justify-center rounded-2xl border-2 border-buttonColor p-6 sm:w-[250px]">
            <span className="inline-block rounded-full text-2xl text-buttonColor">
              <MdEmail />
            </span> 

            <h2 className="mt-4 text-base font-medium text-buttonColor">
              Email
            </h2>
            <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
              Our friendly team is here to help.
            </p>
            <p className="duraiton-500 mt-2 text-sm hover:text-buttonColor">
              krelli@estin.dz
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center rounded-2xl border-2 border-buttonColor p-6 sm:w-[250px]">
            <span className="inline-block rounded-full text-2xl text-buttonColor">
              <FaLocationDot />
            </span>
            <h2 className="mt-4 text-base font-medium text-buttonColor">
              Office
            </h2>
            <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
              Come say hello at our office HQ.
            </p>
            <p className="duraiton-500 mt-2 text-sm hover:text-buttonColor">
              N75, Amizour
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center rounded-2xl border-2 border-buttonColor p-6 sm:w-[250px]">
            <span className="inline-block rounded-full text-2xl text-buttonColor">
              <FaPhone />
            </span>

            <h2 className="mt-4 text-base font-medium text-buttonColor">
              Phone
            </h2>
            <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
              24/7 Response
            </p>
            <p className="duraiton-500 mt-2 text-sm hover:text-buttonColor">
              +1 (555) 000-0000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
