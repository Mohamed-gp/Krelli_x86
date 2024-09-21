import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { LuUpload, LuGrip } from "react-icons/lu";
import { FaHeart, FaStar, FaTrash, FaX } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import customAxios from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import Rating from "../../components/rating/Rating";
import Swal from "sweetalert2";
import { BsHeart } from "react-icons/bs";
import { authActions } from "../../store/slices/authSlice";
import {
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";

const SingleProperty = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: IRootState) => state.auth.user);
  const { id } = useParams();

  const [house, sethouse] = useState<any>({
    Pictures: [{ url: "/images.png" }],
  });
  const [propertyOwner, setpropertyOwner] = useState<any>();
  const [reviews, setreviews] = useState([]);
  const [review, setreview] = useState({
    rating: 5,
    comment: "",
  });
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [daysCount, setdaysCount] = useState(0);
  const [emptyArray, setemptyArray] = useState<any[]>([]);
  const [isPaymentModelOpen, setIsPaymentModelOpen] = useState(false);
  const [selectedPayement, setSelectedPayement] = useState("stripe");
  const getHouseById = async () => {
    try {
      const { data } = await customAxios.get(`/homes/${id}`);
      sethouse(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPropertyOwnerById = async (id: string) => {
    try {
      const { data } = await customAxios.get(`/users/${id}`);
      setpropertyOwner(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getHouseReviews = async () => {
    try {
      const { data } = await customAxios.get(`/homes/${id}/reviews`);
      setreviews(data.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getHouseById();
    getHouseReviews();
  }, []);

  useEffect(() => {
    getPropertyOwnerById(house?.userId);
  }, [house]);

  useEffect(() => {
    if (state[0].endDate) {
      const difference: any = new Date(state[0]?.endDate - state[0]?.startDate);
      const unixDate: any = new Date(0);
      const dif = difference - unixDate;
      setdaysCount(dif / 1000 / 3600 / 24);
    }
  }, [state]);
  const copy = () => {
    const input = document.createElement("input");
    input.setAttribute("value", location.href);
    document.body.appendChild(input);
    input.select();
    const result = document.execCommand("copy");
    document.body.removeChild(input);
    toast.success("copied succefuly to clipBoard,share it with your friends");
    return result;
  };
  const messageHouseHandler = async () => {
    try {
      const { data } = await customAxios.post(`/homes/${house?.id}/chat`);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  const reserveHandler = async () => {
    try {
      const { data } = await customAxios.post(
        `/homes/${house?.id}/reserve/${selectedPayement}`,
        {
          checkIn: new Date(state[0]?.startDate).toISOString().slice(0, 10),
          checkOut: new Date(state[0]?.endDate).toISOString().slice(0, 10),
        },
      );
      toast.success(data.message);
      window.open(data.url, "_blank");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    setemptyArray([]);
    for (let index = 0; index < 5; index++) {
      setemptyArray((prev) => prev.concat(index));
    }
  }, []);
  const addReviewHandler = async () => {
    try {
      const { data } = await customAxios.post(`/homes/${house?.id}/review`, {
        rating: 6 - review.rating,
        comment: review.comment,
      });
      getHouseReviews();

      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  const toggleWishlistHandler = async (e, id) => {
    e.preventDefault();
    try {
      const { data } = await customAxios.post(`/users/wishlist/${id}`);
      dispatch(authActions.setWishlist(data.data));
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const deleteReviewHandler = (id) => {
    Swal.fire({
      title: "Are you sure to remove this Review?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await customAxios.delete(`/homes/${id}/review`);
          getHouseReviews();
          toast.success(data.message);
          Swal.fire({
            title: "Deleted!",
            text: "Review Deleted Successfuly",
            icon: "success",
          });
        } catch (error) {
          console.log(error);
          toast.error(error?.response?.data.message);
        }
      } else {
        Swal.fire({
          title: "your Review is Safe!",
          text: "something went wrong",
          icon: "error",
        });
      }
    });
  };

  return (
    <>
      <div className="container my-12">
        <div className="flex justify-between">
          <p className="text-2xl font-bold">{house?.title}</p>
          <div className="flex items-center gap-6">
            <div
              onClick={() => copy()}
              className="flex cursor-pointer items-center gap-2 hover:opacity-75"
            >
              <LuUpload />
              <p className="underline">Share</p>
            </div>
            {user && (
              <div
                className="cursor-pointer"
                onClick={(e) => toggleWishlistHandler(e, house.id)}
              >
                <div className="flex items-center gap-1">
                  <FaHeart
                    className={`absolute z-50 text-[19px] duration-300 hover:text-buttonColor ${
                      user?.Favorite?.find((ele) => ele?.homeId == house?.id)
                        ? "text-buttonColor"
                        : ""
                    }`}
                  />
                  <BsHeart className="absolute text-[22px] text-white" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="relative my-4 flex items-center justify-center gap-x-2 rounded-2xl">
          <div className="relative h-[348px] w-[50%] overflow-hidden rounded-l-xl">
            {house?.Pictures[0]?.url ? (
              <img
                src={house?.Pictures[0]?.url}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : null}
            <div className="absolute left-0 top-0 h-full w-full bg-black opacity-0 duration-300 hover:opacity-15"></div>
          </div>
          <div className="flex flex-col gap-y-2">
            {emptyArray?.map((ele, index) => (
              <>
                {index <= 1 && (
                  <div className="relative h-[170px] object-fill">
                    <img
                      src={house?.Pictures[index + 1]?.url}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute left-0 top-0 h-full w-full bg-black opacity-0 duration-300 hover:opacity-15"></div>
                  </div>
                )}
              </>
            ))}
          </div>
          <div className="flex flex-col gap-y-2">
            {emptyArray?.map((ele, index) => (
              <>
                {index <= 3 && index >= 2 && (
                  <div className="relative h-[170px] object-fill">
                    <img
                      src={house?.Pictures[index + 1]?.url}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute left-0 top-0 h-full w-full bg-black opacity-0 duration-300 hover:opacity-15"></div>
                  </div>
                )}
              </>
            ))}
          </div>
          <Link
            to={`/properties/${id}/photos`}
            className="absolute -bottom-12 right-1/2 flex translate-x-1/2 cursor-pointer items-center gap-2 rounded-xl bg-white px-6 py-2 md:right-0 md:translate-x-0"
          >
            <LuGrip />
            <p>Show all photos</p>
          </Link>
        </div>
        {/*  */}
        <div className="flex flex-wrap justify-center gap-8 pt-12 md:flex-nowrap">
          <div className="col-span-8 flex flex-1 flex-col">
            <div className="flex items-center gap-2">
              <p className="opacity-50">{house?.guests} guests</p>
              <p className="h-[4px] w-[4px] rounded-full bg-black"></p>
              <p className="opacity-50">{house?.bedrooms} bedrooms</p>
              <p className="h-[4px] w-[4px] rounded-full bg-black"></p>
              <p className="opacity-50">{house?.bathrooms} bathrooms</p>
            </div>

            <div className="my-3 flex flex-wrap items-center justify-center gap-4 sm:justify-normal">
              <div className="size-10 overflow-hidden rounded-full">
                <img src={propertyOwner?.profileImage} alt="" />
              </div>
              <div className="flex flex-1 flex-col opacity-90">
                <p className="text-center sm:text-left">
                  Hosted by{" "}
                  <span className="text-center font-bold">
                    {propertyOwner?.username}
                  </span>
                </p>
                <p className="text-center sm:text-left">
                  Member Since{" "}
                  <span className="font-bold">
                    {propertyOwner?.createdAT?.slice(0, 10)}
                  </span>
                </p>
              </div>
              {propertyOwner?.id != user?.id && user && (
                <button
                  onClick={() => messageHouseHandler()}
                  className="rounded-xl bg-buttonColor px-6 py-2 text-white"
                >
                  Message Host
                </button>
              )}
              {!user && (
                <Link
                  to="/login"
                  // onClick={() => messageHouseHandler()}
                  className="rounded-xl bg-buttonColor px-6 py-2 text-white"
                >
                  Login First To Be Able To Message The Owner and reserve
                </Link>
              )}
            </div>
            <p className="my-4 border-y-2 border-y-[#4561ec53] py-12">
              {house?.description}
            </p>
            {house.latitude && house.longitude && (
              <MapContainer
                className="z-[500] mx-auto h-[500px]"
                style={{ width: "calc(100%)", height: "500px" }}
                zoom={2}
                maxBounds={[
                  [-90, -18000],
                  [90, 18000],
                ]}
                minZoom={2}
                center={[house?.latitude, house?.longitude]}
                scrollWheelZoom={false}
              >
                {/* add google map tile url  */}
                <LayersControl>
                  <LayersControl.BaseLayer checked name="Google Map">
                    <TileLayer
                      attribution="Google Maps"
                      url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
                    />
                  </LayersControl.BaseLayer>

                  <LayersControl.BaseLayer name="Google Map Satellite">
                    <LayerGroup>
                      <TileLayer
                        attribution="Google Maps Satellite"
                        url="https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
                      />
                      <TileLayer url="https://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}" />
                    </LayerGroup>
                  </LayersControl.BaseLayer>
                </LayersControl>
                <Marker position={[house?.latitude, house?.longitude]}>
                  <Popup>House Location</Popup>
                </Marker>
              </MapContainer>
            )}
            <div className="reviews flex flex-col">
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold">Reviews</p>
                <span className="text-xl">{reviews?.length}</span>
              </div>

              {propertyOwner?.id != user?.id && user && (
                <>
                  <div className="my-8 mb-4 rounded-lg rounded-t-lg border bg-white px-4 py-2">
                    <textarea
                      id="comment"
                      value={review?.comment}
                      onChange={(e) =>
                        setreview({ ...review, comment: e.target.value })
                      }
                      className="w-full border-0 px-0 text-sm focus:outline-none focus:ring-0"
                      placeholder="Write a review..."
                      required
                    ></textarea>
                  </div>
                  <div className="flex flex-row-reverse justify-between p-10">
                    {emptyArray?.map((index) => (
                      <FaStar
                        onClick={() =>
                          setreview({ ...review, rating: index + 1 })
                        }
                        className={`${
                          review.rating < index + 2
                            ? "text-yellow-500 opacity-100"
                            : "text-yellow-200"
                        } peer mx-2 h-6 w-6 hover:text-yellow-500 peer-hover:text-yellow-500`}
                      />
                    ))}
                    <span>{6 - review.rating}/5</span>
                  </div>
                  <button
                    type="submit"
                    disabled={review.comment.trim() == ""}
                    onClick={() => addReviewHandler()}
                    className="flex items-center justify-center bg-buttonColor px-4 py-2.5 text-center text-xs font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Post comment
                  </button>
                </>
              )}
              <>
                {reviews?.map((review) => (
                  <div className="my-4 flex flex-col border-y border-y-[#4561ec26] py-4">
                    <div className="my-3 flex items-center gap-2">
                      <div className="size-10 overflow-hidden rounded-full">
                        <img src={review?.User?.profileImage} alt="" />
                      </div>
                      <div className="gap2 flex flex-1 flex-col opacity-90">
                        <Rating rating={review?.rating} />
                        <p>{review?.User?.username}</p>
                      </div>
                      {review?.User?.id == user?.id && (
                        <FaTrash
                          onClick={() => deleteReviewHandler(review?.id)}
                          className="cursor-pointer text-red-400"
                        />
                      )}
                    </div>
                    <p className="break-words rounded-xl bg-white p-2">
                      {review?.comment}
                    </p>
                  </div>
                ))}
              </>
            </div>
          </div>
          {(propertyOwner?.id != user?.id || !user) && (
            <>
              <div className="col-span-4 flex h-fit flex-col rounded-xl bg-white p-6">
                <p className="my-2">
                  <span className="text-2xl">${house?.price} </span> night
                </p>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                />
                <button
                  // onClick={() => reserveHandler()}
                  onClick={() => setIsPaymentModelOpen(true)}
                  disabled={daysCount == 0}
                  className="mx-auto my-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#3d91ff] px-6 py-1 text-white duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Reserve
                </button>
                <div className="my-2 flex justify-between text-2xl">
                  <p className="text-lg font-bold">Nights</p>
                  <p>
                    {daysCount} * ${house?.price}
                  </p>
                </div>
                <div className="my-2 flex justify-between text-2xl">
                  <p className="font-bold">Total</p>
                  <p>{daysCount * house?.price}$</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {isPaymentModelOpen && (
        <div
          className="fixed left-0 top-0 z-[1000] h-screen w-screen"
          onClick={() => setIsPaymentModelOpen(false)}
        >
          <div
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            onClick={(e) => e.stopPropagation()}
            className="container fixed left-[25vw] top-[15vh] z-[61] mt-6 flex h-[70vh] w-[50vw] flex-col overflow-auto rounded-2xl bg-white p-6"
          >
            <FaX
              onClick={() => setIsPaymentModelOpen(false)}
              className="text-redColor absolute right-6 top-6 cursor-pointer"
            />
            <div className="mt-12 flex h-full flex-col items-center justify-center">
              <p className="font-bold">Chose Your payement method</p>
              <div className="my-12 flex flex-1 items-center justify-center gap-x-12">
                <div
                  onClick={() => setSelectedPayement("stripe")}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <div
                    style={
                      selectedPayement == "stripe"
                        ? { border: "2px solid #4561EC" }
                        : {}
                    }
                    className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border p-12"
                  >
                    <div className="img w-20 overflow-hidden rounded-full">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEVjWv////9hWP////2urPtRRv9bUf9ZT/9fVf9aUP/Oy/ddVP9gV//t7fj19f3PzvtVSv1pYfiOh/htZfhqYfyHgvjU0fd1b/mSjPlUSf75+vzIx/jp5/lwafns6vizsPulofm7uPje3PmgnPri4vnAvviZlPl/ePZkXP2Jgve4tPnDw/m7ufl9dfnY1vmmpPdMQf5DNfjCy6IFAAAD0UlEQVR4nO3Y63aiOgCGYQgacMA2KIpoLU4totjq9P5vbpOEeuhhd/banSXjep8fiCm0+ZojOM7aAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPC3EJeuwJ8kAqn8+NK1+INEsvr54O3kpevxXaLQj85L/LFb++Ffpj7fzVfpcjYKzsturyihba7JeSPahOPrSKj6nut6kzdtOPYei9Xwr55MA9nryVDohLq5BjKIhBMEUVAfw9AZ+pmSkSOimtAXy+j8ZnNvi0k5qYqiWs0zYRMuynKUrEdlWQ5VuV9GaX02SoP5ZjQarLOy2lYj9Zox7E2q7dMqaPNMqyrPtfpJ1m9O3UGsj0VRd1rHDM5xN9fXLR7M1Xfz0NycLabmu9dRF47xObVzD+bHhCOTcKoPws6l3Y7N4tqPZz1Ys9mhYJZdOsknZOcY0B0eE27i1zPvkNA9Na2HpF+dFOxb2lHVjY1hWuLjhM55wtc+XfTE0Kvvc6e7G/ufaOV0IxJT4b2Sw9Wt1/TSzmgzSIY2zi5/Cs56aZHGNqrX87f680GprhmpnVY2okhNtQdKOJGfNDONXi0im3CVSemfJrz7JYTam59NuuZjrdcRz0S9dJqPCGHbY/uswvpLsx7Wk4iwCWNx2LXZXnqnYygzA1Vzfey/+L7/cq9/STt3PXYqrZvgJo8C513C4YcJ/R/6dDZxz61bOhCnhyllI/89oe6K9zph70mX3C7fJJy3MqETrcevs6NXdn8z4c8PE6btTOgINS/skuE+vtiE0TGh86aXmoT2EWRre+nNq2nczoT1pllINbEZs99rw8z07Dw1Df+SqUY7AwaVo+qQsjSBEpNw6Yso+KANTcJfUZTZBXHTNd17kdXJRCRbuVbUlOfdLudibRZvt2cS3oySwfyTudSdlandqtcrvplS3TzJlHjOp0k729AubWb3pde2wza82bW9G4dHRS9KmznK7vnauVg4/vSk0kt/1VS5ebZ4Pw4PpvV05OenJW1NeFLtrXKyXZNw80VCr9RPT+qp/QnD/N50Mc/tr+q5QvgzE9At7TjUi7jfPAHbmaYw5Y/NE7DaPNq73ftF8MWfupRQJZN9lS/TzNZQxYuqs0pCZxjHsR6G9banPosTaRO+xIt8kR5Whkglq06+nyQqvFSCr4lAShkeXi6JUJo3S0KzJUaTUNU/D0/fRJnrg3b20P9GHlf8KyWPzxZXyibsX3PC3Hssli19QvoWIpGq1/KX2//TVYcDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArsY/dqQ5wPYTIAEAAAAASUVORK5CYII="
                        alt=""
                      />
                    </div>
                    <p className="font-bold">Stripe</p>
                    <p>WorldWide Users</p>
                  </div>
                  {selectedPayement == "stripe" && (
                    <p className="font-bold">selected</p>
                  )}
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <div
                    style={
                      selectedPayement == "chargily"
                        ? { border: "2px solid #4561EC" }
                        : {}
                    }
                    onClick={() => setSelectedPayement("chargily")}
                    className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border p-12"
                  >
                    <div className="img w-20 overflow-hidden rounded-full">
                      <img
                        src="https://lh3.googleusercontent.com/p/AF1QipMzO3gC3u2yUzaFOTFMFyXnf3mHfdnauwOGbYkL=s680-w680-h510"
                        alt=""
                      />
                    </div>
                    <p className="font-bold">Chargily</p>
                    <p>Algerian users</p>
                  </div>
                  {selectedPayement == "chargily" && (
                    <p className="font-bold">selected</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => reserveHandler()}
                // onClick={() => setIsPaymentModelOpen(true)}
                disabled={daysCount == 0}
                className="mx-auto my-2 flex w-full cursor-pointer items-end justify-center gap-2 rounded-xl bg-[#3d91ff] px-6 py-1 text-white duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SingleProperty;
