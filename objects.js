let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};
let base = spaceship.homePlanet;
let crewsize = spaceship.numCrew;
let fueltype = spaceship["Fuel Type"]; // bracket notation 

console.log(base);
console.log(crewsize);
console.log(spaceship["Fuel Type"]);
//or 
console.log(fueltype);

//property Assignment 
spaceship.universe = 'Star wars';

let franchise = spaceship.universe;
console.log(franchise);

//methods 
    
const alienShip = {
    invade: function () {
        console.log("We have come to invade! ")
    }
};

alienShip.invade();

//nested objects

let flagship = {
    passengers: null,
    telescope: {
        model: "91308-XTL",
        Zoom: 2032
    },
    crew: {
        captain: {
            name: 'sandra',
            degree: 'Pilot',
            encourageteam: function () {
                console.log("We have got this")
            }
        },
        Engineer: {
            name: 'Nick',
            degree: 'Engineer',
            systemwarning: function () {
                console.log("Beware, systemfailure!")
            }
        }

    },
    engine: {
        model: "100l auf 100km (das ding zieht)"
    },
};

console.log(flagship.crew.captain.name);
flagship.crew.Engineer.systemwarning();
function newCaptain() {
    flagship.crew.captain.name = 'Mark';
};
console.log(flagship.crew.captain.name);
