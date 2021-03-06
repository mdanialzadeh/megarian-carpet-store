import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';



function Subtotal() {
    const history = useHistory()
    const [{ basket }] = useStateValue();


    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) =>(
                <>
                    <span className="total">
                        Subtotal:<strong>{value}</strong>
                    </span>
                </>
            )}
            decimalScal={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
            prefix={"$"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
