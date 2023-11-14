//your JS code here. If required.
function fancyCal() {
	const firstIn = parseInt(prompt("Enter first number"));
	const firstMul = firstIn*2;

	const secondIn = parseInt(prompt("Enter second number"));
	const addNum = firstMul + secondIn;
	return addNum; 
}
let result = fancyCal();
alert(`The final result is: ${result}`);