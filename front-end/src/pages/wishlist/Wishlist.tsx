import LeftSideNav from "../../components/leftSideNav/LeftSideNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import PropertyCard from "../../components/properties/PropertyCard";

const Wishlist = () => {
  const user = useSelector((state: IRootState) => state.auth.user);

  return (
    <>
      <div className="mt-12 flex gap-6">
        {/* left side */}
        <LeftSideNav />
        {/* right side */}
        <div className="w-full">
          <p className="mb-6 text-3xl font-bold">Wishlist</p>
          {user && (
            <div className="mt-12 flex gap-6">
              <div className="w-full">
                <div className="mx-12 my-6 flex flex-wrap items-center justify-center gap-12">
                  {(user?.Favorite?.length == 0 || !user.Favorite) && (
                    <div
                      className="flex w-full items-center justify-center"
                      style={{ height: "calc(100vh - 350px)" }}
                    >
                      <div className="flex flex-col items-center">
                        <p className="font-bold">No Wishlist Found</p>
                        <p className="mb-3 mt-1 text-center text-sm opacity-70">
                          Go Browse Some Properties And Add To Wishlist
                        </p>
                        <Link
                          to={`/properties?category=`}
                          className="cursor-pointer rounded-xl border-2 border-black px-6 py-2 text-center font-bold"
                        >
                          Add Some Properties To Wishlist
                        </Link>
                      </div>
                    </div>
                  )}
                  <>
                    {user?.Favorite?.map((userFavorites) => (
                      <PropertyCard
                        property={userFavorites.Home}
                        key={userFavorites.id + "wishlist"}
                      />
                    ))}
                  </>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Wishlist;
