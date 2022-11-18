import React from "react";

import { GoogleLogout } from "react-google-login";

const Sidebar = ({ clientId, logOut }) => {
  return (
    <div>
      <div className="grid place-items-center">
        <GoogleLogout
          clientId={clientId}
          buttonText="Log out"
          onLogoutSuccess={logOut}
        />
      </div>
    </div>
  );
};

export default Sidebar;
