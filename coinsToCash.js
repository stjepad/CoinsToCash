const piggyBank = {
    
    quarters: 15,
    nickels: 162,
    dimes: 53,
    pennies: 342
}

let dollarAmount = ()=>{
    const quartersValue = piggyBank.quarters * .25;
    const nickelsValue = piggyBank.nickels * .05;
    const dimesValue = piggyBank.dimes * .1;
    const penniesValue = piggyBank.pennies * .01;
    let sum = quartersValue + nickelsValue + dimesValue + penniesValue;

    if(sum > .99) {
        return '$' + sum;
    }
}
console.log(dollarAmount())