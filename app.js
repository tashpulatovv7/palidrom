function fibonacci(n) {
	if (n <= 1) {
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

let n = 7;
for (let i = 0; i < n; i++) {
	console.log(`Fibonacci(${i}) = ${fibonacci(i)}`);
}
