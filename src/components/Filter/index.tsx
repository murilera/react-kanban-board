import React from "react";

const Filter = ({ persons, onFilterChange }) => {
  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className="filter">
      <p>Filter by:</p>
      <select onChange={handleFilterChange}>
        <option value="">Select a Person</option>
        {persons.map((person) => (
          <option key={person.id} value={person.id}>
            {person.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
