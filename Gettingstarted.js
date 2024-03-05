// strings & integers & string concatenations
console.log(1);
console.log("Eins");
console.log("Eins"+'Zwei');
console.log('Eins'+' '+'Zwei');


// math Operations
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);


// Math functions
console.log(Math.random);
console.log(Math.floor((Math.random)* 10));


// Variables
var favoriteFood="Pizza";
console.log(favoriteFood);


// Variables : let -> signals that a variable can be reassigned later
let changeMe= "I like Pizza";
console.log(changeMe);
changeMe="nevermind Burgers are the 'GOAT' ";
console.log(changeMe);


// Variables : const -> cannot be reassigned later | Will get Type error if you try
const entree="This value will never change";
console.log(entree);


// math with variables: 
let a = 4;
a += 1; // same as w = w + 1
console.log(a);
// can also be done with other opperators : *= | -= | /=


// increment operator 
let b = 10 
a --; //decreases a by 1 increment
console.log(b);
let c = 1
c++;  //increases  c by one increment
console.log(c);


//string Concatenation with variables
let myPet = "Dog";
console.log('I own a ' + myPet + '.');


//string interpolation 
const myPet2 = "Doggo";
console.log(`I own a pet ${myPet2}`);


//typeof
const unknown1 = "foo";
console.log(typeof unknown1);
//this will outup string because "foo" is a string.
const unknown2 = 10;
console.log(typeof unknown2);
//this will output number because it is a number.
