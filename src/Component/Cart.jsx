import React from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckoutModule from "react-stripe-checkout";
function Cart({ cart, increaseqty, decreaseqty, removeFromCart, token }) {
  const StripeCheckout = StripeCheckoutModule.default;
  const totalPrice = cart.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );
  const navigate = useNavigate();
  return (
    <div className="cart-page">
      {cart.length === 0 ? (
        <p>
          <b>Cart is empty</b>
        </p>
      ) : (
        <div>
          <div className="c_head">
            <h2>Your Cart</h2>
          </div>
          <div className="cards">
            {cart.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt="" />
                <div className="body">
                  <p className="name">{item.name}</p>
                  <p>Category: {item.category}</p>
                  <p>{item.review}</p>
                  <p>{item.desc}</p>
                  <p className="price">Rs.{item.price}</p>
                  <div className="qty">
                    <button onClick={() => decreaseqty(item)}>-</button>
                    <p>{item.qty}</p>
                    <button onClick={() => increaseqty(item)}>+</button>
                  </div>
                  <p>
                    <b>Subtotal: Rs.{item.price * item.qty}</b>
                  </p>
                  <div className="btns">
                    <button onClick={() => navigate("/")}>Back to home</button>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="paycart">
            <h2>Cart Price : Rs.{totalPrice}</h2>
            <StripeCheckout
              token={token}
              stripeKey="pk_test_51NqsGdSEnDx41uiAy91YixIr2Oa4csspmLIFWFuYRsQmQDnUQfqUi78bCNTmIm8gmdAePgxV4LvW4a4BR3aASFfu00kVsnIvNN"
              amount={totalPrice * 100}
              name="Payment"
              currency="INR"
            >
              <button>Place Your Order</button>
            </StripeCheckout>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
