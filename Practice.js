const prompt = require('prompt-sync')();
//7/16/2026
// Problem 1
/*
const prompt = require('prompt-sync')();

let askage = prompt("Please enter your age: ");
askage = Number.parseInt(askage);

if (askage > 10 && askage < 20) {
    console.log("Yes, provided is between 10 & 20!");
} else {
    console.log("No, provided is not between 10 & 20!");
}
 */
//Problem 2
/*
let askage = prompt("Please enter your age: ");
askage = Number.parseInt(askage);
switch(askage){
    case 11:
        case 12:
            case 13:
                case 14:
                    case 15:
                        case 16:
                            case 17:
                                case 18:
                                    case 19:
                                        console.log("Yes, your age is between 10 & 20!")
                                        break
    default:(console.log("No, your age is not between 10 & 20!"))
}
*/

//Problem 3
/*
let num = prompt("Enter a number of your choice: ");
num= Number.parseInt(num);
if (num%2 == 0 && num%3==0)
    console.log("Yes, the entered number is divisible by 2 & 3!");
else(console.log("No, the entered number is not divisible by 2 & 3!"));
*/

//Problem 4
/*
let num = prompt("Enter a number of your choice: ");
num= Number.parseInt(num);
if (num%2 == 0 || num%3==0)
    console.log("Yes, the entered number is divisible by either 2 or 3!");
else(console.log("No, the entered number is not divisible by 2 or 3!"));
*/

//Problem 5
/*
let age = prompt("Enter your age: ");
age= Number.parseInt(age);
console.log("You can",(age<18)?"not drive!":" definitely drive!");
*/

//Problem  6
// for loop

/*
let x = prompt("Enter value of x: ");
let product=1;
for (let i = 1; i<=x ; i++ )
{
product = product * i
}
console.log("The product of first " + x + " numbers is : " + product);
*/

//Problem 7
// for in loop
/*
let list = {apples:2, bananas:4, oranges: 5};
for (let i in list)
{
    console.log("There are " + list[i]+ " " + i + " in the refrigerator hehehe!")
}
console.log("Enjoy eating all of it :)")
*/

//Problem 8 
//for of loop
/*
let a = prompt("Please enter any string: ")
let b = 1;
for (let i of a)
{
    console.log("The " + b + " letter of "+ a + " is " + i)
    b=b+1;
}
*/

//Problem 9
//while loop
/*
let a = prompt("Give a num to run while loop: ");
a= Number.parseInt(a);
let n = 1;
while(n>a)
{
    console.log(n);
    n=n+1;
}
*/

//Problem 10
// do while loop
/*
let a = prompt("Give a num to run a do while loop: ");
a= Number.parseInt(a);
let n = 10;
do
{
    console.log(n);
    n=n-1;
}while(n>a)
*/

// Problem 11
// Proagram to print marks of a student using for loop
/*
let obj={harry:98,rohan:70, aakash:7}
for (let i=0;i<Object.keys(obj).length;i++)
{
    console.log("The marks of " + Object.keys(obj)[i] + " are : " + obj[Object.keys(obj)[i]]);
}
*/

// Problem 12
// Proagram to print marks of a student using for in loop
/*
let obj={harry:98,rohan:70, aakash:7}
for (let i in obj)
{
    console.log("The marks of " + i + " is : " + obj[i]);
}
*/

//Problem 13
// Program to print try again until use enters right number
/*
let ask= prompt("Enter a number: ");
ask=Number.parseInt(ask);
while(ask!=8)
{
    console.log("You have entered a wrong number :/ ")
    console.log("8 is the right number hehehe!");
    ask= prompt("Please try again: ");
    ask=Number.parseInt(ask);
}
console.log("Cheating is done successfully!");
*/

