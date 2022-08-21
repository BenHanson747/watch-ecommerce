import { useMemo } from "react";
import AddToCartButton from "./AddToCartButton";
import product from "./ProductData";



function ContentSlot2 () {

const filteredItems = product.filter((item) => item.type === 'featured');

    return (

        <section className="featured section container" id="featured">
        <h2 className="section__title">Featured</h2>
        <div className="featured__container grid">

        {filteredItems.map((featuredItem)=>{
            const {id, img, alt, title, brand, price} = featuredItem;
            return(
        
          <article className="featured__card" key={id}>
            <span className="featured__tag">Sale</span>

            <img src={img} alt={alt} className="featured__img" />

            <div className="featured__data">
              <h3 className="featured__title">{title}</h3>
               <span className="featured__price">{brand}</span>
              <span className="featured__price">£{price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
            </div>

            <AddToCartButton cartData={featuredItem}/>
          </article>
       
            )
        })}
         </div>
      </section>
    );
};

export default ContentSlot2;