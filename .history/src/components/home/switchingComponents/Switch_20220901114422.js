import React, { useState, useEffect } from "react";
import Destination from "./Destination";
import HouseSize from "./HouseSize";
import Location from "./Location";
import Quotation from "./Quotation";
import Start from "./Start";
// import "../../../App.css"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Switch = () => {
  const [user, setUser] = useState(null);

    useEffect(() => {
      fetch("http://localhost:3000/api/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);
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
    user: "",
    mover_id: "",
    distance: "",
    houseSize: "",
    date: "",
    time: "",
    cost: "",
  });

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

  const notify = () => toast(`Your moving date is ${formData.date} at ${formData.time}. ${formData.mover} has been notified and will transport your belongings from ${formData.origin} to ${formData.destination}. Your total cost will be Ksh. ${formData.cost}`);


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

              notify();

              // function handleSubmit() {
              // e 
              // e.preventDefault();
              // fetch("https://nyumbani-move.herokuapp.com/api/bookings"
              fetch("http://localhost:3000/api/bookings", {
                // mode: "no-cors",
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              }).then((response) => {
                if (response.ok) {
                  response.json().then((formData) => console.log(formData));
                }
                // else {
                //   response.json().then((errorData) => setErrors(errorData.errors));
                // }
              });

              //   setFormData("");
              // }
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitles.length - 1 ? "Accept Quote" : "Next"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Switch;