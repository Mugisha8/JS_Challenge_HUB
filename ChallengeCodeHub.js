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


const readline = require('readline')

const temp = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

temp.question("Enter temp in celcius:",(celcius)=>{

const tempConvert=celcius*1.8 + 32

console.log(tempConvert)



})