import React from 'react'
import { Filter } from './Filter/Filter';
import { Productlist } from './Productlist/Productlist';
import { PRODUCTS } from '../../../products';
import { useState } from 'react';

export const Catalogue = () => {
 const [ShowCateg, setShowCateg] = useState(false);
 const visibleProducts = PRODUCTS;

 return (
  <div className='catalogue'>   
   <Filter ShowCateg={ShowCateg} setShowCateg={setShowCateg}/>
   <Productlist proucts={visibleProducts} ShowCateg={ShowCateg}/>
  </div>
 )
}