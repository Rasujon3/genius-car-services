import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithTwitter,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] =
    useSignInWithFacebook(auth);
  const [signInWithTwitter, user3, loading3, error3] =
    useSignInWithTwitter(auth);
  const [token] = useToken(user || user1 || user2 || user3);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorElement;
  if (loading || loading1 || loading2 || loading3) {
    return <Loading />;
  }
  if (error || error1 || error2 || error3) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div>
        {errorElement}
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2">Facebok Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
        <button
          onClick={() => signInWithTwitter()}
          className="btn btn-info w-50 d-block mx-auto"
        >
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Twitter Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
