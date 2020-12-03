// Character list is an array. The array represents a single team.
// Characters themselves are objects. The object name will be the character's name, and each key/property unit will be a stat (e.g., HP: 100;)

const characterList = [
    char1 = {
        ID: 1,
		name: "",
		HP: 100,
	},
	char2 = {
        ID: 2,
		name: "",
		HP: 100,
	},
	char3 = {
        ID: 3,
		name: "",
		HP: 100,
	},
	char4 = {
        ID: 4,
		name: "",
		HP: 100,
	},
	char5 = {
        ID: 5,
		name: "",
		HP: 100,
	},
	char6 = {
        ID: 6,
		name: "",
		HP: 100,
	}
];

//for (element of characterList) {
//	console.log(element);
//};

const chooseTeam = function() {
    
    let teamArray = [];
    
    for (let counter = 1; counter <= 3; counter++) {
        let choice = prompt("Choose your " + counter + " member!");
        teamArray.push(choice);
    };
    return teamArray;
};

const team1 = function() {
    let team = chooseTeam();
    
    let teamChar1 = team[0];
    let teamChar2 = team[1];
    let teamChar3 = team[2];
    console.log(teamChar1);
    console.log(teamChar2);
    console.log(teamChar3);
};

team1();

//let team1 = [];
//let team2 = [];

//console.log(team1, team2);

// When user selects a character, that character is added to *team* array
