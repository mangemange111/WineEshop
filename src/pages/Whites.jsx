import React, { useState, useEffect } from "react";
import WineCard from "../components/WineCard.jsx";
import FilterComponent from "../components/FilterWines.jsx";
import "./Whites.css";

const Whites = () => {
  const [wines, setWines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  useEffect(() => {
    fetch("https://api.sampleapis.com/wines/whites")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch wines");
        }
        return response.json();
      })
      .then((data) => {
        const winesWithPrices = data.map((wine) => ({
          ...wine,
          price: parseFloat((Math.random() * 500).toFixed(2)),
        }));
        setWines(winesWithPrices);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const countries = [
    "all",
    ...new Set(wines.map((wine) => wine.location)),
  ].sort();

  const filterWines = () => {
    let filtered = [...wines];

    if (selectedCountry !== "all") {
      filtered = filtered.filter((wine) => wine.location === selectedCountry);
    }

    if (selectedPriceRange !== "all") {
      const [min, max] = selectedPriceRange.split("-").map(Number);
      filtered = filtered.filter((wine) => {
        const price = parseFloat(wine.price);
        return price >= min && price <= max;
      });
    }

    return filtered.slice(0, 9);
  };

  if (loading) return <div className="loading">Loading wines...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="wines-container">
      <h1 className="white-title">White Wines</h1>
      <FilterComponent
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedPriceRange={selectedPriceRange}
        setSelectedPriceRange={setSelectedPriceRange}
        countries={countries}
      />
      <div className="wines-grid">
        {filterWines().map((wine) => (
          <WineCard key={wine.id} wine={wine} />
        ))}
      </div>
    </div>
  );
};

export default Whites;
