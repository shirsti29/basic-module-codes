// Q1.Write a program to show how to determine the greater of the three given numbers.
// testcase:
// if we have given three  numbers 10 and 100,20 then output should be 100 as it is greater in those three numbers.

// const prompt = require ("prompt-sync")({sigint: true});
// let a = parseInt(prompt("Enter the value of a: "));
// let b = parseInt(prompt("Enter the value of b: "));
// let c = parseInt(prompt("Enter the value of c: "));
// if (a>b){
//     console.log(a,"is greater");
// }
// else if (b>c){
//     console.log(b,"is greater");~
// }
// else {
//     console.log(c, "is greater");
// }


// Q2. Write a program to take two sides as input and check whether it is a rectangle or a square.
// testcase:
// if user given two sides as one side is 40 and another side is 40. then output should be ""Square""
// if user given two sides as one side 40 and another is 20 then output should be "Rectangle".
// 
// length= parseFloat(prompt("Enter the value of length: "));
// breadth= parseFloat(prompt("Enter the value of breadth: "));
// if (breadth===length){
//     console.log("Square");
// }
// else{
//     console.log("Rectangle");
// }


// Q3. Write a programme to calculate profir or loss.
// Test Case 1:     SP = 500, CP = 400
// Calculation: Profit = SP - CP = 500 - 400 = 100
// Result: Profit of 100
// Test Case 2:     SP = 800, CP = 950
// Calculation: Loss = CP - SP = 950 - 800 = 150
// Result: Loss of 150
// Test Case 3:     SP = 300, CP = 300
// Calculation: Profit = SP - CP = 300 - 300 = 0
// Result: No profit, no loss.
// 
// sp = parseFloat(prompt("Enter the value of Selling Price: "));
// cp = parseFloat(prompt("Enter the value of Cost Price: "));
// if (sp==cp){
//     console.log("No Profit, No Loss");
// }
// else if (sp<cp){
//     let profit=cp-sp;
//     console.log(profit,"Profit incurred")
// }
// else{
//     let loss= sp-cp;
//     console.log(loss,"Loss incurred")
// }


//Q4.Write a program to check whether a number is the smallest 4 digit number.
//
// let a = parseInt(prompt("Enter the value of a: "));
// if (a===1000){
//     console.log(a,"is the smallest 4 digit number");
// }
// else{
//     console.log(a,"is NOT the smallest 4 digit number");
// }


// Q5.Write a program to check whether a number is the largest 3 digit number.
// let a = parseInt(prompt("Enter the value of a: "));
// if (a<=999 && a>=100){
//     if (a===999){
//     console.log(a, ("is largest 3 digit number"));
//     }
//     else{
//     console.log(a, ("is NOT largest 3 digit number"));
//     }
// }
// else{
//     console.log(a, ("is NOT largest 3 digit number"));
// }



// Q6.Write a program to check whether a number is divisible by 7 or not.
// testcase:
// input:  49
// output: YES
// 
// let a = parseInt(prompt("Enter the value of a: "));
// if (a%7==0){
//     console.log("YES, " +a, "is divisible by 7");
// }
// else{
//     console.log("NO, " +a, "is NOT divisible by 7");
// }


// Q7.Write a program to check whether a number is even or odd.
// input:  40
// output: Even
// input:  23
// output: Odd
// 
// let x=parseInt(prompt("Enter the value of x: "));
// if (x%2==0){
//     console.log(x, " is Even");
// }
// else{
//     console.log(x, " is Odd");
// }



// Q8.Write a program to check whether the last digit of a number (entered by user) is divisible by 3 or not.
// input:  353
// output: Yes
// let x=parseInt(prompt("Enter the value of x: "));
// let ld = x % 10;
// if (ld % 3==0){
//     console.log("YES");
// }
// else {
//     console.log("NO");
// }


// Q9.Write a program to check whether a person is eligible for voting or not. Age for voting is 18 years.
// input:  49
// output: YES 
// input:  10
// output: No
// 
// age=parseFloat(prompt("Enter the AGE: "));
// if (age>18){
//     console.log("YES, eligible for voting");
// }
// else{
//     console.log("NOT eligible for voting");
// }


// Q10.Write a program to display ""Hello"" if a number entered by the user is a multiple of five , otherwise print ""Bye"".
// input:  10
// output: Hello
// input:  8
// output: Bye
// 
// x=parseInt(prompt("Enter the value of x: "));
// if (x % 5==0){
//     console.log("HELLO");
// }
// else {
//     console.log("BYE");
// }


// Q11. Write a program to check whether a number entered is a three digit number or not.
// input:  374
// output: YES
// input:  20
// output: No
// 
// x=parseInt(prompt("Enter the value of x: "));
// if (x>=100 && x<=999){
//     console.log(x, " is three digit number");
// }
// else{
//     console.log(x, " is NOT three digit number");
// }


// Q12.Write a program to check whether a person is a senior citizen or not(Senior citizen Age=60).
// input:  60
// output: YES
// input:  30
// output: NO
// 
// age=parseFloat(prompt("Age: "));
// if (age>=60){
//     console.log("Yes, Senior Citizen");
// }
// else{
//     console.log("NOt, a Senior Citizen");
// }


// Q13. Accept the temperature in degrees Celsius of water and check whether it is boiling temperature or not (boiling point of water is 100 C)
// input:   100
// output: YES
// input:  30
// output: NO
// 
// t=parseFloat(prompt("Temperature: "));
// if (t>=100){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }


// Q14. A shop will give a discount of 10% if the cost of the purchased quantity is more than 1000. Ask the user for quantity, Suppose, one unit will cost 100. Judge and print total cost for the user.
// input:  11
// output: 990
// as total price will be 1100 because each unit costs 100 and total price is greater than 1000. so the 10 percent discount will applied and after applying this discount the answer will be 990.
// input:  4
// output: 400
// here quantuty he purchased is 4 it means purchased cost is 400 which is not greater than 1000 . so discount will not be applied.
// 
// q=parseInt(prompt("Quantity: "));
// let totalcost = 100*q
// if (totalcost>=1000){
//     let d=totalcost * (10/100)
//     let a=totalcost-d;
//     console.log("Total amount after discount is  ",a);
// }
// else{
//     console.log("Total Amount: ", +totalcost, " Discount not applied");
// }


// Q15. A company decided to give a bonus of 5% of his salary to an employee if his/her year of service is more than 5 years. Ask users for their salary and year of service and print the bonus amount.
// input:  40,000 salary
        // 6 years 
// output: 2000
// 
// let s=parseFloat(prompt("SALARY: "));
// let y=parseFloat(prompt("YEAR OF SERVICE: "));
// if (y>=5){
//     let bonus = s*(5/100);
//     console.log("Bonus:" +bonus);
// }
// else{
//     console.log("No Bonus");
// }


// Q16.A student will not be allowed to sit in an exam if his/her attendance is less than 75%. Take following input from the user. Number of classes held. Number of classes attended. And print, percentage of class attended. Is the student allowed to sit in the exam or not.
// Test cases: 
// Input: 
// Class held = 50
// Class attended = 37
// Output: Not Allowed
// Input:
// Class held: 70
// Class attended: 60
// Output: Allowed
// 
// let ch=parseInt(prompt("Class Held: "));
// let ca=parseInt(prompt("Class Attendence: "));
// let percent=(ca/ch)*100;
// if (percent>=75){
//     console.log("Allowed");
// }
// else{
//     console.log("Not Allowed");
// }



// Q18. Take an integer N as input and check whether it ends with 3 or 7. If it ends with 3, print “ends with 3”, if it ends with 7, print “ends with 7”, otherwise print the number itself.
// Input:                 Output:
// N=12                  12
// N=137                ends with 7
// N=9343              ends with 3
// 
// let n=parseInt(prompt("Value of Number: "));
// if (n % 10==3){
//     console.log(n, " ends with 3");
// }
// else if(n % 10==7){
//     console.log(n, " ends with 7");
// }
// else {
//     console.log(n);
// }



// Q19.Write a program to take two numbers as input and print their difference if the first number is greater than the second number, otherwise print their sum.
// Input:                          Output:
// a=9,b=7                          2
// a=5,b=11                         16
// 

// let a =parseInt(prompt("Enter the value of a: "))
// let b =parseInt(prompt("Enter the value of b: "))
// if (a>b){
//     d=a-b
//     console.log("Difference between a and b is " +d);
// }
// else {
//     s=a+b
//     console.log("Sum of a and b is " +s);
// }



// Q20. Write a program to obtain a number N and increment its value by 1 if the number is divisible by 4, otherwise, decrement its value by 1.
// Test cases:
// Input: 16
// Output: 17
// Input: 27
// Output: 26
// 
// let n=parseInt(prompt("Enter the value of N: "));
// if (n % 4==0){
//     i=n+1
//     console.log(i)
// }
// else{
//     d=n-1
//     console.log(d)
// }



// Q21. Write a program to obtain 2 numbers (A and B) and an arithmetic operator (C) and then design a calculator depending upon the operator entered by the user.
// Test cases:
// Input:
// A: 4
// B: 13
// C: '*'
// Output: 52

// let a=parseFloat(prompt("Enter the value of a: "));
// let b=parseFloat(prompt("Enter the value of b: "));
// let operator = prompt("Enter operator (+, -, *, /): ")
// if (operator == '+' ){
//         sum=a+b;
//         console.log(sum)
// }
// else if (operator == '-'){
//         difference=a-b;
//         console.log(difference)
// }
// else if (operator =='*'){
//         mul=a*b;
//         console.log(mul)
// }
// else if (operator =='/'){
//         remainder=a/b;
//         console.log(remainder)
// }
// else{
//         console.log("Invalid")
// }



// Q22. Write a program to input the length (L) and breadth (B) of a rectangle and output whether its area is greater or perimeter is greater or both are equal.
// Test cases:
// Input:
// Length: 10
// Breadth: 2
// Output: Perimeter is greater
// 
// L=parseFloat(prompt("Length: "));
// B=parseFloat(prompt("Breadth: "));
// let P=2*(L+B);
// let A=L*B;
// if (A>P){
//         console.log("Area is greater than Perimeter")
// }
// else if (A==P){
//         console.log("Area and Perimeter is equal")
// }
// else{
//         console.log("Perimeter is greater");
// }



// Q23. Write a program to input the month number and print the number of days in that month. Take an input from the user between 1 and 12 inclusive. (Output 28 days for the month of February)
// Test cases:
// Input: 4
// Output: 30
// Input: 2
// Output: 28
// 
// let a=parseInt(prompt("Month Number: "));
// if (a==1 || a==3 || a==5 || a==7 || a==8 || a==10 || a==12){
//         console.log("31 days");
// }
// else if (a==2){
//         console.log("28 days");
// }
// else if(a==1 || a==4 || a==6 || a==9 || a==11){
//         console.log("30 days");
// }
// else {
//         console.log("Invalid month number")
// }


// Q24. Write a program to input a number and output whether a number is negative, positive or zero.
// Test cases:
// Input: 6
// Output: Positive
// Input: 0
// Output: Zero
// 
// x=parseFloat(prompt("Enter the number: "))
// if (x>0){
//         console.log(x, "Positive");
// }
// else if (x==0){
//         console.log(x, "Zero");
// }
// else {
//         console.log(x, "Negative");
// }



// Q25. Input any city from the user and display the monument of that city.
//                   City                                 Monument
//                   Delhi                               Red Fort
//                   Agra                                Taj Mahal
//                   Jaipur                              Jal Mahal
// For any other city as an input, print ""No monument in the database for this city."".
// Test cases:
// Input: Delhi
// Output: Red Fort
// Input: Mumbai
// Output: No monument in the database for this city.
// 
// c=prompt("City: ");
// if (c=="Delhi"){
//         console.log("Monument: Red Fort");
// }
// else if (c=="Agra"){
//         console.log("Monument: Taj Mahal");
// }
// else if(c=="Jaipur"){
//         console.log("Monument: Jal Mahal");
// }
// else{
//         console.log("No monument for this city")
// }


// Q26.Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer out of 100. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage <   40% : Grade F
// Test cases:
// Input:  78, 54, 85, 75, 88
// Output: Grade C
// Explanation:
// Percentage of marks obtained by this user is 76 %. Hence, the grade is C.
// 
// P=parseFloat(prompt("Physics: "))
// C=parseFloat(prompt("Chemistry: "))
// B=parseFloat(prompt("Biology: "))
// M=parseFloat(prompt("Maths: "))
// CS=parseFloat(prompt("Coumputer Science: "))
// Percentage=[(P+C+B+M+CS)/500]*100
// if (Percentage>=90){
//         console.log("Grade A");
// }
// else if (Percentage>=80){
//         console.log("Grade B");
// }
// else if (Percentage>=70){
//         console.log("Grade C")
// }
// else if (Percentage>=60){
//         console.log("Grade D");
// }
// else if (Percentage>=40){
//         console.log("Grade E");
// }
// else {
//         console.log("Grade F");
// }



// Q27.Write a program to input basic salary of an employee and calculate its Gross salary according to following: (Gross salary is the sum of basic salary, HRA, and DRA)
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// Test cases:
// Input: 17000
// Output: 36550
// Explanation:
// Since the basic sala(ry lies in the bracket 10000 <= basic salary <= 20000, the HRA is equal to 25% of the salary = 4250, and the DRA is equal to 90% of the basic salary = 15300. Hence the total salary is 17000+15300+4250 = 36550"
// 
// BS=parseFloat(prompt("Basic Salary: "));
// if (BS<=1000){
//         let GS1=(20/100)*BS+(80/100*BS)+BS
//         console.log("GROSS SALARY: " ,+GS1)
// }
// else if (BS<=2000){
//         let GS2=(25/100)*BS+(90/100*BS)+BS
//         console.log("GROSS SALARY: " ,+GS2)
// }
// else if (BS>2000){
//         let GS3=(25/100)*BS+(90/100*BS)+BS
//         console.log("GROSS SALARY: " ,+GS3)
// }
// else{
//         console.log("INVALID")
// }


// Q28.Roller Coasters require children to have a minimum height of 5 feet. Any child below this height is generally not allowed on them. Write a program to accept a child’s height in inches and display if he or she will be allowed to ride or not.
// Test cases:
// Input: 65
// Output: Yes
// Explanation:
// 65 inches in feet is equal to 5 ft 5 inches. Since the height is greater than 5 ft, the user is allowed on the roller coater"
// 
// let r=parseFloat(prompt("Roll no.: "));
// if (r>0){
//         if (r%5==0){
//                 console.log("Group Leader");
//         }
//         else {
//                 console.log("NOT a group leader");
//         }
// }
// else {
//         console.log("Invalid Roll no.");
// }

// let h=parseFloat(prompt("Height: "));
// if (h>=60){
//         console.log("YES, Allowed to ride")
// }
// else {
//         console.log("NO, not allowed to ride")
// }



// Q29.Write a program to accept the cost price of a bike and display the road tax to be paid according to the following criteria : 
//         Cost price (in Rs)                      Tax
//         > 100000                                15 %
//         > 50000 and <= 100000                   10%
//         <= 50000                                 5%
// Test cases:
// Input: 16000
// Output:2400
// Explanation:
// Since the price of the bike fallws in the bracket > 10000, the road tax is equal to 15% of the price = 2400
// 
// cp=parseFloat(prompt("Cost Price: "))
// if (cp>100000){
//         let T=cp*(0.15);
//         console.log("TAX: ",+T)
// }
// else if(cp>50000 && cp<=100000){
//         let P=cp*(0.10);
//         console.log("TAX: " ,+P)
// }
// else if(cp<=50000){
//         let X=cp*(0.05);
//         console.log("TAX: ",+X)
// }
// else {
//         console.log("Invalid data")
// }


// Q30.Write a program to find a maximum between three numbers. (Use minimum number of comparisons without using logical operators - and, or)
// Test cases:
// Input: 5     16      3
// Output: 16
// 
// let a = parseInt(prompt("Enter the value of a: "));
// let b = parseInt(prompt("Enter the value of b: "));
// let c = parseInt(prompt("Enter the value of c: "));
// if (a>b){
//         console.log(a, " is maximum")
// }
// else if (b>c){
//         console.log(b, " is maximum")
// }
// else {
//         console.log(c, " is maximum")
// }


// Q31.Input a date in with day, month and year in different lines and output if it is valid. If its valid, print valid, else print invalid.
// (Hint: The year in the date must be greater than zero, the months must lie between 1 and 12, and the days must lie between 1 and 31, depending on the month number. If the year is a leap year February will have 29 days as opposed to 28 in non leap years)
// Test cases:
// Input:26        4       2023
// Output:         Valid
// Input:  29      2       2023
// Output:        Invalid

// let day = parseInt(prompt("Enter the day: "));
// let month = parseInt(prompt("Enter the month: "));
// let year = parseInt(prompt("Enter the year: "));
// if (year>0 && month>=1 && month<=12){
//         if (month==2){
//                 if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//                         vd=day>=1 && day<=29;
//                 }else{
//                         vd=day>=1 && day<=28;
//                 }
//         }                
//         else if (month==4 || month==6|| month==9 || month==11){
//                 vd=day>=1 && day<=30;
//         }
//         else{
//                 vd=day>=1 && day<=31;
//         }
// }
// if (vd){
//         console.log("VALID")
// }else{
//         console.log("INVALID")
// }


// Q32. Write a program to input electricity unit charges and calculate the total electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill.
// Test cases:
// Input number of units: 200
// Output: 192
// Explanation: 
// Cost for first 50 units = 25, cost for next 100 units = 75, cost for remaining 50 units = 50 * 1.2 = 60. Total cost = 25+75+60 = 160. Additional surcharge of 20% = 32. Hence total cost of 200 units = 160 + 32 = 192"
// 
// let u=parseFloat(prompt("Enter the unit: "))
// let b;
// if (u<=50){
//         b=u*0.50
// }
// else if (u<=150){
//         b=25+(u-50)*0.75
// }
// else if (u<=250){
//         b=25+75+(u-150)*1.20
// }
// else{
//         b=100+120+(u-250*1.50)
// }
// total=b+(b*20/100);
// console.log("Total bill: " ,+total)


// Q33. Write a program to calculate the electricity bill (Accept the number of units from the user) according to the following criteria:                                                                           Unit                                                 Price  
// First 100 units                                         no charge
// Next 100 units                                         Rs 5 per unit
// After 200 units                                        Rs 10 per unit
// Test cases:
// Input: 350
// Output: 2000
// Explanation:
// Cost of first 100 uints = 0
// Cost of next 100 units = 5*100 = 500
// Cost of remaining 150 units = 10*150 = 1500
// Hence, total cost = 0 + 500 + 1500 = 2000
// 
// let u=parseFloat(prompt("Enter the unit: "))
// let b;
// if (u<=100){
//         b=0;
// } 
// else if (u<=200){
//         b=(u-100)*5;
// }
// else{
//         b=(u-200)*10+100*5;
// }
// console.log("Total bill: ", +b)


// Q33.Accept the age, gender (‘M’,   ‘F’), and the number of days and display the wages accordingly.
// If the age does not fall in any range then display the following message: “Enter appropriate age.
                // Age:                 Gender                        Wage/day
//      >=18 and <30                       M                              700    
//                                         F                               750
//        >=30 and <=40                    M                              800
//                                         F                               850                                                                                                                          
// Test cases:
// Input: 25
// F
// 20
// Output: 15000
// Explanation:
// Age 25 lies in the bracket 18 <= 25< 30. And the gender is female, hence the rate of work of Rs. 750 / day. So total wage is 750 * 20 = Rs. 15000"
// 
// let age = parseFloat(prompt("Age: "))
// let g = prompt("Gender: ")
// let w = parseFloat(prompt("Wages: "))
// let wage = 0;
// if (age>=18 && age<30){
//         if (g=="M"){
//                 wage=700*w;
//         }
//         else{
//                 wage=750*w;
//         }
// }
// if (age>=30 && age<=40){
//         if (g=="M"){
//                 wage=800*w;
//         }
//         else{
//                 wage=850*w;
//         }
// }
// console.log("Total Wage: " ,+wage);


// Q34.Accept the number of days from the user and calculate the charge for the library according to the following:
// First five days:                 Rs 2/day.
// Next 5 days:                    Rs 3/day.
// Next 5  days:                   Rs 4/day
// After 15 days:                 Rs 5/day
// Test cases:
// Input: 15
// Output: 45
// Explanation:
// Charge for the first 2 days = 5*2 = 10
// Charge for the next 5 days = 5*3 = 15
// Charge for the last 5 days = 5*4 = 20
// Total charge = 10+15+20 = 45
// 
// let d = parseInt(prompt("Day: "));
// let c;
// if (d<=5){
//         c=d*2;
// }
// else if (d<=10){
//         c=5*2+(d-5)*3;
// }
// else if (d<=15){
//         c=5*2+5*3+(d-10)*4;
// }
// else{
//         c=5*2+5*3+5*4+(d-15)*5;
// }
// console.log("Total Charge: ", c);



// Q34.Input four sides of a quadrilateral ABCD in the order AB, BC, CD, DA and an internal angle I and write a program to categorize the shape of a quadrilateral as either a square, rhombus, rectangle, parallelogram, or irregular quadrilateral.
// Test cases:
// Input: 
// 10        8       10      8       72
// Output: Parallelogram
// Input: 
// 5       5          5       5       90
// Output: Square
// Input: 
// 10      10         8       8       90
// Output: Irregular quadrilateral.
//
// a=parseFloat(prompt("Side 1: "));
// b=parseFloat(prompt("Side 2: "));
// c=parseFloat(prompt("Side 3: "));
// d=parseFloat(prompt("Side 4: "));
// I=parseFloat(prompt("Enter the value of internal angle: "));
// if (a===b && b===c && c===d ){
//         if(I==90){
//                 console.log("Square")
//         }
//         else{
//                 console.log ("Rhombus")
//         }
// }
// else if (a==c && b==d ){
//         if (I==90){
//                 console.log("Rectangle");
//         }
//         else{
//                 console.log("Parallelogram")
//         }
// }
// else{
//         console.log("Irregular");
// }


// Q35. Write a program to input two numbers and sum them. However, if the sum is between 15 to 20 it will return 20.
// Test cases:
// Input: 15    23
// Output: 38
// Input: 11    7
// Output: 20
// 
// a=parseFloat(prompt("Number 1: "));
// b=parseFloat(prompt("Number 2: "));
// let sum=a+b;
// if( sum>=15 && sum<=20){
//         console.log("Return to", +20)
// } else{
//         console.log("Sum:", +sum)
// }


// Q36.A certain steel is graded according to the following conditions:
// (i) Rockwell-hardness > 50
// (ii) Carbon content > 0.7
// (iii) Tensile strength > 5600 kg/cm2
// The steel is graded as follows:
// a. Grade 10, if all the conditions are satisfied
// b. Grade 9, if conditions (i) and (ii) are satisfied
// c. Grade 8, if conditions (ii) and (iii) are satisfied
// d. Grade 7, if conditions (i) and (iii) are satisfied
// e. Grade 0, otherwise
// Take three inputs from the user in the order of Rockwell-hardness, Carbon content, Tensile strength and output the grade of the steel.
// Test cases:
// Input:
// 54      0.2
// 8000
// Output: 8
// 
// rh=parseFloat(prompt("Rock-Hardness: "))
// cc=parseFloat(prompt("Carbon-Content: "))
// ts=parseFloat(prompt("Tensile stength: "))
// if(rh>50 && cc>0.7 && ts>5600){
//         console.log("Grade 10")
// }
// else if(rh>50 && cc>0.7 ){
//         console.log("Grade 9")
// }
// else if (cc>0.7 && ts>5600){
//         console.log("Grade 8")
// }
// else if (rh>50 && ts>5600){
//         console.log("Grade 7")
// }
// else{
//         console.log("Grade 0")
// }



// Q37. Input an year from the user and output whether a given year is a leap year.
// (Hint. A year is said to be a leap year if it is either divisible by 4 but not by 100 or divisible by 400.)
// Test cases:
// Input:
// 1900
// Output: 
// No
// Input: 
// 2000
// Output: 
// Yes
// let year=parseInt(prompt("Year: "))
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//         console.log("YES")
// }
// else{
//         console.log("NO")
// }


// Q38. Input three integers representing the angles of a triangle in degrees to determine whether they form a valid set of angles of a triangle. If it is not a valid set, then generate a message and terminate the process. If it is a valid set, then the process determines whether it is equiangular (all three angles are the same). It also determines if the triangle is right-angled (has one angle with 90 degrees), obtuse-angled (one angle above 90), or acute-angled (all three angles are below 90 degrees). Finally, it shows the conclusion about the triangle.
// Test cases:
// Input:  50      90      40
// Output:
// Valid triangle
// Scalene triangle
// Right triangle
// Input:  80      20      80
// Output:
// Valid triangle
// Isosceles triangle
// Acute triangle

// a=parseFloat(prompt("Angle 1: "));
// b=parseFloat(prompt("Angle 2: "));
// c=parseFloat(prompt("Angle 3: "));
// let as=a+b+c;
// if (a>0 && b>0 && c>0 && as==180){
//         console.log("Valid Triangle");

//         if(a==b && a==c){
//                 console.log("Equiangular")
//         }
//         else if (a==90 || b==90 || c==90){
//                 console.log("Right angled Triangle")
//         }
//         else if (a<90 || b<90 || c<90){
//                 console.log("Acute angles Triangle")
//         }
//         else {
//                 console.log("Obtuse angles Triangle")
//         }
//         if (a==b || b==c || a==c){
//                 if(a!==b || b!==c || a!==c){
//                         console.log("Isoceles Triangle");
//                 }
//         }else{
//                 console.log("Scalene Triangle")
//         }

// }
// else {
//         console.log("INVALID")
// }



// Q39.Write a program to check if the given number is divisible by 5, 11, both or none.
// If it is divisible by 5 then print 5
// If it is divisible by 11 then print 11
// If it is divisible by 5 and 11 then print “Both”
// If it is not divisible by 5 and 11 then print “None”
// Test cases:
// Input:  55
// Output: Both
// Input:  15
// Output: 5
// 
// let x=parseFloat(prompt("Enter the value of the: "))
// if (x % 5==0 && x % 11==0){
//         console.log("Both");
// }
// else if(x % 5==0){
//         console.log("5");
// }
// else if(x % 11==0){
//         console.log("11");
// }
// else {
//         console.log("None");
// }


// Q40.Input 3 numbers from the user and output the second max of 3 numbers.
// Test cases:
// Input:  5       4       6
// Output: 5
// 
// let a=parseFloat(prompt("Enter the value of a: "));
// let b=parseFloat(prompt("Enter the value of b: "));
// let c=parseFloat(prompt("Enter the value of c: "));
// let max 
// let sm
// let sm1
// let max1
// if (a>b){
//         max=a
//         sm=b
// }
// else {
//         max=b
//         sm=a
// }
// if (max>c){
//         max1=max
//         sm1=c
// }
// else{
//         max1=c
//         sm1=max    
// }
// if (sm>sm1){
//         console.log(sm)
// }
// else{
//         console.log(sm1)
// }


// Q41. Input 4 numbers from the user and output the second max of 4 numbers.
// Test cases:
// Input:  5       4       6       7
// Output: 6
// 
// let a=parseFloat(prompt("Enter the value of a: "));
// let b=parseFloat(prompt("Enter the value of b: "));
// let c=parseFloat(prompt("Enter the value of c: "));
// let d=parseFloat(prompt("Enter the value of d: "));
// let max1
// let max2
// let sm2
// let sm1
// if (a>b){
//         max1=a
//         sm1=b
// }
// else {
//         max1=b
//         sm1=a
// }
// if (c>d){
//         max2= c
//         sm2=d
// }
// else {
//         max2=d
//         sm2=c
// }
// if (max1>max2){
//         if (sm1<max2)
//         {
//                 console.log(max2)
//         }
//         else{
//                 console.log(sm1)
//         }
// }
// else {
//         if (sm2<max1){
//                 console.log(max1)
//         }
//         else{
//                 console.log(sm2)
//         }
// }



// Q42. Input 4 numbers from the user and output the third max of 4 numbers.
// Test cases:
// Input:  5       4       6       7
// Output: 5

// let a=parseFloat(prompt("Enter the value of a: "));
// let b=parseFloat(prompt("Enter the value of b: "));
// let c=parseFloat(prompt("Enter the value of c: "));
// let d=parseFloat(prompt("Enter the value of d: "));
// let max1
// let max2
// let sm2
// let sm1
// if (a<b){
//         max1=a
//         sm1=b
// }
// else{
//         max1=b
//         sm1=a
// }
// if(c<d){
//         max2=c
//         sm2=d
// }
// else {
//         max2=d
//         sm2=c
// }
// if (max1<max2){
//         if(max2<sm1){
//                 console.log(max2)
//         }
//         else{
//                 console.log(sm1)
//         }
// }
// else{
//         if (max1<sm2){
//                 console.log(max1)
//         }
//         else{
//                 console.log(sm2)
//         }
// }



// Q43. Input 5 numbers and output the maximum occurring number out of the given 5 numbers. 
// Test cases:
// Input:  3       4       3       5       1
// Output: 3
// let a=parseFloat(prompt("Enter the value of a: "));
// let b=parseFloat(prompt("Enter the value of b: "));
// let c=parseFloat(prompt("Enter the value of c: "));
// let d=parseFloat(prompt("Enter the value of d: "));
// let e=parseFloat(prompt("Enter the value of d: "));



