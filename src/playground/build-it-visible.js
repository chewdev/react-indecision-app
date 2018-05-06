const displayProps = {
	displayBool: false
}

const toggleVisibility = () => {
	displayProps.displayBool = !displayProps.displayBool;
	render();
};

const appRoot = document.getElementById("app");

const render = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggleVisibility}>{displayProps.displayBool ? "Hide Details" : "Show Details"}</button>
			{displayProps.displayBool ? <p>Hey. These are some details you can now see!</p> : false}
		</div>
	);
	ReactDOM.render(template, appRoot);
};



toggleVisibility();
