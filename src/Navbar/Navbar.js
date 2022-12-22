import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { Component } from 'react';


class Navbar extends Component {

    activeClassName = "activeLink";
    state = { clicked: false };

    handleClick = ()=>{
        this.setState({clicked : !this.state.clicked})
    }

    render() {
        return (
            <nav className="navbar">
                <h1><a href="/">Oli Chen</a></h1>
                <div className={ this.state.clicked ? "links active" : "links"}>
                    <NavLink to="/" exact={true} className={({ isActive }) =>
                        isActive ? this.activeClassName : undefined
                    }>Home</NavLink>
                    <NavLink to="/education" className={({ isActive }) =>
                        isActive ? this.activeClassName : undefined
                    }>Education</NavLink>
                    <NavLink to="/experiences" className={({ isActive }) =>
                        isActive ? this.activeClassName : undefined
                    }>Experiences</NavLink>
                    <NavLink to="/projects" className={({ isActive }) =>
                        isActive ? this.activeClassName : undefined
                    }>Projects</NavLink>
                    <NavLink to="/contact" className={({ isActive }) =>
                        isActive ? this.activeClassName : undefined
                    }>Contact</NavLink>
                </div>
                <button onClick={this.handleClick} className="burger"><ion-icon name={this.state.clicked ? "close" : "menu"}></ion-icon></button>
            </nav>
        );
    }
}

export default Navbar;