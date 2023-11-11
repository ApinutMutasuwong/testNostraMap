import React from 'react';

class NostraMapComponent extends React.Component {
  render() {
    return (
      <div>
        <iframe
          src="http://localhost:4000"  // Replace with your server's URL
          title="Nostra Map"
          width="1642"
          height="900"
          frameBorder="0"
        />
      </div>
    );
  }
}

export default NostraMapComponent;
