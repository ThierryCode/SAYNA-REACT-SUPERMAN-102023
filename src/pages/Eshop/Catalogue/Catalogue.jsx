import React from 'react'
import { Filter } from './Filter/Filter';
import { Productlist } from './Productlist/Productlist';
import { PRODUCTS } from '../../../products';
import { useState } from 'react';

export const Catalogue = () => {
 const [ShowCateg, setShowCateg] = useState(false);
 const visibleProducts = PRODUCTS;

 return (
  <div className='CatalFilter container-fluid'>   
   <Filter ShowCateg={ShowCateg} setShowCateg={setShowCateg}/>
   <ul>
    <Productlist proucts={visibleProducts} ShowCateg={ShowCateg}/>
   </ul>
  </div>
 )
}