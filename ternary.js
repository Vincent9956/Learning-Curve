// The ternary operator is a simplified conditional operator like if / else.
// condition ? <expression if true> : <expression if false>

//normally 
let check = true;
if (check){
    saySome();
} else {
    sayNone();
}

// With ternary Operator
check = false;
check ? saySome(): sayNone();

function saySome(){
    console.log("Say Some");
};
function sayNone(){
    console.log("Say None");
};