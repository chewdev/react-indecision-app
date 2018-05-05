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

let count = 0;
const addOne = () => {
	count++;
	renderCounterApp();
};

const minusOne = () => {
	count--;
	renderCounterApp();	
};

const reset = () => {
	count = 0;
	renderCounterApp();
}
// **IMPORTANT**: class selector is renamed as className in jsx because class is reserved word

const appRoot = document.getElementById("app");




const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1> Count: {count} </h1>
			<button onClick={addOne}>+1</button> 
			<button onClick={minusOne}>-1</button>
			<button onClick={reset}>Reset</button>  
		</div>
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();