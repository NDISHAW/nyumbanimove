import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Navbar = () => {
  const { signoutCallback, auth } = useContext(AuthContext);

  return (
    <div className="sticky top-0">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-900 shadow-md">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> */}
            <img
              src="https://thumbs.dreamstime.com/z/green-houses-logo-real-estate-business-card-design-vector-52474227.jpg"
              className="mr-3 h-6 sm:h-9"
              alt="Nyumbani Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              NYUMBANIMOVE
            </span>
          </div>

          <div></div>
          {auth.name !== null ? (
            <button
              className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg"
              onClick={signoutCallback}
            >
              Log Out
            </button>
          ) : (
            <p>Logged Out</p>
          )}
        </div>
      </nav>
    </div>
  );
};