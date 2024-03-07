// using the "fat arrow" notation is a shorter way to write functions
const rectangleArea1 = (width, height) => {
    let area = width * height;
    return area;
}

//This is the conventional way
const rectangleArea2 = function(width, height){
    let area = width / height;
    return area;
}