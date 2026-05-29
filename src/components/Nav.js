import logo from '../assets/logos/Asset 1@3x.png'

function Nav() {
  return (
    <nav className="site-nav">
      <img src={logo} alt="Logo" className="site-logo" />
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#book">Book a Table</a></li>
        <li><a href="#menu">Menu</a></li>
      </ul>
    </nav>
  )
}
export default Nav;