const prompt=require("prompt-sync")();

// FITNESS

// let x=parseInt(prompt("Enter the kilometer: "))
// let m=(x*2)*5;
// console.log("Total Kilometer: " ,m)


// Minimum coins

// let n =parseInt(prompt("Enter the amount: "));
// let d;
// if (n>0){
//     d=n%10;
// }
// console.log("Total coins: " ,d);


// AGE LIMIT 

// let x=parseInt(prompt("Minimum age: "));
// let y=parseInt(prompt("Maximum age: "));
// let a=parseInt(prompt("Age of the chef: "));
// if (x<=a && a<y){
//     console.log("YES");
// }else{
// console.log("NO");
// }


// BIDDING
// let a=parseInt(prompt("Alice have: $ "));
// let b=parseInt(prompt("Bob have: $ "));
// let c=parseInt(prompt("Charlie have: $ "));
// if (a>b && a>c){
//     console.log("ALICE");
// }
// else if (b>c && b>c){
//     console.log("BOB");
// }
// else{
//     console.log("CHARLIE");
// }



// MAXIMISE THE TASTINESS

// let T = parseInt(prompt("Number of test cases: "));
// for (let i = 0; i < T; i++) {
//     let a = parseInt(prompt("Ingredient a: "));
//     let b = parseInt(prompt("Ingredient b: "));
//     let c = parseInt(prompt("Ingredient c: "));
//     let d = parseInt(prompt("Ingredient d: "));

//     let sum1 = a + c;
//     let sum2 = a + d;
//     let sum3 = b + c;
//     let sum4 = b + d;

//     let maxTastiness = Math.max(sum1, sum2, sum3, sum4);
//     console.log("Maximum Tastiness: " + maxTastiness);
// }



// CHEF AND CANDIES

// let T = parseInt(prompt("Number of test cases: "));
// for (let i = 0; i < T; i++){
//     let n=parseInt(prompt("Number of children: "));
//     let x=parseInt(prompt("Number of candies chef has: "))

//     let d=n-x;
//     let c=d%4;
//     let m=0;
//     if(c>0){
//         m=c+1;
//         if (c>4){
//             m=c+1;
//         }
//         console.log("Packet: " ,m);
        
//     }else{
//         console.log("Packet: " ,m);   
//     }
// }



// HIGH ACCURACY

// let x=parseInt(prompt("Marks recieved: "));
// let d=Math.ceil(x/3);
// let a;
// let s;
// if (x==0){
//     console.log("Didn't attempt any question");
// }
// else if (x>d){
//     a=d+1;
//     let m=d*3;
//     s=m-x;
//     {
//         console.log("Question incorrect: " ,s);
//     }
// }
// else {
//     a=d-1
//     {
//         console.log("Question incorrect: " ,s);
//     }pp
// }



// CHEF AND HIS APPS
 
// let T = parseInt(prompt("Number of test cases: "));
// for (let i = 0; i < T; i++) {
//     let S = parseInt(prompt("Total storage: "));
//     let X = parseInt(prompt("Memory of 1st app: "));
//     let Y = parseInt(prompt("Memory of 2nd app: "));
//     let Z = parseInt(prompt("Memory required by 3rd app: "));
    
//     let usedMemory = X + Y;
//     let freeMemory = S - usedMemory;
//     if (freeMemory >= Z) {
//         console.log("App deleted", 0);
//     } else if (S - Math.min(X, Y) >= Z) {
//         console.log("App deleted", 1);
//     } else {
//         console.log("App deleted", 2);
//     }
// }



// LAST LEVEL
x=parseInt(prompt("Level remaining in the game: "))
y=parseInt(prompt("Minutes to complete: "))
z=parseInt(prompt("Break: "))
if (x<=3){
    let tt=x*y
    console.log("Total time: " ,tt);
}
else{
    let tt=x*y;
    let b=Math.ceil(x/3)*z;
    console.log("Total time: " ,b);
}















































