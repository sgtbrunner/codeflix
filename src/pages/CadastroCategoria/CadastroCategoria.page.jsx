import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { DefaultPage } from '../../components/DefaultPage/DefaultPage.component';

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
				<label>
          			Category Name:
					<input
						type="text"
						name="name"
						value={values.name}
						onChange={(event) =>
							handleChange(
								event.target.getAttribute('name'),
								event.target.value
							)
						}
					/>
				</label>
				<br />
				<label>
          			Description:
					<textarea
						type="text"
						name="description"
						value={values.description}
						onChange={(event) =>
							handleChange(
								event.target.getAttribute('name'),
								event.target.value
							)
						}
					/>
				</label>
				<br />
				<label>
          			Color:
					<input
						type="color"
						name="color"
						value={values.color}
						onChange={(event) =>
							handleChange(
								event.target.getAttribute('name'),
								event.target.value
							)
						}
					/>
				</label>
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
