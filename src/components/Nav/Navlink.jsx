import React from 'react';
import { Link } from 'react-router-dom';
import logoBlanc from '../../assets/logos/logo_blanc.png';

export const Navlink = () => {
  return (
    <>
      <nav className="ContainerNavLogo navbar navbar-expand-lg  container d-flex justify-content-between">
        <div className="logo navbar-brand">
          <img src={logoBlanc} alt="logo" />
        </div>
        <button class="navbar-toggler toggleIcon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className=" NavBarMenu navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
              <li className="nav-item navLinkItem">
                <Link className="nav-link text-light" to="/">Home</Link>
              </li>
              <li className="nav-item navLinkItem">
                <Link className="nav-link text-light" to="/Game">Game</Link>
              </li>
              <li className="nav-item navLinkItem">
                <Link className="nav-link text-light" to="/eshop">E-shop</Link>
              </li>
              <li className="nav-item navLinkItem">
                <Link className="nav-link text-light" to="/MonCompte">Mon compte</Link>
              </li>
            </ul>
        </div>
      </nav>
    </>
  );
};