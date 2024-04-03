import AddProperty from "../components/addProperty/AddProperty";
import FeaturesSection from "../components/features/FeaturesSection";
import Hero from "../components/hero/Hero";
import PhoneApp from "../components/phoneApp/PhoneApp";
import PropertiesSection from "../components/properties/PropertiesSection";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <PropertiesSection />
      <PhoneApp />
      <AddProperty />
    </>
  );
};
export default Home;
