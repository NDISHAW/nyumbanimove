import React from 'react'
// import { Form, Button } from "react-bootstrap";

const Destination = ({formData}) => {
  return (
    <div>
      {/* <h3 className="mb-4">Destination Confirmation</h3> */}
      <div className="row flex my-3">
        <p className="col text-2xl">Origin: </p>
        <p className="col ml-4 text-2xl">{formData.origin}</p>
      </div>
      <div className="row flex mb-2">
        <p className="col text-2xl">Destination: </p>
        <p className="col ml-4 text-2xl">{formData.destination}</p>
      </div>
      <div className="row flex mb-2">
        <p className="col text-2xl">Mover: </p>
        <p className="col ml-4 text-2xl">{formData.mover_id}</p>
      </div>

      
      <div className="row flex mb-2">
        <p className="col text-2xl">Distance: </p>
        <p className="col ml-4 text-2xl">{formData.distance}</p>
      </div>
      {/* <Form>
        <div className="center">
          <Button type="submit">Next</Button>
        </div>
      </Form> */}
    </div>
  );
}

export default Destination
