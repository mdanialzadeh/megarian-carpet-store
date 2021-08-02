import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';



function Subtotal() {
    const [{ basket },dispatch] = useStateValue();


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
            thousanSeperator={true}
            prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
