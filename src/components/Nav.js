import { Link } from 'react-router-dom';
import logo from '../assets/logos/Asset 1@3x.png'

function Nav() {
  return (
    <nav className="site-nav">
      <img src={logo} alt="Logo" className="site-logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Book a Table</Link></li>
        <li><Link to="/">Menu</Link></li>
      </ul>
    </nav>
  )
}
export default Nav;