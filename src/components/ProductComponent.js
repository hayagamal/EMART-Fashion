import React from "react";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
function ProductComponent({ products }) {
  const renderList = products.map((product) => {
    const { id, title, image, price } = product;
    return (
      <div className="container-all" key={id}>
        <Link to={`/product/${id}`}>
          <div className="cardpiece">
            <img className="image" src={image} alt={title} />
            <div className="details">
              <h4>{title}</h4>
              <p>LE {price}</p>
              <span>
                <BsEye className="eye" /> View Product
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default ProductComponent;
