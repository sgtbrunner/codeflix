import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { retrieveCategories } from '../../services/dataStorage.service';
import { DefaultPage } from '../../components/DefaultPage/DefaultPage.component';
import { FormField } from '../../components/FormField/FormField.component';

export const CadastroCategoria = () => {
  const initialCategoryValues = {
    id: 0,
    name: '',
    description: '',
    color: '#ffffff',
  };

  const [category, setCategory] = useState(initialCategoryValues);
  const [categories, setCategories] = useState([]);

  const onFormSubmit = async () => {
    setCategories([...categories, category]);
    setCategory(initialCategoryValues);
  };

  const setValue = (property, value) => {
    setCategory({
      ...category,
      id: categories.length + 1,
      [property]: value,
    });
  };

  const handleChange = (event) => {
    setValue(event.target.name, event.target.value);
  };

  useEffect(() => {
    async function getData() {
      const categoriesData = await retrieveCategories();
      setCategories(categoriesData);
    }
    getData();
  }, []);

  return (
    <DefaultPage>
      <h1>
        New Category:
        {category.name}
      </h1>
      <form onSubmit={() => onFormSubmit()}>
        <FormField
          name="name"
          label="Category Name"
          type="text"
          value={category.name}
          onChange={handleChange}
        />
        <br />
        <FormField
          name="description"
          label="Description"
          type="textarea"
          value={category.description}
          onChange={handleChange}
        />
        <br />
        <FormField
          name="color"
          label="Color"
          type="color"
          value={category.color}
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
