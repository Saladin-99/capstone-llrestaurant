import imageOne from '../assets/logos/Asset 1@3x.png';
import imageTwo from '../assets/logos/Asset 2@3x.png';

const specials = [
  {
    id: 1,
    title: 'Greek Salad',
    description: 'Crispy lettuce, olives, feta, and a bright lemon dressing.',
    price: '$12.99',
    image: imageOne,
  },
  {
    id: 2,
    title: 'Bruschetta',
    description: 'Grilled bread with roasted garlic, tomatoes, and basil.',
    price: '$7.99',
    image: imageTwo,
  },
  {
    id: 3,
    title: 'Grilled Fish',
    description: 'Fresh catch served with herbs, citrus, and seasonal greens.',
    price: '$16.99',
    image: imageOne,
  },
];

function Specials() {
  return (
    <section className="page-section specials-section">
      <div className="section-heading">
        <span>Order for delivery</span>
        <h2>Specials you can’t miss</h2>
      </div>
      <div className="specials-grid">
        {specials.map((item) => (
          <article key={item.id} className="special-card">
            <img src={item.image} alt={item.title} />
            <div className="special-card__content">
              <div className="special-card__top">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
              </div>
              <p>{item.description}</p>
              <button className="button button--secondary">Order Delivery</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
