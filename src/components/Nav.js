import logo from '../assets/logos/Asset 1@3x.png'
function Nav() {
    return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
        <img src={logo} alt="Logo" style={{ width: 'auto', height: '60px' }} />
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#book">Book a Table</a></li>
            <li><a href="#menu">Menu</a></li>
        </ul>
    </nav>
    )
}
export default Nav;