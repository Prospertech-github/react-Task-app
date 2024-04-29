import React from 'react';
import './Button.css';

function Button({renderForm, formState}) {
	return (
		<div className="button">
			<button
				className={formState ? 'btn-norm btn-red' : 'btn-norm'}
				onClick={renderForm}
			>
				{formState ? 'Close Form' : 'Add Task'}
			</button>
		</div>
	);
}


export default Button;
