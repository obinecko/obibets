import React from "react";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
//google login inport
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const App = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const [profile, setProfile] = useState([]);

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
    console.log("success:", res);
  };

  const onFailure = (err) => {
    console.log("failed:", err);
  };

  const logOut = () => {
    setProfile(null);
  };

  return (
    <div>
      {profile ? (
        <div>
          <Sidebar  clientId={clientId} logOut={logOut} />
        </div>
      ) : (
        <div>
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
      )}
    </div>
  );
};

export default App;
