// Q1.Take an array from the user as input and reverse it before printing it to the user. 
const prompt = require ("prompt-sync")();
// let n= parseInt(prompt("Enter the value of n: "));
// let arr=[];
// for (let i=0; i<n; i++){
//     arr.push(prompt("Enter elements: "));
// }
// let reversearr=[];
// for (let i=n-1; i>=0; i--){
//     reversearr.push(arr[i]);
// }
// console.log("Reverse the array: " ,reversearr);


// Q. Take an array from the user as input and print the mean, median, and mode of the array.


// Q.Take an array of size N and a number K from the user as input, and print the elements of an array in a rotated manner with a gap of K. 
// Eg, let us say the array is - 3, 6, 7, 5, 10. And the value of k = 3. 
// The output should be - 7, 3, 10, 6, 5. If k = 2, the output should be - 6, 5, 3, 10, 7
// let n= parseInt(prompt("Enter the value of n: "));
// let arr=[];
// for (let i=0; i<n; i++){
//     arr.push(prompt('Elements: '));
// }
// let k= parseInt(prompt("kth times: "));

// for(let i=0;i<n; i++){ 
//     let temp=arr[i];
//     let j=i;
//     while(j<n-k){
//         arr[j]=arr[j+k];
//         j+=k;
//     }
//     arr[j]=temp;
// }
// console.log("Rotated array with gap of" , k, "is; ", arr);



// Q4.Take an array from the user as input and find duplicate elements in an array.
// let n=parseInt(prompt("Enter the value of n: "));
// let arr=[]
// for (let i=0; i<n; i++){
//     arr.push(prompt("Elements: "))
// }
// let temp;
// for (let i=0; i<n; i++){
//     for (let j=i+1; j<n; j++){
//         if (arr[i] > arr[j]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }         
// }
// let duplicates=[];
// for (let i=0; i<n; i++){
//     if (i>0 && arr[i]==arr[i-1]){
//         duplicates.push(arr[i]);
//     }
// }
// duplicates=[...new Set(duplicates)];
// console.log("Duplicate array: " ,duplicates);


// Q. Take two sorted arrays from the user as input and Merge them into a single sorted array.
// let n=parseInt(prompt("Enter the value of n: "));
// let m=parseInt(prompt("Enter the value of m: "));
// let arr1=[]
// let arr2=[]

// for (let i=0; i<n; i++){
//     arr1.push(parseInt(prompt(`Enter element ${i+1} for the array: `)));
// }
// for (let i=0; i<m; i++){
//     arr2.push(parseInt(prompt(`Enter element ${i+1} for the array: `)));
// }
// let arr3=[];
// let i=0 ,j=0, k=0;

// while(i<n && j<m){ 
//     if (arr1[i]<arr2[j]){
//         arr3[k]=arr1[i];
//         i++;
//     }
//     else{
//         arr3[k]=arr2[j];
//         j++;
//     }
//     k++;
// }
// while( i<n){
//     arr3[k]=arr1[i];
//     i++;
//     k++;
// } 
// while (j<m){
//     arr3[k]=arr2[j];
//     j++;
//     k++;
// }
// console.log("Merge array: " ,+arr3);


// Given an unsorted array of size N that contains only non-negative integers, find a contiguous subarray that adds to a given number S. 
// In case of multiple subarrays, return the subarray which comes first on moving from left to right. Let us say the array is - 3, 6, 7, 5, 10. 
// And the value of S = 12. The output should be - 7, 5.
let n=parseInt(prompt("Enter the value of n: "));
let S=parseInt(prompt("Enter value: "))
let arr=[]; 
for (let i=0; i<n; i++){
    arr.push(parseInt(prompt(`Enter element ${i+1} for the array: `)));
}
let sum=0;
let i=0;
let j=0;
while(j<n){
    if (sum>S){
        sum=sum-arr[i];
        i++;
    }
    else if (sum==S){
        console.log[i,j];
    }
    j++;
}