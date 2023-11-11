import React from "react";

class NostraMapComponent extends React.Component {
  render() {
    return (
      <div className="map-page">
        <iframe
          src="http://54.146.242.149/:4000" // Replace with your server's URL
          title="Nostra Map"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    );
  }
}

export default NostraMapComponent;
