import { FaMap } from "react-icons/fa6";

interface ShowMapPropertiesButtonProps {
  setViewType: (viewType: string) => void;
}

const ShowMapPropertiesButton = ({
  setViewType,
}: ShowMapPropertiesButtonProps) => {
  return (
    <button
      onClick={() => setViewType("map")}
      className="fixed bottom-12 left-1/2 z-[10102129090912910920190921] mx-auto flex -translate-x-1/2 items-center gap-2 text-wrap rounded-xl bg-buttonColor px-6 py-2 text-white"
    >
      <FaMap />
      <span className="">Show Map</span>
    </button>
  );
};
export default ShowMapPropertiesButton;
