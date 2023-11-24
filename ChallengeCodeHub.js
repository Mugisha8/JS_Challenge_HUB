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



const readline = require('readline')

const squareroot = readline.createInterface({

    input:process.stdin,
    output:process.stdout
})

squareroot.question("Enter a Number:",(num)=>{

num=parseInt(num)

root=Math.sqrt(num)

console.log(`the square root of a number${num} is ${root}`)



})