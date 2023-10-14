import React from 'react';
import { Checkbox } from './Checkbox';

export function Filter({ShowCateg, setShowCateg}) {

 return (
  <>
  <h1>Filtre</h1>
  <p>Categorie</p>
  <Checkbox ShowCateg={ShowCateg} setShowCateg={setShowCateg}/>
  </>
 );
}