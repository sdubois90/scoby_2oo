import React from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import arrow from "../marker-purple.svg";

const Home = (props) => {
  // Implement react map box here.

  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
    maxZoom: 20,
  });

  return (
    <div>
      <h1>MAPBOX MAP HERE</h1>
      <p>On home /</p>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        // style="mapbox://styles/sebdubois90/cka2g2mtz340d1ilnr1t7k27q"
        containerStyle={{
          height: "50vh",
          width: "50vw",
        }}
        center={[2.3522, 48.8566]}
      >
        <Layer type="symbol" layout={{ "icon-image": "rocket-15" }}>
          <Feature coordinates={[2.3522, 48.8566]} />
        </Layer>
      </Map>
      ;
    </div>
  );
};

export default Home;
