import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, image, title, price}) {

    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="CheckoutProduct">
            <div className="productch1">
                
                <p className= "checkoutProduct_title">{title}</p>
                <div>
                    <img className= "checkoutProduct_image" src={image} alt="" />
                </div>
            </div>      
            <div className= "checkoutProduct_info">     
                <p className= "checkoutProduct_price">$ <strong>{price}</strong></p>
                <button onClick= {removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
