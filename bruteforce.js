let toBeBruteForced = 'Würth';
let BruteForce = '';
const alphabetArray = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', 
    ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '§','ö','ä','ü','ß','Ä','Ö','Ü'
];

let i = 0;
let trys = 0;
while (BruteForce !== toBeBruteForced) {
    if (BruteForce.charAt(i) === toBeBruteForced.charAt(i)) {
        console.log(BruteForce);
        i++;
        trys ++;
    } else {
        BruteForce = BruteForce.slice(0, i) + alphabetArray[alphabetArray.indexOf(BruteForce.charAt(i)) + 1];
        console.log(BruteForce);
        trys++;
    }
trys++;
}
console.log('it took'+' '+trys+' '+'trys')
