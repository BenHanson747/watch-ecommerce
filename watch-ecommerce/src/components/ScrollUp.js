import { useState, useEffect } from 'react';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';

function ScrollUp () {

const [scrollUp, setScrollUp] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", () =>{
      setScrollUp(window.scrollY >= 350);
  });
}, [])

    return(
    <a href="#" className={scrollUp ? "scrollup show-scroll" : "scrollup"}>
        <BsFillArrowUpSquareFill className='scrollup__icon'/>
    </a>
    );
};

export default ScrollUp;