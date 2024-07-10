const prompt=require("prompt-sync")();

// LUCKY FOUR;

// let n=parseInt(prompt("Enter the number: "));
// let count=0;
// while (n>0){
//     let d=n%10;
//     if (d==4){
//         count++
//     }
//     n=Math.floor(n/10);
// }
// console.log('Count of four: ' ,+count);



// VALID TRIANGLES

// let a=parseInt(prompt("Angle 1: "));
// let b=parseInt(prompt("Angle 2: "));
// let c=parseInt(prompt("Angle 3: "));
// let sum=a+b+c;
// if (sum==180){
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }


// SUM OF DIGITS

// let n=parseInt(prompt("Enter the value of n: "))
// let sum = 0;
// let d;
// while(n>0){
//     d=n%10;
//     sum=sum+d;
//     n= Math.floor(n/10);
// }
// console.log("Sum of digits: " ,+sum)



//NUMBER MIRROR:

// let n=parseInt(prompt("Enter the value of n: "))
// console.log('Number is ' ,+n);



// FIND REMAINDER

// let a=parseInt(prompt("Enter the value of A: "));
// let b=parseInt(prompt("Enter the value of B: "));
// let r=a%b;
// console.log('Remainder of A and B: ' ,r)



// ENORMOUS INPUT TEST

// let n=parseInt(prompt("Emter total number input: "))
// let k=parseInt(prompt("Enter the divisor: "))
// let count=0
// for (let i=0; i<n; i++){
//     let x=parseInt(prompt(`Enter the ${i+1}number : `));

//     if (x%k==0){
//     count ++
//     }
// }
// console.log(count);



// FIRST AND LAST DIGIT:

// let t=parseInt(prompt("Enter the number of test cases: "))
// for (let i=0; i<t; i++){
//     let n=prompt(`Enter the case ${i+1}:` );
//     let firstdigit=parseInt(n[0]);
//     let lastdigit=parseInt(n[n.length-1]);
//     console.log(firstdigit+lastdigit);

// }



// CHEF AND OPERATORS:
// let a=parseInt(prompt("Enter the value of a: "))
// let b=parseInt(prompt("Enter the value of b: "))
// if (a<b){
//     console.log("<")
// }
// else if (a==b){
//    console.log("=")
// }
// else {
//     console.log(">")
// }



// ATM:
// let x=parseFloat(prompt("Amount of cash Wisthdraw: "));
// let y=parseFloat(prompt("Intial acount balance: "));
// if (x%5==0 && y>=x+0.50){
//     let charges=x+0.50;
//     let a=y-charges;
//     console.log("Balance=" ,a);
// }
// else {
//     console.log("Amount=" ,y);
// }