import React from 'react'
import { Link } from 'react-router-dom';

export const Commandes = () => {
  return (
    <>
      <h1>Commandes</h1>
      <div>
        <Link to="/eshop">Retour à la boutique</Link>
      </div>
      <div>
        <Link to="/eshop/Authentification">Continuer vers le paiement</Link>
      </div>
    </>
  )
}
