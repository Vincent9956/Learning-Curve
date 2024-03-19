console.log("this is the first line that will be logged into the console,");

const ustingSTO = ()=>{
    console.log("Even tho this is not the last line of code, it will be logged last");
}
setTimeout(ustingSTO, 100);

console.log("This will be logged second");