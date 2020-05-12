import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

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
        {/* <Marker coordinates={[2.3522, 48.8566]} anchor="bottom">
          <img src={arrow} alt="" />
        </Marker> */}

        {/* <Image id={"image-uid"} data={logo} style={{ width: "50px" }} /> */}

        <Layer type="symbol" layout={{ "icon-image": "rocket-15" }}>
          <Feature coordinates={[2.2399, 48.8397]} />
          <Feature coordinates={[2.2399, 48.8597]} />
        </Layer>
      </Map>
      ;
    </div>
  );
};

export default Home;
