const prompt=require("prompt-sync")()

// Q1. Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.
// Note: Print the output in the order as mentioned in the question.
// Test Case1:
// Input:  12  5
// Output: 2   2
// Test Case2:
// Input: 15   6
// Output: 2   3

// let a=parseInt(prompt("Enter the number a: "))
// let b=parseInt(prompt("Enter the number b: "))
// let r = a % b;
// let q = Math.floor(a/b);
// console.log(r, q) 



// Q2. Write a program to take two inputs from the user and swap them without using a temporary or third variable.
// Test Case1:
// Input:  2   3
// Output: 3   2  

// let a=parseInt(prompt("Enter the value of a: "));
// let b=parseInt(prompt("Enter the value of b: "));

// let temp=a;
// a=b;
// b=temp
// console.log(a,b);



// Q3. Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)
// Test Case1:
// Input:  20  3   43
// Output: 43
// let a=parseInt(prompt("Enter the value of a: "));
// let b=parseInt(prompt("Enter the value of b: "));
// let c=parseInt(prompt("Enter the value of c: "));
// if (a>b){
//     console.log(a, "is greater")
// }
// else if (b>c){
//     console.log(b, "is greater")
// }
// else{
//     console.log(c, "is greater")
// }  



// Q4. Write a program to create an array of natural numbers till 20 and print it.

// let n = parseInt(prompt("Enter the value of n : "));
// let a=[]
// for (let i=0; i<n; i++){
//     a[i]=i+1;
// }
// console.log(a)



// Q5. Write a program to print even numbers below 100.
// let n=100;
// for (let i=1; i<=n; i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }



// Q6. Write a program to show how to obtain the HCF & LCM of two numbers.
// let a=parseInt(prompt("Enter the value of a: "));
// let b=parseInt(prompt("Enter the value of b: "));
// let HCF=0,LCM=0;
// let n1=a;
// let n2=b;
// while (n2!==0){
//     let temp=n2
//     n2=n1%n2
//     n1=temp
// }
// HCF=n1
// LCM=a*b/HCF
// {
//     console.log(LCM);
//     console.log(HCF);
// }


// // PALLINDROME

// let n=parseInt(prompt("Enter the value of n: "))
// let r=0;
// while (n>0){
//     let d=n%10 
//     r=r*10+d;
//     n=Math.floor(n/10);
// }
// console.log("Pallindrome of the number: " , r)


// FACTORS
// let n=parseInt(prompt("Enter the value of n: "))
// for (let f=1; f<n; f++){
//     if (n%f==0){
//         console.log(f)
//     }
// }



// PRIME FACTOR OF n:
// let n = parseInt(prompt("Enter the value of n: "));
// for (let i=1; i<=n; i++){
//     if (n%i==0){
//         let count =0;
//         for (let k=1; k<=i; k++)
//             if (i%k==0){
//                 count++
//             }
//         if (count==2){
//             console.log(i)
//         }
//     }
// }





// PATTERN

// HOLLOW TRIANGLE 
// n=parseInt(prompt("Enter the value of n: "))
// for (let i=1; i<=n; i++){
//     let line = '';
//     for (let j=1; j<=n; j++){
//         // line += '*' ;
//         if (i==j && i==n-1 && j==0){
//             //   console.log(line)
//             line+='*';
//         }
//         else{
//             line+=' ';
//         }
//     }
//     console.log(line)
// }


// FILLED SQUARE 
// for (let i = 1; i <= n; i++) {
//     let line = '';
//     for (let j = 1; j <= n; j++) {
//         line += '*';
//     }
//     console.log(line);
// } 



//Q. Take an array from the user as input and find duplicate elements in an array.
n=parseInt(prompt("Enter the value of n: "));
let a=[]
for (let i=0; i<n; i++){
    // arr.push(parseInt(prompt(`Enter element ${i+1} for 1st array: `)));
    let num = parseFloat(prompt("enter the num: "));
    a[i] = num;
}
for (i=0; i<n; i++){
    let count = 0;
    for (j=i+1; j<n; j++){
        // let count=0;
        if (a[i]==a[j]){
            count=count+1;
        }
    }
if (count>0){
    console.log(a[i]);
}
}























