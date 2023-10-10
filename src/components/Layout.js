import React from 'react';
import {Outlet} from 'react-router-dom';
import { Navlink } from './Nav/Navlink';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
export const Layout = () => {
  return (
    <>
    <Header />
    <Navlink />
    <Outlet />
    <Footer />
    </>
  )
}
