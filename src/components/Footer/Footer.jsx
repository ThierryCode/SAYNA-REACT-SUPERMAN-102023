import React from 'react'
import iconX from "../../assets/icones/icon_x.png";
import iconDC from "../../assets/icones/icon_DC.png";
import iconSayna from "../../assets/icones/logo_sayna_white.png";
import iconWB from "../../assets/icones/icon_WB.png";
import facebook from "../../assets/icones/facebook.png";
import instagram from "../../assets/icones/instagram.png";
import Twitter from "../../assets/icones/twitter.png";
export const Footer = () => {
  return (
    <footer id="footer">
    <div className="warnerBrosLastPara">
        <div className="warnerBros">
            <img src={iconWB} alt=""/>
        </div>
        <p>Ce projet respecte l’univers cinématographique des films Superman.
        </p>
    </div>
    <div className="Icones">
        <img src={iconSayna} alt="Logo Sayna"/>
        <img src={iconX} alt="Icon x"/>
        <img src={iconDC} alt="Icone DC"/>
        <img src={facebook} alt="icone facebook"/>
        <img src={instagram} alt="Icon instagram"/>
        <img src={Twitter} alt="Icone twitter"/>
    </div>
</footer>
  )
}
