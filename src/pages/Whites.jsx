import React, { useState, useEffect } from 'react';
import WineCard from '../components/WineCard.jsx';
import './Whites.css';

const Whites = () => {
  const [wines, setWines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.sampleapis.com/wines/whites')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch wines');
        }
        return response.json();
      })
      .then(data => {
        setWines(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading wines...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="wines-container">
      <h1>White Wines</h1>
      <div className="wines-grid">
      {wines.slice(0, 9).map(wine=> (
          <WineCard key={wine.id} wine={wine} />
        ))}
      </div>
    </div>
  );
};

export default Whites;