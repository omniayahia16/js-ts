// // 1- var, let, const (used to declare variables — which are containers for storing data in the app)
// // var (Function-scoped - Can be updated)
function testVar() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); // 20
    }
    console.log(x); // 20
}
testVar();

// // let (Block-scoped - Can be updated)
// function testLet() {
//   let x = 10;
//   if (true) {
//     let x = 20;
//     console.log(x); // 20
//   }
//   console.log(x); // 10
// }
// testLet();

// // const (Block-scoped - Cannot be updated)
// const myName = "Omnia";
// // myName = "dalia"; Error: Assignment to constant variable
// const user = { age: 25 };
// user.age = 30; // ✅ Allowed, you're not reassigning the variable itself

////////////////////////////////////////////////////////////////////////////////////////////////////////

// //  2- Function
// const add = (a: number, b: number): number => {
//     return a + b;
// };

// console.log(add(3, 5)); // output: 8

////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 3- Control Flow (if  - switch) to controls what code runs based on certain conditions
// // if, else if, else

// const score = 85;

// if (score >= 90) {
//   console.log("Grade: A");
// } else if (score >= 80) {
//   console.log("Grade: B");
// } else if (score >= 70) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: F");
// }

// output: Grade: B"

// // switch

// const day: number = 2;

// switch (day) {
//   case 1:
//     console.log("Start of the week");
//     break;
//   case 3:
//   case 4:
//     console.log("Midweek days");
//     break;
//   case 5:
//     console.log("Almost weekend");
//     break;
//   default:
//     console.log("It's just another day");
// }

// output: It's just another day

////////////////////////////////////////////////////////////////////////////////////////////////////////

//  // 4- Loops

// // for loop: used when you know how many times you want to loop
// for (let i = 0; i < 5; i++) {
//   console.log(`Count: ${i}`);
// }

// // while loop: used when the number of iterations is not fixed, and depends on a condition
// let count = 0;
// while (count < 3) {
//   console.log(`While count: ${count}`);
//   count++;
// }

// //  do...while loop : runs the block at least once, and then continues while the condition is true
// let i = 5;
// do {
//   console.log(`Do count: ${i}`);
//   i++;
// } while (i < 3);
////////////////////////////////////////////////////////////////////////////////////////////////////////
// // 5- Arrays & objects

// // Arrays: is a collection of values stored in a single variable, where each value has a numeric index starting from 0
// const fruits: string[] = ["apple", "banana", "cherry"];
// console.log(fruits[0]); // Output: "apple"

// // to add item to the array
// fruits.push("orange");
// console.log(fruits); // ["apple", "banana", "cherry", "orange"]

// // objects: is a collection of key-value pairs
// const person: { name: string; age: number } = {
//   name: "ahmed",
//   age: 30
// };

// console.log(person.name); // "ahmed"
////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 7- ES6
// // Destructuring:  allows us to extract values from arrays or objects into separate variables.

// const numbers = [1, 2, 3];
// const [a, b] = numbers; // Destructuring
// console.log(a, b); // Output: 1 2


// // spread operator: Expands an iterable (like array) into individual elements.
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4]; // spread
// console.log(arr2); // Output: [1, 2, 3, 4]

// rest operator: Collects multiple elements into an array.
// function sum(...numbers: number[]) {
//   return numbers.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3)); // Output: 6

// // Template Literals: let you embed variables and expressions inside strings using backticks (`) and ${}
// const myName = "omnia";
// const greeting = `Hello, ${myName}! Welcome to ES6 features.`;
// console.log(greeting); // Output: Hello, omnia! Welcome to ES6 features.

////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Error Handling: is how the code deals with unexpected problems without crashing — like failed API calls, or missing files.)
// // to handle the error , you can use  (try / catch / finally)

// divide function to throw error
// function divide(a: number, b: number): number {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero");
//   }
//   return a / b;
// }

// try {
//   // try to do some logic but will get error from divide function
//   const result = divide(10, 0);
//   console.log(result);
// } catch (error) {
//   if (error instanceof Error) {
//     console.error("Error:", error.message);
//   }
// } finally {
//   // finally always runs
//   console.log("Done");
// }
// output: Error: Cannot divide by zero & Done
