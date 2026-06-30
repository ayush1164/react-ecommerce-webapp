import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context API/CartContext";
import "./DisplayProducts.css";

const DisplayProducts = (props) => {
  const { addToCart } = useContext(CartContext);
  const { product } = props;

  // console.log("product display");

  /*  move this logic in cart context as global state
  // receive product object asa a parameter
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    // javascript considere object as truthsy therefore we used it in if blocks, if existingItem is found the if declare it true thats the if blocks run because the condn is satisfied
    if (existingItem) {
      const updateCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

      setCartItems(updateCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };
  */

  return (
    <li className="card">
      <div className="img-cont">
        <img
          src={product.imageUrl}
          alt="product-img"
          className="product-img"
          loading="lazy"
        />
      </div>
      <div className="info">
        <p>Product: {product.title}</p>
        <p>Price: ₹{product.price}</p>
        <p>Category: {product.category}</p>
        <div>
          <Link to="/cart">
            <button className="btn btn-shop" onClick={() => addToCart(product)}>
              Buy Now
            </button>
          </Link>
          <Link to="/cart">
            <button className="btn btn-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default DisplayProducts;

/**
 
    const addToCart = (product) => {

      // find method return a object when the object find or match our condition and gave undefined when the condition not match or not find the
      const existingItem = cartItems.find(
          item => item.id === product.id
      );

      if(exitingItem){

      } else {
        
        setCartItems([...cartItem, {...product, quantity: 1}])
        
        }

      }

 */
