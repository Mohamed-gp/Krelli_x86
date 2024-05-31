
interface FeaturesCardProps {
  cardTitle: string;
  cardImagePath: string;
}

const FeaturesCard = ({ cardTitle, cardImagePath }: FeaturesCardProps) => {
  return (
    <div className="flex flex-col w-full sm:w-[49%] md:w-[33%] items-center gap-3  text-center h-[120px]">
      <div className="">
        <img src={`/${cardImagePath}.svg`} alt="" />
      </div>
      <p className="">{cardTitle}</p>
    </div>
  );
};
export default FeaturesCard;
