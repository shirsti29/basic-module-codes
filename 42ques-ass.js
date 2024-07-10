const prompt = require ("prompt-sync")({sigint: true});
//  let a=parseInt(prompt("enter the value of a: "));
//  let b=parseInt(prompt("enter the value of b: "));
//  let C = a+b;
//  console.log("Addition of a and b=",a+b);
//  console.log(C);


 //Q1. Write a program to take three variables to store your birth date, birth month, and birth year, respectively, and then print them one by one in a specified order.

//Test Case1:
//Explanation:If the birth date is 22, the birth  is May and the birth year is 2001 then
//output : 22 May 2001

// const prompt = require("prompt-sync")();
// let date=parseInt(prompt("enter the value of date: "));
// let month=(prompt("enter the value of month: "));
// let year=parseInt(prompt("enter the value of year: "));
// console.log(date,month,year);


//Q2. Write a program to take input from the user, and then print it to the output.

//Test Case1: Input: 12
            //Output:12

// const prompt = require("prompt-sync")();
// let a = parseInt(prompt("enter the value of a: "));
// console.log(a)


//Q3.  Imagine you and your friend have brought different snacks for lunch. However, you want to exchange your snacks with each other. To do this, you decide to enlist the help of a friend who can hold one snack box while you exchange with your other friend. Similarly, in programming, we can use a third variable to help us swap the values of two variables.
//Write a program to take two values from the user and swap them. 

// const prompt=require("prompt-sync") ();
// let a = Number(prompt("enter the value of a: "));
// let b = Number(prompt("enter the value of b: "));
// let temp = a
//     a = b
//     b = temp
// console.log (a,b)


// Q4. Write a program to take two numbers from the user and perform Six basic operations (addition, subtraction, multiplication, division, integer division and modulus) on those two numbers.
//Note: Print the output in the order as mentioned in the question.
//Test Case1:   Input: 12     5
                //Output: 17    7   60  2.4   2   2

// const prompt=require("prompt-sync")();
// let a = Number(prompt("enter the value of a: "));
// let b = Number(prompt("enter the value of b: "));
// C=a+b;
// D=a-b;
// E=a*b;
// F=a%b;
// G=a/b;
// console.log (C,D,E,F,G)


// Q5. Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.
//Note: Print the output in the order as mentioned in the question.
//Test Case1: Input:    12      5
            //Output:   2       2
//Test Case2: Input: 15       6
//Output:    2       3

// const prompt= require ("prompt-sync")();
// let a = parseInt(prompt("enter the value of a: "));
// let b = parseInt(prompt("enter the value of b: "));
// Q=a/b
// R=a % b
// console.log (Q,R);


// Q6. Write a program to take a positive number from the user and then display the last digit of that number.
    //Test Case1: Input: 843
    //Output:  3
    //Test Case2: Input: 321
    //Output:   1

// const prompt= require ("prompt-sync")();
// let a = Number(prompt("enter the value of a: "));
//     d=a%10;
//     console.log(d);


//Q. Get user to input a number using prompt ("enter a number"). Check if the number is a multiple of 5 or not.

// let num = Number( prompt("enter a number:"));
//  if(num % 5 == 0){
//     console.log(num,"is a multiple of 5");
//  } else{
//     console.log(num,"is NOT a multiple of 5");
//  }


// Q. Write a code which can give grades to students according to their scores:
// 90-100, A        70-89,B         60-69,C         50-59,D         0-49,F

// let score = parseInt(prompt("enter a number: "));
// let grade;
// if(score>=90 && score<=100){
//     grade="A";
//  }else if (score>=70 && score<=89){
//     grade="B";
//  }else if(score>=60 && score<=69){
//     grade="C";
//  }else if(score>=50 && score<=59){
//     grade="D";
//  }else if(score>=0 && score<=49){
//     grade="F";
//  }
// console.log ("according to your scores, your grade was:", grade );


// Q7.Write a program to convert a temperature from Celsius to Fahrenheit using the formula  C/5 = (F-32)/9
// Test Case1:
// Input: 30 
// Output: 86

// let C = parseInt(prompt("enter a number: "));
// F=(9*C/5+32);
// console.log(F)


//Q8. Write a program to take two inputs from the user and swap them without using a temporary or third variable.
//Test Case1:   Input:  2       3
//              Output: 3       2

// let a = Number(prompt("enter the value of a: "));
// let b = Number(prompt("enter the value of b: "));
// let temp = a
//     a = b
//     b = temp
// console.log (a,b)


// Q9.  Write a program to take two numbers, A and B from the user. Your task is to find the largest number that is less than A and can be divided evenly by B. Can you figure out that number?
//Test Case1:   Input:  15      4
//              Output: 12
//Test Case2:   Input:  27      5
//              Output: 25


// Q10. Write a program to take two numbers from the user and determine the greater of those two given numbers.
//Test Case1:   Input:  20      3
//              Output: 20
//Test Case2:   Input:  5       7
//              Output: 7

// let a = Number(prompt("enter the value of a: "));
// let b = Number(prompt("enter the value of b: "));
// if(a>b){
//     console.log(a,"is greater");
// }
// else{
//     console.log(b,"is greater");
// }


// Q11. Write a program to take a number fro  m the user and print that number as Odd or Even.
//Test Case1:   Input:  56
//              Output: Even
//Test Case2:   Input:  87
//              Output: Odd

// let a = Number(prompt("enter the value of a: "));
// if(a%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }


// Q12. Write a program to take a number from the user and output whether that number is negative, positive or zero.
//Test Case1:   Input:  6
//              Output: Positive
//Test Case2:   Input:  0
//              Output: Zero

// let x = parseInt(prompt("enter the value of x: "));
// if (x>0){
//     console.log("positive");
// }else if (x==0){
//     console.log("zero");
// }else(console.log("negative"));


//Q13. Write a program to take an integer as input and print the smallest positive integer that is a multiple of both 2 and n.
//Test Case:    Input:  5
//              Output: 10
//Test Case:    Input:  6
//              Output: 6

// let x = parseInt(prompt("enter the value of x: "));


// Q14. Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)
//Test Case1: Input:  20          3           43
// //           Output:            43
// let a = parseInt(prompt("enter the value of a: "))
// let b = parseInt(prompt("enter the value of b: "))
// let c = parseInt(prompt("enter the value of c: "))
// if  (a>b){
//         console.log("a is greater")
// }
// else if(b>c){
//     console.log("b is greater")
// }
// else (console.log("c is greater"))


// Q15. Write a program to take a year from the user and output whether a given year is a leap year or not.
// A year is said to be a leap year if it is either divisible by 400 or it should be divisible by 4 and not by 100.
// Test Case1:
// Input:  1800
// Output: No
// Test Case2:
// Input:  2000
// Output: Yes
// Test Case3:
// Input:  2024
// Output: Yes
// y=parseInt(prompt("year: "))
// if ( (y%4==0 || y%100!=0) && y%400==0 ){
//     console.log(y,"leap year");
// }
// else {
//     console.log(y, "not a leap year");
// }

// Q16."Write a program to take 3 numbers from the user and output the second max of 3 numbers.
// (First, do it in the normal way then do it by using 3 comparisons)
// Test Case1:
// Input:  5       4       6
// Output: 5
// let a = parseInt(prompt("enter the value of a: "));
// let b = parseInt(prompt("enter the value of b: "));
// let c = parseInt(prompt("enter the value of c: "));
// let max, sm, max1, sm1
// if (a>b){
//     max=a;
//     sm=b;
// }
// else{
//     max=b;
//     sm=a;
// } 
// if (max>c){
//     max1=max;
//     sm1=c;
// }
// else{
//     max1=c;
//     sm1=max;
// }
// if (sm>sm1){
//     console.log(sm);
// }
// else{
//     console.log(sm1);
// }

// Q17. Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: (Gross salary is the sum of basic salary, HRA, and DRA)
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// Test Case1:
// Input:  17000
// Output: 36550

// let bs=parseInt(prompt("enter the value: "));
// if (bs<=10000){
//     let GS1=20/100*bs+80/100*bs+bs;
//     console.log("Gross salary=" +GS1);
// }
// else if (bs<=20000){
//     let GS2=25/100*bs+90/100*bs+bs;
//     console.log("Gross salary=" +GS2);
// }
// else if (bs>20000){
//     let GS3=30/100*bs+95/100*bs+bs;
//     console.log("Gross salary=" + GS3);
// }
// else{
//     console.log("Invalid");
// }

// Q18. Write a program  to input electricity unit charges and calculate the total electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
// Test Case1:
// Input:  200
// Output: 192

// let a=parseFloat(prompt("enter the value of a: "));
// let b = 0;
// if (a<=50){
//     b=a*0.50;
// } else if(a<=150){
//     b=25+(a-50)*0.75;
// } else if(a<=250){
//     b=25+75+(a-150)*1.20;
// }
// else{
//     b=100+120+(a-250)*1.50;
// }
// let t=b*1.20;
// console.log(t)

// Q19. Write a program to take 4 numbers from the user and output the third max of these 4 numbers.
// Test Case1:
// Input:   5    4    6     7
// Output:      5   
// let a = parseInt(prompt("enter the value of a: "));
// let b = parseInt(prompt("enter the value of b: "));
// let c = parseInt(prompt("enter the value of c: "));
// let d = parseInt(prompt("enter the value of d: "));
// let max1, sm1, max2, sm2 ;
// if (a>b){
//     max1=b;
//     sm1=a;
// }
// else {
//     max1=a;
//     sm1=b;
// }
// if (c>d){
//     max2=d;
//     sm2=c;
// }
// else {
//     max2=c;
//     sm2=d;
// }
// if (max1>max2){
//     if (max1>sm2){
//         console.log(sm2);
//     }
//     else{
//         console.log(max1);
//     }
// }
// else {
//     if (max2>sm1){
//         console.log(sm1);
//     }
//     else{
//         console.log(max2);
//     }
// }

// Q20. Write a program to take 5 numbers from the user and print the frequency of every number.
// Test Case1:
// Input:  3   4   6   3   6
// Output: 3 = 2
//         4 = 1 
//         6 = 2



// Q21.Take the number N and the name from the user as inputs, and print the name N times.
// Test Case1:
// Input:  2       Bedanti
// Output: Bedanti 
//         Bedanti
// let n = parseInt(prompt("Enter the number of times to print the name: "));
// let name = prompt("Enter the name: ");
// for (let i = 0; i < n; i++) {
//     console.log(name);
// }


// Q22. Take a number N from the user as input, and print even numbers up to N.
// Test Case1:
// Input:  10
// Output: 2  4 6 8
// 
// let n = parseInt(prompt("Enter the number: "));
// for (let i=0; i<n; i++){
//     if(i%2==0){
//     console.log(i, "even number")
//     }  
// }


// Q23. Write a program to print the sum of odd numbers up to N.
// Test Case1:
// Input:  20
// Output: 100
// 
// let n= parseInt(prompt("Enter the number: "));
// let s=0
// for (let i=0; i<n; i++){
//     if(i%2!=0){
//         s=s+i;
//     }  
// }
// console.log("sum of odd number upto n: ", s);


// Q24. Write a program to take two integers M, and N and print the sum of numbers in the range M to N.
// Test Case1:
// Input:  2       7
// Output:     27
// Explanation:
// Output should be 27 as the sum of numbers (2+3+4+5+6+7=27)
// 
// let m = parseInt(prompt("Enter the number m: "));
// let n = parseInt(prompt("Enter the number n: "));
// let sum = 0;
// for (let i=m; i<=n; i++){
//     sum=sum+i;
//     }
// console.log("combination of number:",mn );
// console.log("sum of numbers from",m, "to", n+ ":", sum);


// Q25. Write a program to calculate the sum of the following series where N is input from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N
// Test Case1:
// Input:  4
// Output: 2.08
// 
// let n = parseInt(prompt("enter the value of n: "));
// let sum = 0;
// for (let i=1; i<=n; i++){
//     sum=sum+1/i;
// }
// console.log("sum:",sum);


// Q26. Write a program to take a number from the user and print the number of digits in the given number. (can you do it without  loop O(1) )
// Test Case1:
// Input:   456
// Output:     3
// 
// let n = parseInt(prompt("enter the value of n: "));
// let d=0;
// while (n>0){
//     let r=n%10;
//     d=d+1;
//     n = Math.floor(n / 10);
// }
// console.log("Number of digits:",d);


// Q27. Write a program to take a number from the user and print the sum of the digits of the given number.
// Test Case1:
// Input:  456
// Output: 15
// Explanation:    4+5+6 = 15
// // 
// let n = parseInt(prompt("enter the value of n: "));
// let sum=0;
// while (n>0){
//     let r=n%10;
//     sum=sum+r;
//     n = Math.floor(n / 10);
// }
// console.log("Sum of digits of n:",sum);


// Q28. Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.
// // Test Case1:
// Input:  123
// Output: 321
// 
// let n = parseInt(prompt("enter the value of n: "));
// let r = 0;
// while (n>0){
//     let d=n%10;
//     r = r*10+d;
//     n=Math.floor(n/10);
// } 
// console.log("Reverse ofer of the number:",r);


// // Factors question
// let n = parseInt(prompt("enter the value of n: "));
// for (i=1; i<n; i++){
//     if(n%i==0){
//         console.log (i);
//     }
// }


// Q30. Write a program to check if a number is a special type of number called a 'prime number'. A prime number is a number that is only divisible by 1 and itself, and it doesn't have any other factors. 
// For example, the number 7 is a prime number because it can only be divided by 1 and 7 without leaving a remainder. However, the number 12 is not a prime number because it has other factors, such as 2, 3, 4, and 6, in addition to 1 and 12. (Take the number from the user)? Learn sieve algorithm
// Test Case1:
// Input:  97
// Output: Yes 
// Test Case2:
// Input:  49
// Output: No

// let n = parseInt(prompt("enter the value of n: "));
// let count=0;
// for (i=1; i<=n; i++){
//     if (i%n==0){
//         count++;
//     }
// }
// if (count==2){
//     console.log(n,"is a prime number");
// } else {
//     console.log(n,"is NOT a prime number");
// }


// Q31. Write a program to take a number from the user and then determine if that number is a special type of number called a 'perfect number'.
// A perfect number is a number where the sum of all its factors (excluding the number itself) is equal to the number itself. Print Yes if the number is a perfect number else print No. 
// Test Case1:
// Input:  6
// Output: Yes 
// Test Case2:
// Input:  12
// Output: No
// 
// let n = parseInt(prompt("enter the value of n: "));
// let sum = 0
// for (i=1; i<n; i++){ 
//     if (n % i === 0){
//         sum=sum+i;
//     } else{
//         i=i+1;
//     }
// }
// if (sum === i){
//     console.log("Yes"+i, "perfect number");
// } else { 
//     console.log("No"+i, "NOT perfect number");
// }
// console.log("Sum:"+sum);


// Q32. Write a program to print all the numbers from the given array using a loop. 
// L = {23, 45, 32, 25, 46,33, 71, 90}
// Output: 23  45  32  25  46  33  71  90

L = [23, 45, 32, 25, 46, 33, 71, 90]
console.log(L)
console.log(L[0])
console.log(L[1])
console.log(L[2])
console.log(L[3])
console.log(L[4])
console.log(L[5])
console.log(L[6])
console.log(L[7])
console.log(L[8])
console.log(L[9 ])
console.log("length of the array:" ,L.length)


// Q33. Write a program to create an array of natural numbers till 20 and print it.
// 
// let n = parseInt(prompt("enter the value of n: "));
// let a=[];
// for (let i=0; i<n; i++){
//     a[i]=i+1;
// }
// console.log(a)


// Q34. Write a program to reverse the array and print the reversed array.
// Test Case1:
// Input:  23 45 32 25 46 33 71 90
// Output:
// 90
// 71
// 33
// 46
// 25
// 32
// 45
// 23
// 
// let n = [23, 45, 32, 45, 46, 33, 71, 90];
// let a=[];
// for (let i=n.length-1; i>=0; i=i-1){
//     a.push(n[i])
// }
// console.log(a)


// Q35. Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.
// Test Case1:
// Input:
// 7
// 1 2 3 4 5 6 7
// 3
// Output: Yes
// Test Case2:
// Input:8
// Output:No
// 
// let n =parseInt(prompt("Enter the value of n: "));
// let arr=[];
// for (let i=0; i<n; i++){
//     let a=parseInt(prompt("Enter the"+i+"index element: "));
//     arr.push(a);
// }
// let m=parseInt(prompt("Enter the target value: "));
// let ass=false;
// for (i=0; i<n; i++){
//     if (arr[i]==m){
//         ass=true;
//         break;
//     }
// }
// if (ass==true){
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }



// Q36. Write a program to print the sum of all the odd numbers and even numbers in the given array.
// Note: In the output, you should print odd numbers sum and even numbers sum in this order only.
// Test Case1:
// Input:
// 23 45 32 25 46 33 71 90
// Output:
// 197
// 168
// 
// let n =parseInt(prompt("Enter the value of n: "));
// let arr=[];
// let oddsum=0;
// let evensum=0;
// for (let i=0; i<n; i++){
//     arr.push(parseInt(prompt("Enter elements:")));
// }

// for (let i=0; i<arr.length; i++){
//     if (arr[i]%2===0){
//     evensum += arr[i];
//     }
//     else{
//         oddsum += arr[i];
//     }
// }
// console.log("Sum of odd numbers: ",oddsum);
// console.log("Sum of even numbers: ",evensum);


// Q40.Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.
// Test Case 1:
// Input:  5
// 2 4 2 6 3
// Output: 2
// Test Case 2:
// Input:  6
// 2 4 6 3 3 2
// Output: 3 2

// let n =parseInt(prompt("Enter the value of n: "));
// let arr=[];
// for (i=0; i<n; i++){
//     arr.push(parseInt("Enter the number:"));
// }
// for (let i=0; i<n; i++){
//     for(let j = i+1; j<n; j++){
//         if (arr[i]==arr[j]){
//             console.log("Duplicate number: ",arr[i]);
//         } 
//     }
// }


// Q41.Write a program to take N numbers from the user and print the frequency of every number.
// Test Case 1:
// Input:  6
// 2 4 2 6 3 6
// Output:
// 2 - 2
// 4 - 1
// 6 - 2
// 3 - 1
//
//  let n=parseInt(prompt("Enter the value of n: "));
//  let arr=[]
//  for (let i=0; i<n; i++){
//     let a=parseInt(prompt("Enter the"+i+"index value: "));
//     arr.push(a);
//  }
// for (let i=0; i<n; i++){
//     let count =0
//     for (let j=0; j<i; j++){
//         if (arr[i]===arr[j]){
//             count++;
//         }
//     }
//     if (count>0){
//         continue;
//     }
//     for(let j=0; j<n; j++){
//         if (arr[i]==arr[j]){
//             count++;
//         }
//     }
//     console.log(arr[i]+ "=" +count);
// }


// Q42. Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of size M+N (Do not use sorting)
// Test Case1:
// Input:
// 1 2 5 6
// 3 4 7 9
// Output:
// 1 2 3 4 5 6 7 9
// 
// let n =parseInt(prompt("Enter the value of n: "));
// let m =parseInt(prompt("Enter the value of m: "));
// let a=[];
// let b=[];
// 
// for (let i=0; i<m; i++){
//     a.push(parseInt(prompt("Enter the elements: ")));
// }
// for (let j=0; j<n; j++){
//     b.push(parseInt(prompt("Enter the elements: ")));
// }
// let C=[]
// let i=0, j=0, k=0;    

// while(i<m && j<n){
//     if (a[i<b[j]]){
//         C[k++]=a[i++];
//     }
//     else{
//         C[k++]=b[j++];
//     }
// }
// while (i<m){
//     C[k++]=a[i++];
// }
// while (j<n){
//     C[k++]=b[j++];
// }
// console.log("Merge Array:",C);


// Q43. Write a program to take value N from the user and print the following pattern based on the user input.
// array = [2, 3, 5, 2, 1]
// >>                        
// >>>                
// >>>>>
// >>                        
// > 
// let c=' '
// j =0 j<arr[i] j++;              
// c+='>'
// console.log(c)
// let n =parseInt(prompt("Enter the value of n: "));
// let arr=[];
// for (let i=0; i<n; i++){
//     arr.push(parseInt(prompt("Enter the elements: ")));
// }
// for (let i=0; i<n; i++){
//     let star=' ';
//     for (let j=0; j<arr[i]; j++){
//         star+='>';
//     }
//     console.log(star);
// }

