// Character list is an array. The array represents a single team.
// Characters themselves are objects. The object name will be the character's name, and each key/property unit will be a stat (e.g., HP: 100;)


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
    if (team1Current === 3) {
        console.log("team 1 dead lol")
    };
};

let team2Death = function() {
    if (team2Current === 3) {
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
	return team1;
}

const makeTeam2 = function() {
	team2 = chooseTeam();
	chooseTeam2Button.remove();
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
    
    if (weakList[target.type].includes(attacker.type)) {
        weak = true;
    }
    
    if (resistanceList[target.type].includes(attacker.type)) {
        resistant = true;
    } 
    
        if (weak === false && resistant === false) {
            damage = attacker.attack;
        } else if (weak === true && resistant === false) {
            damage = attacker.attack*2;
        } else if (weak === false && resistant === true) {
            damage = attacker.attack*0.5;
        }
    
    console.log(weak, resistant);
    return damage;
};

const turnCalculator = function() {
    if (turn === 0) {
        attack(team2[team2Current], team1[team1Current]);
        turn = 1;
    } else {
        attack(team1[team1Current], team2[team2Current]);
        turn = 0;
    };
};

// function for subtracting a character's HP due to an attack
const attack = function(attacker, target) {
    let damage = damageCalculator(attacker, target);
	let originalHP = target.HP;
	if (originalHP > damage) {
		target.HP -= damage;
		console.log(target.name + "'s HP went from " + originalHP + " to " + target.HP + "!"); // display on page instead of doing console.log()
	} else if (originalHP <= damage) {
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
attackGuy.addEventListener("click", turnCalculator);

const chooseTeam1Button = document.querySelector('#chooseTeam1Button');
const chooseTeam2Button = document.querySelector('#chooseTeam2Button');

chooseTeam1Button.addEventListener("click", makeTeam1);
chooseTeam2Button.addEventListener("click", makeTeam2);
