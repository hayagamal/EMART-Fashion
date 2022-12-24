import React, {useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setCategoriesProducts} from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import axios from "axios";
function DisplayCategory() {
  const param = useParams();
  const dispatch = useDispatch();
  const getProductsfromCategory = async (category) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .catch((error) => {
        console.log(error);
      });
    dispatch(setCategoriesProducts(response.data));
  };

  useEffect(() => {
    getProductsfromCategory(param.type);
  }, [param.type]);

  const products = useSelector((state) => state.category.products);

  return (
    <div className="ui container products">
      <ProductComponent products={products} />
    </div>
  );
}

export default DisplayCategory;
