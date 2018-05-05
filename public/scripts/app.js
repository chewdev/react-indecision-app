"use strict";

console.log("App.js is running!");

var app = {
	title: "Indecision App",
	subtitle: "Let me make the decision for you",
	options: ['one', 'two']
};
// JSX - JavaScript XML
function getSubtitle(sub) {
	if (sub) {
		return React.createElement(
			"p",
			null,
			sub
		);
	}
}

var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		app.title
	),
	app.subtitle && React.createElement(
		"p",
		null,
		app.subtitle
	),
	React.createElement(
		"p",
		null,
		app.options.length ? "Here are your options: " : "There are currently no options"
	),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			"first item"
		),
		React.createElement(
			"li",
			null,
			"second item"
		)
	)
);
var user = {
	name: "Chris",
	age: 28,
	location: "LA"
};

function getLocation(loc) {
	if (loc) {
		return React.createElement(
			"p",
			null,
			"Location: ",
			loc
		);
	}
}

var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		user.name ? user.name : "Anonymous"
	),
	user.age && user.age >= 18 && React.createElement(
		"p",
		null,
		"Age: ",
		user.age
	),
	getLocation(user.location)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
