import React from 'react';
import { useContext } from 'react';
import { PRODUCTS } from '../../../../products';
import { shopContext } from '../../../../context/shopContext';
export const Productlist = ({ShowCateg }) => {

  const {addToCart, cartItems} = useContext(shopContext);
  const cartItemAmount = cartItems[PRODUCTS.id];
  return (
    <>
        {ShowCateg ? PRODUCTS.filter(PRODUCTS => ShowCateg[PRODUCTS.category]).map((PRODUCTS) => (
          <li className="Card ProductListli" key={PRODUCTS.id}>
            <div className="border">
              <img src={PRODUCTS.imageProduct} alt="article" />
              <p className='productName '>{PRODUCTS.name}</p>
              <p className='productPrice'>{PRODUCTS.price} $</p>
            </div>
            <div className="ButtonAddToCart">
              <button onClick = {() => addToCart(PRODUCTS.id)}>
              Ajouter au panier {cartItemAmount > 0 && <>({cartItemAmount})</>}
              </button>
            </div>
          </li>
        )) : PRODUCTS.map((PRODUCTS) => (
          <li className="Card ProductListli" key={PRODUCTS.id}>
            <div className="border">
              <img src={PRODUCTS.imageProduct} alt="" />
              <p className='productName'>{PRODUCTS.name}</p >
              <p className='productPrice'>{PRODUCTS.price} $</p>
            </div>
            <div className="ButtonAddToCart">
            <button onClick = {() => addToCart(PRODUCTS.id)}>
              Ajouter au panier {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
            </div>
          </li>
        ))}
    </>
  );
};