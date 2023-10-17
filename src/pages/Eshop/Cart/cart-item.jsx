import React,{useContext} from 'react'
import { shopContext } from '../../../context/shopContext';
export const CartItem = (props) => {
    const {id, name, price, imageProduct} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCart} = useContext(shopContext);
    const deleteCartItem = (itemId) => {
        const item = this.cartItems.find((item) => item.id === itemId);
        if (item) {
          this.cartItems.splice(this.cartItems.indexOf(item), 1);
          updateCart();
        }
      };
  return (
    <div className="cartItems">
        <div className='cartItem'>
            <div className="ProductImage">
                <img className= "imageCarte"src={imageProduct} alt="Produit" />
            </div>
            <div className="description">
                <div className="productDescription">
                <p>
                    <b>{name}</b>
                </p>
                </div>
                <div className="productPrice">
                    <p>${price}</p>
                </div>
            </div>
            <div className="countArticle">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input className="inputCount" value={cartItems[id]} onChange={(e)=>updateCart(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
            <div className="delBtn" onClick={() => deleteCartItem(id)}>
                <p> x </p>
            </div>
        </div>

    </div>
  )
}
