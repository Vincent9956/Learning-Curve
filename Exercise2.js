// Magic Eight Ball
//Create a Magic Eightball:
//1. create a var that Holds the username 
//2. Great the user, if the username is an empty string only say hello.
//3. create a var that holds a question the user wants to ask the Eight ball
//4. We need a random number from 1-8. Use :  Math.floor(Math.random() * 8 );
//5. we need 8 different reponses corresponing with the random numbers that we generated. 
// - Its Certain
// - It is decidedly so
// - Reply Hazy, try again
// - Cannot predict now
// - Do not Count on it 
// - My source says no
// - Outlook not so good
// - Signs point to yes
var userName = "Vincent"

if (userName ==""){
    console.log('Hello!')
}else {
    console.log("Hello " + userName);
}

let userQuestion = ("Do you want to learn how to code ?");
console.log(userQuestion)

var randomNumber = Math.floor(Math.random() * 8 );
var eightBall = "";

if (randomNumber == 1){
    console.log('Its Certain');
}else if (randomNumber == 2){
    console.log('It is decidedly so');
}else if (randomNumber == 3 ){
    console.log('Reply Hazy, try again');
}else if (randomNumber == 4 ){
    console.log('Cannot predict now');
}else if (randomNumber == 5 ){
    console.log('Do not Count on it ');
}else if (randomNumber == 6 ){
    console.log('My source says no');
}else if (randomNumber == 7){
    console.log("Outlook not so good");
}else{
    console.log("Signs point to yes");
}