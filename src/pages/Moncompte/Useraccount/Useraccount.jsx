import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../features/store/store';
import { userData } from '../Connexion/Inscription';

export const Useraccount = () => {
  // const userData = JSON.parse(localStorage.getItem('userdata'));
  const userData = useSelector((state) => state.userData.value);

  const nom = userData?.nom;
  const prenom = userData?.prenom;
  const email = userData?.email;
  const password = userData?.password;
  // const confirmpassword = useSelector((state)=>state.userData.value.confirmpassword)
  const dispatch = useDispatch();

  return (
    <>
      <h1>Informations personnelles</h1>
      <p>Nom : {nom}</p>
      <p>Prénom : {prenom}</p>
      <p>Email : {email}</p>
      <p>password : {password}</p>
      {/* <p>Numero de télephone : {tel}</p>
      <p>Adresse de livraison : {adress}</p>
      <p>Adresse de facturation : {invoice}</p> */}
      {userData && <button onClick={() => dispatch(logout())}>Déconnexion</button>}
    </>
  );
};