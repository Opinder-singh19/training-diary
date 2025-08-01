import React from 'react';
import './Filter.css'; // ✅ Import CSS

const Filter = ({ filterData, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="filter-container">
      {filterData.map((data) => (
        <button
          key={data.id}
          className={data.title === selectedCategory ? "active" : ""}
          onClick={() => setSelectedCategory(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;

