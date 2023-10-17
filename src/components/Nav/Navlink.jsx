import React from 'react'
import { Link } from 'react-router-dom'
export const Navlink = () => {
  return (
    <>
    <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/Game">Game</Link>
          <Link to="/eshop">E-shop</Link>
          <Link to="/MonCompte">Mon compte</Link>
        </ul>
    </nav>
    </>
  )
}
