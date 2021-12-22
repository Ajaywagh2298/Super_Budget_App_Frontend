const express = require('express');


// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 8080;

app.get('/', (req, res) => {
  res.send("hello server is run !")
});
// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
