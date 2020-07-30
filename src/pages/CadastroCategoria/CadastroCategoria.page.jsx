import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { DefaultPage } from '../../components/DefaultPage/DefaultPage.component';
import { FormField } from '../../components/FormField/FormField.component';

export const CadastroCategoria = () => {
	const initialCategoryValues = {
		name: '',
		description: '',
		color: '#FAA52D',
	};

	const [categories, setCategories] = useState([]);
	const [values, setValues] = useState(initialCategoryValues);

	const onFormSubmit = () => {
		setCategories([...categories, values]);
		setValues(initialCategoryValues);
	};

	const handleChange = (property, value) => {
		setValue(property, value);
	};

	const setValue = (property, value) => {
		setValues({
			...values,
			[property]: value,
		});
	};

	return (
		<DefaultPage>
			<h1>New Category: {values.name}</h1>
			<form onSubmit={() => onFormSubmit()}>
				<FormField 
					name="name"
					label="Category Name"
					type="text"
					value={values.name} 
					onChange={handleChange}
				/>
				<br />
				<FormField 
					name="description"
					label="Description"
					type="text" 
					value={values.description} 
					onChange={handleChange}
				/>
				<br />
				<FormField 
					name="color"
					label="Color"
					type="color" 
					value={values.color} 
					onChange={handleChange}
				/>
				<br />
				<button type="submit">Cadastrar</button>
				<ul>
					{categories.map((category, index) => {
						return <li key={index}>{category.name}</li>;
					})}
				</ul>
			</form>
			<Link to="/">Back to home</Link>
		</DefaultPage>
	);
};
