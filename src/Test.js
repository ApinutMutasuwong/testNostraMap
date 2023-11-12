import axios from 'axios';
import React from 'react';

function Test() {
  const runScript = () => {
    const url = 'https://muka4hp71i.execute-api.us-east-1.amazonaws.com/test';
    const data = {
      "name" : "ECC"
 }
    
    axios.post(url,data)
        .then(response => {
            console.log('Success', response.data);
        })
        .catch(error =>{
            console.error('Error',error);
        })

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

