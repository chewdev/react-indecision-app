import React from 'react';

const Option = (props) => ( 
				<div>
					<button 
						onClick={(e) => {
							props.handleDeleteOption(props.option);
						}}
					>
						x
					</button>
					{props.option}
				</div>
		)


export default Option;