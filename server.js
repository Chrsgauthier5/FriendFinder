var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
//Server port: 8080
const PORT = process.env.PORT || 8081;
//Working directory
const DIR = __dirname;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(DIR, 'app/public')))

// //Use statements
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
// })

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);  // taking routes from htmlRoutes file, and passing express as the argument app


app.listen(PORT, function (err) {
    if (err) throw (err);
    console.log("Server listening on port " + PORT);
});
