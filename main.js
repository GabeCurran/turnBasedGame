// Character list is an array. The array represents a single team.
// Characters themselves are objects. The object name will be the character's name, and each key/property unit will be a stat (e.g., HP: 100;)

const characterList = [
    char1 = {
        ID: 1,
		name: "Top Dude",
		HP: 100,
	},
	char2 = {
        ID: 2,
		name: "Sidekick Dude",
		HP: 100,
	},
	char3 = {
        ID: 3,
		name: "Dude 3",
		HP: 100,
	},
	char4 = {
        ID: 4,
		name: "Dude 4",
		HP: 100,
	},
	char5 = {
        ID: 5,
		name: "Dude 5",
		HP: 100,
	},
	char6 = {
        ID: 6,
		name: "Dude 6",
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

let team1 = chooseTeam();
let team2 = chooseTeam();

const appendTeam1 = function() {
        for (let char of team1) {
            charDiv = document.createElement('p');
            charDiv.textContent = char;
            team1Div.appendChild(charDiv);
        }
    };

const appendTeam2 = function() {
        for (let char of team2) {
            charDiv = document.createElement('p');
            charDiv.textContent = char;
            team2Div.appendChild(charDiv);
        }
    };

console.log(team1, team2);
appendTeam1();
appendTeam2();

// function for subtracting a character's HP due to an attack
const attackDamage = function(attackStrength, target) {
	originalHP = target.HP;
	if (originalHP > attackStrength) {
		target.HP -= attackStrength;
		console.log(target.name + "'s HP went from " + originalHP + " to " + target.HP + "!"); // display on page instead of doing console.log()
	} else if (originalHP <= attackStrength) {
		target.HP = 0; // so HP can't go into the negatives
		console.log(target.name + " is defeated!"); // display on page instead of doing console.log()
	}
};

attackDamage(30, char1); // char1 takes 30 damage
attackDamage(40, char1); // char1 takes 40 damage
attackDamage(30, char1); // char1 takes 30 damage and is defeated


//let team1 = [];
//let team2 = [];

//console.log(team1, team2);

// When user selects a character, that character is added to *team* array
