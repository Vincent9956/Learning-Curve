//Conditionl Statements 
let sale = true; 
 if(sale){
    console.log("Time to buy");
 }

let number = 1; 
if (number = 1){
    console.log("The number is one");
}

// Else Statement 

let testvalue = 2; 
if (testvalue == 1){
    console.log("The number is 1");
}else {
    console.log("The Number is not 1")
}

/* Comparison Operators 
Less than: < 
Greater than: >
Less than or equal to : <=
Greater than or equal to: >=
Is equal too: ==
Is not equal too: !== 
*/
let hungerLevel = 7;
if (hungerLevel > 7) {
    console.log('Time to eat!');
}else {
    console.log('We can eat later!');
}

/* Logic Operators 
and (&&)
or (||)
not (!)
*/
let stopLight = 'green';
let pedestraians = 0; 
if (stopLight == 'green' && pedestraians == 0){
    console.log('Go');
}else {
    console.log("Stop");
}

let weekday = 'Sunday';
if (weekday == "Sunday" || weekday == 'Saturday'){
    console.log('Enjoy the weekend');
} else {
    console.log('You poor soul');
}

// Else if statement 
let Light = 'yellow';

if (Light == 'red' ){
    console.log('Stop');
    }else if (Light == 'yellow'){
        console.log('Slow down');
    }else if (Light == 'green' ){
        console.log('Go')
    }else {
        console.log('caution! Action unknown');
    }