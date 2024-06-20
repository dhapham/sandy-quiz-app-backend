// app.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081; // Port can be set via environment variable

// Define routes or middleware here
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const express = require('express');
const cors = require('cors');

// Enable CORS for all origins (you may want to restrict this in production)
app.use(cors());

// Other middleware and route definitions
