import React from 'react';

function Test() {
  const runScript = () => {
    const serverAddress = 'ws://3.94.102.73:4000';
    const socket = new WebSocket(serverAddress);

    socket.addEventListener('open', () => {
      console.log('WebSocket connection opened');
      // Send a message to the server after the connection is opened
      socket.send('Hello, server!');
    });

    socket.addEventListener('message', (event) => {
      console.log('Received message from server:', event.data);
    });

    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed:', event.code, event.reason);
    });

    socket.addEventListener('error', (error) => {
      console.error('WebSocket error:', error);
    });


    alert('Script executed!');
  };

  return (
    <div>
      <h1>React Front Page</h1>
      <button onClick={runScript}>Run Script</button>
    </div>
  );
}

export default Test;

