import React from 'react';
import { Link } from 'react-router-dom';

export const Useraccount = () => {
  const userdata = JSON.parse(localStorage.getItem('userdata'));
  return (
    <>
      <h1>Informations personnelles</h1>
      <p>Nom : {userdata.name}</p>
      <p>Prénom : {userdata.prenom}</p>
      <p>Email : {userdata.email}</p>
      <p>password : {userdata.password}</p>
      <p>Numero de télephone : {userdata.tel}</p>
      <p>Adresse de livraison : {userdata.adress}</p>
      <p>Adresse de facturation : {userdata.invoice}</p>
      <Link to="/Moncompte/deconnexion">Déconnexion</Link>
    </>
  );
};
