import React from 'react'
import { Outlet } from 'react-router-dom'
export const Moncompte = () => {
  return (
    <>
    <div className="MonComte">
    <div className="HeaderEshop">
          <div className="IntroEshop">
            <div className="ResSocIcone">
                {/* <img src={facebook} alt="iconefacebook" display="block"/>
                <img src={instagram} alt="iconeinstagram" display="block"/>
                <img src={twitter} alt="iconetwitter" display="block"/> */}
            </div>
            <div className="Textintro">
              <h1 className='introText'>
                <span>Envie d'un slip jaune</span>
              </h1>
            </div>
          </div>
        </div>
    <Outlet />
    </div>
    
    </>
  )
}
