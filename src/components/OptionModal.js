import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
		<Modal 
			contentLabel="Example Modal"
			isOpen={props.isOpen}
			onRequestClose={props.handleCloseModal}
			closeTimeoutMS={200}
			className="modal"
			>
			<h3 className="modal__title">Selected Option</h3>
			{props.selected && <p className="modal__body">{props.selected}</p>}
			<button className="button" onClick={props.handleCloseModal}>Close</button>
		</Modal>
		);

export default OptionModal;