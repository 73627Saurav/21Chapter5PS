// Chapter 5 Practice Set
// Practice Problem 1
let arr1 = [1, 2, 3, 4, 5, 6, 7, 83]
let a1 = prompt("Enter a number")
a1 = Number.parseInt(a1)
arr1.push(a1)
console.log(arr1)
console.log("")

// Practice Problem 2
let arr2 = [1, 2, 3, 4, 5, 6, 7, 83]
let a2;
do {
  a2 = prompt("Enter a number")
  a2 = Number.parseInt(a2)
  arr2.push(a2)
} while (a2 != 0);
console.log(arr2)
console.log("")

// Practice Problem 3
let arr3 = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let a3 = arr3.filter((num)=>{
  return num%10 == 0
})
console.log(a3) // [ 30, 50, 670 ]
console.log("")

// Practice Problem 4
let arr4 = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let a4 = arr4.map((num)=>{
  return num*num
})
console.log(a4)
/* 
[
   1,    4,    900,
  16, 2500,     36,
  49, 6889, 448900
] */
console.log("")

// Practice Problem 5
let arr5 = [1, 2, 3, 4, 5]
let a5 = arr5.reduce((num1, num2) => {
  return num1 * num2
})
console.log(a5) // 120