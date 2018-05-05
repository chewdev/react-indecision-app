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

var count = 0;
var addOne = function addOne() {
	count++;
	renderCounterApp();
};

var minusOne = function minusOne() {
	count--;
	renderCounterApp();
};

var reset = function reset() {
	count = 0;
	renderCounterApp();
};
// **IMPORTANT**: class selector is renamed as className in jsx because class is reserved word

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
	var templateTwo = React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			" Count: ",
			count,
			" "
		),
		React.createElement(
			"button",
			{ onClick: addOne },
			"+1"
		),
		React.createElement(
			"button",
			{ onClick: minusOne },
			"-1"
		),
		React.createElement(
			"button",
			{ onClick: reset },
			"Reset"
		)
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
