import image from '../assets/logos/Asset 1@3x.png';

function Chicago() {
  return (
    <section className="page-section about-section">
      <div>
        <span>About Chicago</span>
        <h2>Little Lemon Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.
          Our Chicago location brings warm hospitality and bright flavors to every table.
        </p>
      </div>
      <img src={image} alt="Little Lemon Chicago" />
    </section>
  );
}

export default Chicago;
