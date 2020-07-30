import React from 'react';

export const FormField = ({ label, name, type, value, onChange }) => {
	return (
		<label>
			{label}:
			<input
				type={type}
				name={name}
				value={value}
				onChange={(event) =>
					onChange(event.target.getAttribute('name'), event.target.value)
				}
			/>
		</label>
	);
};
