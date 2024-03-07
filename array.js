let newYearsResolutuin = ['Keep a journal', 'Take a knitting class', 'Learn to juggle'];
console.log(newYearsResolutuin);

// Accessing elements within an array
const franchise = ['Harry Potter', 'Star wars', 'Lord of the rings', 'Transformers'];
//                      0           1           2                   3
console.log(franchise[1]);

//Updating elements 
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons);

// .lenght property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

//.push() - adds item to the end of array 
const itemTracker = ['item 0', 'item 1',];
itemTracker.push('item 2');
console.log(itemTracker);
//.pop() - deletes the last item of an array
itemTracker.pop();
console.log(itemTracker);

//.shift() - removes the first item from an array
//.unshift()- adds item to the beginning of the list

//Combining Array and Functions 

const flowers = ['rose', 'poppy', 'Daisey'];
function addflower(arr) {
    arr.push('Lily');
}
addflower(flowers);

//nested array - arrays can contain other arrays 
const nestedArr = [[1], [2, 3]];
console.log(nestedArr);