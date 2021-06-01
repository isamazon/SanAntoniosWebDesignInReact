import { React, Component } from "react";
import M from "materialize-css";
import { HashLink } from "react-router-hash-link";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Googlemap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 29.4241,
          lng: 98.4936,
        }}
        zoom={14}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:
    "https://www.google.com/maps/embed/v1/place?q=San_Antonios_Web_Design&key=import",
})(Googlemap);
