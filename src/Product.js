import React, {useState} from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import LazyLoad from 'react-lazyload';

function Slider (images)  {
  
    let slides = (images.image)
  
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }

    return (
          
          <section className='gallery'>
            
            <button className='leftarrow' onClick={prevSlide}>
              <ArrowBackIcon className="arrowicon"/>
            </button>       
            <LazyLoad>
            {slides.map((slide, index) => {
            return (
              
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt=' ' className='imagey' />
                )}
              </div>
              
            );
            })}
</LazyLoad>
            <button className='rightarrow' onClick={nextSlide}>
              <ArrowForwardIcon className="arrowicon"/>
            </button>

        </section>
        
    )
}


function Product({id, title, image, description, price}) {

        const [state, dispatch] = useStateValue();

        const addToBasket = () => {
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id:id,
                    title: title,
                    image: image[0],
                    price: price,
                }
            })
        }
    return (
        <div className="product">
            <title>{title}</title>
    
            <div className="product_imageSlider">
                {Slider({image})}
            </div>
            
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
