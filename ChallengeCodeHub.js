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

// let student ={}

// student.age=23

// student.name=function(){
//     console.log("Meight")
// }

// student.name();

// const person = {
//     name: 'Meigth',
//     age: 21,

//     // accessing name property by using this.name
//     greet: function() { console.log('The name is' + ' ' + this.name); }
// };

// person.greet();

// function City (){
//     this.name="John",
//     this.age=23,
//     this.greet = function (){
//         console.log("hello" +' '+ this.name +', '+ "are you" +' '+ this.age+'?');
//     }
// }
// const vision = new City();
// vision.greet()

// function City(street, postcode) {
//   (this.name = street), (this.code = postcode);
// }

// const navigation = new City("Kimihurura", 23748);

// console.log("Am From"+" "+navigation.name + " " + navigation.code);

// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // creating objects
// let person1 = new Person();
// let person2 = new Person();

// // adding property to person1 object
// person1.gender = 'male';

// // adding method to person1 object
// person1.greet = function () {
//     console.log('hello');
// }

// person1.greet();   // hello

// // Error code
// // person2 doesn't have greet() method
// person2.greet();

// const student = {
//     firstname:"yves",

//     get information() {
// return this.firstname;
//     }
// }

// console.log(student.information)

// function Person(){
//     fname:"Keylah"
// }

// const person1 = new Person();

// Person.prototype.age = 20

// console.log("the age of the first person is:",person1.age)

// Person.prototype={age:60}

// const person2 = new Person();

// console.log("the age of the first person is:",person2.age)

//_________________ To Do app strt

// const inputText = document.getElementById("inputText");
// const AddTextButton = document.getElementById("addText");
// const TaskList = document.getElementById("TaskList");

// AddTextButton.addEventListener("click", () => {
//   const Tasktext = inputText.value.trim();
//   if (Tasktext) {
//     const TaskItem = document.createElement("li");

//     const span = document.createElement("span");
//     span.textContent = Tasktext;

//     const CheckBox = document.createElement("input");
//     CheckBox.type = "checkbox";

//     CheckBox.addEventListener("change", () => {
//       const span = TaskItem.querySelector("span");
//       span.classList.toggle("completed");
//     });

//     const removeButton = document.createElement("button");
//     removeButton.textContent = "Delete";

//     removeButton.addEventListener("click", () => {
//       TaskItem.parentNode.removeChild(TaskItem);
//     });

//     TaskList.appendChild(TaskItem);
//     TaskItem.appendChild(CheckBox);
//     TaskItem.appendChild(span);
//     TaskItem.appendChild(removeButton);

//     inputText.value = "";
//   }
// });

//_________________ To Do app end

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// console.log("The list of odd numbers is:");
// for (let m=1; m<=100;m+=2){

//   console.log(m);
// }

// let mult=7;
// for(let i=1;i<=12;i++){
// let result=mult*i;

// console.log(mult +"*"+ i +"="+result);

// }

// for (var i = 1;i<=10;i++){
//   printTable(i);
//   println("")
// }

// function printTable(n){
//   for(var i=1; i<=10;i++){
//     var row = n+"*"+i+"="+n*i;
//     println(row);
//   }
// }

// for (let m = 1; m <= 12; m++) {
//   console.log("multiplication table for"+m);
//   for (let i = 1; i <= 10; i++) {
//     let result = m * i;
//    console.log(`${m} * ${i} = ${result}`)
//   }
// }

// let sum=0;
// console.log("The sum of 10 natural  numbers is:")
// for(let i=1;i<=10;i++){

//  sum +=i;
//  if (i == 10) {
//   console.log("The sum of 10 natural numbers is:", sum);
// }

// }

// _____________________________________________/
// // Calculate 10!
// let result = 1;

// for (let i = 1; i <= 10; i++) {
//     result *= i;
// }

// console.log("10! =", result);

// console.log(1 === true)

// const student = {
//     name: 'Monica',
//     class: 7,
//     age: 12
// }

// // using for...in
// for ( let key in student ) {

//     // display the properties
//     console.log(`${key} => ${student[key]}`);
// }

// const string = 'code';

// // using for...in loop
// for (let i in string) {
//     console.log(string[i]);
// }

// define array
// const arr = [ 'hello', 1, 'JavaScript' ];

// // using for...in loop
// for (let x in arr) {
//     console.log(arr[x]);
// }

//strings example
// const name = 'Peter';
// const name1 = "Jack";
// const result = `The names are ${name} and ${name1}`;

// const x = Symbol('hey');
// console.log(x.description); // hey

// two symbols with the same description

// const value1 = Symbol('hello');
// const value2 = Symbol('hello');

// console.log(value1 === value2); // false

// const x = Symbol('hey');
// console.log(x.description); // hey

//

// let person = {
//     name: "Jack"
// };

// // using string as key
// person.id = 12;
// console.log(person.id); // 12

// // Another program overwrites value
// person.id = 'Another value';
// console.log(person.id); // Another value

//

// const numerator= 100, denominator = 'a';

// try {
//      console.log(numerator/denominator);
//      console.log(a);
// }
// catch(error) {
//     console.log('An error caught');
//     console.log('Error message: ' + error);
// }
// finally {
//      console.log('Finally will execute every time');
// }

// try {
//     setTimeout(function() {
//         // error in the code
//     }, 3000);
// } catch (e) {
//   console.log( "won't work" );
// }

// setTimeout(function() {
//     try {
//         // error in the code
//     } catch {
//         console.log( "error is caught" );
//     }
// }, 3000);

// const number = 40;
// try {
//     if(number > 50) {
//         console.log('Success');
//     }
//     else {

//         // user-defined throw statement
//         throw new Error('The number is low');
//     }

//     // if throw executes, the below code does not execute
//     console.log('hello');
// }
// catch(error) {
//     console.log('An error caught');
//     console.log('Error message: ' + error);
// }

// const number = 5;
// try {
//      // user-defined throw statement
//      throw new Error('This is the throw');

// }
// catch(error) {
//     console.log('An error caught');
//     if( number + 8 > 10) {

//         // statements to handle exceptions
//          console.log('Error message: ' + error);
//         console.log('Error resolved');
//     }
//     else {
//         // cannot handle the exception
//         // rethrow the exception
//         throw new Error('The value is low');
//     }
// }

// // // variable declared using let
// let name = 'Sara';
// {
//     // can be accessed only inside
//     let name = 'Peter';

//     console.log(name); // Peter
// }
// console.log(name); // Sara

// function expression
//

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }

//   const person1 = new Person('John');

//   console.log(person1.name); // John

// function sum(x, y = 5) {

//     // take sum
//     // the value of y is 5 if not passed
//     console.log(x + y);
// }

// sum(5); // 10
// sum(5, 15); // 20

// const first_name = "Jack";
// const last_name = "Sparrow";

// console.log('Hello ' + first_name + ' ' + last_name);

// // This can be achieved using template literal by:

// before you would do something like this
//

// const first_name = "Jack";
// const last_name = "Sparrow";

// console.log(`Hello ${first_name} ${last_name}`);

// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'
// }

// let { name, age, gender } = person;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female

// let greet = () => console.log('Hello');
// greet(); // Hello

// let age = 5;

// let welcome = (age < 18) ?
//   () => console.log('Baby') :
//   () => console.log('Adult');

// welcome(); // Baby

// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }

// let result1 = sum(5,7);
// console.log(result1); // 12

// function Person() {
//     this.name = 'Jack',
//     this.age = 25,
//     this.sayName = function () {

//         // this is accessible
//         console.log(this.age);

//         function innerFunc() {

//             // this refers to the global object
//             console.log(this.age);
//             console.log(this);
//         }

//         innerFunc();

//     }
// }

// let x = new Person();
// x.sayName();

// function Person() {
//     this.name = 'Jack',
//     this.age = 25,
//     this.sayName = function () {

//         console.log(this.age);
//         let innerFunc = () => {
//             console.log(this.age);
//         }

//         innerFunc();
//     }
// }

// const x = new Person();
// x.sayName();

// let x = () => {
//     console.log(arguments);
// }

// x(4,6,7);

//

//

// using a function in default value expression

// const sum = () => 15;

// const calculate = function( x, y = x * sum() ) {
//     return x + y;
// }

// const result = calculate(10);
// console.log(result);

// const name = 'Jack';
// console.log(`Hello ${name}`);

// const result = 4 + 5;

// // template literals used with expressions
// console.log(`The sum of 4 + 5 is ${result}`);

// console.log(`${result < 10 ? 'Too low': 'Very high'}`)

// function tagExample(strings) {
//     return strings;
// }

// // passing argument
// const result = tagExample('Hello Jack');

// console.log(result);

// const name = 'Jack';
// const greet = true;

// function tagExample(strings, nameValue) {
//     let str0 = strings[0]; // Hello
//     let str1 = strings[1]; // , How are you?

//     if(greet) {
//         return `${str0}${nameValue}${str1}`;
//     }
// }

// // creating tagged literal
// // passing argument name
// const result = tagExample`Hello ${name}, How are you?`;

// console.log(result);

// const arrValue = ['My', 'name', 'is', 'Jack'];

// console.log(arrValue);   // ["My", "name", "is", "Jack"]
// console.log(...arrValue); // My name is Jack

// console.log('My', 'name', 'is', 'Jack');

// let arr1=['My', 'name', 'is', 'Jack'];

// console.log(arr1);

// console.log(...arr1)

// const arr1 = ['one', 'two'];
// const arr2 = [...arr1, 'three', 'four', 'five'];

// console.log(arr2);

// let arr1 = [ 1, 2, 3];
// let arr2 = arr1;

// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3]

// // append an item to the array
// arr1.push(4);

// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3, 4]

// let arr1 = [ 1, 2, 3];

// // copy using spread syntax
// let arr2 = [...arr1];

// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3]

// // append an item to the array
// arr1.push(4);

// console.log(arr1); // [1, 2, 3, 4]
// console.log(...arr2); // [1, 2, 3]

// const obj1 = { x : 1, y : 2 };
// const obj2 = { z : 3 };

// // add members obj1 and obj2  to obj3
// const obj3 = {...obj1, ...obj2};

// console.log(obj3); // {x: 1, y: 2, z: 3}

// let func = function(...args) {
//     console.log(args);
// }

// func(3); // [3]
// func(4, 5, 6); // [4, 5, 6]

// function sum(x, y ,z) {
//     console.log(x + y + z);
// }

// const num1 = [1, 3, 4, 5];

// sum(...num1); // 8

// // create a set
// let map1 = new Map();

// // insert key-value pair
// map1.set('info', {name: 'Jack', age: 26});
// console.log(map1); // Map {"info" => {name: "Jack", age: 26}}

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // access the elements of a Map
// console.log(map1.get('info')); // {name: "Jack", age: "26"}

// const set1 = new Set([1, 2, 3]);

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // check if an element is in Set
// console.log(map1.has('info')); // true

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // removing a particular element
// map1.delete('address'); // false
// console.log(map1); // Map {"info" => {name: "Jack", age: "26"}}

// map1.delete('info'); // true
// console.log(map1); // Map {}

// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');

// // looping through Map
// for (let [key, value] of map1) {
//     console.log(key + '- ' + value);
// }

// using forEach method()
// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');

// // looping through Map
// map1.forEach(function(value, key) {
//   console.log(key + '- ' + value)
// })

//___________________ review

// // create Set
// const set1 = new Set(); // an empty set
// console.log(set1); // Set {}

// // Set with multiple types of value
// const set2 = new Set([1, 'hello', {count : true}]);
// console.log(set2); // Set {1, "hello", {count: true}}

// Set with duplicate values
// const set3 = new Set([1, 1, 2, 2]);
// console.log(set3); // Set {1, 2}

// const set1 = new Set([1, 2, 3]);

// // access the elements of a Set
// console.log(set1.values()); // Set Iterator [1, 2, 3]

// const set1 = new Set([1, 2, 3]);

// // access the elements of a Set
// console.log(set1.values()); // Set Iterator [1, 2, 3]

// const set1 = new Set([1, 2, 3]);

// // check if an element is in Set
// console.log(set1.has(1));

// assigning object attributes to variables
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'
// }

// let name = person.name;
// let age = person.age;
// let gender = person.gender;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female

// assigning object attributes to variables
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'
// }

// // destructuring assignment
// let { name, age, gender } = person;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female

// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // create an object
// const person1 = new Person();

// creating a class
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }

// creating a class
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }

//   // creating an object
//   const person1 = new Person('John');
//   const person2 = new Person('Jack');

//   console.log(person1.name); // John
//   console.log(person2.name); // Jack

// constructor function
// function Person (name) {

//     // assigning  parameter values to the calling object
//      this.name = name;

//      // defining method
//      this.greet = function () {
//          return ('Hello' + ' ' + this.name);
//      }
//  }

// class Person {
//     constructor(name) {
//     this.name = name;
//   }

//     // defining method
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// let person1 = new Person('John');

// // accessing property
// console.log(person1.name); // John

// // accessing method
// person1.greet(); // Hello John

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     // getter
//     get personName() {
//         return this.name;
//     }

//     // setter
//     set personName(x) {
//         this.name = x;
//     }
// }

// let person1 = new Person('Jack');
// console.log(person1.name); // Jack

// // changing the value of name property
// person1.personName = 'Sarah';
// console.log(person1.name); // Sarah

// for(let i=1;i<=100;i++){
//     console.log(i);
// }

// multiplication table from 1-10

// for (let i=1;i<=10;i++){

//     for (let p=1;p<=12;p++){

//         let result= i * p;
//         console.log(`${i} * ${p} = ${result}`);
//     }
// }

// function expandedForm(num) {
//   const numStr = num.toString();
//   const result = [];

//   for (let i = 0; i < numStr.length; i++) { // Fix: change 'lenght' to 'length'
//     const digit = parseInt(numStr[i]);

//     if (digit !== 0) {
//       const expandedDigit = digit * Math.pow(10, numStr.length - 1 - i);
//       result.push(expandedDigit);
//     }
//   }
//   return result.join('+');
// }

// const number = 42;
// const expandedFormResult = expandedForm(number);
// console.log(expandedFormResult);

// function expandedForm(num) {
//   const numStr = num.toString();
//   const result = [];

//   for (let i = 0; i < numStr.length; i++) {
//     const digit = parseInt(numStr[i]);

//     if (digit !== 0) {
//       const expandedDigit = digit * Math.pow(10, numStr.length - 1 - i);
//       result.push(expandedDigit);
//     }
//   }

//   return result.join(" + ");
// }

// const number = 42;
// const expandedFormResult = expandedForm(number);
// console.log(expandedFormResult);

// class Person {
//   constructor() {
//     a = 0;
//     this.name = a;
//   }
// }

// let p = new Person(); // ReferenceError: Can't find variable: a

// class Person {}
// console.log(typeof Person); // function

// // parent class
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// // inheriting parent class
// class Student extends Person {

// }

// let student1 = new Student('Jack');
// student1.greet();

// parent class
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// // inheriting parent class
// class Student extends Person {

//     constructor(name) {

//         console.log("Creating student class");

//         // call the super class constructor and pass in the name parameter
//         super(name);
//     }

// }

// let student1 = new Student('Jack');
// student1.greet();

// // parent class
// class Person {
//     constructor(name) {
//         this.name = name;
//         this.occupation = "unemployed";
//     }

//     greet() {
//         console.log(`Hello ${this.name}.`);
//     }

// }

// // inheriting parent class
// class Student extends Person {

//     constructor(name) {

//         // call the super class constructor and pass in the name parameter
//         super(name);

//         // Overriding an occupation property
//         this.occupation = 'Student';
//     }

//     // overriding Person's method
//     greet() {
//         console.log(`Hello student ${this.name}.`);
//         console.log('occupation: ' + this.occupation);
//     }
// }

// let p = new Student('Jack');
// p.greet();

// // parent class
// class Person {
//     constructor(name) {
//         this.name = name;
//         this.occupation = "unemployed";
//     }

//     greet() {
//         console.log(`Hello ${this.name}.`);
//     }

// }

// inheriting parent class
// class Student extends Person {

//     constructor(name) {

//         // call the super class constructor and pass in the name parameter
//         super(name);

//         // Overriding an occupation property
//         this.occupation = 'Student';
//     }

//     // overriding Person's method
//     greet() {
//         console.log(`Hello student ${this.name}.`);
//         console.log('occupation: ' + this.occupation);
//     }
// }

// let p = new Student('Jack');
// p.greet();

// // array
// const students = ['John', 'Sara', 'Jack'];

// // using for...of
// for ( let element of students ) {

//     // display the values
//     console.log(element);
// }

// string
//

// define Map
// let map = new Map();

// // inserting elements
// map.set('name', 'Jack');
// map.set('age', '27');

// // looping through Map
// for (let [key, value] of map) {
//     console.log(key + '- ' + value);
// }

// function sumofArray(ar){

//     let sum =0;

//     for(let i=1;i<=ar.length;i++){

//         sum +=i
//     }
//     return sum;
// }

// let ar=[1,3,5,6,7];
// console.log(sumofArray(ar));

// function averageofArray(arr) {
//   let sum = 0;
//   let n = arr.length;

//   for (let i = 1; i < n; i++) {
//     sum += i;
//   }

//   return sum / n;
// }

// arr = [1,33,67,335,74];
// console.log(`The average of this array ${arr} is`,averageofArray(arr))

// function getpositivenumbers(ar){

//     let arr2=[];

//     for(let i=1;i<ar.length;i++){
//         let el=ar[i];

//         if(el>=0){
//             arr2.push(el);
//         }

//     }
//     return arr2;
// }

// ar=[-42,-32,3,5,6,-3];

// console.log(`The positive numbers in this array ${ar} is:`,getpositivenumbers(ar));

// function positivenumber(arr){

//     ar1 =[];

//     for (var el of arr){

//     if(el>=0){
// ar1.push(el)
//     }

//     }
// return ar1

// }
// arr=[24,44,2,5,3,6,-2,-32,-321]

// console.log(positivenumber(arr))

// function getpositivenumbers(fltArr){
//     return fltArr.filter(el=>el>=0)
// }

// fltArr = [2,6,-2,-56,-9,56,2];
// console.log(getpositivenumbers(fltArr))

// let student1 = {
//     age: 24,
//     name: "Felix"
// }

// const handler = {
//     get: function(obj, prop) {
//         return obj[prop] ? obj[prop] : 'property does not exist';
//     }
// }

// const proxy = new Proxy(student1, handler);
// console.log(proxy.name); // Felix
// console.log(proxy.age); // 24
// console.log(proxy.class); // property does not exist

// let student = {
//     name: 'Jack',
//     age: 24
// }

// const handler = {

//     // get the object key and value
//     get(obj, prop) {

//         return obj[prop];
//   }
// }

// const proxy = new Proxy(student, handler);
// console.log(proxy.name); // Jack

// let student = {
//     name: 'John'
// }

// let setNewValue = {
//   set: function(obj, prop, value) {

//     obj[prop] = value;
//     return;
//   }
// };

// // setting new proxy
// let person = new Proxy(student, setNewValue);

// // setting new key/value
// person.age = 25;
// console.log(person); // Proxy {name: "John", age: 25}

// let student = {
//     name: 'Jack',
//     age: 24
// }

// const handler = {

//     // get the object key and value
//     get(obj, prop) {

//     // check condition
//     if (prop == 'name') {
//       return obj[prop];
//     } else {
//       return 'Not allowed';
//     }
//   }
// }

// const proxy = new Proxy(student, handler);
// console.log(proxy.name); // Jack
// console.log(proxy.age); // Not allowed

//***************************************************************************************** */

// // program to display a text using setTimeout method
// function greet() {
//     console.log('Hello world');
// }

// setTimeout(greet, 3000);
// console.log('This message is shown first');

// program to display a text using setTimeout method
// function greet() {
//     console.log('Hello world');
// }

// let intervalId = setTimeout(greet, 3000);
// console.log('Id: ' + intervalId);

// program to display time every 3 seconds
// function showTime() {

//     // return new date and time
//     let dateTime= new Date();

//     // returns the current local time
//     let time = dateTime.toLocaleTimeString();

//     console.log(time)

//     // display the time after 3 seconds
//      setTimeout(showTime, 3000);
// }

// // calling the function
// showTime();

// program to stop the setTimeout() method

// let count = 0;

// // function creation
// function increaseCount(){

//     // increasing the count by 1
//     count += 1;
//     console.log(count)
// }

// let id = setTimeout(increaseCount, 3000);

// // clearTimeout
// clearTimeout(id);
// console.log('setTimeout is stopped.');

// program to display a name
// function greet(name, lastName) {
//     console.log('Hello' + ' ' + name + ' ' + lastName);
// }

// // passing argument to setTimeout
// setTimeout(greet, 1000, 'John', 'Doe');

// function  greet(name,callback){
//     console.log("HI"+' '+ name);
//     callback();
// }

// function eden(){
//     console.log("This is Fantastic");
// }

// greet("peter",eden)

// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });

// console.log(countValue);

// returns a promise

// let countValue = new Promise(function (resolve, reject) {
//     resolve("Promise resolved");
//   });

//   // executes when promise is resolved successfully

//   countValue
//     .then(function successValue(result) {
//       console.log(result);
//     })

//     .then(function successValue1() {
//       console.log("You can call multiple functions this way.");
//     });

// returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     reject('Promise rejected');
//  });

//  // executes when promise is resolved successfully
//  countValue.then(
//      function successValue(result) {
//          console.log(result);
//      },
//   )

//  // executes if there is an error
//  .catch(
//      function errorValue(result) {
//          console.log(result);
//      }
//  );

// api(function(result){
//     api2(function(result2){
//         api3(function(result3){
//              // do work
//             if(error) {
//                 // do something
//             }
//             else {
//                 // do something
//             }
//         });
//     });
// });

// // returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     // could be resolved or rejected
//     resolve('Promise resolved');
// });

// // add other blocks of code
// countValue.finally(
//     function greet() {
//         console.log('This code is executed.');
//     }
// );

// let promise1;
// let promise2;
// let promise3;

// async function asyncFunc() {
//     let result1 = await promise1;
//     let result2 = await promise2;
//     let result3 = await promise3;

//     console.log(result1);
//     console.log(result1);
//     console.log(result1);
// }

// // a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000);
// });

// // async function
// async function asyncFunc() {
//     try {
//         // wait until the promise resolves
//         let result = await promise;

//         console.log(result);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// // calling the async function
// asyncFunc(); // Promise resolved

// async function example

// async function f() {
//     console.log('Async function.');
//     return Promise.resolve(1);
// }

// f();

// async function f() {
//     console.log('Async function.');
//     return Promise.resolve(1);
// }

// f().then(function(result) {
//     console.log(result)
// });

// // a promise
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     resolve('Promise resolved')}, 4000);
// });

// // async function
// async function asyncFunc() {

//     // wait until the promise resolves
//     let result = await promise;

//     console.log(result);
//     console.log('hello');
// }

// // calling the async function
// asyncFunc();

//

// program to display time every 5 seconds
// function showTime() {

//     // return new date and time
//     let dateTime= new Date();

//     // return the time
//     let time = dateTime.toLocaleTimeString();

//     console.log(time)
// }

// let display = setInterval(showTime, 5000);

// program to stop the setInterval() method after five times

// let count = 0;

// // function creation
// let interval = setInterval(function(){

//     // increasing the count by 1
//     count += 1;

//     // when count equals to 5, stop the function
//     if(count === 5){
//         clearInterval(interval);
//     }

//     // display the current time
//     let dateTime= new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time);

// }, 2000);

// // program to display a name
// function greet(name, lastName) {
//     console.log('Hello' + ' ' + name + ' ' + lastName);
// }

// // passing argument to setInterval
// setInterval(greet, 1000, 'John', 'Doe');

// let student = {
//     name: 'Jack',
//     age: 23
// }

// const handler = {
//     set: function (obj, prop, value) {
//         if (obj[prop]) {

//             // cannot change the student value
//             console.log('Read only')
//         }
//     }
// };

// const proxy = new Proxy(student, handler);

// proxy.name = 'John'; // Read only
// proxy.age = 33; // Read only

// ISO Date(International Standard)
// const date = new Date("2020-07-01");

// // the result date will be according to UTC
// console.log(date); // Wed Jul 01 2020 05:45:00 GMT+0545

// const date = new Date("2020-07");
// console.log(date); // Wed Jul 01 2020 05:45:00 GMT+0545

// const date1 = new Date("2020");
// console.log(date1); // Wed Jul 01 2020 05:45:00 GMT+0545

// short date format "MM/DD/YYYY"
// const date = new Date("03/25/2015");
// console.log(date); // Wed Mar 25 2015 00:00:00 GMT+0545

// // long date format "MMM DD YYYY"
// const date1 = new Date("Jul 1 2020");
// console.log(date1); // Wed Jul 01 2020 00:00:00 GMT+0545

// // month and day can be in any order
// const date2 = new Date("1 Jul 2020");
// console.log(date2); // Wed Jul 01 2020 00:00:00 GMT+0545

// // month can be full or abbreviated. Also month names are insensitive.
// // comma are ignored
// const date3 = new Date("July 1 2020");
// console.log(date3); // Wed Jul 01 2020 00:00:00 GMT+0545

// const date4 = new Date("JULY, 1, 2020");
// console.log(date4); // Wed Jul 01 2020 00:00:00

// const timeInMilliseconds = Date.now();
// console.log(timeInMilliseconds); // 1593765214488

// const time = new Date;

// // get day of the month
// const date = time.getDate();
// console.log(date); // 30

// // get day of the week
// const year = time.getFullYear();
// console.log(year); // 2020

// const utcDate = time.getUTCDate();
// console.log(utcDate); // 30

// const event = new Date('Feb 19, 2020 23:15:30');
// // set the date
// event.setDate(15);
// console.log(event.getDate()); // 15

// // Only 28 days in February!
// event.setDate(35);

// console.log(event.getDate()); // 7

// const currentDate = new Date();
// const date = currentDate.getDate();
// const month = currentDate.getMonth();
// const year = currentDate.getFullYear();

// // show in specific format
// let monthDateYear = (month+1) + '/' + date + '/' + year;

// console.log(monthDateYear); // 7/3/2020


// let a = this;
// console.log(a);  // Window {}

// this.name = 'Sarah';
// console.log(window.name); // Sarah



