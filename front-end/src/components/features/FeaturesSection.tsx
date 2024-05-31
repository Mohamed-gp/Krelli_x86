import { featuresCardsData } from "../../utils/data";
import TitleHeading from "../title-heading/TitleHeading";
import FeaturesCard from "./FeaturesCard";

const FeaturesSection = () => {
  return (
    <section>
      <div className="container flex flex-col py-12">
        <TitleHeading>
          minimum living cost takes care of everything
        </TitleHeading>
        <div className="flex items-center justify-between my-6 md:flex-row flex-col ">
          <div className="img">
            <img
              src="/featuresSectionImage.png"
              alt="featuresSectionImage"
              className="w-[300px]"
            />
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-[70%] px-6 gap-y-6 items-center">
            {featuresCardsData.map((feature) => {
              return (
                <FeaturesCard
                key={feature.path}
                  cardTitle={feature.title}
                  cardImagePath={feature.path}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
