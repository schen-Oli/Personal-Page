import './Navbar.css'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Oli Chen</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/education">Education</a>
                <a href="/experiences">Experiences</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
}
 
export default Navbar;