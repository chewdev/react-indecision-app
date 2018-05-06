"use strict";

var displayProps = {
	displayBool: false
};

var toggleVisibility = function toggleVisibility() {
	displayProps.displayBool = !displayProps.displayBool;
	render();
};

var appRoot = document.getElementById("app");

var render = function render() {
	var template = React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			"Visibility Toggle"
		),
		React.createElement(
			"button",
			{ onClick: toggleVisibility },
			displayProps.displayBool ? "Hide Details" : "Show Details"
		),
		displayProps.displayBool ? React.createElement(
			"p",
			null,
			"Hey. These are some details you can now see!"
		) : false
	);
	ReactDOM.render(template, appRoot);
};

toggleVisibility();
