const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 4000;

// Use the cors middleware
app.use(cors());

// Define a sample API endpoint
app.get('/api/resource', (req, res) => {
  res.json({ message: 'Hello from your API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
