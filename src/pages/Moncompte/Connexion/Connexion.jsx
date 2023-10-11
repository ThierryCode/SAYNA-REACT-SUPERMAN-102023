import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
export const Connexion = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Le champ email doit avoir la forme email @"),
    password: yup.string().min(4).max(19).required("Votre mot de passe doit contenir 4 caractères minimum et obligatoire"),
  })
  const { register, handleSubmit,formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (userData) =>{
    console.log(userData);
  }
  return (
    <>
      <h1>Connexion</h1>
      <Link to="/Moncompte">Inscrivez-vous ici</Link> <br/>
      <Link to="/Moncompte/useraccount">espace utilisateur</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder='E-mail' {...register("email")}/><br/>
        <p>{errors.email?.message}</p>
        <label htmlFor="">Mot de passe</label><br/>
        <input type="password" placeholder='Mot de passe' {...register("password")}/><br/>
        <p>{errors.password?.message}</p>
        <p>Politique de confidentialité</p>
        <input type='submit'value="valider"/>
      </form>
    </>
  )
}
