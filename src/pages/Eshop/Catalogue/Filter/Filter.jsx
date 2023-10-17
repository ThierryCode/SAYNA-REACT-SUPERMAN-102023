import React from 'react';
import { Checkbox } from './Checkbox';

export function Filter({ShowCateg, setShowCateg}) {

 return (
  <>
  <h2>Filtres</h2>
  <p>Categories</p>
  <Checkbox ShowCateg={ShowCateg} setShowCateg={setShowCateg}/>
  </>
 );
}