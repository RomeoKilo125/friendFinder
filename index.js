const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

let app = express();
let PORT = process.env.port || 3000;

app.use(express.static(path.join(__dirname, 'app/public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)



app.listen(PORT, () => {
  console.log("Server online. Listening on port " + PORT);
});
