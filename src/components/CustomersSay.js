import customer from '../assets/logos/Asset 2@3x.png';

const testimonials = [
  {
    id: 1,
    name: 'Sophia',
    location: 'Chicago, IL',
    quote: 'The food was warm, flavorful, and the service felt friendly from start to finish.',
  },
  {
    id: 2,
    name: 'Marcus',
    location: 'Evanston',
    quote: 'A relaxed space with beautifully plated dishes—definitely a favorite for date night.',
  },
];

function CustomersSay() {
  return (
    <section className="page-section testimonial-section">
      <div className="section-heading">
        <span>Testimonials</span>
        <h2>What our customers say</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article key={item.id} className="testimonial-card">
            <img src={customer} alt={item.name} />
            <div>
              <div className="testimonial-stars">★★★★★</div>
              <p>{item.quote}</p>
              <strong>{item.name}</strong>
              <small>{item.location}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
