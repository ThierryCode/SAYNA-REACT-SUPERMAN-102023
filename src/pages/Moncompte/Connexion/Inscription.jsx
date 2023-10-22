import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../../features/store/store';

export const Inscription = () => {
  const schema = yup.object().shape({
    nom: yup.string().required("Le champ nom est obligatoire"),
    prenom: yup.string().required("Le champ Prénom est obligatoire"),
    email: yup.string().email().required("Le champ email doit avoir la forme email @"),
    password: yup.string().min(4).max(19).required("Votre mot de passe doit contenir 4 caractères minimum et obligatoire"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null],"password no match").required()
  })

  const { register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = (userData) =>{
    dispatch(login(userData));
  }

  return (
    <>
    <div className="Register">
      <h1>Inscription</h1>
      <span>Vous avez déjà un compte ?</span><Link to="/Moncompte/connexion">Connectez-vous ici</Link>
      <form className='RegisterForm' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nom">Nom</label><br/>
        <input className="RegisterInput" id="nom" type="text" placeholder='Nom' {...register("nom")}/><br/>
        <p>{errors.name?.message}</p>
        <label htmlFor="">Prénom</label><br/>
        <input className="RegisterInput"type="text" placeholder='Prénom' {...register("prenom")}/><br/>
        <p>{errors.prenom?.message}</p>
        <label htmlFor="">E-mail</label><br/>
        <input className="RegisterInput" type="email" placeholder='E-mail'{...register("email")}/><br/>
        <p>{errors.email?.message}</p>
        <label htmlFor="">Mot de passe</label><br/>
        <input className="RegisterInput" type="password" placeholder='Mot de passe' {...register("password")}/><br/>
        <p>{errors.password?.message}</p>
        <label htmlFor="">Confirmer votre mot de passe</label><br/>
        <input className="RegisterInput"type="password" placeholder='Confirmation du mot de passe' {...register("confirmpassword")}/><br/>
        <p>{errors.confirmpassword?.message}</p>
        <p>Politique de confidentialité</p>
        <input className="RegisterInputSubmit" type='submit' value="Valider"/>
        <p>Connectez vous avec </p>
      </form>
    </div>
    </>
  )
}
