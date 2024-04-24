const AboutUs = () => {
  return (
    <>
      <div className="bg-white dark:bg-[#4561ecc9] text-white">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          {/* Heading */}
          <div className="text-center">
            <div className="mb-1 text-sm font-bold uppercase tracking-wider text-[#4561EC]">
              We Answer
            </div>
            <h2 className="text-4xl font-black text-black dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
          {/* END Heading */}

          {/* FAQ */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h4 className="mb-2 font-semibold">
                What features are included?
              </h4>
              <p className="leading-relaxed text-gray-200 dark:text-gray-400">
                Etiam egestas fringilla enim, id convallis lectus laoreet at.
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">
                Can I use PayPal to pay you?
              </h4>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Etiam egestas fringilla enim, id convallis lectus laoreet at.
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">
                Do I get access to the community?
              </h4>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Etiam egestas fringilla enim, id convallis lectus laoreet at.
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">
                Can I get a refund just in case?
              </h4>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Etiam egestas fringilla enim, id convallis lectus laoreet at.
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">
                Do you offer email support?
              </h4>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Etiam egestas fringilla enim, id convallis lectus laoreet at.
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">
                Are the updates free for life?
              </h4>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Etiam egestas fringilla enim, id convallis lectus laoreet at.
                Fusce purus nisi, gravida sed consectetur ut, interdum quis
                nisi. Quisque egestas nisl id lectus facilisis scelerisque.
              </p>
            </div>
          </div>
          {/* END FAQ */}

          
        </div>
      </div>
      {/*  */}
      {/* Statistics Section: Simple */}
      <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="grid grid-cols-1 divide-y text-center dark:divide-gray-700/75 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-4xl font-extrabold text-black dark:text-white">
                8,600+
              </dt>
              <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
                Projects
              </dd>
            </dl>
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-4xl font-extrabold text-black dark:text-white">
                2,500+
              </dt>
              <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
                Clients
              </dd>
            </dl>
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-4xl font-extrabold text-black dark:text-white">
                760k+
              </dt>
              <dd className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-500">
                Earnings
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {/* END Statistics Section: Simple */}
    </>
  );
};
export default AboutUs;
