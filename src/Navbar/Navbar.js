import './Navbar.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {

    let activeClassName = "activeLink";
    return (
        <nav className="navbar">
            <h1><a href="/">Oli Chen</a></h1>
            <div className="links">
                <NavLink to="/" exact={true} className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }>Home</NavLink>
                <NavLink to="/education" className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }>Education</NavLink>
                <NavLink to="/experiences" className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }>Experiences</NavLink>
                <NavLink to="/projects" className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }>Projects</NavLink>
                <NavLink to="/contact" className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }>Contact</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;