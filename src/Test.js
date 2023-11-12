import React, { useState } from 'react';

function Test() {
  // Move useState outside the runScript function
  const [ws, setWs] = useState(null);

  const runScript = () => {
    console.log("start");

    // Create a new WebSocket connection
    const nativeWebSocket = new WebSocket("wss://35.153.142.248:4000");
    setWs(nativeWebSocket);

    nativeWebSocket.onopen = () => {
      console.log("WebSocket connection established on search file");
    };

    nativeWebSocket.onmessage = (event) => {
      const data = event.data;
      console.log(`Received WebSocket data: ${data}`);
      // Handle data received from the server (e.g., map updates)
    };

    nativeWebSocket.onclose = () => {
      console.log("WebSocket connection closed on search file");
    };

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
