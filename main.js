const team1Div = document.querySelector('#team1Div');
const team2Div = document.querySelector('#team2Div');
const chooseTeam1Button = document.querySelector("#selectTeam1");
const chooseTeam2Button = document.querySelector("#selectTeam2");
const startGameButton = document.querySelector("#startGame");

// Character list is an array. The array represents a single team.
// Characters themselves are objects. The object name will be the character's name, and each key/property unit will be a stat (e.g., HP: 100;)


const characterList = [
    {
		name: "Billy",
		HP: 100,
		speed: 75,
	},
	{
		name: "Bob",
		HP: 100,
		speed: 75,
	},
	{
		name: "Joe",
		HP: 100,
		speed: 75,
	},
	{
		name: "Alpha",
		HP: 100,
		speed: 75,
	},
	{
		name: "Bravo",
		HP: 100,
		speed: 75,
	},
	{
		name: "Charlie",
		HP: 100,
		speed: 75,
	}
];

let team1;
let team2;

const chooseTeam = function() {

    let teamArray = [];

    for (let counter = 1; counter <= 3; counter++) {
        let choice = prompt("Choose your " + counter + " member!\nPick their number!");
		choice--;
        teamArray.push(characterList[choice]);
		console.log(characterList[choice]);
    };
    return teamArray;
};

const makeTeam1 = function() {
	team1 = chooseTeam();
	console.log("makeTeam1");
    appendTeam(team1, team1Div);
	chooseTeam1Button.remove();
	return team1;
}

const makeTeam2 = function() {
	team2 = chooseTeam();
	console.log("makeTeam2");
    appendTeam(team2, team2Div);
	chooseTeam2Button.remove();
	return team2;
}

chooseTeam1Button.addEventListener("click", makeTeam1);
chooseTeam2Button.addEventListener("click", makeTeam2);

// Make a div for each character INSIDE the teamDiv.
// Have sub-divs inside character divs; character name is on the left, and character HP is on the right.
// Add the entire character div into the teamDiv.
const appendTeam = function(team, teamDiv) {
    for (let char of team) {
		let charDiv = document.createElement("div");
        let nameDiv = document.createElement("div");
		nameDiv.innerHTML = char.name;
        charDiv.appendChild(nameDiv);
		let healthDiv = document.createElement("div");
		healthDiv.innerHTML = char.HP;
		charDiv.appendChild(healthDiv);
		teamDiv.appendChild(charDiv);
    }
		console.log("appendTeam");
    };

const startGame = function() {
    console.log("This is where the game starts");
};

startGameButton.addEventListener("click", startGame);

// function for subtracting a character's HP due to an attack
const attackDamage = function(attackStrength, target) {
	let originalHP = target.HP; // let originalHP = target.HP;
	if (originalHP > attackStrength) {
		target.HP -= attackStrength;
		console.log(target.name + "'s HP went from " + originalHP + " to " + target.HP + "!"); // display on page instead of doing console.log()
	} else if (originalHP <= attackStrength) {
		target.HP = 0; // so HP can't go into the negatives
		console.log(target.name + " is defeated!"); // display on page instead of doing console.log()
	}
};

//attackDamage(30, team1);
