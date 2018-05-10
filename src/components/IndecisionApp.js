import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		pick: undefined,
		isOpen: false
	};

	handleCloseModal = () => {
		this.setState((prevState) => ({
			isOpen: !prevState.isOpen,
			pick: undefined
		}));
	}

	handleDeleteOptions = () => {
		this.setState(() => ({options: []}));
	}

	handleDeleteOption = (option) => {
		this.setState((prevState) => (
			{
				options: prevState.options.filter((val) => val !== option)
			}

		));
			// My solution before watching instructors solution
			// const newState = prevState;
			// const ind = newState.options.indexOf(option);
			// newState.options.splice(ind, 1);
			// return newState;
	}

	handlePick = () => {
		//alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
		//this.setState(() => ({options: []}));
		this.setState(() => ({pick: this.state.options[Math.floor(Math.random() * this.state.options.length)],
							isOpen: true}));
	}

	handleAddOption = (newOption) => {
		if (!newOption) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(newOption) !== -1) {
			return 'That option already exists';
		}

		this.setState((prevState) =>({options: prevState.options.concat(newOption)}));
	}

	componentDidMount() {
		try {
			const options = JSON.parse(localStorage.getItem("options"));
			if (options) {
				this.setState(() => ({options}));
			}
		}	catch (e) {
			// Don't do anything
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	render() {
		const subtitle = 'Put your life in the hands of a computer';
		

		return (
				<div>
					<Header subtitle={subtitle} />
					<div className="container">
						<Action 
							handlePick={this.handlePick}
							hasOptions={this.state.options.length > 0
							}
						/>
						<div className="widget">
							<Options 
								options={this.state.options} 
								handleDeleteOptions={this.handleDeleteOptions}
								handleDeleteOption={this.handleDeleteOption}
							/>
							<AddOption handleAddOption={this.handleAddOption}/>
						</div>
					</div>
					<OptionModal 
						isOpen={this.state.isOpen}
						selected={this.state.pick}
						handleCloseModal={this.handleCloseModal} 
					/>
				</div>
			)
	}
}