// Character list is an array. The array represents a single team.
// Characters themselves are objects. The object name will be the character's name, and each key/property unit will be a stat (e.g., HP: 100;)

/*
Cool ideas:
	- name color changes according to type
	- add a resistance display ("attack x2" or something)
*/


let actionDisplay = document.querySelector("#actionDisplay");
let addOnDisplay = document.querySelector("#addOnDisplay");
let healthDisplay = document.querySelector("#healthDisplay");
let winnerDisplay = document.querySelector("#winnerDisplay");


const characterList = [
    {
		name: "Billy",
		HP: 200,
        attack: 25,
        type: 'fire'
	},
	{
		name: "Bob",
		HP: 200,
        attack: 25,
        type: 'water'
	},
	{
		name: "Phrog",
		HP: 200,
        attack: 25,
        type: 'grass'
	},
	{
		name: "Alpha",
		HP: 100,
        attack: 50,
        type: 'fire'
	},
	{
		name: "Bravo",
		HP: 100,
        attack: 50,
        type: 'water'
	},
	{
		name: "Charlie",
		HP: 100,
        attack: 50,
        type: 'grass'
	}
];

let turn = 0;

let team1;
let team2;

let team1Current = 0;
let team2Current = 0;

let team1Death = function() {
    if (team1Current === 2) {
		winnerDisplay.innerHTML = ("Team 2 wins!");
        console.log("team 1 dead lol")
    };
};

let team2Death = function() {
    if (team2Current === 2) {
		winnerDisplay.innerHTML = ("Team 1 wins!");
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
	chooseTeam1Button.remove();
	chooseTeam2Button.style.visibility = "visible";
	return team1;
}

const makeTeam2 = function() {
	team2 = chooseTeam();
	chooseTeam2Button.remove();
	attackGuy.style.visibility = "visible";
	return team2;
}

const weakList = {
    grass: ['fire'],
    fire: ['water'],
    water: ['grass']
};

const resistanceList = {
    water: ['fire', 'water'],
    grass: ['water', 'grass'],
    fire: ['grass', 'fire']
}

//[1, 2, 3].includes(2)
// true
//[1, 2, 3].includes('hello')
// false

//WEAKNESSES[target.type].includes(attacker.type)

const damageCalculator = function(attacker, target, ) {
    let weak = false;
    let resistant = false;
    let damage = 0;

    if (weakList[target.type].includes(attacker.type)) { // e.g., if weakList['grass'].includes('water')
        weak = true;
    }

    if (resistanceList[target.type].includes(attacker.type)) { // e.g., if resistanceList['fire'].includes('fire')
        resistant = true;
    }

    if (!weak && !resistant) {
        damage = attacker.attack;
    } else if (weak && !resistant) {
		damage = attacker.attack*2;
		addOnDisplay.innerHTML = (target.name + " takes extra damage from a " + attacker.type + " type!");
    } else if (!weak && resistant) {
        damage = attacker.attack*0.5;
		addOnDisplay.innerHTML = (target.name + " resists the " + attacker.type + " attack!");
    }

    console.log("target: " + target.name + " weak = " + weak + " resistant = " + resistant);
    return damage;
};

const turnCalculator = function() {
    if (turn === 0) {
        attack(team2[team2Current], team1[team1Current]);
        turn = 1;
		console.log("Team 1's turn");
    } else {
        attack(team1[team1Current], team2[team2Current]);
        turn = 0;
		console.log("Team 2's turn");
    };
};

// function for subtracting a character's HP due to an attack
const attack = function(attacker, target) {
    let damage = damageCalculator(attacker, target);
	actionDisplay.innerHTML = (attacker.name + " attacks " + target.name + "!");
	let originalHP = target.HP;
	if (originalHP > damage) {
		target.HP -= damage;
		healthDisplay.innerHTML = (target.name + "'s HP drops to " + target.HP + "!");
	} else if (originalHP <= damage) {
		target.HP = 0; // so HP can't go into the negatives
		healthDisplay.innerHTML = (target.name + " is defeated!");
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

const attackGuy = document.querySelector('#attackGuy')
attackGuy.addEventListener("click", turnCalculator);

const chooseTeam1Button = document.querySelector('#chooseTeam1Button');
const chooseTeam2Button = document.querySelector('#chooseTeam2Button');

chooseTeam1Button.addEventListener("click", makeTeam1);
chooseTeam2Button.addEventListener("click", makeTeam2);
