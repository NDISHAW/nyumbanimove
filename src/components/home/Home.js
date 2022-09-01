import React from "react";
import Footer from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import Cards from "./Cards";
// import Landin from "./Landin";
import Switch from "./switchingComponents/Switch";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
// import { Switch } from "react-router-dom";

const Home = () => {

  return (
    <div className="bg-amber-100">
      <Navbar />

      {/* <Landin/> */}

      <div className="w-11/12 mx-auto">
        <div className=" pb-4">
          <img
            className="homeImage mx-auto  w-4/5"
            src="https://images.unsplash.com/photo-1619302820124-e3b9d8a7f686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="Homepage pic"
          />
          <div class="centered text-white">
            <h1 className="text-7xl">Utahama Lini?</h1>
            <p className="text-xl">
              "We like to move it, move it. Let us help you move it, move it."
            </p>
            <span> - NyumbaniMove™</span>
          </div>
        </div>
        {/* <Landin/> */}

        {/* //moving component/////////////////////// */}

        <div className="mx-auto w-4/5">
          <Switch/>
        </div>

        <div className="text-center py-9 my-9 bg-white w-4/5 mx-auto">
          <h2 className="font-semibold text-3xl">Our Moving Services</h2>
          <h4 className="py-4 text-xl">
            We believe in providing flexible moving services to make getting to
            your next stop in life much easier.{" "}
          </h4>
        </div>

        <Cards />
      </div>
      <TawkMessengerReact
        propertyId="6304fcd154f06e12d8904e69"
        widgetId="1gb5nn5cl"
      />
      <Footer />
    </div>
  );
};

export default Home;