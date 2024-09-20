import PropertyCard from "./PropertyCard";

interface PropertiesCardProps {
  properties: any;
  all?: boolean;
  setFilter?: any;
}

const PropertiesCard = ({
  properties,
  all,
  setFilter,
}: PropertiesCardProps) => {
  return (
    <>
      {properties?.length == 0 && all ? (
        <div
          className="flex w-full items-center justify-center"
          style={{ height: "calc(100vh - 350px)" }}
        >
          <div className="flex flex-col items-center">
            <p className="font-bold">No Exact Much</p>
            <p className="mb-3 mt-1 text-center text-sm opacity-70">
              Try Changing Or Removing Some Of Your Filters
            </p>
            <div
              className="cursor-pointer rounded-xl border-2 border-black px-6 py-2 text-center font-bold"
              onClick={() => setFilter({ category: "" })}
            >
              Remove All Filters
            </div>
          </div>
        </div>
      ) : properties?.length > 0 ? (
        <>
          {all ? (
            <>
              {properties?.map((property) => (
                <PropertyCard property={property} key={property.id} />
              ))}
            </>
          ) : (
            <>
              {properties
                .slice(0, 3)
                ?.map((property) => (
                  <PropertyCard property={property} key={property.id} />
                ))}
            </>
          )}
        </>
      ) : null}
    </>
  );
};
export default PropertiesCard;
