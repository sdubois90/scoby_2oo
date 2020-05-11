import React from "react";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import arrow from '../marker-purpke.svg'

const Home = (props) => {
  // Implement react map box here.

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic2ViZHVib2lzOTAiLCJhIjoiY2thMmM1OTQ3MDh1YTNsb2dxamNzaXdmbCJ9._4108RVJ4WGYk8u1_jt9-g',
    maxZoom: 20
  });

  

  return (
    <div>
      <h1>MAPBOX MAP HERE</h1>
      <p>On home /</p>
      <Map
        // style="mapbox://styles/mapbox/streets-v9"
        style="mapbox://styles/sebdubois90/cka2g2mtz340d1ilnr1t7k27q"
        containerStyle={{
          height: '50vh',
          width: '50vw',
        }}
        center={[2.3522, 48.8566]}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
          <Feature coordinates={[2.3522, 48.8566]} />
        </Layer>
      </Map>;
    </div>
  );
};

export default Home;
