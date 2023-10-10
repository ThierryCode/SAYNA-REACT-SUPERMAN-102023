import React from 'react'
import { Link } from 'react-router-dom'

export const Confirmation = () => {
  return (
    <>
        <div>Confirmation</div>
        <Link to="/eshop">Retourner au catalogue</Link><br/>
        <Link to="/">Retourner à l'accueil</Link>
    </>
  )
}
