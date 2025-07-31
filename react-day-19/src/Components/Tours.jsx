import Card from './Card';

function Tours({ tours, removeTour }) {
  return (
    <div className="tours-container">
      <div>
        <h2 className="tours-title">Plan with Love</h2>
      </div>
      <div className="tours-list">
        {tours.map((tour) => (
          <Card key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </div>
  );
}

export default Tours;