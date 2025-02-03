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

//Using a for loop to add up the total sales.
for (let i = 0; i < sales.length; i++) {
    sales + sales[i]
}

//Logging total sales using a template literal.
console.log(`Total Sales: ${sales}`)
