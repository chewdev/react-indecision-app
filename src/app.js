class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.state = {
			options: props.options
		};
	}

	handleDeleteOptions() {
		this.setState(() => {
			return {
				options: []
			};
		});
	}

	handlePick() {
		alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
		this.setState(() => {
			return {
				options: []
			};
		});
	}

	handleAddOption(newOption) {
		if (!newOption) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(newOption) !== -1) {
			return 'That option already exists';
		}

		this.setState((prevState) => {
			
			return {
				options: prevState.options.concat(newOption)
			};
		});
	}

	render() {
		const subtitle = 'Put your life in the hands of a computer';
		

		return (
				<div>
					<Header subtitle={subtitle} />
					<Action 
						handlePick={this.handlePick}
						hasOptions={this.state.options.length > 0}
					/>
					<Options 
						options={this.state.options} 
						handleDeleteOptions={this.handleDeleteOptions}
					/>
					<AddOption handleAddOption={this.handleAddOption}/>
				</div>
			)
	}
}

IndecisionApp.defaultProps = {
	options: []
};

/*
	classless/stateless functional components are faster than class/stateful
	components. We should replace class components with functional components
	when possible.
*/
const Header = (props) => {
	return (
				<div>
					<h1>{props.title}</h1>
					{props.subtitle && <h2>{props.subtitle}</h2>}
				</div>
			);
}

Header.defaultProps = {
	title: "Indecision App"
}

const Action = (props) => {
	return (
			<div>
				<button 
					disabled={!props.hasOptions} 
					onClick={props.handlePick}
				>
					What should I do?
				</button>
			</div>
			);
}

const Options = (props) => {
	let optionList = props.options.map((option) => <Option option={option} key={option} />);
		return (
				<div>
					<button onClick={props.handleDeleteOptions}>Remove All</button>
					{optionList}
				</div>
			);
}

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}
	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		
		const error = this.props.handleAddOption(option);
		e.target.elements.option.value = "";
		
		this.setState(() => {
			return { error : error };
		});
	}

	render() {
		return (
				<div>
					{this.state.error && <p>{this.state.error}</p>}
					<form onSubmit={this.handleAddOption}>
						<input type="text" name="option"/>
						<button>Add Option</button>
					</form>
				</div>
			)
	}
}

const Option = (props) => {
	return ( 
				<div>{props.option}</div>
		)
}



//classless/stateless functional components are faster than class/stateful components
const User = (props) => {
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
		</div>
	);
};


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));