import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../Context API/CartContext";
import PaymentPopup from "./PaymentPopup";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { totalCartValue } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const onSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="place-order-cont">
        <form className="place-order" onSubmit={onSubmitForm}>
          <div className="place-order-left">
            <p className="title">Delivery Information</p>
            <div className="multi-fields">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="multi-fields">
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Phone" />
            </div>
            <input type="text" placeholder="Address" />
            <div className="multi-fields">
              <input type="text" placeholder="Landmark" />
              <input type="text" placeholder="Pin code" />
            </div>
          </div>
          <div className="place-order-right">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="card-total-details">
                  <p>Subtotal</p>
                  <p>₹{totalCartValue}</p>
                </div>
                <hr />
                <div className="card-total-details">
                  <p>Delivery Fee</p>
                  <p>₹{totalCartValue === 0 ? 0 : 80}</p>
                </div>
                <hr />
                <div className="card-total-details">
                  <b>
                    <p>Total</p>
                  </b>
                  <b>
                    <p>₹{totalCartValue === 0 ? 0 : totalCartValue + 80}</p>
                  </b>
                </div>
                <hr />
              </div>
              <button onClick={() => setShowPopup(true)}>
                Proceed to Payment
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {/* Traditional method to show and diapppear a component in react, now we use conditional rendering using the Logical AND(&&) operator to implement this logic */}
        {showPopup && (
          <div className="overlay">
            (
            <PaymentPopup
              onPay={() => {
                setShowPopup(false);
                navigate("/order-place");
              }}
              onClose={() => {
                setShowPopup(false);
              }}
            />
            )
          </div>
        )}

        {/* 
          Show popup → "Render the component"
          Hide popup → "Unmount/remove the component from the UI"
          Technique used → "Conditional rendering with state(Usestate)"

          Q.define Conditional Rendering in React?
          Ans: Conditional Rendering is a technique in React where components Or UI elements are displayed or hidden based on a condition.
          In Simple words: Recats checks a condition, If the condition is true, it renders the component, If the condition is false, it doesn't render the component.

        */}

        {/* This is advance and more logical method for conditional redering with ternary operator */}
        {/* {showPopup ? (
          <PaymentPopUp
            onPay={() => {
              alert("Payment Successful");
              setShowPopup(false);
              navigate("/order-place");
            }}
            onClose={() => {
              setShowPopup(false);
            }}
          />
        ) : null} */}
      </div>
    </>
  );
};

export default Checkout;
