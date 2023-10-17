import React from 'react'
import { Filter } from './Filter/Filter';
import { Productlist } from './Productlist/Productlist';
import { PRODUCTS } from '../../../products';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import panier from '../../../assets/icones/panier.png'
export const Catalogue = () => {
 const [ShowCateg, setShowCateg] = useState(false);
 const visibleProducts = PRODUCTS;

 return (
  <div className='CatalFilter container-fluid'>   
      <div className='panier'>
        <Link to="cart">
            <img src={panier} alt="" />
        </Link>
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