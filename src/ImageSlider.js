import React, {useState} from 'react'
import './ImageSlider.css'
import RC1 from './images/carousel images/RC1.png'
import RC2 from './images/carousel images/RC2.png'
import RC3 from './images/carousel images/RC3.png'
import RC4 from './images/carousel images/RC4.png'
import RC5 from './images/carousel images/RC5.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';


const ImageSlider = () => {
    
    let slides = [{image:RC1},{image:RC2},{image:RC3},{image:RC4},{image:RC5}]  
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

          <section className='slider'>
            
            <button className='left-arrow' onClick={prevSlide}>
              <ArrowBackIcon className="arrow_icon"/>
            </button>       
            
            {slides.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt=' ' className='image' />
                )}
              </div>
            );
            })}

            <button className='right-arrow' onClick={nextSlide}>
              <ArrowForwardIcon className="arrow_icon"/>
            </button>

        </section>

    )
}

export default ImageSlider





