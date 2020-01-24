var express = require('express');
var app = express();
var cors = require('cors');
var server = require('http').Server(app);
app.use(cors());


server.listen(4000, function() {
  console.log('Servidor corriendo en http://localhost:4000');
});

app.post("/hey", (req, res) => {
  return res.send({ ei: 2+1 });
});
