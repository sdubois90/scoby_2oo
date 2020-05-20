import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import apiHandler from "../api/apiHandler";
// import Popup from '../components/Popup';
import { Popup } from "react-mapbox-gl";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemClicked:{}
    }
  }
 
  componentDidMount() {
    apiHandler.getItems()
      .then((apiResponse) => {
        console.log(apiResponse)
        console.log(apiResponse[0].location.coordinates)
        this.setState({items: apiResponse})
      })
      .catch(apiError => console.log(apiError))
  }


  handlePopup = (item) => {
    this.setState({ itemClicked: item })
    console.log(item)
  }
  

  render() {
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
{/* onClick={() => this.handlePopup(item)} on peut lui passer item sans déclencher la fonction automatiquement ( à cause de : () ) */}
        <Layer type="symbol" layout={{ "icon-image": "rocket-15" }}>
          {this.state.items.map((item, index) => (
            <Feature onClick={() => this.handlePopup(item)} key={index} coordinates={item.location.coordinates} />
          ))}
          </Layer>
          {/* GUARD => Si itemClicked empty alors = false => rien ne se passe, sinon on rend ce qui est à droite */}
          {(this.state.itemClicked.location) &&
          <Popup coordinates={[this.state.itemClicked.location.coordinates[0], this.state.itemClicked.location.coordinates[1]]}
            offset={{ 'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38] }}>
            <div style={{ backgroundColor: "black", color: "white" }}>{this.state.itemClicked.name}</div>
            <img style={{height:"45px", width:"auto"}} src={this.state.itemClicked.image} alt="" />
            
        </Popup>
          }
      </Map>

      ;
    </div>
  );
  }
};

export default Home;
