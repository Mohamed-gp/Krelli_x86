import AddProperty from "../../components/addProperty/AddProperty";
import ChatBot from "../../components/chatbot/ChatBot";
import FeaturesSection from "../../components/features/FeaturesSection";
import Hero from "../../components/hero/Hero";
import PhoneApp from "../../components/phoneApp/PhoneApp";
import PropertiesSection from "../../components/properties/PropertiesSection";


const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <PropertiesSection />
      <PhoneApp />
      <AddProperty />
      <ChatBot/>
      
    </>
  );  
};
export default Home;
