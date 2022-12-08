import { useState } from 'react';
import {FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import reviews from './ReviewData';

function ContentSlot4 () {

        const [index,setIndex] = useState(0);
        const {description, date, personName, personDescription, img, alt} = reviews[index];
        const [touchPosition, setTouchPosition] = useState(null);
        
        const checkNumber = (number) => {
            if (number > reviews.length -1){
                return 0
            }
            if (number < 0) {
            return reviews.length -1
            }
            return number;
        };


        const nextPerson = () => {
            setIndex((index)=> {
            let newIndex = index + 1;
            return checkNumber(newIndex);
            });
        };

        const prevPerson = () => {
            setIndex((index)=> {
            let newIndex = index - 1;
            return checkNumber(newIndex);
            });
        }

        const handleTouchStart = (e) => {
          const touchDown = e.touches[0].clientX
          setTouchPosition(touchDown)
        }

        const handleTouchMove = (e) => {
          const touchDown = touchPosition

          if(touchDown === null){
            return
          }

          const currentTouch = e.touches[0].clientX
          const diff = touchDown - currentTouch

          if(diff > 5) {
            nextPerson()
          }

          if(diff < -5){
            prevPerson()
          }

          setTouchPosition(null)
        }


 


    return(
        
    <section className="testimonial section container">
        <h2 className='section__title'>WHAT DO OUR CUSTOMERS THINK</h2>
        <div className="testimonial__container grid">
          <div className="testimonial-swiper">
          
              <div className="testimonial__card" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                <div className="testimonial__quote">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial__description">{description}</p>
                <h3 className="testimonial__date">{date}</h3>

                <div className="testimonial__perfil">
                  <img src={img}
                  alt={alt} 
                  className="testimonial__perfil-img"/>

                  <div className="testimonial__perfil-data">
                    <span className="testimonial__perfil-name">{personName}</span>
                    <span className="testimonial__perfil-detail">{personDescription}</span>
                  </div>
                </div>
              </div> 
         
         <div className='button-container'>

            <button className="button-prev" onClick={prevPerson}>
                <FaChevronLeft />
            </button>  
        
            <button className="button-next" onClick={nextPerson}>
              <FaChevronRight />
            </button>        
         </div>

        </div>
           <div className="testimonial__images">
            <div className="testimonial__square"></div>
            <img
              src="images/testimonial.png"
              alt=""
              className="testimonial__img"
            />
          </div>
        </div> 
    </section>
    
    
    );
};

export default ContentSlot4;