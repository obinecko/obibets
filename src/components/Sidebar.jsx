import React from "react";
import { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { ImStatsDots } from "react-icons/im";
import { IoMdFootball } from "react-icons/io";
import { GiHockey } from "react-icons/gi";

const Sidebar = ({ profile, clientId, logOut }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "LandingPage", to: "/landingpage", icon: BiCategory },
    { name: "Football", to: "/football", icon: IoMdFootball },
    { name: "Hockey", to: "/hockey", icon: GiHockey },
    { name: "Statistics", to: "/stats", icon: ImStatsDots },
  ];

  const NavLinks = () => (
    <div>
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className="flex  text-white my-8 flex-row  hover:text-green-500 smooth-transition"
        >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      ))}
    </div>
  );

  return (
    <div>
      <div>
        <div className="h-full md:flex hidden flex-col    text-white fixed top-0 w-1/4  ">
          <div className="grid place-items-center  mt-8">
            <img
              src={profile.imageUrl}
              referrerPolicy="no-referrer"
              alt="profileImg"
              className="rounded-full"
              width={60}
            />
          </div>

          <div className="">
            <h1 className="text-center pt-2">{profile.givenName}</h1>
            <h2 className="text-sm  text-center mt-2">
              Membership: <span className="text-green-600">Trial</span>
            </h2>
          </div>

          <div className="grid place-items-center mt-8  ">
            <NavLinks />
          </div>

          <div className="grid place-items-center">
            <GoogleLogout
              clientId={clientId}
              buttonText="Log out"
              onLogoutSuccess={logOut}
            />
          </div>
        </div>
      </div>

      <div className=" fixed top-6 right-3 text-white md:hidden ">
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 "
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="w-6 h-6 mr-2 "
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 h-full w-2/3 bg-[#15012A]  z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <div>
          <div className="grid place-items-center  mt-8 font-bold text-xl">
            <img
              src={profile.imageUrl}
              referrerPolicy="no-referrer"
              alt="profileImg"
              className="rounded-full shadow-xl"
              width={60}
            />
            <NavLinks />
            <div className="grid place-items-center ">
              <GoogleLogout
                clientId={clientId}
                buttonText="Log out"
                onLogoutSuccess={logOut}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
