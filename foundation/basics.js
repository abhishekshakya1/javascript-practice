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



// 6. Vowel Counter
/*
We want to count the number of vowels in a person's name. Given a name as input, the program should iterate
through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be
counted.
*/

function countVowels(name) {
    const lowerCaseName = name.toLowerCase();

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowelCount = 0;

    for (let char of lowerCaseName) {

        if (vowels.includes(char)) {
            vowelCount++; 
        }
    }

    return vowelCount; 
}

const name = "Abhishek";
const numberOfVowels = countVowels(name);
console.log(`The name "${name}" has ${numberOfVowels} vowels.`);



// 7. Remove Duplicates
/*
In an online shopping application, customers can add multiple items to their cart. However, sometimes
customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
duplicate items not only make it difficult for the customer to track the items they want to purchase but also
affect the accuracy of the purchase order.

To solve this problem, the application needs to remove duplicate items from the customer's cart. The program
should take the customer's cart with duplicates as input, and return a new cart without duplicates.
Write a program to solve the problem of duplicate items in the cart by removing duplicates.
*/

function removeDuplicate(cart) {
    const uniqueCart = [...new Set(cart)];
    return uniqueCart;
}

const cart = ["Apple", "Banana", "Orange", "Apple", "Banana"];
const newCart = removeDuplicate(cart);

console.log(`Original cart => `, cart);
console.log(`Cart without duplicate => `, newCart);



// 8. Inverted right-angled triangle pattern with asterisks
/*
Write a program that takes an integer input i and prints an inverted right-angled triangle pattern of asterisks
with i rows.
*/

function invertedLeftTriangle(rows) {
    for (let i = rows; i >= 1; i--) {
        console.log('*'.repeat(i)); // Repeat '*' i times
    }
}

invertedLeftTriangle(6);



// 9. Check for divisibility.
/*
Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2.
Use a for loop and continue statement.
*/

function divisibleBy3Not2(arr) {
    for (let i = 0; i < arr.length; i++) {
        // Check if the number is divisible by 3 but not by 2
        if (arr[i] % 3 !== 0 || arr[i] % 2 === 0) {
            continue; // Skip this iteration if the condition is not met
        }
        console.log(arr[i]); // Print the number that satisfies the condition
    }
}

const numbers = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27];
divisibleBy3Not2(numbers);



// 10. Correct a bug
/*
You are working on an e-commerce website where customers can add items to their cart. The cart stores the
quantity of each item that the customer wants to purchase in an array of numbers. However, the website is
currently experiencing a bug where the quantity of each item is being recorded incorrectly by reducing it to
half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart
array to correct the bug.
*/

function fixCartQuantities(cart) {
    // Iterate through the array and double each quantity
    for (let i = 0; i < cart.length; i++) {
        cart[i] = cart[i] * 2; // Double the value at each index
    }
    return cart; // Return the updated cart
}

// Example usage:
const cart = [1, 2, 3, 4, 5]; // Quantities recorded incorrectly
const correctedCart = fixCartQuantities(cart);

console.log("Corrected Cart:", correctedCart);



// 11. Unit converter
/*
A local weather station needs to convert temperature data collected in Celsius to Fahrenheit before displaying
it on its website. They want a function that can convert Celsius to Fahrenheit accurately and efficiently. The
function should take input in Celsius and return output in Fahrenheit. This function will help the weather station
to provide temperature readings that are easily understandable to a wider audience.
*/

function celsiusToFahrenheit(celsius) {
    const result = (celsius * 9/5) + 32;
    return result;
}

const celsius = 25;
const fahrenheit  = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${fahrenheit}°F`);



// 12. Calculate rental cost
/*
A car rental company needs to calculate the cost of a rental based on the number of days rented and the type
of car. They require a function that takes in the number of days rented and car type and returns the rental cost.
The total cost would be the rental cost multiplied by the number of days rented.
The rental costs are
V Economy = Rs. 4000 /- per day
V Midsize = Rs. 10,000 /- per day
V Luxury = Rs. 20,000 /- per day.
*/

function calculateRent(daysRented, carType) {
    if(carType === "Economy") {
        return daysRented * 4000;
    } else if(carType === "Midsize") {
        return daysRented * 10000;
    } else if(carType === "Luxury") {
        return daysRented * 20000;
    } else {
        return "Invalid car type. Please choose Economy, Midsize or Luxury";
    }
};

const daysRented = 0;
const carType = "Economy";
const totalRent = calculateRent(daysRented, carType);

if (typeof totalRent === "number") {
    console.log(`The total rental cost for ${daysRented} days with a ${carType} car is ${totalRent}`);
} else {
    console.log(totalRent); 
}



// 13. Bill splitter
/*
A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
it and returns an object that contains the total bill and the bill to be paid by each person in the group.
*/

function splitBill(dishCosts, numberOfPeople) {
    // Calculate total bill
    let totalBill = 0;
    for (let cost of dishCosts) {
    totalBill += cost;
    }

    // Calculate per-person cost
    let perPersonCost = totalBill / numberOfPeople;

    // Return the result
    return {
    totalBill: totalBill,
    perPersonCost: perPersonCost
    };
}

// Example usage
const dishCosts = [250, 300, 150, 200]; // Costs of each dish
const numberOfPeople = 4; // Number of people sharing the bill

const result = splitBill(dishCosts, numberOfPeople);

console.log(`Total Bill: ${result.totalBill} and Each Person Pays: ${result.perPersonCost}`);




// 14. Calculate the final order price
/*
A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
the unit price and quantity of each item.
*/

// Arrow function to calculate the total order price
const calculateTotalPrice = (cart) => {
return cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
};

// Example usage
const cart = [
{ unitPrice: 200, quantity: 3 }, // Item 1: Price = 200, Quantity = 3
{ unitPrice: 150, quantity: 2 }, // Item 2: Price = 150, Quantity = 2
{ unitPrice: 300, quantity: 1 }  // Item 3: Price = 300, Quantity = 1
];

const totalPrice = calculateTotalPrice(cart);

console.log(`The total price of the order is ₹${totalPrice}`);



// 15. Calculate the percentage of the discount
/*
A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
show customers how much they can save. Given the original price and the discounted price of a product,
implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
This function could be useful for the store's marketing team to create promotions and offers that attract
customers.
*/

// Arrow function to calculate discount percentage
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
if (originalPrice <= 0 || discountedPrice < 0 || discountedPrice > originalPrice) {
    return "Invalid prices provided.";
}
const discount = originalPrice - discountedPrice; // Calculate the discount amount
const discountPercentage = (discount / originalPrice) * 100; // Calculate the discount percentage
return discountPercentage.toFixed(2); // Round off to two decimal places
};

// Example usage
const originalPrice = 1000; // Original price of the product
const discountedPrice = 800; // Discounted price of the product

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);

if (isNaN(discountPercentage)) {
console.log(discountPercentage); // Error message if inputs are invalid
} else {
console.log(`You save ${discountPercentage}% on this product!`);
}



// 16. Generate a random number
/*
Create a JavaScript program that generates a random number between 1 and 100 when the program starts.
Use a self-invoking arrow function to generate the random number. This program can be used as a component
in various games or applications that require a random number generator.
*/

(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Random Number: ${randomNumber}`);
})();



// 17. Build a banking application
/*
A banking application needs to manage customer accounts and transactions. The user detail is stored in an
object with a keys name and balance. Write functions using object methods to update a customer's account
balance based on a deposit or withdrawal.
*/

function updateCustomerDetails(userDetails, operation, amount) {
    // Check if the operation is 'deposit' or 'withdrawal'
    if (operation === 'deposit' && amount > 0) {
        userDetails.balance += amount; // Increase balance on deposit
        return `Deposited Rs. ${amount}. New balance: Rs. ${userDetails.balance}`;
    } else if (operation === 'withdrawal' && amount > 0 && amount <= userDetails.balance) {
        userDetails.balance -= amount; // Decrease balance on withdrawal
        return `Withdrew Rs. ${amount}. New balance: Rs. ${userDetails.balance}`;
    } else if (operation === 'withdrawal' && amount > userDetails.balance) {
        return 'Insufficient balance for this withdrawal.';
    } else {
        return 'Invalid operation or amount.';
    }
}

const userDetails = {
    name: "Abhishek",
    balance: 5000
};

const depositAmount = 2000;
const withdrawalAmount = 3000;

// Example usage:
console.log(updateCustomerDetails(userDetails, 'deposit', depositAmount)); // Deposit Rs. 2000
console.log(updateCustomerDetails(userDetails, 'withdrawal', withdrawalAmount)); // Withdraw Rs. 3000
console.log(updateCustomerDetails(userDetails, 'withdrawal', 7000)); // Attempt to withdraw more than balance





