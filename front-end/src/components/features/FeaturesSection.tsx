import FeaturesSectionImage from "../../../public/featuresSectionImage.png";
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
        <div className="flex items-center justify-between my-6">
          <div className="img">
            <img
              src={FeaturesSectionImage}
              alt="featuresSectionImage"
              className="w-[300px]"
            />
          </div>
          <div className="flex flex-wrap justify-between w-[70%] px-6 gap-y-6 items-center">
            {featuresCardsData.map((feature) => {
              return (
                <>
                  <FeaturesCard cardTitle={feature.title} cardImagePath={feature.path}/>
                </>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;