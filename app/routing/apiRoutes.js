var friendData = require("../data/friends.js");

module.exports = function (app) {


    app.get("/api/friends", (req, res) => {
        console.log('Request receieved');
        res.json(friendData);
    });

    app.post("/api/friends", (req, res)=>{
        friendData.push(req.body)
        res.json(true);
    });
    


}