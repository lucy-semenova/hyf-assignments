
//Candy helper optional
let boughtCandy =  [];

function addCandy(candyType, weight) {
   let candyPricePerGram = [
        0.5, //sweet: 0.5
        0.7, //chocolate: 0.7
        1.1, //toffee: 1.1
        0.03 //chewing-gum: 0.03
    ];
    let candyNumber;
    switch(candyType) {
        case 'sweet': candyNumber = 0
        break;
        case 'chocolate': candyNumber = 1
        break;
        case 'toffee': candyNumber = 2
        break;
        case 'chewing-gum': candyNumber = 3
        break;
    }   
    boughtCandy.push(candyPricePerGram[candyNumber] * weight);
}
addCandy("chocolate", 30);
addCandy("sweet", 10);
    alert(boughtCandy.length)
let amountToSpend = Math.random() * 100;
  alert(amountToSpend);
function canBuyMoreCandy(amountToSpend) {
    let totalSpent = 0
    for (const candy of boughtCandy) {
        totalSpent += candy;
    }
    alert(totalSpent);
    if  (totalSpent < amountToSpend) {
            console.log("You can buy more, so please do!");
     } else { console.log("Enough candy for you!")}
}

canBuyMoreCandy(amountToSpend);
   


