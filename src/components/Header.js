import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="page-section hero-section">
      <div>
        <p className="eyebrow">Little Lemon</p>
        <h1>Chicago</h1>
        <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
        <button className="button button--primary" onClick={() => navigate('/booking')}>
          Reserve a table
        </button>
      </div>
      <div className="hero-image-placeholder" />
    </header>
  )
}
export default Header;