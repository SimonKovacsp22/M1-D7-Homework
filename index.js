/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

// 1.Number represtents numbers positive and negative, decimal or whole in certain range then also infinity and negative infinity
// 2.String represents character strings or sennteces formed by characters including signs like / or < numbers too 3,4,5 anything 
// you find on your keyboard.
// 3.Boolean can only represent two values 1 for true and 0 for false. On these we can perform logical operations.
// 4.Undefined represents content of variable that was declared but not defined. We created it but didn't assign any value.
// 5.Null represents empty space. The variable was created/declared filled by some other data type and emptied out or simply assigned a null
// by a coder.

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* Variable is a vessel/container that can gain,change and release content of data types. */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

console.log(12+20)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x =12
console.log("\n",x)

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let Name="John Doe"
console.log("\n",Name)

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let substract =12-x
console.log("\n12-x equals:",substract)


/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/
console.log("\n-------Task n7-----------")
let name1="john"
let name2="John"
name1 === name2
name1 === name2.toLowerCase()
console.log(name1)
console.log(name2)
// compare name1 and name2
console.log("-----------Compare name1 and name2------------\n")
console.log(name1===name2)

console.log("-----------Compare name1 and name2 in same case----------\n")

console.log(name1===name2.toLowerCase ())



/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

console.log("\n\n--------Print a literal value of X ---------\n")
let X = 0
console.log("X =",X)
if(X===5){
    console.log("five")
}
else if(X===1)
{
    console.log("one")
}
else if(X===2)
{
    console.log("two")
}
else if(X===3)
{
    console.log("three")
}
else if(X===4)
{
    console.log("four")
}
else if(X===7)
{
    console.log("seven")
}
else if(X===6)
{
    console.log("six")
}
else if(X===8)
{
    console.log("eight")
}
else if(X===9)
{
    console.log("nine")
}
else if(X===0)
{
    console.log("zero")
}


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/
console.log("\n\n------------- Ternary------------")
let Condition = 14

let Result =(Condition> 25)? "is greater" : "is less than"

console.log("\n ",Condition,Result,"25")




/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
