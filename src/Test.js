import React from 'react';
function Test() {
  const runScript = () => {
    console.log("start")
    // Create a new WebSocket connection
    const socket = new WebSocket('wss://54.172.56.141:4000');

    // Connection opened
    socket.addEventListener('open', (event) => {
      console.log('Connected to server');
      socket.send('Hello Server!');
    });

    // Listen for messages
    socket.addEventListener('message', (event) => {
      console.log('Message from server:', event.data);
    });

    // Connection closed
    socket.addEventListener('close', (event) => {
      console.log('Server connection closed', event);
    });


   // Handle errors
    socket.addEventListener('error', (event) => {
      console.error('WebSocket Error:', event);
      console.log('Ready state:', socket.readyState);
      console.log('Buffered amount:', socket.bufferedAmount);
      // Add additional information if available
      if (event.message) {
        console.error('Error message:', event.message);
      }
    });



    // Send a message to the server
    function sendMessage(message) {
      socket.send(message);
    }



    console.log("end")
  };

  return (
    <div>
      <h1>React Front Page</h1>
      <button onClick={runScript}>Run Script</button>
    </div>
  );
}

export default Test;
