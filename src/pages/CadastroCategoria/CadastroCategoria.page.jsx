import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { DefaultPage } from '../../components/DefaultPage/DefaultPage.component';
import { FormField } from '../../components/FormField/FormField.component';

export const CadastroCategoria = () => {
  const initialCategoryValues = {
    name: '',
    description: '',
    color: '#ffffff',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialCategoryValues);

  const onFormSubmit = () => {
    setCategories([...categories, values]);
    setValues(initialCategoryValues);
  };

  const setValue = (property, value) => {
    setValues({
      ...values,
      [property]: value,
    });
  };

  const handleChange = (property, value) => {
    setValue(property, value);
  };

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL).then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategories(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
    }
  }, []);

  return (
    <DefaultPage>
      <h1>
        New Category:
        {values.name}
      </h1>
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
            <li key={category.id}>{category.titulo}</li>
          ))}
        </ul>
      </form>
      <Link to="/">Back to home</Link>
    </DefaultPage>
  );
};
