import { CartContext } from "../../Context API/CartContext";
import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./WishList.css";

const WishList = () => {
  const { wishListItems, addToCart, deleteFromWishList } =
    useContext(CartContext);

  const handleCart = (item) => {
    addToCart(item);
    deleteFromWishList(item);
  };
  return (
    <>
      <Navbar />
        <main className="wishlist-cont">
          <h1 className="wishlist-heading">WishList</h1>
          <ul className="wishlist-card-list">
            {wishListItems.map((item) => (
              <li key={item.id} className="wishlist-card">
                <div className="wishlist-img-cont">
                  <img
                    src={item.imageUrl}
                    alt="wishlist-img"
                    className="wishlist-img"
                  />
                </div>
                <div className="info">
                  <p>Product: {item.title}</p>
                  <p>Price: ₹{item.price}</p>
                  <div>
                    <button
                      className="cart-btn"
                      onClick={() => handleCart(item)}
                    >
                      Add back to cart
                    </button>
                    <button onClick={() => deleteFromWishList(item)} className="remove-btn">
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </main>
    </>
  );
};

export default WishList;
