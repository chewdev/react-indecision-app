import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
		<Modal 
			contentLabel="Example Modal"
			isOpen={props.isOpen}
			onRequestClose={props.handleCloseModal}
			>
			<h3>Selected Option</h3>
			{props.selected && <p>{props.selected}</p>}
			<button onClick={props.handleCloseModal}>Close</button>
		</Modal>
		);

export default OptionModal;