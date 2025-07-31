import { useState } from 'react';
import './index.css';
import data from './data';
import Tours from './Components/Tours';

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  return (
    <div className="app-container">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
