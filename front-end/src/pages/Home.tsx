import { useState } from "react";
import FeaturesSection from "../components/features/FeaturesSection";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import PropertiesSection from "../components/properties/PropertiesSection";

const Home = () => {
  const [firstIndex,setFirstIndex] = useState<number>(0);
  const [lastIndex,setLastIndex] = useState<number>(0);
  return (
    <>
      <Hero />
      <FeaturesSection />
      <PropertiesSection firstIndex={firstIndex} lastIndex={lastIndex} />
    </>
  );
};
export default Home;
