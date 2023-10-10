import React from 'react'
import { Link } from 'react-router-dom'
export const Connexion = () => {
  return (
    <>
      <h1>Connexion</h1>
      <Link to="/Moncompte">Inscrivez-vous ici</Link> <br/>
      <Link to="/Moncompte/useraccount">espace utilisateur</Link>
    </>
  )
}
