// 4

// function fibonacci(n) {
// 	if (n <= 1) {
// 		return n;
// 	} else {
// 		return fibonacci(n - 1) + fibonacci(n - 2);
// 	}
// }

// let n = 7;
// for (let i = 0; i < n; i++) {
// 	console.log(`Fibonacci(${i}) = ${fibonacci(i)}`);
// }

// 1

// function findPairs(arr, target) {
// 	let pairs = [];
// 	let seen = new Set();

// 	for (let i = 0; i < arr.length; i++) {
// 		let complement = target - arr[i];

// 		if (seen.has(complement)) {
// 			pairs.push([arr[i], complement]);
// 		}

// 		seen.add(arr[i]);
// 	}

// 	return pairs;
// }

// let arr = [10, 15, 3, 7, 5, 1, 9];
// let target = 10;

// let result = findPairs(arr, target);
// console.log(result);
