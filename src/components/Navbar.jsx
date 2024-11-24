import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                WINERY
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/whites">White Wines</Link></li>
                <li><Link to="/reds">Red Wines</Link></li>
            </ul>
        </nav>
    );
}
