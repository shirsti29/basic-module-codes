const prompt=require("prompt-sync")();

// INTERIOR DESIGN

// let x1=parseInt(prompt("Tilling cost of first floor: "))
// let y1=parseInt(prompt("Paintaing walls cost of first floor: "))
// let x2=parseInt(prompt("Tilling cost of second floor: "))
// let y2=parseInt(prompt("Painting walls cost of second floor: "));
// let a=x1+y1;
// let b=x2+y2;
// if (a>b){
//     console.log("Amount chef have to pay for interor design: " ,b);
// }
// else {
//     console.log("Amount chef have to pay for interor design: " ,a);
// }



// DECREMENT AND INCREMENT

// let n=parseInt(prompt("Enter the value of n: "))
// let m;
// if (n%4==0){
//     m=n+1;
//     console.log("Divisible by 4" ,m)
// }
// else{
//     m=n-1;
//     console.log("NOT Divisible by 4" ,m)
// }



// MINIMUM NUMBER OF COINS

// let x = parseInt(prompt("Total amount: "));

// if (x % 5 != 0) {
//     console.log("Coins: ", -1);
// } else if (x % 10 == 0) {
//     console.log("Coins: ", x / 10);
// } else {
//     console.log("Coins: ", Math.floor(x / 10) + 1);
// }



// FINDING SQUARE ROOTS
 
// let n= parseInt(prompt("Enter the value of n: "))
// let m;
// let count=0;
// for (let i=1; i<=n; i++){
//     m=i**2
//     if (m<=n){
//         count++;
//     }    
// }    
// console.log(count)


// // FILL CANDIES

// let n = parseInt(prompt("No. of Candies recieved: "))
// let k = parseInt(prompt("Pocket in bag: "))
// let m = parseInt(prompt("Candies hold by pocket: "))
// let a=0
// while (n>0){
//     let count=0;
//     for (i=1; i<=k; i++){
//         count=count+m;
//     }
//     a++;
//     n=n-count; 

// }
// console.log(a);  



// MARIO AND TRANSFORMATION

// x=parseInt(prompt("Mushrooms mario ate: "));
// let s=0;
// for (let i=0; i<=n; i++){
//     if (x==1){
//     }
// }



// SQUARE PATTERN





let n=parseInt(prompt("Number: "))
let m=parseInt(prompt("enter the m: "));
for(let i = 1;i<=n; i++){
    let a =parseInt(prompt("enter the a: "));
    if(a ==m){
        console.log( );
        break;
    }else{
        console.log(a);
    }  
}

