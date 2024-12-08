import React from "react";
import "./FilterWines.css";

const FilterComponent = ({
  selectedCountry,
  setSelectedCountry,
  selectedPriceRange,
  setSelectedPriceRange,
  countries,
}) => {
  const priceRanges = [
    { label: "All Prices", value: "all" },
    { label: "$0 - $100", value: "0-100" },
    { label: "$101 - $300", value: "101-300" },
    { label: "$301 - $500", value: "301-500" },
  ];

  return (
    <div className="filters">
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="filter-select"
      >
        <option value="all">All Countries</option>
        {countries.map(
          (country) =>
            country !== "all" && (
              <option key={country} value={country}>
                {country}
              </option>
            )
        )}
      </select>

      <select
        value={selectedPriceRange}
        onChange={(e) => setSelectedPriceRange(e.target.value)}
        className="filter-select"
      >
        {priceRanges.map((range) => (
          <option key={range.value} value={range.value}>
            {range.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
