import { useContext } from "react";
import { CartContext } from "../../Context API/CartContext";
import addIcon from "../../assets/add_icon_green.png";
import removeIcon from "../../assets/remove_icon_red.png";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import WishList from "../../Components/WishList/WishList";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    totalCartValue,
    cartCount,
    wishListItems,
    addToWishList,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const displayCartItems = (item) => {
    return (
      <li key={item.id} className="cart-card">
        <div className="cart-img-cont">
          <img src={item.imageUrl} alt="cart-img" className="cart-img" />
        </div>
        <div className="info">
          <p>Product: {item.title}</p>
          <p>Price: ₹{item.price}</p>
          <div className="cart-btns">
            <img src={removeIcon} alt="" onClick={() => removeFromCart(item)} />
            <p>{item.quantity}</p>
            <img src={addIcon} alt="" onClick={() => addToCart(item)} />
          </div>
          <div className="btn-cont">
            <button
              className="wishlist-btn"
              onClick={() => addToWishList(item)}
            >
              Wishlist+
            </button>
            <MdDelete
              onClick={() => deleteFromCart(item)}
              className="delete-btn"
            />
          </div>
        </div>
      </li>
    );
  };

  return (
    <>
      <main className="cart-page">
        <h1 className="cart-heading">My Cart</h1>
        <div className="main-cont">
          <div className="cart-cont">
            <ul className="list-cont">
              {cartItems.map((item) => displayCartItems(item))}
            </ul>
          </div>
          <div className="proceed-cont">
            <div className="cart-promocode">
              <div>
                <p>
                  If you have promo code, Enter it here for heavy discounts.
                </p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="promocode" />
                  <button>Submit</button>
                </div>
              </div>
            </div>
            <p>Items: ₹{totalCartValue}</p>
            <p>Delivery: ₹{totalCartValue === 0 ? 0 : 80}</p>
            <hr />
            <b>
              <p>Order Total: ₹{totalCartValue} </p>
            </b>
            <div>
              <button
                className="proceed-btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Buy ({cartCount} {cartCount > 1 ? "items" : "item"})
              </button>
            </div>
          </div>
        </div>
        {
          wishListItems.length > 0 && <hr className="hr-line" />
        }
        {
          wishListItems.length > 0 ? <WishList /> : <div></div>
        }
      </main>
    </>
  );
};

export default Cart;
