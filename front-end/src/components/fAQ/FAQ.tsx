import FAQElement from "./FAQElement";

const Faq = () => {
  return (
    <section className="bg-blueGray-50 relative overflow-hidden pb-28 pt-24">
      <img
        className="absolute bottom-0 left-1/2 -translate-x-1/2 transform"
        src="flaro-assets/images/faqs/gradient.svg"
        alt=""
      />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto md:max-w-4xl">
          <h2 className="mb-12 text-center text-5xl font-medium">
            Frequently Asked Questions
          </h2>
          <div className="-m-1 mb-11 flex flex-wrap">
            <FAQElement
              question="What is Krelli, and does it provide apps for iPhone and Android?"
              answer="Krelli is a cutting-edge rental housing application designed to streamline the rental process for both tenants and landlords. Our platform offers a comprehensive suite of features, including property search, listing management, communication tools, and secure payment processing. Whether you're looking for your dream rental property or managing your rental portfolio, Krelli provides a seamless and intuitive experience tailored to your needs. Yes, Krelli is available as a mobile app for both iPhone and Android devices. You can download the Krelli app from the Apple App Store for iOS devices and the Google Play Store for Android devices, allowing you to access our platform anytime, anywhere."
            />
            <FAQElement
              question="Does Krelli offer customer support for users?"
              answer="Yes, Krelli provides dedicated customer support to assist users with any inquiries or issues they may encounter. Our support team is available to answer questions, troubleshoot problems, and provide guidance on using the platform effectively. Whether you need assistance with navigating the app, resolving technical issues, or accessing specific features, our friendly support staff is here to help."
            />
            <FAQElement
              question="How does Krelli ensure the security of rental payments?"
              answer="Krelli prioritizes the security of rental payments by employing advanced encryption protocols and partnering with trusted payment processors. Our platform ensures that sensitive payment information, such as credit card details or bank account numbers, is securely encrypted and protected from unauthorized access. Additionally, Krelli's secure payment gateway facilitates seamless and reliable transactions between tenants and landlords, providing peace of mind to all parties involved in the rental process."
            />
            <FAQElement
              question=" What payment methods does Krelli accept for rental transactions?"
              answer="Krelli offers a variety of payment methods to accommodate the preferences of tenants and landlords. Users can make rental payments using credit/debit cards, bank transfers, or other popular payment options supported by our platform. With multiple payment methods available, Krelli ensures flexibility and convenience for users when conducting rental transactions."
            />
            <FAQElement
              question="Is my financial information stored securely on the Krelli platform?"
              answer="Yes, Krelli prioritizes the security and confidentiality of users' financial information. Our platform employs industry-standard encryption protocols and secure data storage practices to safeguard sensitive financial data, such as credit card details or bank account numbers. Additionally, Krelli adheres to strict data protection regulations and privacy policies to ensure that users' financial information is handled with the utmost care and confidentiality, providing peace of mind to all users."
            />
          </div>
          <p className="text-center font-medium text-gray-600">
            <span>Still have any questions? </span>
            <a
              className="font-semibold text-indigo-600 hover:text-indigo-700"
              href="#contact-us"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Faq;
