import React from 'react';
import { PRODUCTS } from '../../../../products';

export const Checkbox = ({ShowCateg, setShowCateg}) => {
  const categories = new Set(PRODUCTS.map((product) => product.category));
  const categoriesArray = Array.from(categories);

  return (
    <>
      {categoriesArray.map((category) => (
        <div className="CategCheck Menu">
          <div className="checkItems" key={category}>
            <input className='InputCheckbox' type="checkbox" name="" id={category} checked={ShowCateg[category]} onChange={() => setShowCateg({...ShowCateg, [category]: !ShowCateg[category]})}/>
            <label htmlFor={category}>{category}</label>
          </div>
        </div>
      ))}
    </>
  );
};