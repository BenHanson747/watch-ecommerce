  import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
    
function Footer() {
  return (
  <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <h3 className="footer__title">Our information</h3>

          <ul className="footer__list">
            <li>1234 - UK PLACE</li>
            <li>UK CITY</li>
            <li>123-456-789</li>
          </ul>
        </div>
        <div className="footer__content">
          <h3 className="footer__title">About Us</h3>

          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">Deliveries & Returns</a>
            </li>
            <li>
              <a href="#" className="footer__link">Customer Support</a>
            </li>
            <li>
              <a href="#" className="footer__link">About Us</a>
            </li>
            <li>
              <a href="#" className="footer__link">Copy Right</a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Categories</h3>

          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">Home</a>
            </li>
            <li>
              <a href="#" className="footer__link">Featured</a>
            </li>
            <li>
              <a href="#" className="footer__link">Products</a>
            </li>
            <li>
              <a href="#" className="footer__link">New</a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Social</h3>

          <ul className="footer__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer__social-link"
            >
              <FaFacebook />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              className="footer__social-link"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer__social-link"
            >
              < FaInstagram />
            </a>
          </ul>
        </div>
      </div>

      <span className="footer__copy">&#169; Ben Hanson. All rigths reserved</span>
    </footer>  );
}


    

    export default Footer;