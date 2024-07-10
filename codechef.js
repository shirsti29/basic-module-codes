// START 112
const prompt = require ("prompt-sync")({sigint: true});
// let x =parseInt(prompt("Mess food: "));
// let y =parseInt(prompt("Restaurant splurges: "));
// let cost =(6*x)+y;
// console.log("Cost of food in week"  ,cost);



// START 114
// let d=parseInt(prompt("Enter the number: "));
// if (0>d<=31){
//     if (d==25){
//     console.log("Christmas")
//     }
//     else{
//         console.log("Ordinary")
//     }
// }


// FCTRL2
// let n=parseInt(prompt("Enter the value of n: "))
// let arr=[]
// let i=0
// let k=1
// while (k<=n){
//     let f=1;
//     for (let j=1; j<=k; j++){
//         f=f*j;
//     }
//     arr=a[i];
// }



// Chef problem:
let p1= parseInt(prompt("Problems solved in week 1: "));
let p2= parseInt(prompt("Problems solved in week 2: "));
let p3= parseInt(prompt("Problems solved in week 3: "));
let p4= parseInt(prompt("Problems solved in week 4: "));
let count=0
if (p1>=10){
    count=count+1;
}
if (p2>=10){
    count=count+1;
}
if (p3>=10){
    count=count+1;
}
if (p4>=10){
    count=count+1;
}
console .log ("Problem solved in 4 weeks: " ,+count)