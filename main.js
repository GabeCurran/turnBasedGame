const team1Div = document.querySelector('#team1Div');
const team2Div = document.querySelector('#team2Div');


// team 1
let team1char1name = document.querySelector("#team1char1name");
let team1char1health = document.querySelector("#team1char1health");
let team1char2name = document.querySelector("#team1char2name");
let team1char2health = document.querySelector("#team1char2health");
let team1char3name = document.querySelector("#team1char3name");
let team1char3health = document.querySelector("#team1char3health");

// team 2
let team2char1name = document.querySelector("#team2char1name");
let team2char1health = document.querySelector("#team2char1health");
let team2char2name = document.querySelector("#team2char2name");
let team2char2health = document.querySelector("#team2char2health");
let team2char3name = document.querySelector("#team2char3name");
let team2char3health = document.querySelector("#team2char3health");

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

const setTeamVisuals = function() {
	// Team 1
	team1char1name.innerHTML = team1[0].name;
	team1char1health.innerHTML = team1[0].HP;

	team1char2name.innerHTML = team1[1].name;
	team1char2health.innerHTML = team1[1].HP;

	team1char3name.innerHTML = team1[2].name;
	team1char3health.innerHTML = team1[2].HP;

	// Team 2
	team2char1name.innerHTML = team2[0].name;
	team2char1health.innerHTML = team2[0].HP;

	team2char2name.innerHTML = team2[1].name;
	team2char2health.innerHTML = team2[1].HP;

	team2char3name.innerHTML = team2[2].name;
	team2char3health.innerHTML = team2[2].HP;
}

const makeTeam1 = function() {
	team1 = chooseTeam();
	console.log("makeTeam1");
	chooseTeam1Button.remove();
	return team1;
}

const makeTeam2 = function() {
	team2 = chooseTeam();
	console.log("makeTeam2");
	chooseTeam2Button.remove();
	return team2;
}

chooseTeam1Button.addEventListener("click", makeTeam1);
chooseTeam2Button.addEventListener("click", makeTeam2);

const startGame = function() {
	startGameButton.remove();
	attackButton.style.visibility = "visible";
	setTeamVisuals();
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

// So... if this is going the route I think it's going, we're going to have to have a method like this for each single button.
// I mean, it shouldn't be too hard, but it will be a lot of functions.
// But I think that's just what's necessary at the moment.
const attackTest = function() {
	attackDamage(30, team1[0]);
	team1char1health.innerHTML = team1[0].HP;
}

const attackButton = document.querySelector("#attack");
attackButton.addEventListener("click", attackTest);
