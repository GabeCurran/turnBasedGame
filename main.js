const team1Div = document.querySelector('#team1Div');
const team2Div = document.querySelector('#team2Div');

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
		name: "Alfa",
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

//for (element of characterList) {
//	console.log(element);
//};

const chooseTeam = function() {

    let teamArray = [];

    for (let counter = 1; counter <= 3; counter++) {
        let choice = prompt("Choose your " + counter + " member!");
		choice--;
        
        let charArray = [];

        charArray.push(characterList[choice].name);
        charArray.push(characterList[choice].HP);
        teamArray.push(charArray);
    };
    return teamArray;
};

const appendTeam1 = function() {
        let team1 = chooseTeam();
    
        for (let char of team1) {
            charDiv = document.createElement('p');
            charDiv.textContent = char;
            team1Div.appendChild(charDiv);
        }
    };

const appendTeam2 = function() {
        let team2 = chooseTeam();
    
        for (let char of team2) {
            charDiv = document.createElement('p');
            charDiv.textContent = char;
            team2Div.appendChild(charDiv);
        }
    };

const makeTeams = function() {
    appendTeam1();
    appendTeam2();
    let button = document.querySelector('#selectTeams');
    button.remove();
};

// When user selects a character, that character is added to *team* array
