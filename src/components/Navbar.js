import { NavLink } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Navbar() {
  const state = useSelector((state) => state.cart);
  const nav = useNavigate();
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav_bar") {
      x.className += " responsive";
    } else {
      x.className = "nav_bar";
    }
  };
  return (
    <>
      <div className="announcement">
        ✈️ 🌎 INTERNATIONAL DELIVERY AVAILABLE ✈️ 🌎
      </div>
      <nav id="myTopnav" className="nav_bar">
        <div className="links">
          <NavLink
            className="icon"
            activeClassName="active"
            onClick={() => myFunction()}
          >
            <AiFillShopping />
          </NavLink>
          <NavLink
            className="text"
            activeClassName="active"
            to={`/categories/men's clothing`}
          >
            MEN
          </NavLink>
          <NavLink
            className="text"
            activeClassName="active"
            to={`/categories/women's clothing`}
          >
            WOMEN
          </NavLink>
          <NavLink
            className="text"
            activeClassName="active"
            to={`/categories/jewelery`}
          >
            ACCESSORIES
          </NavLink>
        </div>

        <div className="logo">
          <motion.p whileHover={{ scale: 1.3 }} onClick={() => nav("/")}>
            <span>E</span>mart
          </motion.p>
        </div>
        <div className="account">
          <NavLink to="/login" className="user" activeClassName="active">
            <FaUserAlt />
          </NavLink>
          <NavLink to="/cart" className="cart" activeClassName="active">
            <BsFillBasket2Fill />
            {state.length}
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
