console.log("App.js is running!");

const app = {
	title: "Indecision App",
	subtitle: "Let me make the decision for you",
	options: ['one', 'two']
};
// JSX - JavaScript XML
function getSubtitle(sub) {
	if (sub) {
		return <p>{sub}</p>;
	}
}


const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length ? "Here are your options: " : "There are currently no options"}</p>
		
		<ol>
			<li>first item</li>
			<li>second item</li>
		</ol>
		
	</div>
);
const user = {
	name: "Chris",
	age: 28,
	location: "LA"
};

function getLocation(loc) {
	if (loc) {
		return <p>Location: {loc}</p>;
	}
}

const templateTwo = (
	<div>
		<h1>{user.name ? user.name : "Anonymous"}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
		
	</div>
);
const appRoot = document.getElementById("app");


ReactDOM.render(template, appRoot);