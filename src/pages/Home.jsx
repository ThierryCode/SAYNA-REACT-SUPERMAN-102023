import React from 'react'
import facebook from '../assets/icones/facebook.png'
import instagram from '../assets/icones/instagram.png'
import twitter from '../assets/icones/twitter.png'
import SupermanImg2 from "../assets/image/img2.png"
import SupermanImg41 from "../assets/image/img41.png"
import SupermanImg4 from '../assets/image/img4.png'
import img5 from '../assets/image/img5.png'
import img6 from '../assets/image/img6.png'
import img7 from '../assets/image/img7.png'
import img8 from '../assets/image/img8.png'
import img9 from '../assets/image/img9.png'
import img10 from '../assets/image/img10.png'
import img12 from '../assets/image/img12.png'
import flechGauche from '../assets/icones/Polygon-1.png'
import flechDroite from '../assets/icones/Polygon.png'
export const Home = () => {
  return (
    <>
        <div className="HeaderHome">
          <div className="IntroHome">
            <div className="ResSocIcone">
                <img src={facebook} alt="iconefacebook" display="block"/>
                <img src={instagram} alt="iconeinstagram" display="block"/>
                <img src={twitter} alt="iconetwitter" display="block"/>
            </div>
              <div className="Dclogo">
              </div>
            <div className="Textintro">
              <h1 className='introText'>
                <span>SUPERMAN</span>
                 <br />
                <p>L’HOMME D’ACIER</p>
              </h1>
            </div>
          </div>
        </div>
       {/* Section Cinema  */}
    <section className="contenu">
        <h2>SUPERMAN AU CINÉMA</h2>
        <p className="presentation">Dans la version actuelle de son histoire, Superman est né sur la planète Krypton sous le nom de « Kal-El ». Encore bébé, il fut placé dans un vaisseau spatial par son père, le scientifique Jor-El, et sa mère, Lara, car la planète était sous la menace d'une destruction totale.Le vaisseau quitta Krypton juste avant l'explosion fatidique... Au terme d'un très long voyage, il atterrit sur la planète Terre. Kal-El est trouvé par un couple de fermiers de Smallville, (Kansas). Jonathan et Martha Kent, qui n'ont pas d'enfant, décident alors de l'adopter et de garder le secret sur son origine.
Kal-El est rebaptisé « Clark Joseph Kent » et grandit entouré de ses amis Lana Lang (son premier amour) et Pete Ross jusqu'à ce que ses pouvoirs se révèlent à lui au moment de son adolescence.Jeune adulte, Clark décide de s'installer à Metropolis pour devenir journaliste. Il y est engagé par Perry White, le rédacteur en chef du Daily Planet. Pour sauver les personnes qui lui sont chers ainsi que les habitants de la Terre, Clark revêt son costume et devient Superman, l’homme d’acier aux yeux du monde.
</p>
        <div className="carte">
            <div className="infoCard">
                <img src={SupermanImg2} alt="Superman"/>

            </div>
            <div className="infoCard">
                <img src={SupermanImg41} alt="Superman"/>

            </div>
            <div className="infoCard">
                <img src={SupermanImg4} alt="Superman"/>

            </div>
        </div>
        <div className="imageBatarang">
            <img src="assets/Illustrations/Bathome13.png" alt=""/>
        </div>
        <h2>NÉMÉSIS</h2>
        <p className="presentation">Superman mène une lutte sans fin contre de nombreux adversaires, 
        son adversaire le plus connu étant le milliardaire Lex Luthor, fils de Lionel Luthor, qui déteste 
        tout ce qu'incarne Superman et finira notamment par devenir président des États-Unis, ce qui 
        participera à faire de lui le pire ennemi de Clark. Doomsday, une abomination génétique qui 
        souhaite tout détruire sur son passage, sera celui qui réussira à tuer Superman. Zod est un 
        kryptonien qui fut condamné à l'emprisonnement dans la Zone Fantôme pour s'être insurgé contre 
        les autorités. Il est libéré et vient sur Terre pour la conquérir mais est arrêté par Superman. 
        Étant kryptonien, Zod possède les mêmes pouvoirs que Superman, et constitue donc l'un de ses plus 
        dangereux adversaires.</p>
        <div className="carte">
            <div className="infoCard">
                <img src={img5} alt=""/>
            </div>
            <div className="infoCard">
                <img src={img6} alt=""/>
            </div>
            <div className="infoCard">
                <img src={img7} alt=""/>
            </div>
        </div>
        <div className="imageBatman">
            <img src="assets/Illustrations/Bathome12.png" alt=""/>
        </div>
        <h2>Alliés</h2>
        <p className="presentation">Jor-El était le père biologique de Kal-El, ainsi que le savant 
        le plus célèbre de Krypton et un membre influent du Conseil des Sciences. Lorsque 
        Krypton s’effondre il place une version impuissante de lui même dans le vaisseau emportant Kal-El 
        vers la Terre afin de lui apporter les réponses à ses questions quand il grandira. Sur Terre Clark 
        est pris en charge par Jonathan et Martha Kent qui l’élèvent comme leur propre fils. Lorsque John sera 
        mort, Clark pourra compter sur  le soutien indéféctible de sa mère. Une fois engagé au Daily Planet,
         il rencontrera Loïs 
        Lane qui deviendra sa partenaire et son seul “véritable amour”</p>
        <div className="carte">
            <div className="infoCard">
                <img src={img8} alt=""/>
            </div>
            <div className="infoCard">
                <img src={img9} alt=""/>
            </div>
            <div className="infoCard">
                <img src={img10} alt=""/>
            </div>
        </div>
        <div className="BatVsup">
            <h2>BATMAN V SUPERMAN</h2>
            <p className="presentation">Le monde n’est pas assez grand pour deux super héros. 
            Alors que Superman se battait contre Zod, l’affrontement fait des dégats et détruit 
            partiellement la ville de Métropolis. Bruce Wayne alors présent dans la ville assiste, 
            impuissant, à l’effondrement de la ville qui fait beaucoup de victimes. Wayne est 
            alors persuadé que Superman causera un jour la perte de l'Humanité et qu'il est 
            inévitable de se préparer à l'éliminer. Devenu méfiant il se demande si l'homme de fer, 
            cet extraterrestre de Krypton, qui peut à lui seul détruire le monde d'une simple pichenette, 
            décidera un jour de ne plus défendre la Terre, voire même de causer sa perte. 

            De son côté Superman d’une part cherche à se défendre mais retourne l’offensive contre Batman. 
            Ce dernier n'est plus que l'ombre de lui-même. Devenu un justicier impitoyable, mégalomane et cruel 
            à la suite du meurtre de son ancien partenaire Robin par le Joker, il n'hésite plus à violer son code
            moral en éliminant et marquant au fer les criminels. Superman souhaite simplement lui rappeler 
            le code moral des “justicier” en usant de la force s’il le faut pour que Batman cesse son comportement abusif.
            </p>
        </div>
    </section>
     {/* Section Cinema 
     Section multimédia  */}
    <section className="multimedia">
        <h2>Multimédia</h2>
        <div className="content">
            <div className="flecheGauche">
                <img src={flechGauche} alt=""/>
            </div>
            <div className="card">
                <div className="imagecard">
                    <img src={img12} alt=""/>
                </div>
                <div className="contentCard">
                    <h3>Action, Adventure</h3>
                    <h4>Superman Man of Steel</h4>
                    <h5>IMDB: <span>8.2</span></h5>
                    <p>Clark Kent, malgré son apparence humaine normale, est l'un des derniers 
                        membres d'une race éteinte. Il se retrouve forcé de révéler son identité 
                        lorsque la Terre est envahie par une armée de survivants qui 
                        menacent détruire la planète.</p>
                </div>
            </div>
            <div className="flecheDroite">
                <img src={flechDroite} alt=""/>
            </div>
        </div>
        <div className="bandeAnnonce">
            <img src="assets/Illustrations/Bathome_ba2.png" alt=""/>
        </div>
    </section>
     {/* Fin Section multimédia 
     Section formulare de contact  */}
<section className="FormulaireDeContact">
    <h2>Prenons contact</h2>
    <form>
        <label htmlFor="email">Adresse Email</label><br />
        <input type="text" className="inputmail" id="email" placeholder="Adresse email" /><br />
        <label>Newsletter</label><br />
        <p>En cochant cette case, vous acceptez de recevoir l'actualité concernant les aventures de Batman : <input type="checkbox" name="newsletter" id="newsletter" /></p>

        <input className="inputmail" placeholder="Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter" />
        <input className="inputmail" placeholder="Souhaitez-vous recevoir des news" />
        <div className="formBoutons">
            <button>Des Films</button>
            <button>Des comics</button>
            <button>De tout</button>
        </div>
        <label htmlFor="message">Message</label><br />
        <textarea name="message" id="message" className="inputmail" placeholder="Laissez un commentaire pour la communauté"></textarea>
        <div className="boutons">
            <button type="submit"><a href="#">Confirmer</a></button>
        </div>
    </form>
</section>
     {/* Fin section formulare de contact 
     Section Réplique  */}
    <section className="replique">
        <div className="containerReplique">
            <div className="guillemetGauche">
                <img src="assets/Logos/icon_guillemets_1.png" alt=""/>
            </div>
            <div className="repliquePhrase">
                <p>Que représente le S ?</p>
                <div className="lastPara">
                    <p>
                        T- Ce n’est pas un S. Sur ma planète cela signifie espoir.Man Of Steel, Lois Lane et Clark Kent.
                    </p>
                </div>
            </div>
            <div className="guillemetDroite">
                <img src="assets/Logos/icon_guillemets_2.png" alt=""/>
            </div>
        </div>
    </section>
     {/* Fin section Réplique 
     section Footer  */}
    </>
  )
}
