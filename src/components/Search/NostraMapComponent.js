import React from "react";

class NostraMapComponent extends React.Component {
  render() {
    return (
      <div className="map-page">
        <iframe
          src="http://localhost:4000" // Replace with your server's URL
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
