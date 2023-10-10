import React from 'react';
import { Link } from 'react-router-dom';

export const Panier = () => {
  return (
    <>
      <h1>Mon panier</h1>
      <div>
        <Link to="/eshop">Continuer mes achats</Link>
      </div>
      <div>
        <Link to="/eshop/commandes">Passer la commande</Link>
      </div>
    </>
  );
};
