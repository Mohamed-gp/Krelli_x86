import { useState } from "react";
import FeaturesSection from "../components/features/FeaturesSection";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import PropertiesSection from "../components/properties/PropertiesSection";
import { propertiesCardsData } from "../utils/data";
import Pagination from "../components/pagination/Pagination";

const Home = () => {
  // const [firstIndex, setFirstIndex] = useState<number>(0);
  // const [lastIndex, setLastIndex] = useState<number>(8);
  const [currentPage, setcurrentPage] = useState<number>(1);
  let firstIndex = (currentPage - 1) * 4;
  let lastIndex = currentPage * 4;
  const postsCount = propertiesCardsData.length;
  const properyPerPage = 4;
  return (
    <>
      <Hero />
      <FeaturesSection />
      <PropertiesSection firstIndex={firstIndex} lastIndex={lastIndex} />
      <Pagination currentPage={currentPage} setcurrentPage={currentPage} postsCount={postsCount} />
    </>
  );
};
export default Home;
