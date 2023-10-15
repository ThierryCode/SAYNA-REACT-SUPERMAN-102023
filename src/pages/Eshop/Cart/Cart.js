import React, {useContext} from 'react'
import { PRODUCTS } from '../../../products';
import { shopContext } from '../../../context/shopContext';
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const Cart = () => {
  const {cartItems, getSousTotal} = useContext(shopContext);
  const total = getSousTotal();
  const retour = useNavigate()
  return (
    <>
        <div className="cart">
            <h3>Récapitulatif du panier</h3>

              {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0){
                  return <CartItem data={product}/>
                }
                })}
          
          <div className="subTotal">
            <p>SOUS TOTAL <b>{total} $</b></p>
          </div>
          {total > 0 ? (
          <div className="cartButton">
                <button onClick={()=>retour("/Eshop")}>Continuer mes achats</button>
                <button><Link to = "/eshop/commandes" >Passer la commande</Link></button>
          </div>) : (<div className="cartButton">
            <h4>Vous n'avez pas passé de commande</h4>
            <button onClick={()=>retour("/Eshop")}>Revenir au Catalogue</button>
            </div>
            )}
        </div>
    </>
  )
}