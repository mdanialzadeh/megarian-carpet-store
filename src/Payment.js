import React, { useState, useEffect } from 'react'
import './Payment.css'
import { useStateValue} from "./StateProvider"
import CheckoutProduct from './CheckoutProduct'
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';


function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();
    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

    const [succeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("")


    useEffect (() => {
        const getClientSecret = async () => {
            const response = await axios({
                method:'post',
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.thousandSeparator.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log("the secret is ", clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceded(true);
            setError(null);
            setProcessing(false)

            history.replaceState('/orders')
        })

    }

    const handleChange = event => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }

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
                            <form className="form">
                                <CardElement onChange={handleChange} />
                                <div className= "payment_priceContainer">
                                    <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    thousandSeparator={true}
                                    displayType={"text"}
                                    prefix={"$"}
                                    />
                                    <button disable={processing || disabled || succeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>
                            </form>
                    </div>

                </div>
            </div>    
        </div>
    )
}

export default Payment
