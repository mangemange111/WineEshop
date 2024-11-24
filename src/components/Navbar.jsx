import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
    <ul>
      <li><Link to="/">Home </Link></li> 
      <li><Link to="/whites"> White Wines</Link></li>
      <li><Link to="/reds">Red Wines </Link></li>
    </ul>
  </nav>
  );

}
export default Navbar;