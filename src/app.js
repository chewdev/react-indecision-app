import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


/*
	classless/stateless functional components are faster than class/stateful
	components. We should replace class components with functional components
	when possible.
*/



//classless/stateless functional components are faster than class/stateful components


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// class OldSyntax {
// 	constructor() {
// 		this.name = "bob";
// 		this.getGreeting = this.getGreeting.bind(this);
// 	}
// 	getGreeting() {
// 		return `Hi. My name is ${this.name}.`;
// 	}
// }

// const oldSyntax = new OldSyntax();

// console.log(oldSyntax);
// console.log(oldSyntax.getGreeting());

// // -----

// class NewSyntax {
// 	name = "bill";
// 	getGreeting = () => `Hi. My name is ${this.name}.`;
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);
// console.log(newSyntax.getGreeting());