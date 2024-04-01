const Hero = () => {
  return (
    <section
      style={{
        height: "calc(100vh - 84.14px)",
        background: "url(/../../../../public/heroBG.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <div className="container relative flex items-center justify-between h-full text-white">
        <p className="text-5xl w-[45%] leading-normal">
          Rent Your House Now With Us From Any Place
        </p>
        <div className="flex flex-col items-center justify-center gap-4 w-[30%]">
          {/* <iframe
            className="rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.451557345995!2d4.909960574873844!3d36.66364257228644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128d2fea39a0172f%3A0x375f0181ae906e45!2s%C3%89cole%20sup%C3%A9rieure%20en%20Sciences%20et%20Technologies%20de%20l&#39;Informatique%20et%20du%20Num%C3%A9rique!5e0!3m2!1sen!2sdz!4v1711957061255!5m2!1sen!2sdz"
            width="350"
            height="350"
            style={{ border: 0 }}
            // allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
            width="350"
            height="350"
            src="https://maps.google.com/maps?q=10.305385,77.923029&hl=es;z=14&amp;output=embed"
            className="rounded-3xl"
          ></iframe>

          <div>
            <input
              type="text"
              placeholder="Search for a place"
              className="p-3 pl-4 text-black rounded-full focus:outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;