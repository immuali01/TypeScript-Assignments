"use strict";
// Exercise 1:  Write a program that calculates the area of a rectangle.
let lengthOfRectangle = 5;
let widthOfRectangle = 3;
function areaOfRectangle(lengthOfRectangle, widthOfRectangle) {
    console.log("Area of Rectangle= ", lengthOfRectangle * widthOfRectangle);
}
areaOfRectangle(15, 5);
// Exercise 2: Write a program that takes input and calculates the volume of a cube.
let sideOfCube = 3;
function volumeOfCube(sideOfCube) {
    console.log("Volume of Cube= ", sideOfCube ** 3);
}
volumeOfCube(5);
// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
let anyNumber = -90;
if (anyNumber === 0) {
    console.log("Number is Zero:", anyNumber);
}
else if (anyNumber > 0) {
    console.log("Number is Positive:", anyNumber);
}
else {
    console.log("Number is Negative:", anyNumber);
}
// Exercise 4:   Write a program that checks if a given number is even or odd.
let checkNumber = 11;
if (checkNumber % 2 === 0) {
    console.log("Number is an Even Number:", checkNumber);
}
else if (checkNumber % 2 !== 0) {
    console.log("Number is an Even Number:", checkNumber);
}
// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
let personAge = 19;
if (personAge >= 18) {
    console.log("Person is eligible to vote:", personAge);
}
else {
    console.log("Person is not eligible to vote:", checkNumber);
}
// Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5)
console.log(10 + 5);
