import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import customAxios from "../../utils/axios";
import { app } from "../../utils/fireBase";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const { displayName, email, photoURL } = result.user;
      const { data } = await customAxios.post("/auth/google", {
        username: displayName,
        email,
        photoUrl: photoURL,
      });
      console.log(data);
      toast.success(data.message);
      dispatch(authActions.login(data.data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      type="button"
      onClick={() => handleGoogleSignIn()}
      className="text-mainColor my-2 flex w-full justify-center gap-2 rounded-xl border-2 py-2"
    >
      <img src="/Google.svg" alt="google" width={20} height={20} />
      <p className="text-primaryColor">Continue With Google</p>
    </button>
  );
};
export default GoogleSignIn;
