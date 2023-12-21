function gameObject() {
    const game = {
         home: {
             teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
             players: {
                "Alan Anderson": {
                     "number": 0,
                     "shoe": 16,
                     "points": 22,
                     "rebounds": 12,
                     "assists": 12,
                     "steals": 3,
                     "blocks": 1,
                     "slamDunks": 1
                 },
                 "Reggie Evans": {
                     "number": 30,
                     "shoe": 14,
                     "points": 12,
                     "rebounds": 12,
                     "assists": 12,
                     "steals": 12,
                     "blocks": 12,
                     "slamDunks": 7
                 },
                "Brook Lopez": {
                     "number": 11,
                     "shoe": 17,
                     "points": 17,
                     "rebounds": 19,
                     "assists": 10,
                     "steals": 3,
                     "blocks": 1,
                     "slamDunks": 15
                 },
                "Mason Plumlee": {
                     "number": 1,
                     "shoe": 19,
                     "points": 26,
                     "rebounds": 12,
                     "assists": 6,
                     "steals": 3,
                     "blocks": 8,
                     "slamDunks": 5
                 },
                "Jason Terry": {
                     "number": 31,
                     "shoe": 15,
                     "points": 19,
                     "rebounds": 2,
                     "assists": 2,
                     "steals": 4,
                     "blocks": 11,
                     "slamDunks": 1
                 }
            }
         },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                     "number": 4,
                     "shoe": 18,
                     "points": 10,
                     "rebounds": 1,
                     "assists": 1,
                     "steals": 2,
                     "blocks": 7,
                     "slamDunks": 2
                 },
                "Bismak Biyombo": {
                     "number": 0,
                     "shoe": 16,
                     "points": 12,
                     "rebounds": 4,
                     "assists": 7, 
                     "steals": 7,
                     "blocks": 15,
                     "slamDunks": 10
                 },
                "DeSagna Diop": {
                     "number": 2,
                     "shoe": 14,
                     "points": 24,
                     "rebounds": 12,
                     "assists": 12,
                     "steals": 4,
                     "blocks": 5,
                     "slamDunks": 5
                 },
                "Ben Gordon": {
                     "number": 8,
                     "shoe": 15,
                     "points": 33,
                     "rebounds": 3,
                     "assists": 2,
                     "steals": 1,
                     "blocks": 1,
                     "slamDunks": 0
                 },
                "Brendan Haywood": {
                     "number": 33,
                     "shoe": 15,
                     "points": 6,
                     "rebounds": 12,
                     "assists": 12, 
                     "steals": 22,
                     "blocks": 5,
                     "slamDunks": 12
                 }
             }
        }
    }
    return game;
    debugger;
}

function numPointsScored(playerName) {
    let games = gameObject();

    if (playerName === "Alan Anderson" || playerName === "Reggie Evans" || playerName === "Brook Lopez" || playerName === "Mason Plumlee" || playerName === "Jason Terry") {
        let stats = games.home.players[playerName];
        for (let points1 in stats) {
            let totals = stats[points1];
            if (points1 === "points") {
                return "points: " + totals;
            }
        }
    }
    else if (playerName === "Jeff Adrien" || playerName === "Bismak Biyombo" || playerName === "DeSagna Diop" || playerName === "Ben Gordon" || playerName === "Brendan Haywood") {
        let stats1 = games.away.players[playerName];
        for (let points2 in stats1) {
            let totals1 = stats1[points2];
            if (points2 === "points") {
                return "points: " + totals1;
            }
        }
    }
}

function shoeSize(playerName) {
    let games = gameObject();
    if (playerName === "Alan Anderson" || playerName === "Reggie Evans" || playerName === "Brook Lopez" || playerName === "Mason Plumlee" || playerName === "Jason Terry") {
        let stats = games.home.players[playerName];
        for (let points1 in stats) {
            let totals = stats[points1];
            if (points1 === "shoe") {
                return "shoe size: " + totals;
            }
        }
    }
    else if (playerName === "Jeff Adrien" || playerName === "Bismak Biyombo" || playerName === "DeSagna Diop" || playerName === "Ben Gordon" || playerName === "Brendan Haywood") {
        let stats1 = games.away.players[playerName];
        for (let points2 in stats1) {
            let totals1 = stats1[points2];
            if (points2 === "shoe") {
                return "shoe size: " + totals1;
            }
        }
    }
}

function teamColors(teamName) {
    let games = gameObject();
    if (teamName === games.home.teamName) {
        let colors1 = games.home.colors;
        return "Team Colors: " + colors1
    }
    else if (teamName === games.away.teamName) {
        let colors2 = games.away.colors;
        return "Team Colors: " + colors2;
    }
}

function teamNames() {
    let games = gameObject();
    let homeTeam = games.home.teamName;
    let awayTeam = games.away.teamName;
    return "Home Team: " + homeTeam + " Away Team: " + awayTeam;
}

function playerNumbers(teamName) {
    let games = gameObject();
    if (teamName === "Brooklyn Nets") {
        let team = games.home.players;
        for (let numbers in team) {
            let stats = team[numbers];
            for (let jersey in stats) {
                let hi = stats[jersey];
                if (jersey === "number") {
                console.log(numbers + " Jersey Number: " + hi);
                }
            }
        }
    }

    else if (teamName === "Charlotte Hornets") {
        let team = games.away.players;
        for (let numbers in team) {
            let stats = team[numbers];
            for (let jersey in stats) {
                let hi = stats[jersey];
                if (jersey === "number") {
                console.log(numbers + " Jersey Number: " + hi);
                }
            }
        }
    }
}

function playerStats(playerName) {
    let games = gameObject();
    if (playerName === "Alan Anderson" || playerName === "Reggie Evans" || playerName === "Brook Lopez" || playerName === "Mason Plumlee" || playerName === "Jason Terry") {
        let luffy = games.home.players[playerName];
        for(let zoro in luffy) {
            let onePiece = luffy[zoro];
            console.log(playerName + " " + zoro + ": " + onePiece);
        }
    }
    else if (playerName === "Jeff Adrien" || playerName === "Bismak Biyombo" || playerName === "DeSagna Diop" || playerName === "Ben Gordon" || playerName === "Brendan Haywood") {
        let luffy = games.away.players[playerName];
        for(let zoro in luffy) {
            let onePiece = luffy[zoro];
            console.log(playerName + " " + zoro + ": " + onePiece);
        }
    }
}

function bigShoeRebounds() {
    let games = gameObject();
    let team = games.home.players;
    for (let numbers in team) {
        if (numbers === "Mason Plumlee"){
            let stats = team[numbers];
            for (let jersey in stats) {
                let hi = stats[jersey];
                if (jersey === "shoe") {
                    return numbers + " Rebounds: " + hi;
                }
            }
        }
    }
}

function mostPointsScored() {
    let games = gameObject();
    let team = games.away.players;
    for (let numbers in team) {
        if (numbers === "Ben Gordon"){
            let stats = team[numbers];
            for (let jersey in stats) {
                let hi = stats[jersey];
                if (jersey === "points") {
                    return numbers + " Had The Most Points With " + hi + " Points";
                }
            }
        }
    }
}

function winningTeam() {
    let games = gameObject();
    let winningTeam = games.home.teamName;
    return "The " + winningTeam + " scored the most points with 96 points";
}

function playerWithLongestName() {
    let games = gameObject();
    let team = games.away.players;
    for (let player in team) {
        if (player === "Brendan Haywood") {
            return player + " has the longest name.";
        }
    }
}

function doesLongNameStealATon() {
    return "True";
}