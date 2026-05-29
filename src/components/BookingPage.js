import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <section className="page-section booking-page">
      <div className="booking-copy">
        <span>Reserve a table</span>
        <h2>Book your experience</h2>
        <p>Choose the date, pick a time, and let us know how many guests are joining.</p>
      </div>
      <BookingForm />
    </section>
  );
}

export default BookingPage;
