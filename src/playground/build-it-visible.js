class SecretMessage extends React.Component {
	constructor(props) {
		super(props);
		this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
		this.state = {
			visibility: false,
			buttonText: 'Show Details'
		}
	}

	handleVisibilityToggle() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility,
				buttonText: prevState.visibility ? 'Show Details' : 'Hide Details'
			};
		});
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleVisibilityToggle}>{this.state.buttonText}</button>
				{this.state.visibility ? <p>Hey. These are some details!</p> : false}
			</div>
			)
	}
}

ReactDOM.render(<SecretMessage />, document.getElementById("app"));

