const team1Div = document.querySelector('#team1Div');
const team2Div = document.querySelector('#team2Div');

// Character list is an array. The array represents a single team.
// Characters themselves are objects. The object name will be the character's name, and each key/property unit will be a stat (e.g., HP: 100;)

const characterList = [
    {
		name: "1",
		HP: 100,
		speed: 75,
	},
	{
		name: "2",
		HP: 100,
		speed: 75,
	},
	{
		name: "3",
		HP: 100,
		speed: 75,
	},
	{
		name: "4",
		HP: 100,
		speed: 75,
	},
	{
		name: "5",
		HP: 100,
		speed: 75,
	},
	{
		name: "6",
		HP: 100,
		speed: 75,
	}
];

//for (element of characterList) {
//	console.log(element);
//};

const chooseTeam = function() {

    let teamArray = [];

    for (let counter = 1; counter <= 3; counter++) {
        let choice = prompt("Choose your " + counter + " member!");
		choice--;
        teamArray.push(characterList[choice].name);
		teamArray.push(characterList[choice].HP);
		teamArray.push(characterList[choice].speed);
    };
    return teamArray;
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

// When user selects a character, that character is added to *team* array
