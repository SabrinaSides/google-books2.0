import React from 'react';
import './Filter.css';

function Filter({ id, label, filters, value, selectedFilter, handleSelect}) {
  return (
    <div className="filter">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={id} value={selectedFilter} onChange={handleSelect}>
        <option value="">Select:</option>
        {filters.map((filter) => (
          <option key={filter} value={filter}>{filter}</option>
        ))}
      </select>
    </div>
  );
}

Filter.defaultProps = {
  filters: [],
};

export default Filter;
