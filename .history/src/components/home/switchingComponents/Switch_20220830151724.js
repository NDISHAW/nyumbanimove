import React, { useState } from "react";
import Destination from "./Destination";
import HouseSize from "./HouseSize";
import Location from "./Location";
import Quotation from "./Quotation";
import Start from "./Start";
// import "../../../App.css"

const Switch = () => {
  const [page, setPage] = useState(0);
  const FormTitles = [
    "Get A Quote",
    "Choose Location",
    "Destination Confirmation",
    "House Size and Preffered Moving Date",
    "Final Quotation",
  ];

  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    company: "",
    distance: "",
    house: "",
    date: "",
    time: "",
    // quote: ""

  })

  const PageDisplay = () => {
    if (page === 0) {
      return <Start/>;
    } else if (page === 1) {
      return <Location formData ={formData} setFormData={setFormData}/>;
    } else if (page === 2) {
      return <Destination formData ={formData}/>;
    } else if (page === 3) {
      return <HouseSize formData ={formData} setFormData={setFormData}/>;
    } else {
      return <Quotation formData ={formData}/>;
    }
  };
  return (
    <div className="switchingComponent bg-black text-white">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "20%"
                : page === 1
                ? "40%"
                : page === 2
                ? "60%"
                : page === 3
                ? "80%"
                : "100%",
          }}
        ></div>
      </div>

      <div className="switch-container">
        <h1 className="switch-header text-4xl text-center">{FormTitles[page]}</h1>

        <div className="switch-body w-3/5">{PageDisplay()}</div>
      </div>

      <div className="switch-footer text-center mt-6">
        <button
          className="bg-amber-300 hover:bg-amber-500 text-white font-semibold hover:text-white py-2 px-4 border border-amber-300 hover:border-transparent rounded mx-2"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          className="bg-amber-300 hover:bg-amber-500 text-white font-semibold hover:text-white py-2 px-4 border border-amber-300 hover:border-transparent rounded mx-2"
          onClick={() => {
            if (page === FormTitles.length - 1) {
              // alert("FORM SUBMITTED");

              fetch("http://localhost:3000//bookings",{
                method:"post",
                headers:{
                  "content-Type": 
                }
              })

              console.log(formData);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitles.length - 1 ? "Accept Quote" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Switch;
