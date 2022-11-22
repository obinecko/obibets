import React from "react";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
//google login inport
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Welcome, Main } from "./pages";
import Pricing from "./components/Pricing";

const App = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const [profile, setProfile] = useState([]);
  const [sign, setSign] = useState(false);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    setSign(true);
    console.log("success:", res);
  };

  const onFailure = (err) => {
    console.log("failed:", err);
  };

  const logOut = () => {
    setProfile(null);
    setSign(false);
  };

  return (
    <div>
      {sign && profile ? (
        <div className="flex">
          <div className="w-1/4  md:flex">
            <Sidebar profile={profile} logOut={logOut} />
          </div>
          <div className="w-full md:w-3/4 lg:w-2/4">
            <Main />
            ||
            <Skeleton animation="wave" count={15} height={80} width={1000} />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <Welcome />
          </div>

          <div className="text-center p-6">
            <h1 className="text-white">Want to check it out? try for free</h1>
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </div>
          <div>
            <Pricing />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
