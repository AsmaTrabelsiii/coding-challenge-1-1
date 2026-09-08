//1-
function calcTip (bill){
 const tip= (bill>=50 && bill <=300)   ?  bill*0.15:  bill*0.2;
 return  tip
}
console.log(calcTip(100))

//2-
const bills=[125,155,44]
console.log(bills)
//3-
const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
console.log(tips)
//4-
const Bonnus=[bills[0]+calcTip(bills[0]),bills[1]+calcTip(bills[1]),bills[2]+calcTip(bills[2])]
console.log(Bonnus)
// or 
// const Bonnus=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]