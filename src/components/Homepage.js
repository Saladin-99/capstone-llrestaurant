import Header from './Header';
import Specials from './Specials';
import Chicago from './Chicago';
import CustomersSay from './CustomersSay';

function Homepage() {
  return (
    <div className="homepage-grid">
      <Header />
      <Specials />
      <Chicago />
      <CustomersSay />
    </div>
  );
}

export default Homepage;
