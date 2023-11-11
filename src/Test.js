import React from 'react';

function Test() {
  const runScript = () => {
    const WebSocket = require('ws');

    // Replace 'your-ec2-public-ip' with the actual public IP or DNS of your EC2 instance
    const serverAddress = 'ws://3.94.102.73:4000';

    const socket = new WebSocket(serverAddress);

    socket.on('open', () => {
    console.log('WebSocket connection opened');

    // Send a message to the server after the connection is opened
    socket.send('Hello, server!');
    });

    socket.on('message', (data) => {
    console.log('Received message from server:', data);
    });

    socket.on('close', (code, reason) => {
    console.log('WebSocket connection closed:', code, reason);
    });

    socket.on('error', (error) => {
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
