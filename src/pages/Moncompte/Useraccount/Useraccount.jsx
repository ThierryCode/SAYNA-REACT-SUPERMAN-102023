import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout } from '../../../features/store/store';
export const Useraccount = () => {
  const userdata = JSON.parse(localStorage.getItem('userdata'));
  const user=useSelector((state)=>state.user.value.userdata)
  return (
    <>
      <h1>Informations personnelles</h1>
      <p>Nom : {user.name}</p>
      <p>Prénom : {user.prenom}</p>
      <p>Email : {user.email}</p>
      <p>password : {user.password}</p>
      <p>Numero de télephone : {user.tel}</p>
      <p>Adresse de livraison : {user.adress}</p>
      <p>Adresse de facturation : {user.invoice}</p>
      <button onClick={()=>dispatch(logout)}>Déconnexion</button>
    </>
  );
};
