/*const express = require('express');
// create new express app and save it as "app"
const app = express();
// server configuration
const PORT = 8081;

app.get('/', (req, res) => {
  res.send('/dashboard')
});
// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
}); */
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "super-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

// simple route
app.get("/", (req, res) => {
  //res.json({ message: "Welcome to the Server,<h1>localhost:${PORT}</h1>" });
  res.send(`Welcome to the Server,<h1>localhost:${PORT}</h1>`);
});

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

