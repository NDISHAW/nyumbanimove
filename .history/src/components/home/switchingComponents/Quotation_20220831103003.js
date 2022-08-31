import React from "react";
import { Form, Button } from "bootstrap";

function Quotation({formData}) {
  console.log(formData);
  return (
    <div className="quote">
      {/* <h3 className="mb-4">Quotation</h3> */}
      <div className="row flex my-3">
        <p className="col texhouseSizet-2xl">Origin: </p>
        <p className="col ml-4 text-2xl">{formData.origin}</p>
      </div>
      <div className="row flex mb-2">
        <p className="col text-2xl">Destination: </p>
        <p className="col ml-4 text-2xl">{formData.destination}</p>
      </div>
      <div className="row flex mb-2">
        <p className="col text-2xl">Mover: </p>
        <p className="col ml-4 text-2xl">{formData.mover_}</p>
      </div>

      <div className="row flex mb-2">
        <p className="col text-2xl">Distance: </p>
        <p className="col ml-4 text-2xl">{formData.distance}</p>
      </div>
      <div className="row flex my-3">
        <p className="col text-2xl">House</p>
        <p className="col ml-4 text-2xl">{formData.houseSize}</p>
      </div>

      <div className="row flex mb-2">
        <p className="col text-2xl">Moving date:</p>
        <p className="col ml-4 text-2xl">{formData.date}</p>
      </div>

      <div className="row flex mb-2">
        <p className="col text-2xl">Moving Time</p>
        <p className="col ml-4 text-2xl">{formData.time}</p>
        {/* <Button type="submit">Accept</Button> */}
      </div>

      {/* <div className="row flex my-3">
        <p className="col text-2xl">Total:</p>
        <p className="col ml-4 text-2xl">Kshs 14,200</p>
      </div> */}

      {/* <div className="row flex my-3">
        <p className="col text-2xl">Total:</p>
        <p className="col ml-4 text-2xl">{formData.destination}</p>
      </div> */}
      {/* <Form>
        <div className="center">
          <Button type="submit">Accept</Button>
          <Button>Decline</Button>
        </div>
      </Form> */}
    </div>
  );
}

export default Quotation;
