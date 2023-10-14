import React from 'react';
import { Link } from 'react-router-dom';

export const Productlist = ({ proucts, ShowCateg }) => {
  return (
    <>
      <h1>Productlist</h1>
      <div>
        <Link to="Panier">Panier</Link>
      </div>
      <div>
        {ShowCateg ? proucts.filter(product => ShowCateg[product.category]).map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.stocked ? 'En stock' : 'En rupture de stock'}</p>
          </div>
        )) : proucts.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.stocked ? 'En stock' : 'En rupture de stock'}</p>
          </div>
        ))}
      </div>
    </>
  );
};