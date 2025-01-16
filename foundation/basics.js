// 1. Password Validator
/*
Write a JavaScript program that checks if the entered password matches the confirmed password. If the
passwords match, the program should log "Password Matched. Password validation Successful." to the console.
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console.
*/

const passwordValidator = (enteredPassword, confirmPassword) => {
    if (enteredPassword === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful");
    }
};

passwordValidator("abhi", "abhi");
passwordValidator(212, 212);



// 2. Calculator
/*
Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
to perform the operation on the two numbers.
The calculator function should:-

L Take in two numbers, num1 and num2, and a string representing a mathematical operator, operator.

L Use a switch statement to determine which 
operation to perform based on the value of the operator.

L If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
operation and store the result in a variable called result.

L If the operator is not one of the valid operators, log "Invalid operator" to the console.
*/

const calculator = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        default:
            return "Invalid operator";
    }
};

console.log(calculator(39, 3, "+"));
console.log(calculator(39, 0, "/")); // Test division by zero



// 3. Color Mixer
/*
Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
determine the resulting color when the two colors are mixed. The program should print the resulting color based on the following criteria:-

L If color1 is "red" and color2 is "blue" or vice versa, print "purple"

L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"

L If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"

L If any other combination of colors is input, the program should print "Invalid color combination".
*/

const resultingColor = (color1, color2) => {
    color1 = color1.trim().toLowerCase();
    color2 = color2.trim().toLowerCase();
    switch (true) {
        case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
            console.log("Purple");
            break;
        case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
            console.log("Orange");
            break;
        case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
            console.log("Green");
            break;
        default:
            console.log("Invalid color combination");
            break;
    }
};

resultingColor(" blue ", " yellow "); // Tests trimming and case-insensitivity



// 4. Highest Marks
/*
A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters
the marks of all five students in an array called "marks". Write a program that iterates through the array and
finds the highest marks scored by any student in the class. The highest marks must then be displayed to the
teacher using the console. Make sure you use the ternary operator to find the student with the highest marks.
*/

const marks = [97, 84, 75, 99, 79];
const highestMarks = (marks) => {
    let highest = -Infinity; // Handles negative values as well
    for (let i = 0; i < marks.length; i++) {
        highest = marks[i] > highest ? marks[i] : highest;
    }
    console.log(`The highest marks scored are: ${highest}`);
};

highestMarks(marks);



// 5. Capitalize
/*
You are building a form where users can enter their names. You want to make sure that the first letter of the
name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
returns the modified string. Otherwise, it returns the original string without any changes.
*/

const userName = (name) => {
    return name.length === 0 
        ? "Name cannot be empty" 
        : name[0] >= "a" && name[0] <= "z" 
        ? name[0].toUpperCase() + name.slice(1) 
        : name;
};

console.log(userName("abhishek")); // "Abhishek"
console.log(userName("")); // "Name cannot be empty"

