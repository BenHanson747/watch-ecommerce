import AddToCartButton from "./AddToCartButton";
import product from "./ProductData";

function HeroProduct() {
  const renderBasedOnID = product.filter((item) => item.id === 1);

  return (
    <section className="home" id="home">
      {renderBasedOnID.map((heroItem) => {
        const { id, img, alt, title, series, brand, price } = heroItem;
        return (
          <div key={id} className="home__container container grid">
            <div className="home__img-bg">
              <img src={img} alt={alt} className="home__img" />
            </div>
            <div className="home__data">
              <h1 className="home__title">
                Pure Excellence. <br />
                {title} from {brand}
              </h1>
              <p className="home__description">
                Beautifully designed. Explore the {title} watch now, part of the{" "}
                {series} range, from {brand}.
              </p>
              <span className="home__price">
                £
                {price.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </span>
              <div className="home__btns">
                <a href="#" className="button button--gray button--small">
                  Discover
                </a>
                <AddToCartButton cartData={heroItem} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
export default HeroProduct;
