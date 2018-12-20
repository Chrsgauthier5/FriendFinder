var friendData = require("../data/friends.js");

module.exports = function (app) {


    app.get("/api/friends", (req, res) => {
        console.log('Request receieved');
        res.json(friendData);
    });

    app.post("/api/friends", (req, res)=>{

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 100
        };

        var newFriends = req.body; //capture the input data from user and store the object as variable
        var newScores = newFriends.scores; //reference the scores array of the newFriend object


        //looping through the friendData array which should hold all Friend objects
        for (i = 0; i < friendData.length; i ++){
            var scoreDiff = 0;

            for (j = 0; j < friendData[i].scores.length; j++){
                scoreDiff += Math.abs(parseInt(newScores[j]) - parseInt(friendData[i].scores[j]));
            }
                
                if (bestMatch.friendDifference > scoreDiff){
                    bestMatch.name = friendData[i].name;
                    bestMatch.picture = friendData[i].photo;
                    bestMatch.friendDifference = scoreDiff;
                    console.log(bestMatch)
                }
            
        }


        friendData.push(newFriends) //puts the new survey data into the friendData array
        res.json(bestMatch);
    });
    
}