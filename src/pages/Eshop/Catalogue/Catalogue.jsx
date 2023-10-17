import React from 'react'
import { Filter } from './Filter/Filter';
import { Productlist } from './Productlist/Productlist';
import { PRODUCTS } from '../../../products';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Catalogue = () => {
 const [ShowCateg, setShowCateg] = useState(false);
 const visibleProducts = PRODUCTS;

 return (
  <div className='CatalFilter container-fluid'>   
      <div className='panier'>
        <Link to="cart">Panier</Link>
    </div>
   <Filter ShowCateg={ShowCateg} setShowCateg={setShowCateg}/>

   <div className="catalogue">
    <ul className='cardList container-fluid'>
        <Productlist proucts={visibleProducts} ShowCateg={ShowCateg}/>
    </ul>
   </div>
  </div>
 )
}