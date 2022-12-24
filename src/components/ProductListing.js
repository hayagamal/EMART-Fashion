import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import model from "../images/hes.png";
import men from "../images/men.JPG";
import women from "../images/women.JPG";
import acc from "../images/acc.JPG";
import Categories from "./Categories";
function ProductListing() {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch();
    const fetchProducts = async () =>{
        const response = await axios.get("https://fakestoreapi.com/products?limit=6").catch(error =>{
            console.log(error)
        })
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts()
    },[])
  return (
    <div>
      <div className="ads">
        <div className="gender">
          <Categories
            cls="w-container"
            img={women}
            gender="women"
            gen="women's clothing"
            category="WOMEN"
            gradient="wgradient"
          />
          <Categories
            cls="m-container"
            img={men}
            gender="men"
            gen="men's clothing"
            category="MEN"
            gradient="mgradient"
          />
          <Categories
            cls="a-container"
            img={acc}
            gender="acc"
            gen="jewelery"
            category="ACCESSORIES"
            gradient="agradient"
          />
        </div>
        <img className="model" src={model} alt="banner" />
      </div>
      <h1 className="header">VIEW ALL</h1>

      <div className="ui container products">
        <ProductComponent products={products} />
      </div>
      <div className="spin">
        <span>FREE</span> Returns & Exchanges
      </div>
    </div>
  );
}

export default ProductListing
