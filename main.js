const team1Div = document.querySelector('#team1Div');
const team2Div = document.querySelector('#team2Div');

const attackButtons = document.querySelector(".attackButtons");

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

const attackGuy = document.querySelector('#attackGuy')

const attackCharacter = function() {
    if (turn === 0) {
        attackDamage(team2[team2Current].attack, team1[team1Current]);
        turn = 1;
    } else {
        attackDamage(team1[team1Current].attack, team2[team2Current]);
        turn = 0;
    };
    console.log(turn);
};

attackGuy.addEventListener("click", attackCharacter);


// Character list is an array. The array represents a single team.
// Characters themselves are objects. The object name will be the character's name, and each key/property unit will be a stat (e.g., HP: 100;)


const characterList = [
    {
		name: "Billy",
		HP: 200,
		speed: 75,
        attack: 25
	},
	{
		name: "Bob",
		HP: 100,
		speed: 75,
        attack: 25
	},
	{
		name: "Joe",
		HP: 100,
		speed: 75,
        attack: 25
	},
	{
		name: "Alpha",
		HP: 100,
		speed: 75,
        attack: 25
	},
	{
		name: "Bravo",
		HP: 100,
		speed: 75,
        attack: 25
	},
	{
		name: "Charlie",
		HP: 100,
		speed: 75,
        attack: 25
	}
];

let turn = 0;

let team1;
let team2;

let team1Current = 0;
let team2Current = 0;

let team1Death = function() {
    if (team1Current === 2) {
        console.log("team 1 dead lol")
    };
};

let team2Death = function() {
    if (team2Current === 2) {
        console.log("team 2 dead lol")
    };
};

const chooseTeam = function() {
    let teamArray = [];

    for (let counter = 1; counter <= 3; counter++) {
		let chosenChar = {};
        let choice = prompt("Choose your " + counter + " member!\nPick their number!");
		choice--;
		Object.assign(chosenChar, characterList[choice]);
        teamArray.push(chosenChar);
		console.log(chosenChar);
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
	attackButtons.style.visibility = "visible";
	setTeamVisuals();
    console.log("This is where the game starts");
};

startGameButton.addEventListener("click", startGame);

// function for subtracting a character's HP due to an attack
const attackDamage = function(attackStrength, target) {
	let originalHP = target.HP;
	if (originalHP > attackStrength) {
		target.HP -= attackStrength;
		console.log(target.name + "'s HP went from " + originalHP + " to " + target.HP + "!"); // display on page instead of doing console.log()
	} else if (originalHP <= attackStrength) {
		target.HP = 0; // so HP can't go into the negatives
		console.log(target.name + " is defeated!"); // display on page instead of doing console.log()
        if (turn === 0) {
            team1Death();
            team1Current++;
            turn = 1;
        } else {
            team2Death();
            team2Current++;
            turn = 0;
        };
	};
};

// So... if this is going the route I think it's going, we're going to have to have a method like this for each single button.
// I mean, it shouldn't be too hard, but it will be a lot of functions.
// But I think that's just what's necessary at the moment.
const attackTeam1Char1 = function() {
	attackDamage(30, team1[0]);
	team1char1health.innerHTML = team1[0].HP;
}
let attackTeam1Char1Button = document.querySelector("#attack-1-1");
attackTeam1Char1Button.addEventListener("click", attackTeam1Char1);


const attackTeam1Char2 = function() {
	attackDamage(30, team1[1]);
	team1char2health.innerHTML = team1[1].HP;
}
let attackTeam1Char2Button = document.querySelector("#attack-1-2");
attackTeam1Char2Button.addEventListener("click", attackTeam1Char2);


const attackTeam1Char3 = function() {
	attackDamage(30, team1[2]);
	team1char3health.innerHTML = team1[2].HP;
}
let attackTeam1Char3Button = document.querySelector("#attack-1-3");
attackTeam1Char3Button.addEventListener("click", attackTeam1Char3);


const attackTeam2Char1 = function() {
	attackDamage(30, team2[0]);
	team2char1health.innerHTML = team2[0].HP;
}
let attackTeam2Char1Button = document.querySelector("#attack-2-1");
attackTeam2Char1Button.addEventListener("click", attackTeam2Char1);


const attackTeam2Char2 = function() {
	attackDamage(30, team2[1]);
	team2char2health.innerHTML = team2[1].HP;
}
let attackTeam2Char2Button = document.querySelector("#attack-2-2");
attackTeam2Char2Button.addEventListener("click", attackTeam2Char2);


const attackTeam2Char3 = function() {
	attackDamage(30, team2[2]);
	team2char3health.innerHTML = team2[2].HP;
}
let attackTeam2Char3Button = document.querySelector("#attack-2-3");
attackTeam2Char3Button.addEventListener("click", attackTeam2Char3);
