import { useNavigate, Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { useContext, useState } from "react";
import { CartContext } from "../../Context API/CartContext";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

/**
 * never put Navbar or Footer inside every page components
 * No need need to put it on every singe page instead move to App Component above all Routes
 * Because :
 *  Navbar, Footer appears on all pages
 *  You write them only once and easier maintenance
 */

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [showMobileView, setShowMobileView] = useState(false);
  const navigate = useNavigate();
  console.log(showMobileView);
  return (
    <nav className="my-navbar">
      <Link to="/" className="my-heading">
        {/* <HiMiniShoppingBag className="icon" /> */}
        <img src="/shopping-bag.png" alt="" className="icon" />
        <h1>E-Commerce</h1>
      </Link>

      <ul className="nav-list">
        <li className="my-list">
          <p>Products</p>
        </li>
        <li className="my-list">
          <p>Contacts</p>
        </li>
        <li className="my-list">
          <IoIosCart className="cart-logo" onClick={() => navigate("/cart")} />
          <span>{cartCount === 0 ? <span></span> : cartCount}</span>
        </li>
        <li className="my-list">
          <FaUserCircle className="user-icon" />
        </li>
      </ul>
      <div className="mobile-menu-container">
        <span className="mobile-cart-icon">
          <IoIosCart className="cart-logo" onClick={() => navigate("/cart")} />
          <span>{cartCount === 0 ? <span></span> : cartCount}</span>
        </span>
        <img
          src="/explore-menu.svg"
          alt="explore-menu"
          className="explore-menu"
          onClick={() => setShowMobileView(!showMobileView)}
        />
      </div>
      {showMobileView === true ? (
        <ul className="mobile-nav-list">
          <li className="my-list">
            <p>Products</p>
          </li>
          <li className="my-list">
            <p>Contacts</p>
          </li>
        </ul>
      ) : (
        null
      )}
    </nav>
  );
};

export default Navbar;
