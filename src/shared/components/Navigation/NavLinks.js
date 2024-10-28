import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import './NavLinks.css';

const NavLinks = () => {
const auth = useContext(AuthContext);

    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>Home</NavLink>
        </li>
        {auth.isLoggedIn && !auth.isAdminLoggedIn && <li>
            <NavLink to="/profile">My Profile</NavLink>
        </li>}
        {!auth.isLoggedIn && !auth.isAdminLoggedIn && ( <li>
            <NavLink to="/auth">Authenticate</NavLink>
        </li>)}
        {(auth.isLoggedIn || auth.isAdminLoggedIn) && ( <li>
            <button onClick={auth.logout}>LogOff</button>
        </li>)}
    </ul>
}

export default NavLinks;

