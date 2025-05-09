/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    //code block
    return a + b;
}
let sum =  addTwoNumbers(3, 5);
console.log(sum)

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => (a + b);
let sum2 = addTwoNumbers2(4, 6);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("hello there");

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines