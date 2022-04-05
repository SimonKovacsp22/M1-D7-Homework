// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
// If we asume only two genders //
let isMale = false

let gender 
(isMale === true) ?gender ="male" :gender= "female"
console.log("Value of isMale is:",isMale)
console.log("\nThen value of gender is:",gender)

/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/



/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/

let Concat
Concat="FirstString"+"SecondString"
console.log("---------Task n3------------\n",Concat)

/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let A=5
let B= 17
let C= 8
let temp= null
console.log("---------Task n4---------\n unordered numbers go",A," ",B," ",C)

if(C>B){
temp =B
B=C
C=temp
}
if(B>A){
    temp=A
    A=B
    B=temp
}
if(B<C){
    temp=B
    B=C
    C=temp
}
console.log("\n ordered numbers go",A," ",B," ",C)

/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/

let intn1= 15
let intn2= 81
console.log("\n---------Task n5---------\ninteger1 is ",intn1,"\nInteger 2 is",intn2)

let average= (intn1 + intn2)/2
console.log("\nThe average is",average)

/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

console.log("\n-----------Task n7---------\n")
let value=-17336
let isInteger
((value >= -2147483648 )&& (value <=2147483648 ))?  isInteger=true: isInteger=false
console.log("The value is:",(isInteger===true)?"an integer": "not an integer")

/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
