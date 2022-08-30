import React from "react";
// import { Form, Button } from "react-bootstrap";

function Quotation({formData}) {
  return (
    <div className="quote">
      {/* <h3 className="mb-4">Quotation</h3> */}

      <div className="row flex my-3">
        <p className="col text-2xl">House</p>
        <p className="col ml-4 text-2xl">{}</p>
      </div>

      <div className="row flex mb-2">
        <p className="col text-2xl">Moving date:</p>
        <p className="col ml-4 text-2xl">{formData.date}</p>
      </div>

      <div className="row flex mb-2">
        <p className="col text-2xl">Moving Time</p>
        <p className="col ml-4 text-2xl">{formData.time}</p>
      </div>

      <div className="row flex my-3">
        <p className="col text-2xl">Total:</p>
        <p className="col ml-4 text-2xl">Kshs 14,200</p>
      </div>
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
