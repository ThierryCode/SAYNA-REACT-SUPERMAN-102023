import React from 'react';
import { PRODUCTS } from '../../../../products';

export const Checkbox = ({ShowCateg, setShowCateg}) => {
  const categories = new Set(PRODUCTS.map((product) => product.category));
  const categoriesArray = Array.from(categories);

  return (
    <>
      {categoriesArray.map((category) => (
        <div key={category}>
          <input type="checkbox" name="" id={category} checked={ShowCateg[category]} onChange={() => setShowCateg({...ShowCateg, [category]: !ShowCateg[category]})} />
          <label>{category}</label>
        </div>
      ))}
    </>
  );
};