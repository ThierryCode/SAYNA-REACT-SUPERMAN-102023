import React from 'react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { PRODUCTS } from '../../../../products';
import { shopContext } from '../../../../context/shopContext';
// import '../../../../App.css';
export const Productlist = ({ShowCateg }) => {

  const {addToCart, cartItems} = useContext(shopContext);
  const cartItemAmount = cartItems[PRODUCTS.id];
  return (
    <>
        {ShowCateg ? PRODUCTS.filter(PRODUCTS => ShowCateg[PRODUCTS.category]).map((PRODUCTS) => (
          <li className="Card ProductListli" key={PRODUCTS.id}>
            <img src={PRODUCTS.imageProduct} alt="article" />
            <p className='productName '>{PRODUCTS.name}</p>
            <p className='productPrice'>{PRODUCTS.price} $</p>
            <div className="Button">
              <button onClick = {() => addToCart(PRODUCTS.id)}>
              Ajouter au panier {cartItemAmount > 0 && <>({cartItemAmount})</>}
              </button>
            </div>
          </li>
        )) : PRODUCTS.map((PRODUCTS) => (
          <li className="Card ProductListli" key={PRODUCTS.id}>
            <img src={PRODUCTS.imageProduct} alt="" />
            <p className='productName'>{PRODUCTS.name}</p >
            <p className='productPrice'>{PRODUCTS.price} $</p>
            <div className="Button">
            <button onClick = {() => addToCart(PRODUCTS.id)}>
              Ajouter au panier {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
            </div>
          </li>
        ))}
    </>
  );
};