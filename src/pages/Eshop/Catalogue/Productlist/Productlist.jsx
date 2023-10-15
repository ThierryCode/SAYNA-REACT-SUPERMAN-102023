import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PRODUCTS } from '../../../../products';
import { shopContext } from '../../../../context/shopContext';
export const Productlist = ({ShowCateg }) => {

  const {addToCart, cartItems} = useContext(shopContext);
  const cartItemAmount = cartItems[PRODUCTS.id];
  return (
    <>
      <h1>Productlist</h1>
      <div>
        <Link to="cart">Panier</Link>
      </div>
      <div>
        {ShowCateg ? PRODUCTS.filter(PRODUCTS => ShowCateg[PRODUCTS.category]).map((PRODUCTS) => (
          <div key={PRODUCTS.id}>
            <h2>{PRODUCTS.name}</h2>
            <p>{PRODUCTS.price}</p>
            {/* <p>{stocked ? 'En stock' : 'En rupture de stock'}</p> */}
            <div className="Button">
          <button onClick = {() => addToCart(PRODUCTS.id)}>
          Ajouter au panier {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
          </div>
        )) : PRODUCTS.map((PRODUCTS) => (
          <div key={PRODUCTS.id}>
            <h2>{PRODUCTS.name}</h2>
            <p>{PRODUCTS.price}</p>
            {/* <p>{stocked ? 'En stock' : 'En rupture de stock'}</p> */}
            <div className="Button">
          <button onClick = {() => addToCart(PRODUCTS.id)}>
          Ajouter au panier {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
          </div>
        ))}
      </div>
    </>
  );
};