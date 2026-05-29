import logo from '../assets/logos/Asset 2@3x.png'
function Footer() {
    return (
    <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
        <img src={logo} alt="Logo" style={{ width: 'auto', height: '60px' }} />
        <p>&copy; 2023 My Homepage. All rights reserved.</p>
    </footer>
    )
}
export default Footer;