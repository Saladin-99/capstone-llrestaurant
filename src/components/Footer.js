import logo from '../assets/logos/Asset 2@3x.png'

function Footer() {
  return (
    <footer className="site-footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p>&copy; 2023 My Homepage. All rights reserved.</p>
    </footer>
  )
}
export default Footer;