import { FiWatch } from "react-icons/fi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";
import DarkTheme from "./DarkMode";
import ShoppingCart from "./ShoppingCart";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeaderBackground(window.scrollY >= 50);
    });
  }, []);

  return (
    <header
      className={headerBackground ? "header scroll-header" : "header"}
      id="header"
    >
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <FiWatch />
          Rolex
        </a>

        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link active-link"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#featured" className="nav__link" onClick={toggleMenu}>
                Featured
              </a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link" onClick={toggleMenu}>
                Products
              </a>
            </li>
            <li className="nav__item">
              <a href="#new" className="nav__link" onClick={toggleMenu}>
                New
              </a>
            </li>
          </ul>

          <div className="nav__close" onClick={toggleMenu}>
            <IoCloseCircleSharp />
          </div>
        </div>

        <div className="nav__btns">
          <DarkTheme />
          <ShoppingCart />
          <div className="nav__toggle" onClick={toggleMenu}>
            <AiOutlineMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
