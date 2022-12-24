import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
  addCart,
} from "../redux/actions/productActions";

function ProductDetails() {
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("");
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { id, image, title, price, category, description } = product;
  const addProduct = (product, number, size) =>
    dispatch(addCart(product, number, size));
  const getProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    getProductDetails();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);
  return (
    <div className="product-view" key={id}>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="details-pro">
          <div className="product-img">
            <img alt={title} src={image} />
          </div>
          <div className="product-info">
            <h1>{title}</h1>

            <p style={{ "margin-top": "13px", "font-size": "15px" }}>
              {category}
            </p>
            <p className="price">{price} LE</p>
            <fieldset
              className="sizes"
              onChange={(e) => setSize(e.target.value)}
            >
              <legend>Sizes</legend>
              <input type="radio" value="S" name="size" /> <label>Small</label>
              <input type="radio" value="M" name="size" /> <label>Medium</label>
              <input type="radio" value="L" name="size" /> <label>Large</label>
            </fieldset>
            <div className="adjust-selected-items">
              <div className="counter">
                <p onClick={() => setNumber((number) => number - 1)}>-</p>{" "}
                <p>{number} </p>
                <p onClick={() => setNumber((number) => number + 1)}>+</p>
              </div>
              <button onClick={() => addProduct(product, number, size)}>
                Add to Cart
              </button>
            </div>
            <span>{description}</span>
            <div className="guarantee">
              <div>
                <h4>Our Guarantee</h4>
                Return or exchange within 30 days from the delivered date.
                <ul>
                  <li>
                    {" "}
                    Items received within 30 days from the delivered date.
                  </li>
                  <li>
                    Items received unused, undamaged and in original package.
                  </li>
                  <li>Return shipping fee is paid by buyer.</li>
                </ul>
              </div>
              <div>
                <h4>Shipping</h4>
                <ul>
                  <li> Free express shipping on orders over $50.00. </li>
                  <li>Estimated to be delivered from 1-4 working days.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
