function gameObject(){
  return   {
        homeObject: {
            teamName : "Brooklyn Nets",
            colors : ["Black", "White"],
            players : {
                name : "Alan Anderson",
                number : 0,
                shoe : 16,
                points : 22,
                rebounds : 12,
                assists : 12,
                steals : 3,
                blocks : 1,
                slamDunks : 1,
            },
        },
        awayObject: {
            teamName : "Charlotte Hornets",
            colors : ["Turquoise", "Purple"],
            players : {
                name : "Jeff Adrien",
                number : 4,
                shoe : 18,
                points : 10,
                rebounds : 1,
                assists : 1,
                steals : 2,
                blocks : 7,
                slamDunks : 2,

            },
        },
    };
}

console.log(gameObject());
debugger

function homeTeamName(){
    let obj = gameObject()
    return obj['home']['teamName']
    
}
console.log(homeTeamName());

function numPointsScored(inputPlayer){
    let obj1 = gameObject()
    for(let key1 in obj1){
        let playerObj = obj1[key1];
         console.log(playerObj);
         
        }
    
    }
    numPointsScored("Anderson");
debugger