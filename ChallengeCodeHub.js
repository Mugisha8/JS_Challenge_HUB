// const num1 = 2;
// const num2 = 3;

// const sum = num1 + num2;

// console.log("The sum of " + num1 + " and " + num2 + "is" , sum);



// // const readline = require('readline');

// // const add = readline.createInterface({  
// //     input:process.stdin,
// //     output:process.stdout
// // })

// // add.question('enter the firstquestion',(num1)=>{
// // add.question('enter the second number',(num2)=>{

// //     num1=parseInt(num1);
// //     num2=parseInt(num2);
    
// //     const sum = num1 + num2

// //     console.log(`the sum of ${num1} and ${num2} is ${sum}`);



// })

// })



// // const readline = require('readline')

// // const squareroot = readline.createInterface({

// //     input:process.stdin,
// //     output:process.stdout
// // })

// // squareroot.question("Enter a Number:",(num)=>{

// // num=parseInt(num)

// // root=Math.sqrt(num)

// // console.log(`the square root of a number${num} is ${root}`)



// })


// const readline = require('readline')

// const area = readline.createInterface({

//     input:process.stdin,
//     output:process.stdout
// })

// area.question("Enter the Base: ",(base)=>{
//     area.question("Enter the Height: ",(height)=>{
    
//     base=parseInt(base)
//     height=parseInt(height)
    
//     const areatriangle = base*height /2

//     console.log(areatriangle)



// })
// })


// const readline = require('readline')

// const swap = readline.createInterface({

//     input:process.stdin,
//     output:process.stdout

// })


// swap.question("enter your first number to swap: ",(a)=>{
//     swap.question("enter your second number to swap",(b)=>{

  

//    [a,b] = [b,a]
// console.log(`The value after swapping is ${a} and another is ${b}`)

//     })
// })


// const readline = require('readline')

// const convert = readline.createInterface({
//     input : process.stdin,
//     output: process.stdout
// })

// convert.question("Enter Kilometers you've run: ",(distance)=>{

//    const factor=0.6235 

//    const miles= distance*factor

//    console.log(`The Total Miles you've run in KM is:  ${miles} `)

// })


// const readline = require('readline')

// const temp = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// temp.question("Enter temp in celcius:",(celcius)=>{

// const tempConvert=celcius*1.8 + 32

// console.log(tempConvert)

// })



// const arr=[1,2,45,6]

// const arr1=arr.push(2,3)

// console.log(arr.length)




// const n=10

// for(let i=1;i<=n;i++){
//     console.log("In love with javascript")
// }

// let total = 0;

// const n = 500

// for(let i=1;i<=n;i++){

//     total += i;
// }
// console.log(total)


//--------- endless loop 


// const readline = require('readline');

// const positive = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// positive.question("Enter a number:", (num) => {
//     let sum = 0;

//     while (parseInt(num) >= 0) {
//         sum += parseInt(num);

//         positive.question("Enter a number:", (newNum) => {
//             num = newNum;
//         });
//     }

//     console.log(`The sum of all numbers is ${sum}`);
//     positive.close();
// });


// let i=1;
// let sum=0;

// do{
//     sum += i
    
// i++
// }
// while(i<=10)
// console.log(sum)


// // program to print the value of i
// for (let i = 1; i <= 5; i++) {
//     // break condition     
//     if (i == 3) {
//         break;
//     }
//     console.log(i);
// }



// // nested for loops

// // first loop
// for (let i = 1; i <= 3; i++) {

//     // second loop
//     for (let j = 1; j <= 3; j++) {
//         if (i == 2) {
//           break;
//         }
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// // program to print the value of i
// for (let i = 1; i <= 5; i++) {

//     // condition to continue    
//     if (i == 3) {
//         continue;
//     }

//     console.log(i);
// }

// // nested for loops

// // first loop
// for (let i = 1; i <= 3; i++) {

//     // second loop
//     for (let j = 1; j <= 3; j++) {
//         if (j == 2) {
//           continue;
//         }
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// program to calculate positive numbers only
// if the user enters a negative number, that number is skipped from calculation

// negative number -> loop terminate
// non-numeric character -> skip iteration

// let sum = 0;
// let number = 0;

// while (number >= 0) {

//     // add all positive numbers
//     sum += number;

//     // take input from the user
//     number = parseInt(prompt('Enter a number: '));

//     // continue condition
//     if (isNaN(number)) {
//         console.log('You entered a string.');
//         number = 0; // the value of number is made 0 again
//         continue;
//     }

// }

// // display the sum
// console.log(`The sum is ${sum}.`);


// // program using switch statement
// let a = 2;

// switch (a) {

//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;
//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is ${a}`);


// multiple case switch program
// let fruit = 'apple';
// switch(fruit) {
//     case 'apple':
//     case 'mango':
//     case 'pineapple':
//         console.log(`${fruit} is a fruit.`);
//         break;
//     default:
//         console.log(`${fruit} is not a fruit.`);
//         break;
// }

// declaring a function named greet()
// program to print a text
// declaring a function
// function greet() {
//     console.log("Hello there!");
// }

// // calling the function
// greet();


// program to add two numbers using a function
// declaring a function

// function add(a, b) {
//     return a + b;
// }

// // calling functions
// let sum = add(3,4);


// console.log(sum)


// let appX = function(num)
// {
// return num * num
// }

// console.log(appX(5))

// program to print a text 
// let a = "hello";

// function greet () {
//     console.log(a);
// }

// greet(); // hello


// program showing local scope of a variable
// let a = "hello";

// function greet() {
//     let b = "World"
//     console.log(a + b);
// }

// greet();


// program showing block-scoped concept
// global variable
// let a = 'Hello';

// function greet() {

//     // local variable
//     let b = 'World';

//     console.log(a + ' ' + b);

//     if (b == 'World') {

//         // block-scoped variable
//         let c = 'hello';

//         console.log(a + ' ' + b + ' ' + c);
//     }

//     // variable c cannot be accessed here

// }

// greet();



// // program to display value
// let a = 4


// function greet(){

// b="Say Hi to Mr Bricks"
// }

// console.log(b)// undefined


// greet()

// function greet(){
//     console.log('Hello world')
// }


// function countdown(number){
//     console.log(number)

//     const newnumber = number-1

//    if(newnumber>0){
//     countdown(newnumber)
//    }
// }

// countdown(4)

// program to find the factorial of a number
// function factorial(x) {

//     // if number is 0
//     if (x === 0) {
//         return 1;
//     }

//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

// const num = 3;

// // calling factorial() if num is non-negative
// if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }




// object creation
// const person = { 
//     name: 'John',
//     age: 20
// };
// console.log(typeof person); // object

// console.log(person.name)

// const person = { 
//     name: 'John', 
//     age: 20, 
// };

// // accessing property
// console.log(person["name"]); // John

// const student = { 
//     name: 'John', 
//     age: 20,
//     marks: {
//         science: 70,
//         math: 75
//     }
// }

// // accessing property of student object
// console.log(student.marks); // {science: 70, math: 75}

// // accessing property of marks object
// console.log(student.marks.science); // 70



// accessing method and property
// const person = {
//     name: 'John',
//     greet: function() { console.log('hello'); }
// };

// // accessing property
// person.name; // John

// // accessing method
// person.greet(); // hello


// let number = '23.32';
// let result = parseInt(number);

// console.log(result); // 23