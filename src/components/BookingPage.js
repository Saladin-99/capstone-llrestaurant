function BookingPage() {
  return (
    <section className="page-section booking-page">
      <div className="booking-copy">
        <span>Reserve a table</span>
        <h2>Book your experience</h2>
        <p>Choose the date, pick a time, and let us know how many guests are joining.</p>
      </div>
      <form className="booking-form">
        <label>
          Full Name
          <input type="text" placeholder="Enter your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="your@email.com" />
        </label>
        <label>
          Date
          <input type="date" />
        </label>
        <label>
          Time
          <input type="time" />
        </label>
        <label>
          Guests
          <input type="number" min="1" max="12" placeholder="2" />
        </label>
        <button type="submit" className="button button--primary">Book a Table</button>
      </form>
    </section>
  );
}

export default BookingPage;
