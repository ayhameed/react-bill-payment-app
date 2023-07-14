// server/index.js
const path = require("path");
const express = require("express");
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

//allow cors to react app
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  console.log("Hello from route /api");
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});