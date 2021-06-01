import { React, Component } from "react";
import "../styles/home/maps.css";
class Map extends Component {
  render() {
    return (
      <div id="Map">
        <iframe
          class="mapframe"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?q=San_Antonios_Web_Design&key=AIzaSyBTqw_XIWmlSOfRfEWfvWGod2OSzLkIQDA&zoom=12"
        ></iframe>
      </div>
    );
  }
}

export default Map;
