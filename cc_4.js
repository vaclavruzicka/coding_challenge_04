//Task 1 - If Statements

//Variable with a value.
let purchaseAmount = 125

//Letting the purchase amount be manipulated without changing the original amount.
let finalAmount = purchaseAmount

//If statement that applies a 10 % discount if the amount if above $100.
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * .9
}

//Logging final amount to console with a template literal.
console.log(`Final amount after discount: ${finalAmount}`)

//Task 2 - For Loop

//Declaring an array with five figures.
let sales = [45, 85, 120, 200, 350]

//Declaring total sales.
let totalSales = 0

//Using a for loop to add up the total sales.
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]
}

//Logging total sales using a template literal.
console.log(`Total Sales: ${totalSales}`)

//Task 3 - While Loop

//Declaring a value with a value of 10
let stock = 10

//Using a while loop to decrease stock by 1 and logging each decrease.
while (stock > 0) {
    console.log(`Stock left: ${stock}`)
    stock--
}

//Task 4 - Do...While Loop

//Delcaring a variable with inital value of 0
let responses = 0

//Increasing the number of responses 1 until 3 by using a Do-While loop and console logging each increment using a template literal.
do {
    console.log(`Number of Responses: ${responses}`)
    responses++
} while (responses <= 3);

//Task 5 - For...In Loop

//Declaring an object with properties
let employee = {
    Name: "Alice",
    Poistion: "Manager",
    Salary: 75000
}

//Using a For-In loop to iterate each property.
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`)
}

//Task 6 - For..Of Loop

//Declaring an array of three products.
let products = ["Laptop", "Mouse", "Keyboard"]

//Logging each product using a For-Of Loop
for (const element of products) {
    console.log(`Product: ${products}`)
}

//Task 7 - forEach() Method

//Declaring an array with three order IDs
let orders = [101, 102, 103]

orders.forEach(order => {
    console.log(`Order ID: ${order}`)
});

//Task 8 - Function Declaration

//Writing a function that takes an amount and a 6% calculates the tax rate.
function calculateTax(amount){
    return amount * .06
}

//Logging the tax amount using a template literal.
console.log(`Amount of Tax on Total: ${calculateTax(1356)}`)

//Task 9 - Function Expressions

//Declaring a function that takes a price and multiplies it to make a 25% discount.
function applyDiscount(amount){
    return amount * .75
}

//Logging the function using a template literal.
console.log(`Discounted Total: ${applyDiscount(1234)}`)

//Task 10 - Arrow Functions

//Delcaring a function that take an amount and returns rewards points, 1 point per 10 dollars.
function calculatePoints(amount){
    return amount * .1
}

//Logging the function to the console using a template literal.
console.log(`Points Earned: ${calculatePoints(120)}`)