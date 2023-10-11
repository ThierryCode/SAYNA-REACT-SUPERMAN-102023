import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
export const Inscription = () => {

  const schema = yup.object().shape({
    name: yup.string().required("Le champ nom est obligatoire"),
    prenom: yup.string().required("Le champ Prénom est obligatoire"),
    email: yup.string().email().required("Le champ email doit avoir la forme email @"),
    password: yup.string().min(4).max(19).required("Votre mot de passe doit contenir 4 caractères minimum et obligatoire"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null],"password no match").required()
  })
  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });
  let userData;
  const redirectToUseraccount = () => {
    window.location.href = "/Moncompte/useraccount";
  };
  const onSubmit = (userData) =>{
    console.log(userData);
    localStorage.setItem('userdata', JSON.stringify(userData));
    redirectToUseraccount();
  }
  return (
    <>
      <h1>Inscription</h1>
      <span>Vous avez déjà un compte ?</span><Link to="/Moncompte/connexion">Connectez-vous ici</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Nom</label><br/>
        <input type="text" placeholder='Nom' {...register("name")}/><br/>
        <p>{errors.name?.message}</p>
        <label htmlFor="">Prénom</label><br/>
        <input type="text" placeholder='Prénom' {...register("prenom")}/><br/>
        <p>{errors.prenom?.message}</p>
        <label htmlFor="">E-mail</label><br/>
        <input type="email" placeholder='E-mail' {...register("email")}/><br/>
        <p>{errors.email?.message}</p>
        <label htmlFor="">Mot de passe</label><br/>
        <input type="password" placeholder='Mot de passe' {...register("password")}/><br/>
        <p>{errors.password?.message}</p>
        <label htmlFor="">Confirmer votre mot de passe</label><br/>
        <input type="password" placeholder='Confirmation du mot de passe' {...register("confirmpassword")}/><br/>
        <p>{errors.confirmpassword?.message}</p>
        <p>Politique de confidentialité</p>
        <input type='submit'value="valider"/>
      </form>
    </>
  )
}
