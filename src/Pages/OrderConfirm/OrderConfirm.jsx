import "./OrderConfirm.css";
import { CartContext } from "../../Context API/CartContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";


const OrderConfirm = () => {
  const { setCartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const date = new Date();
  date.setDate(date.getDate() + 4);

  const trackingId = Math.random().toString(36).substring(2, 13).toUpperCase();

  useEffect(() => {
    setCartItems([]);
  }, []);

  return (
    <>
      <main className="order-confirmation-content">
        <div className="Confirm-order">
          <div className="heading">
            <h1>
              Thank You For Your Order!
              <br /> Your order has been placed successfully and is being processed.
            </h1>
          </div>
          <div className="confirmation">
              <FaCheckCircle className="success-icon" />
            <h3>
              Order Placed Successfully
            </h3>
            <p>Payment: <span>UPI</span></p>
            <p>Order Status: <span>Processing</span></p>
            <p>Your order is arriving on <span>{date.toLocaleDateString("en-GB")}</span>.</p>
            <p>
              Your tracking id is: <span className="tracking-id">{trackingId}</span>, keep it a
              reference for tracking your Order.
            </p>
            <div className="btn-div">
              <a href="www.e-commerce/order/tracking?orderId=${trackingId}" className="track-link">
                Track here »
              </a>
              <button onClick={() => navigate("/")}>Keep Shopping</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderConfirm;
