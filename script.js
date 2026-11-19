// console.log("Hello World!");

// alert("Hello Qudus, what's up")

// creaing a variable

// let name = prompt("wha is your name")
// alert("Welcome " + name)

// const request = confirm("Are you sure you want to delete");
// console.log(request);

// let isAvailable = false;
// let firstName = "Qudus";
// let age = 12;
// let model;
// let swing = null;

// console.log(typeof isAvailable);
// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof model);
// console.log(typeof swing);

// Asignment Operators

// let x = 5;
// let r = 6;
// let z = "6";

// console.log(x >= r && !(x <= r || r == z));

// function calcAvg(a, b, c, d) {
// 	//A Function to find the average of four numbers
// 	return (a + b + c + d) / 4;
// }

// function evenOrOdd(numbers) {
// 	switch (true) {
// 		case numbers % 2 == 0:
// 			console.log("Even");
// 			break;
// 		default:
// 			console.log("Odd");
// 			break;
// 	}
// }

// evenOrOdd(30);

// While loop checks the condition before running the instruction
// Do While loop runs the instruction once before checking the condition

// let num = 1;

// while (num <= 10) {
// 	console.log(`${num}. I love you`);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// } while (num <= 10);

// for (let numbers = 0; numbers < 5; numbers++) {
// 	console.log(numbers);
// }

const numbers = [20, 13, 43, 567, 23, 54];

// for (const num of numbers) {
//     console.log(num)
// }

console.log(numbers[1]);

// Break is used o exit the loop while continue is used to skip

for (let num = 0; num < numbers.length; num++) {
	if (num == 43) {
		Break;
	}
}

// Push is to add at the end of an arra and unshift is to add at the beginning of an arra
numbers.push("@");
numbers.unshift("100");
// Pop is to remove at the end of an Array and unshifv is used to remove elemnt at the beginning of an array
numbers.pop();
numbers.shift();

// Splice is used to remove elements from the middle of an array
console.log(numbers);

// Creating an Object

const individual = {
	name: "John Doe",
	age: 17,
	gender: "male",
	isMarried: "False",
};

console.log(individual.gender);
console.log(individual["gender"]);

individual.age = 23;
individual["age"] = "30";
individual.color = "Chocolate";
delete individual.age; //To deleta an element in an array
console.log(individual);
