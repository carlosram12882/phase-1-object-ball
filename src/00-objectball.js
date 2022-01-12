//home
//Alan Anderson,	Reggie Evans,	Brook Lopez,	Mason Plumlee,	Jason Terry
//Number	    0	30	11	1	31
//Shoe	        16	14	17	19	15
//Points	    22	12	17	26	19
//Rebounds  	12	12	19	12	2
//Assists	    12	12	10	6	2
//Steals	    3	12	3	3	4
//Blocks	    1	12	1	8	11
//Slam Dunks	1	7	15	5	1

function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['black', 'white'],
            players: {
                'Alan Anderson': {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
                },
                'Reggie Evans': {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
                },
                'Brook Lopez': {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
                },
                'Mason Plumlee': {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
                },   
                'Jason Terry': {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
                }   
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
                }, 
                'Bismak Biyombo': {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
                },     
                'DeSagna Diop': {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
                },     
                'Ben Gordon': {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
                },  
                'Brendan Haywood': {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
                },        
            }
        }
    
    }
}

function homeTeam() {
    return gameObject().home
}

function awayTeam() {
    return gameObject().away
}

function players() {
    return Object.assign({}, homeTeam().players, awayTeam().players)
}

function homePlayers() {
    return Object.assign({}, homeTeam().players)
}

function awayPlayers() {
    return Object.assign({}, awayTeam().players)
}

function teamNames() {
    return [homeTeam().teamName, awayTeam().teamName]
}

function numPointsScored(playerInput) {
    return players()[playerInput].points
}

function shoeSize(playerInput) {
    return players()[playerInput].shoe
}

function teamColors(teamImput) {
    if (homeTeam().teamName === teamImput){
        return homeTeam().colors
    }
    if (awayTeam().teamName === teamImput){
        return awayTeam().colors
    }
}
function playerNumbers(teamImput) {
    let numberArray = []
    console.log('team ' , teamImput) 
    if (homeTeam().teamName === teamImput){
        for (let player in homePlayers()) {
            numberArray.push(homePlayers()[player].number)}
    }
    
    if (awayTeam().teamName === teamImput){
        for (let player in awayPlayers()) {
       
        
        numberArray.push(awayPlayers()[player].number)}
        
    }
    return numberArray
}

function playerStats(playerInput) {
    return players()[playerInput]
}

function bigShoeRebounds() {
    return players()['Mason Plumlee'].rebounds
}
//Mason Plumlee

console.log (bigShoeRebounds())
