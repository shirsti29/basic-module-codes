// Q1. Input a positive number n and write a program to find the sum of the first n natural numbers.
// Test cases:
// Input:  6
// Output: 21
const prompt = require ("prompt-sync")({sigint: true})
// n=parseInt(prompt("Enter the value of n: "));
// let sum=0
// for (let i=1; i<=n; i++){
//     sum=sum+i;
// }
// console.log("Sum of the numbers: " ,+sum);



// Q2. Write a program to show how consecutive even numbers starting from 2 are summed up until the sum just exceeds 1000 and then print the sum and the number of even numbers added.
// n=parseInt(prompt("Enter the value of n: "));
// let sum=0;
// for(let i=1; i<=n; i++){
//     if (i%2==0){
//     sum=sum+i;
//     }
// }
// console.log("Sum of even number: " ,+sum)


// Q3. Write a program to print the numbers below 100 that are divisible by 7.
// let n=parseInt(prompt("Enter the value of n: "));
// for (let i=1; i<=n; i++){
//     if (i%7==0){
//         console.log(i)
//     }
// }



// Q4. Write a program to show how to find all even natural numbers that are divisible by 7 in a given range. (Input lower and upper limit of the range from the user).
// let n=parseInt(prompt("Enter the value of n: "));
// for( let i=1; i<=n; i++){
//     if (i%2==0 && i%7==0){
//         console.log(i)
//     }
// }


// Q5.Write a program to find the sum of the squares of the first 9 natural numbers that are divisible by 3.
// let n=parseInt(prompt("Enter the value of n: "));
// let sum=0;
// for( let i=1; i<=n; i++){
//     let sq=i*i;
//     if (i%3==0 ){
//         sum=sum+sq;
//     }
// }
// console.log(sum)


// Q6. Write a program to calculate the sum of the following series where n is input. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/n
// let n=parseInt(prompt("Enter the value of n: "));
// let sum=0;
// for (let i=1; i<=n; i++){
//     sum=1/i+sum;
// }
// console.log(sum)


// Q7. Write a program to show how to find the sum of all the numbers that are divisible by P but not divisible by Q within a given range. (Input lower limit, upper limit, P, and Q from the user).
// let ul=parseInt(prompt("Enter the value of upper limit: "));
// let ll=parseInt(prompt("Enter the value of lower limit: "));
// let P=parseInt(prompt("Enter the value of P: "));
// let Q=parseInt(prompt("Enter the value of Q: "));
// let sum = 0;

// for( let i=ll; i<=ul; i++){
//     if (i%P==0 && i%Q!==0){
//         sum=sum+i;
//     }
// }
// console.log("Sum: " ,+sum);


// Q8. Write a program to show how to obtain the HCF and LCM of two numbers. (input two numbers from the user)
// Test cases:
// Input:  12      15
// Output: 3       60
// let a=parseInt(prompt("Enter the value of a: "));
// let b=parseInt(prompt("Enter the value of b: "));
// let n1=a;
// let n2=b;
// let HCF;
// while (n2!==0){
//     let temp=n2;
//     n2=n1%n2;
//     n1=temp;
// }
// HCF=n1;
// let LCM=a*b/HCF;

// console.log("HCF: " , HCF );
// console.log("LCM: " , LCM);


// Q9. Write a program to show how the sum of the digits of a given number can be obtained. (Input the number from the user)
// Test cases: 
// Input: 456
// Output: 15
// Explanation:
// 4+5+6 = 15

// let n=parseInt(prompt("Enter the value of n: "));
// let sum=0;
// while(n>0){
//     let d=n%10;
//     sum=sum+d;
//     n=Math.floor(n/10);
//     // break
// }
// console.log("Sum of digits: " ,+sum);



// Q10.You need to write a program that takes a whole number from the user and shows the number in reverse order.
//  For example, if the user enters the number 123, the program should display 321 as the result.

// let n=parseInt(prompt("Number: "))
// let r=0;
// while(n>0){
//     let d=n%10;
//     r=r*10+d;
//     n=Math.floor(n/10)
// }
// console.log ("Pallindrome of the number: " ,+r);


// Q12."Write a program to show how the factors of a given number can be obtained. A factor is a number that can divide another number evenly without
//  leaving a remainder. 
//  test case1:
//  Input:
//  Enter a number: 12
//  Output:
//  Factors of 12: 1, 2, 3, 4, 6, 12
//  test case2:
//  Input:
//  Enter a number: 25
//  Output:
//  Factors of 25: 1, 5, 25
// let n=parseInt(prompt("Number: "))
// for (let f=1; f<=n; f++){
//     if (n%f==0){
//     console.log (f)
//     }
// }



// Q12. Write a program that asks the user to enter a number and then determines if that number is a special type of number called a 'perfect number'? 
// Test Case 1:
// input: Enter a number: 6
// output: 6 is a perfect number.
// Explanation:
// The program takes the number 6 as input. It then calculates the factors of 6, which are 1, 2, and 3. The sum of these factors (1 + 2 + 3) is equal to 6, so 6 is a perfect number.
// test case : 2
// Input:  Enter a number: 12
// Output: 12 is not a perfect number.
// Explanation:
// The program takes the number 12 as input. It calculates the factors of 12, which are 1, 2, 3, 4, and 6. The sum of these factors (1 + 2 + 3 + 4 + 6) is equal to 16, which is not equal to 12. Therefore, 12 is not a perfect number.
// 
// let n=parseInt(prompt("Number: "));
// let sum=0;
// for (let i=1; i<n; i++){
//     if (n%i===0){
//         sum=sum+i;
//     }
// }

// if (sum===n){
//     console.log(n+ "is a Perfect Number");
// }
// else {
//     console.log(n+ "is NOT a Perfect Number");
// }


// Q13.A prime number is a number that is only divisible by 1 and itself, and it doesn't have any other factors. for example, the number 7 is a prime number because it can only be divided by 1 and 7 without leaving a remainder. However, the number 12 is not a prime number because it has other factors, such as 2, 3, 4, and 6, in addition to 1 and 12. Can you figure out if a given number is prime or not?
// let n= parseInt(prompt("Number: "))
// count=0;
// for (let i=1; i<= nn; i++){
//     if (n%i==0){
//         count+=1;
//     }
// }
// if (count===2){
//     console.log(n+ "  is a Prime Number ");
// }
// else {
//     console.log(n+ " is NOT a Prime Number");
// }


// Q14. Write a program for obtaining the sum of a given number of terms (n) for a given value of X in the following mathematical series: (Input X and N from the user)
// i) X+(X^2)/2+(X^3)/3+(X^4)/4  ....upto n terms
// ii) X-(X^3)/3+(X^5)/5-(X^7)/7+(X^9)/9-.... upto n terms
// iii) X-(X^3)/3!+(X^5)/5!-(X^7)/7!+ .... upto n terms
// let n= parseInt(prompt("Number times i.e n: "))
// let x= parseInt(prompt("Number X: "))
// let sum=0;
// for (let i=1; i<=n; i++){
//     sum=sum+(x**i)/i;
// }
// console.log("Sum: " ,+sum);



// Q15. Write a program to find out the sum of first N terms of the following series 5+55+555+5555+.... up to N terms.
// if N=6 then this series becomes 5+55+555+5555+55555+555555 = 617,280(output)
// if N=3 then this series becomes 5+55+555 =615(output)
// 
// let n = parseInt(prompt("Number times i.e n: "));
// let sum = 0;
// let r=0;
// for (let i=1; i<=n; i++){
//     r=r*10+5;
//     sum=sum+r
// }
// console.log("Sum:  ", sum)

 
// Q16.Write a program to show how to find all the perfect numbers under 10,000.
// (already you know what is perfect number)"
// let n= parseInt(prompt("Number: "))

// for (let i=1; i<n; i++){
//     let sum=0
//     for (let j=1; j<i; j++){
//         if (i%j==0){
//         sum=sum+j;
//         }
//     }
//     if (sum==i){
//         console.log(i+ " is a Perfect Number");
//     }
// }


// Q17.Write a program to find the sum of following series:
// 1 + 2 + 6 + 24 + 120 . . . . . N terms
// if N= 6 then series becomes 1+2+6+24+120+720 , then output will be some of this series -> 873"
// let n=parseInt(prompt("Number: "));
// let sum=0;
// for (let i=1; i<=n; i++){
//     let mul=1;
//     for(let j=1; j<=i; j++){
//         mul=mul*j
//     }
//     sum=sum+mul;
// }
// console.log("Sum of the series: " ,+sum);


// Q18. Can you find all the three-digit numbers that have a special property? The property is that the sum of the factorials of its individual digits is equal to the number itself. For example, the number 145 has this property because 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Can you write a program to determine all three-digit numbers that satisfy this property?
// let n = parseInt(prompt("Enter the value of n: "));
// let sum = 0;

// while (n > 0) {
//     let r = n % 10;
//     let f = 1;
//     for (let j = 1; j <= r; j++) {
//         f *= j;
//     }
//     sum += f;
//     n = Math.floor(n / 10);
// }
// console.log("Factorial sum: " + sum);



// Q19. Find the Highest Common Factor (HCF) of a given set of numbers? The HCF is the largest number that divides all the given numbers without leaving a remainder.
// Can you write a program to determine the HCF of 'n' given numbers?
// Test Case1:
// Input:
// Enter the value of n: 4
// Enter number 1: 12
// Enter number 2: 18
// Enter number 3: 24
// Enter number 4: 30
// Output:
// The HCF of the given numbers is: 6
// Test Case2:
// Input:
// Enter the value of n: 3
// Enter number 1: 16
// Enter number 2: 28
// Enter number 3: 40
// Output:
// The HCF of the given numbers is: 4
// let n = parseInt(prompt("Enter the value of n: "));
// let a = parseInt(prompt("Enter the value of a: "));
// let HCF;
// for (let i=1; i<=(n-1); i++){
//     let b;
//     if (a==b){
//         HCF=a
//     }
//     else{
//         if(a>b){
//             a=a-b;
//         }
//         else{
//             b=b-a;
//         }
//     }
// }
// console.log("HCF: " ,HCF);


// Q20. Find the maximum and minimum values among a given set of numbers? The maximum value is the largest number, and the minimum value is the smallest number in the set.
// Can you write a program to find the maximum and minimum values among 'n' given numbers?
// Test Case:
// Input:
// Enter the value of n: 5
// Enter number 1: 10
// Enter number 2: 5
// Enter number 3: 8
// Enter number 4: 3
// Enter number 5: 12
// Output:
// Maximum value: 12
// Minimum value: 3
// 
// let n = parseInt(prompt("Enter the value of N: "));
// if (isNaN(n) || n <= 0) {
//     console.log("Please enter a valid positive number.");
// } else {
//     let num = parseInt(prompt("Enter number 1: "));
//     let min = num;
//     let max = num;
//     for (let i = 2; i <= n; i++) {
//         let b = parseInt(prompt(`Enter number ${i}: `));
//         if (b > max) {
//             max = b;
//         }
//         if (b < min) {
//             min = b;
//         }
//     } 
//     console.log("Max:", max, "Min:", min);
// }


// Q21. Write a program to find the second max of given N numbers.
// if N=4 and entered 4 numbers are 3,2,1,4 then output should be 3 as this is the second maximum number among those 4 numbers.

// let n = parseInt(prompt("Enter the value of N: "));


// Q22. Write a program to find the third max of given N numbers.
// if N=5 and entered 5 numbers are 2,1,4,100,64 then output should be 4 as this is the third maximum number among those 5 numbers.


// Q23.Write a program to input a number, N, and print first N prime numbers.
// Test cases:
// Input:
// 4
// Output:
// 2
// 3
// 5
// 7
// Explanation:
// The first 4 prime numbers are 2,3,5,7

// let n = parseInt(prompt("Enter the value of N: "));
// let primecount =0;
// let num=2;
// while(primecount<n){
//     let count=0;
//     for (let i=1; i<=num; i++){
//         if (num%i==0){
//             count=count+1;
//         }
//     }
//     if(count==2){
//         console.log(num);
//         primecount++;
//     }
//     num++;
// }
    



// Q24. Write a program to find the sum of all prime numbers between 1 to n. (n input from the user)
// Test cases:
// Input:  20
// Output: 77
// Explanation:
// All prime numbers between 1 to 20 are 2,3,5,7,11,13,17,19. Hence their sum is 77

// let n = parseInt(prompt("Enter the value of N: "));
// let sum=0;
// for (let i=2; i<=n; i++){
//     let count=0        
//     for (let k=1; k<=i; k++){
//         if (i%k==0){
//             count=count+1;
//         }
//     }
//     if(count==2){
//         sum=sum+i;
//     }
// }
// console.log(sum)



// Q25. Write a program to print only the prime factors of a given number 'N'? Prime factors are the prime numbers that divide a given number without leaving a remainder.
// Test Case:
// Input:  Enter a number: 84
// Output:Prime factors of 84: 2, 3, 7
// Explanation:
// In this test case, the number given is 84. The program calculates and displays the prime factors of 84, which are 2, 3, and 7. These prime numbers can divide 84 without leaving a remainder."
// let n = parseInt(prompt("Enter the value of n: "));
// for (let i=1; i<=n; i++){
//     if (n%i==0){
//         let count =0;
//         for (let k=1; k<=i; k++)
//             if (i%k==0){
//                 count++
//             }
//             if (count==2){
//                 console.log(i)
//             }
//     }
// }



// Q26.Write a program that prints the first 'N' Fibonacci numbers? Fibonacci numbers are a series of numbers where each number is the sum of the two preceding numbers. We start with the numbers 0 and 1, and then calculate and print each subsequent Fibonacci number by adding the previous two numbers. For example, the third Fibonacci number is obtained by adding the first two numbers: 0 + 1 = 1. the fourth fibonacci number can be obtained by adding the previous two numbers...
// if N=8 then series will be (0,1,1,2,3,5,8,13)
// write a program to print the first 'N' Fibonacci numbers?
// let n=parseInt(prompt("Enter the value of n: "));
// if (n<=0){
//     console.log("Plese enter a number: ");
// }else{
//     let a=0;
//     let b=1;
//     console.log("Series: " ,+a);
//     if (n>1){
//         console.log(b);
//     }
//     for (let i=3; i<=n; i++){
//         let x=a+b;
//         console.log(x);
//         a=b;
//         b=x;
//     }
// }



// Q27. Given two integer numbers M and N, write a program to print the integers from M to N.
// if M=5 and N=12 then output should be 5,6,7,8,9,10,11,12
// let m=parseInt(prompt("Enter the value of m: "));
// let n=parseInt(prompt("Enter the value of n: "));
// for (let i=m; i<=n; i++){
//     console.log(i)
// }



// Q28.Given an integer N, write a program which reads N inputs and prints them.
// if user entered N = 4 then we need to take input for 4 times from the user and we should print the 4 inputs entered by user. if user entered 4 numbers are 32,5,5,78 the output should be 32,5,5,78.
// let n=parseInt(prompt("Enter the value of n: "));
// let inputs = "";
// for(let i=1; i<=n; i++){
//     let m=parseInt(prompt("Enter the value of m: "));
//     inputs+=m;
//     if (i!=n){
//         inputs+=",";
//     }
// }
// console.log(inputs);


//Q29. Given an integer N, write a program which reads N inputs and prints the sum of the given input integers.
// if user entered N = 4 then we need to take input for 4 times from the user and we should print the sum of 4 inputs entered by user. if user entered 4 numbers are 32,5,5,78 the output should be 120 as it is sum of 32+5+5+78
//
// let n = parseInt(prompt("Enter the value of n: "));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     let m = parseInt(prompt(`Enter value : `));
//     sum += m; 
// }
// console.log('Sum of numbers:', sum);



// Q30.Given an integer,N. Write a program to print integers from N to 1.
// if N = 8 then output should be 8,7,6,5,4,3,2,1 .
// let n = parseInt(prompt("Enter the value of n: "));
// for (let i=n; i>0; i--){
//     console.log(i)
// }


// Q31.Write a program which reads N inputs and prints the product of the given input integers.
// if N = 4 and user entered 4 numbers are 4,8,2,3 then output should be 192 as it is product of (4*8*2*3)

// let n = parseInt(prompt("Enter the value of n: "));
// let mul=1;
// for (let i=1; i<=n; i++){
//     let m = parseInt(prompt("Enter the number: "));
//     mul=mul*m;
// }
// console.log("Product of numbers: " ,mul)



// Q32. Write a program to print the factorial of N.
// Factorial is the product of all positive integers less than or equal to N.
// if N = 5 
// output should be 120 as the product of (5*4*3*2*1) is 120.
// if N = 3
// output should be 6 as the product of (3*2*1) is 6.

// let n = parseInt(prompt("Enter the value of n: "));
// let sum=0

// while(n>0){
//     let r=n%10;
//     let f=1
//     for(let j=1; j<=r; j++){
//         f=f*j 
//     }
//     sum=sum+f;
//     n=Math.floor(n/10);
// }    
// console.log("Factorial: " ,sum)