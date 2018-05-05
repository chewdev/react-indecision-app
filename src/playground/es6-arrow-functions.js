const square = function (x) {
	return x * x;
};

//console.log(square(2));

const squareAlso = (x) => x * x;

//console.log(squareAlso(3));

const fullName = "Chris Ewald";
//const getFirstName = (fullName) => {
// 	return fullName.split(' ')[0];
// }
const getFirstName = (fullName) => fullName.split(' ')[0];

//console.log(getFirstName(fullName));


//second section of practice for arrow functions

const add =  (a, b) => {
	// console.log(arguments); //can't use arguments in es6 arrow functions, need es5 function declaration
	return a + b;
};

console.log(add(55, 5, 1001));

const user = {
	name: 'Chris',
	cities: ['LA', 'SF', 'SD'],
	printPlacesLived() {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' lived in ' + city);
		// });
	}
}

console.log(user.printPlacesLived());


const multiplier = {
	numbers: [2, 3, 4],
	multiplyBy: 5,
	multiplyNumbersBy() {
		return this.numbers.map((num) => num * this.multiplyBy);
	}
};

console.log(multiplier.multiplyNumbersBy());