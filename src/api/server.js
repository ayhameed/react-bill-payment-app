// server/index.js
const path = require("path");
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');

// 
const Flutterwave = require('flutterwave-react-v3');

//routes
// Import the hello route handler
const helloHandler = require('./routes/hello');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const buyAirtimeRouter = require('./routes/buyAirtime');


require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));


//setup MongoDB
const dbConnectionString = process.env.DB_CONNECTION_STRING;

//setup Flutter Wave
// const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);


mongoose.connect(dbConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

//use json
app.use(express.json());

//allow cors to react app
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Handle GET requests to /api/routes/hello
app.get('/hello', helloHandler);

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  console.log("Hello from route /api");
  res.json({ message: "Hello from server!" });
});

// Handle POST requests to /api/signup
app.use('/signup', signupRouter);

// Handle POST requests to /api/login
app.use('/login', loginRouter);

// Mount the route
app.use('/buyairtime', buyAirtimeRouter);


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});