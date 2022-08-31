import React, { useState, useRef, useEffect } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
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

const center = { lat: 1.9577, lng: 37.2972 };

const Location = ({ formData, setFormData }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [movers, setMovers] = useState([]);

  useEffect(() => {
    fetchMoversHandler();
  }, []);

  async function fetchMoversHandler() {
    const response = await fetch("http://localhost:3000/api/movers/");
    const data = await response.json();
    setMovers(data);
  }
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
  async function calculateRoute(e) {
    e.preventDefault();
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
    setFormData({
      ...formData,
      distance: results.routes[0].legs[0].distance.text,
    });
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
            <Input
              type="text"
              id="origin"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter first location"
              required=""
              ref={originRef}
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
            <Input
              type="destination"
              id="destination"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter second location"
              required=""
              ref={destiantionRef}
              value={formData.destination}
              onChange={(e) =>
                setFormData({ ...formData, destination: e.target.value })
              }
            />
          </Autocomplete>
        </div>

        <label
          for="movers"
          class="block mb-2 text-sm font-medium text-white dark:text-gray-400"
        >
          Select a Moving Company
        </label>
        {/* <select
          id="movers"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.mover}
          onChange={(e) => setFormData({ ...formData, mover: e.target.value })}
        >
          <option selected>Choose a moving company</option>
          <option value="1">1</option>
          <option value="2">OfisiMove</option>
          <option value="3">UtahamaLini?</option>
        </select> */}

        <select
          value={formData.mover}
          onChange={(e) => setFormData({ ...formData, mover: e.target.value })}
        >
          <option selected>Choose a moving company</option>
          {movers.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <h1>{movers.name}</h1>
        {/* <Input
          // ref={destiantionRef}
          // defaultValue={distance}
          value={formData.distance}
          onChange={(e) =>
            setFormData({ ...formData, distance: e.target.value })
          }
        >{distance}</Input> */}

        <Text>Distance: {distance}</Text>

        <Button
          className="py-2 px-2 rounded mx-2"
          bg="#F3D34E"
          colorScheme="#FAF3C7"
          textColor="black"
          type="submit"
          onClick={calculateRoute}
          // borderRadius={0}
        >
          See Route
        </Button>

        <Flex
          position="relative"
          flexDirection="column"
          alignItems="center"
          h="35vh"
          w="80vw"
        >
          <Box
            position="flex"
            left={0}
            top={0}
            h="130%"
            w="130%"
            className="mx-auto "
          >
            {/* Google Map Box */}
            <GoogleMap
              // className="z-0"
              center={center}
              zoom={6}
              mapContainerStyle={{ width: "60%", height: "100%" }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={(map) => setMap(map)}
            >
              <Marker position={center} />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </Box>
        </Flex>
      </form>
    </>
  );
};;

export default Location;
