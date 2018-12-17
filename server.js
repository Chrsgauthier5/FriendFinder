var express = require("express");
var path = require("path");
var app = express();
//Server port: 8080
const PORT =  process.env.PORT || 8080;
//Working directory
const DIR = __dirname;


//Use statements
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


 //On asset request, send asset file
app.get("/assets/:assetType/:asset", (req, res) => {
    // Keep assets in type speceific directories, named after the file extension of
    // its child assets. Then, assetReqType can be used to refer to the asset library,
    // as well as be used to concatinate the filename. 

    // Pull the requested asset type from URL
    var assetReqType = req.params.assetType;
    // Pull the requested asset from URL
    var assetReq = req.params.asset;
    // Create the requested asset filename
    var assetReqFilename = assetReq + "." + assetReqType;
    // Create the absolute filepath of the requested asset
    var assetPath = path.join(DIR, "client", "assets", assetReqType, assetReqFilename);
    // Send the asset that has been 
    res.sendFile(assetPath);
    
    console.log(`Asset requested [ ${assetReqType}, ${assetReq} ]`);
    console.log(assetPath)
});


require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);  // taking routes from htmlRoutes file, and passing express as the argument app


app.listen(PORT, function(err){
    if(err)throw(err);
    console.log("Server listening on port " + PORT);
});
