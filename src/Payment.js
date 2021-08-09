import React from 'react'
import './Payment.css'
import { useStateValue} from "./StateProvider"
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();


    return (
        <div className="payment">
            <div className='payment_container'>
                <h1>
                    CheckOut (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
                <div className= 'payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className='payment_adress'>
                        <p>{user?.email}</p>
                        <p>123 adress lane</p>
                        <p>New york, NY</p>
                    </div>
                </div>
                <div className= 'payment_section'>
                    <div className='payment_title' >
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item =>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image.image}
                            price={item.price} />
                        ))}
                    </div>

                </div>
                <div className= 'payment_section'>
                    <div className='payment_title'>
                            <h3>payment Method</h3>
                    </div>
                    <div className="payment_details">

                    </div>

                </div>
            </div>    
        </div>
    )
}

export default Payment
