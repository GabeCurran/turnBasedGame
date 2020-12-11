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

const makeTeam1 = function() {
	team1 = chooseTeam();
	console.log("makeTeam1");
	chooseTeam1Button.remove();
	chooseTeam2Button.style.visibility = "visible";
	return team1;
}

const makeTeam2 = function() {
	team2 = chooseTeam();
	console.log("makeTeam2");
	chooseTeam2Button.remove();
	attackGuy.style.visibility = "visible";
	return team2;
}

const attackCharacter = function() {
    if (turn === 0) {
        attackDamage(team2[team2Current], team1[team1Current]);
        turn = 1;
		console.log("Team 1's turn");
    } else {
        attackDamage(team1[team1Current], team2[team2Current]);
        turn = 0;
		console.log("Team 2's turn");
    };
};

// function for subtracting a character's HP due to an attack
const attackDamage = function(attacker, target) {
	console.log(attacker.name + " attacks " + target.name + "!");
	let originalHP = target.HP;
	if (originalHP > attacker.attack) {
		target.HP -= attacker.attack;
		console.log(target.name + "'s HP drops to " + target.HP + "!");
	} else if (originalHP <= attacker.attack) {
		target.HP = 0; // so HP can't go into the negatives
		console.log(target.name + " is defeated!"); // display on page instead of doing console.log()
        if (turn === 0) {
			team1Current++;
            team1Death();
            turn = 1;
        } else {
			team2Current++;
            team2Death();
            turn = 0;
        };
	};
};

const attackGuy = document.querySelector('#attackGuy')
attackGuy.addEventListener("click", attackCharacter);

const chooseTeam1Button = document.querySelector('#chooseTeam1Button');
const chooseTeam2Button = document.querySelector('#chooseTeam2Button');

chooseTeam1Button.addEventListener("click", makeTeam1);
chooseTeam2Button.addEventListener("click", makeTeam2);
