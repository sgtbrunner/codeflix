import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { DefaultPage } from '../../components/DefaultPage/DefaultPage.component';
import { FormField } from '../../components/FormField/FormField.component';

export const CadastroCategoria = () => {
  const initialCategoryValues = {
    id: 0,
    name: '',
    description: '',
    color: '#ffffff',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialCategoryValues);

  const onFormSubmit = () => {
    console.log(values);
    setCategories([...categories, values]);
    setValues(initialCategoryValues);
  };

  const setValue = (property, value) => {
    setValues({
      ...values,
      id: categories.length + 1,
      [property]: value
    });
  };

  const handleChange = (event) => {
    setValue(event.target.name, event.target.value);
  };

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(() => { console.log('Não foi possível pegar os dados'); });
    }
  }, []);

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
          type="textarea"
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
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </form>
      <Link to="/">Back to home</Link>
    </DefaultPage>
  );
};
