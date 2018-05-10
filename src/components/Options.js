import React from 'react';
import Option from './Option';

const Options = (props) => (
				<div>
					<div className="widget-header">
						<h3 className="widget-header__title">Your Options</h3>
						<button 
							onClick={props.handleDeleteOptions}
							className="button button--link"
						>
							Remove All
						</button>
					</div>
					{!props.options.length ? <p className="widget__message"> Please add options to the list to get started </p> : null}
					{props.options.map((option, index) => (
						<Option 
							handleDeleteOption={props.handleDeleteOption} 
							option={option} 
							count={index+1}
							key={option} 
							/>
						))}
				</div>
	);


export default Options;