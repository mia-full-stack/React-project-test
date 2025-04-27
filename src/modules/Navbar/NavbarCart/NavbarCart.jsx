/** @jsxImportSource @emotion/react */

// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Cart from "../../../assets/icons/Cart";



const NavbarCart = ()=> {
    return <NavLink to="/Cart"><Cart /></NavLink>
}

export default NavbarCart;