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
