import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { Component } from 'react';


class Navbar extends Component {

    activeClassName = "activeLink";
    state = { clicked: false };

    handleClick = ()=>{
        this.setState({clicked : !this.state.clicked})
    }

    setUnClick = ()=>{
        this.setState({clicked : false})
    }

    render() {
        return (
            <nav className="navbar">
                <h1><a href="/">Oli Chen</a></h1>
                <div className={ this.state.clicked ? "links expand" : "links"}>
                    <NavLink onClick={this.setUnClick} to="/" exact={true} className={({ isActive }) =>
                        isActive ? this.activeClassName : undefined
                    }>Home</NavLink>
                    <NavLink onClick={this.setUnClick} to="/education" className={({ isActive }) =>
                        isActive ? this.activeClassName : undefined
                    }>Education</NavLink>
                    <NavLink onClick={this.setUnClick} to="/experiences" className={({ isActive }) =>
                        isActive ? this.activeClassName : undefined
                    }>Experiences</NavLink>
                    <NavLink onClick={this.setUnClick} to="/projects" className={({ isActive }) =>
                        isActive ? this.activeClassName : undefined
                    }>Projects</NavLink>
                    <NavLink onClick={this.setUnClick} to="/contact" className={({ isActive }) =>
                        isActive ? this.activeClassName : undefined
                    }>Contact</NavLink>
                </div>
                <button onClick={this.handleClick} className="burger"><ion-icon name={this.state.clicked ? "close" : "menu"}></ion-icon></button>
            </nav>
        );
    }
}

export default Navbar;