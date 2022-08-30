import React, {useState, useRef} from 'react'
import {
  useJsApiLoader,
  // GoogleMap,
  // Marker,
  Autocomplete,
  // DirectionsRenderer,
} from "@react-google-maps/api";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from "@chakra-ui/react";



const Location = ({formData, setFormData}) => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  }); 

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();
  if (!isLoaded) {
    return <SkeletonText />;
  }
  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    // console.log(results)
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }








  return (
    <>
    <form>
      <div className="mb-6">
        <label
          for="origin"
          className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
        >
          Your origin
        </label>

        <Autocomplete>
          <input
            type="text"
            id="origin"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter first location"
            required=""
            value={formData.origin}
            onChange={(e) =>
              setFormData({ ...formData, origin: e.target.value })
            }
          />
        </Autocomplete>
      </div>
      <div className="mb-6">
        <label
          for="destination"
          className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
        >
          Your destination
        </label>
        <Autocomplete>
          <input
            type="destination"
            id="destination"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter second location"
            required=""
            value={formData.destination}
            onChange={(e) =>
              setFormData({ ...formData, destination: e.target.value })
            }
          />
        </Autocomplete>
      </div>

      <label
        for="companies"
        class="block mb-2 text-sm font-medium text-white dark:text-gray-400"
      >
        Select an option
      </label>
      <select
        id="companies"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      >
        <option selected>Choose a moving company</option>
        <option value="MoversNShakers">MoversNShakers</option>
        <option value="OfisiMove">OfisiMove</option>
        <option value="UtahamaLini">UtahamaLini?</option>
      </select>

      <span>Distance: {formData.distance}</span>
    </form>
    </>
  );
}

export default Location