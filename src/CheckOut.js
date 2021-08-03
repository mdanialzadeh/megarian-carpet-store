import React from 'react'
import "./CheckOut.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function CheckOut() {
    const [{basket,user}, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <h2 className="checkout_title">
            {!user ? <p>Shopping Basket  ({basket.length} items)</p> : <p>{user?.email}'s' Shopping Basket  ({basket.length} items)</p>}
             
            </h2>
            <div className="columnHeaders">
                <p>Product</p>
                <p>image</p>
                <p>price per unit</p>
            </div>
            <div class="checkout_left">
                

                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    />
                ))}
                
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
    </div>
    )
}

export default CheckOut
