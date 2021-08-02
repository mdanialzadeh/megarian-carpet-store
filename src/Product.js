import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'


function Product({id, title, image, description, price}) {

        const [state, dispatch] = useStateValue();

        const addToBasket = () => {
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id:id,
                    title: title,
                    image: image,
                    price: price,
                }
            })
        }

    return (
        <div className="product">
            <title>{title}</title>
            <img src={image} alt=" " className= "product_image"/>
            <div className= "Product_info">
                <p className= {description}>This is a carpet</p>
               
            <p className= "product_price">
                <small>$</small>
                <p>{price}</p>
            </p>
                <button className= "basketbtn" onClick={addToBasket}>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product;
