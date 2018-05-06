class Person {
	constructor(name = 'Anon', age = 0) {
		this.name = name;
		this.age = age;
	}

	getFirstName() {
		return this.name.split(' ')[0];
	}

	getGreeting() {
		//return 'Hi ' + this.name;
		return `Hi, I am ${this.name}!`;
	}

	getDescription() {
		return `${this.name} is ${this.age} year(s) old`;
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}

	getDetails() {
		return `${this.name} is ${this.age} and majors in ${this.major}`;
	}

	hasMajor() {
		return !!this.major;
	}

	getDescription() {
		let description = super.getDescription();
		if(this.hasMajor) {
	 		description = `${description} and majors in ${this.major}`;
	 	}

	 	return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}

	hasHomeLocation() {
		return !!this.homeLocation;
	}

	getGreeting() {
		let greeting = super.getGreeting();
		if (this.hasHomeLocation()) {
			greeting = `${greeting} I'm visiting from ${this.homeLocation}.`;
		}

		return greeting;
	}
}

const someStudent = new Student('John Doe', 30, 'Computer Science');

console.log(someStudent.getDescription());
console.log(someStudent.hasMajor());

const me = new Person('Billy Bob', 28);
console.log(me.getGreeting());

const him = new Person('Andrew M', 26);
console.log(him.getFirstName());
console.log(him.getDescription());

const her = new Person();
console.log(her);

const traveler1 = new Traveler('Jane Doe', 20, 'California');
console.log(traveler1.getGreeting());
console.log(traveler1.hasHomeLocation());

const nonTraveler = new Traveler('Johnathan Doeheim', 25);
console.log(nonTraveler.getGreeting());
console.log(nonTraveler.hasHomeLocation());