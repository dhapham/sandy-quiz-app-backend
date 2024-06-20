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
