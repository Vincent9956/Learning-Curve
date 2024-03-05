//Create a Programm that Converts temperatures from Kevlin into Celius into Fahrenheit 
/* Info : 
Celcius = Kevlin - 273.
Fahrenheit = Celsius * (9/5) + 32.*/

let Kelvin = 293; 
let Celcius = Kelvin - 273;
let Fahrenheit = Celcius * (9/5) + 32 //might result in decimal number, we can round  it 
Fahrenheit = Math.floor(Fahrenheit);
console.log(Fahrenheit);



