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
