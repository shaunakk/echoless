const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(path.join('./', 'echoless', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile('./echoless/build/index.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})
