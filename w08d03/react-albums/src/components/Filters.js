import React from "react";

export default function Filters(props) {
  const filterItems = Object.keys(props.filters).map(filter => (
    <div key={filter} className="filters__form-group">
      <input
        className="filters__checkbox"
        type="checkbox"
        name={filter}
        id={filter}
        checked={props.filters[filter]}
        onChange={event => props.setFilter(filter, event.target.checked)}
      />
      <label className="filters__label" htmlFor={filter}>
        {filter}
      </label>
    </div>
  ));

  return (
    <section className="filters">
      <form className="filters__form">{filterItems}</form>
    </section>
  );
}
