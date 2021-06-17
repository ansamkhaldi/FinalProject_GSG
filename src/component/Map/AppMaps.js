import React from "react";
// import {
//   GoogleMap,
//   withScriptjs,
//   withGoogleMap,
//   Marker,
// } from "react-google-maps";

// function Map() {
//   return (
//     <GoogleMap
//       bootstrapURLKeys={{ key: "AIzaSyCUqlJhwhmfhryV0UGrnMQIM2SLoT-8d3k" }}
//       defaultZoom={10}
//       defaultCenter={{ lat: 32.464634, lng: 35.293858 }}
//     >
//       <Marker position={{ lat: -34.397, lng: 150.644 }} />
//     </GoogleMap>
//   );
// }
// const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function AppMaps(props) {
  return (
    <div class="map">
      <div class="container">
        <iframe
          title="This is a unique title"
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?q=NY%2094559%20125%20Green%20Street&key=AIzaSyCUqlJhwhmfhryV0UGrnMQIM2SLoT-8d3k"
        ></iframe>
        {/* <iframe
          title="This is a unique title"
          src="https://maps.google.com/maps?q=Jenin%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe> */}
      </div>
    </div>
    // <div style={{ height: "300px", width: "100%" }}>
    //   <WrappedMap
    //     googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCUqlJhwhmfhryV0UGrnMQIM2SLoT-8d3k&v=3.exp&libraries=geometry,drawing,places`}
    //     loadingElement={<div style={{ height: `100%` }} />}
    //     containerElement={<div style={{ height: `100%` }} />}
    //     mapElement={<div style={{ height: `100%` }} />}
    //   />
    // </div>
  );
}
