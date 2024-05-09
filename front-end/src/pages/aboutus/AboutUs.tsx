import HeroAboutSection from "../../components/aboutUsComponents/HeroAboutSection";
import AboutUsTwoGrid from "../../components/aboutUsComponents/AboutUsTwoGrid.tsx";
import SubscribeToUs from "../../components/aboutUsComponents/SubscribeToUs.tsx";
import Faq from "../../components/fAQ/FAQ.tsx";
import ContactUs from "../../components/contactUs/ContactUs.tsx";

const AboutUs = () => {
  return (
    <>
      <HeroAboutSection />
      <AboutUsTwoGrid
        title="About Us"
        description="We're committed to simplifying the rental experience for
                    everyone in Algeria. Pagedone offers a platform tailored to
                    the needs of tenants and landlords in the region. Our goal is
                    straightforward: to provide an intuitive tool that enables you
                    to effortlessly find and manage your perfect rental property
                    in Algeria."
        img="https://pagedone.io/asset/uploads/1702034769.png"
        order={1}
      />
      <AboutUsTwoGrid
        title="Why Is KRELLI"
        description="KRELLI stands as a beacon of innovation and efficiency in the
        realm of rental property management. With KRELLI, we've
        engineered a solution that streamlines every aspect of the
        renting process, ensuring seamless experiences for both
        tenants and landlords. KRELLI embodies our commitment to
        revolutionizing the way rental properties are managed,
        empowering users with intuitive tools and comprehensive
        features. So, why is KRELLI? Because it's the answer to your
        rental management needs, redefining convenience and
        effectiveness in property management."
        img="https://pagedone.io/asset/uploads/1702034785.png"
        order={0}
      />
      <Faq/>
      <ContactUs/>
      <SubscribeToUs/>

      
    </>
  );
};
export default AboutUs;
