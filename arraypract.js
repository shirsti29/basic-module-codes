const prompt=require("prompt-sync")();

// Q. Find the maximum consecutive 1's in a binary array 
// arr={1,0,1,1,1,0,1};
// let a=[1,0,1,1,1,0,1];
// for (let i=0; i<a.length ; i++){
//     // let num=parseInt(prompt("Enter the number: "), 10);
//     a.push(a);
// }
// let i=0
// let count=0;
// let maxc =0;
// let n=a.length;
// while (i<n){
//     if (a[i]==1){
//         count+=1;
//         if (count>=maxc){
//         maxc=count;
//         }
//     }else {
//         count=0;
//     }
//     i++;
    
// }
// console.log(maxc);


// let n=parseInt(prompt("Enter the n: "));
// let a = [];
// for (i=0; i<n; i++){
//     let num=parseFloat(prompt("Enter the num:  "));
//     a[i]=num;
// }
// let flag=1
// for (j=0; j<n-1 ; j++){
//     if (a[j]<=a[j+1]){
//         flag=1;
//     }else {
//         flag=0;
//         }
// }
// if (flag==1){
//     console.log("yes")
// }
// else {
//     console.log("no")
// }




// Q. Find the position of an element in a 2D array or matrix.

let m=parseInt(prompt("Enter the value of m: "));
let n=parseInt(prompt("Enter the value of n: "));
num=parseFloat(prompt("Emter the value of num: "));
let a=[m][n];
let i=0;
while(i<m){
    for (let j=0;j<n;j++)
        if (a[i][j]==num)
           
    i++
}
console.log(a[i][j]);