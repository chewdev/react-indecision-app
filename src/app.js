console.log("App.js is running!");

const app = {
	title: "Indecision App",
	subtitle: "Let me make the decision for you",
	options: []
};
// JSX - JavaScript XML
function getSubtitle(sub) {
	if (sub) {
		return <p>{sub}</p>;
	}
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = "";
		render();	
	}	
};

const onRemoveAll = () => {
	app.options = [];
	render();
}

const onMakeDecision = () => {
	const randIndex = Math.floor(Math.random() * app.options.length);
	const decisionMade = app.options[randIndex];
	alert(decisionMade);
	app.options = [];
	render();
}


const appRoot = document.getElementById("app");

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length ? "Here are your options: " : "There are currently no options"}</p>
			<button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={onRemoveAll}>Remove All</button>
			
			<ol>
				{
					app.options.map((option) => <li key={option}>{option}</li>)
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
}

render();

