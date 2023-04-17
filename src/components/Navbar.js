import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </header>
    );
}

export default NavBar;