import React, { useState } from 'react';

function Test() {
  // Move useState outside the runScript function
  const [ws, setWs] = useState(null);

  const runScript = () => {
    console.log("start");

    const apiURL = 'http://100.24.10.175:4000';

    // Replace the placeholder values with your actual API details
    
    fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('API Response:', data);
        // Handle the response data as needed
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors appropriately
      });

    
    console.log("end");

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      nativeWebSocket.close();
    };
  };

  return (
    <div>
      <h1>React Front Page</h1>
      <button onClick={runScript}>Run Script</button>
    </div>
  );
}

export default Test;
