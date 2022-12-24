import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart, addCart } from "../redux/actions/productActions";
import { NavLink, useNavigate } from "react-router-dom";
import PaymentMethods from "./PaymentMethods";
import { removeSelectedProduct } from "../redux/actions/productActions";
import visa from "../images/visa.JPG";
import master from "../images/mastercard.png";
import paypal from "../images/paypal.JPG";
function Cart() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [num, setNumber] = useState(1);

  const removeProduct = (product, size) => {
    dispatch(deleteFromCart(product, size));
  };
  const addProduct = (product, number, size) => {
    dispatch(addCart(product, number, size));
  };
  const productsInCart = useSelector((state) => state.cart);
  const getSubtotal = (cart) => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].total;
    }
    return sum;
  };
  const orderTotal = getSubtotal(productsInCart);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order is placed successfully!");
    nav("/");
  };
  return (
    <div className="main-cart">
      {Object.keys(productsInCart).length === 0 ? (
        <div className="empty">
          <h3>
            Your Current Cart is Empty.{" "}
            <NavLink to={"/"}>Go Back to Shopping.</NavLink>
          </h3>
        </div>
      ) : (
        <div className="products-list-cart">
          <h3>CART</h3>
          {productsInCart.map((product) => {
            return (
              <div className="product-in-cart">
                <img className="pro-cart-img" src={product.image} alt="img" />
                <div>
                  <p>{product.title}</p>
                  <p style={{ "margin-top": "20px" }}>{product.size}</p>
                  <div className="counter">
                    <p onClick={() => removeProduct(product, product.size)}>
                      -
                    </p>{" "}
                    <p>{product.qty} </p>
                    <p onClick={() => addProduct(product, num, product.size)}>
                      +
                    </p>
                  </div>
                </div>
                <p>{product.total} LE</p>
              </div>
            );
          })}
        </div>
      )}
      <form className="checkout" onSubmit={handleSubmit}>
        <h3>Order Summary</h3>
        <div className="subtotal">
          <p>Subtotal</p>
          <p> {Math.round(orderTotal)} LE</p>
        </div>
        <h3>Promocode</h3>
        <div className="additional-discount">
          <div className="promo">
            <input type="text" placeholder="Enter Promocode"></input>
            <button>APPLY</button>
          </div>
          <input
            style={{
              "background-color": "black",
              color: "white",
              cursor: "pointer",
            }}
            type="submit"
            className="check-out-btn"
            value="Place Order"
          />
        </div>
        <h3>We Accept</h3>
        <div className="payment-method">
          <PaymentMethods source={visa} title="visa" />
          <PaymentMethods source={master} title="master" />
          <PaymentMethods source={paypal} title="paypal" />
        </div>
      </form>
    </div>
  );
}

export default Cart;
