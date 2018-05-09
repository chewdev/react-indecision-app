import React from 'react';
import Option from './Option';

const Options = (props) => (
				<div>
					<button onClick={props.handleDeleteOptions}>Remove All</button>
					{!props.options.length ? <p> Please add options to the list to get started </p> : null}
					{props.options.map((option) => (
						<Option 
							handleDeleteOption={props.handleDeleteOption} 
							option={option} 
							key={option} 
							/>
						))}
				</div>
	);


export default Options;