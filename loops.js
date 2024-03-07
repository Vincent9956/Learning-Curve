// For loops 
for (let counter = 0; counter < 4; counter ++){
    console.log(counter);
}

// reverse Loop
for (let counter = 5; counter > 0; counter -- ){
    console.log(counter);
}

// Looping through arrays
const animals = ['Dog', 'Cat', 'Bird', 'Bear'];
for (let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

// nested Loops
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

// while loop
let counterTwo = 1
while (counterTwo < 4){
    console.log(counterTwo);
    counterTwo++
}

// Do.. while statements
let counterto100 =  '';
let i = 0; 
do {
    counterto100 = counterto100 + '|' + i;
    i++; 
} while ( i < 5);
console.log(counterto100);

// Break Keyword 

var wordlist = ['One','apple','a','day','keeps','the','doctor','away','for','sure','believe','me'];
let c = 0;

for(let i = 0; i < wordlist.length;i++){
    let word = wordlist[i];
    if (word === "eeps" ){
        console.log("The word has been found within the array at index " + i)
        
        break;
        
    }else {}
}

