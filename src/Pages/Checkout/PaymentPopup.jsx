import React, { useContext, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { CartContext } from "../../Context API/CartContext";
import "./PaymentPopup.css";
import { useNavigate } from "react-router-dom";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";

const PaymentPopup = (props) => {
  const { totalCartValue } = useContext(CartContext);
  const navigate = useNavigate();

  const { onPay, onClose } = props;
  return (
    <div className="payment-layout">
      <div className="payment-heading">
        <div>
          <h2>Payment Method</h2>
          <p>Select you preferred payment method</p>
        </div>
        <MdOutlineCancel className="cancel-btn" onClick={() => onClose()} />
      </div>
      <h3>Recommended</h3>
      <label className="pay-method" htmlFor="upi">
        <div className="pay-method-layout">
          <input type="radio" name="payment" id="upi" required />
          <div>
            <label htmlFor="upi">Pay by any UPI App</label>
            <p>Google Pay, PhonePe, Paytm and more</p>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-upi-logo-icon-svg-download-png-1747946.png?f=webp&w=512"
            alt=""
            width={"45px"}
          />
        </div>
      </label>
      <h3>Other Options</h3>
      <label className="pay-method" htmlFor="emi">
        <div className="pay-method-layout">
          <input type="radio" name="payment" id="emi" required />
          <div>
            <label htmlFor="emi">EMI Options</label>
            <p>
              {totalCartValue >= 100000 ? (
                <span className="available">Available for this payment.</span>
              ) : (
                <span className="unavailable">
                  Unavailable for this payment.
                </span>
              )}
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/16432/16432150.png"
            alt=""
            width={"40px"}
          />
        </div>
      </label>
      <label className="pay-method" htmlFor="net-banking">
        <div className="pay-method-layout">
          <input type="radio" name="payment" id="net-banking" required />
          <div>
            <label htmlFor="net-banking">Net Banking</label>
          </div>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4519/4519104.png"
            alt=""
            width={"35px"}
          />
        </div>
      </label>
      <label className="pay-method" htmlFor="cod">
        <div className="pay-method-layout" >
          <input type="radio" name="payment" id="cod" required />
          <div>
            <label htmlFor="cod">Cash on Delivery / Pay on Delivery</label>
            <p>Cash, UPI, cards accepted.</p>
          </div>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/6491/6491490.png"
            alt=""
            width={"40px"}
          />
        </div>
      </label>
      <button onClick={() => onPay()} type="submit">
        Pay
      </button>
    </div>
  );
};

export default PaymentPopup;
