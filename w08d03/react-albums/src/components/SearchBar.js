import React, { useState } from "react";

import useDebounce from "hooks/useDebounce";

import Loading from "components/Loading";

export default function SearchBar(props) {
  const [value, setValue] = useState("");

  useDebounce(() => props.onSearch(value), 400);

  return (
    <section className="search">
      <form className="search__form" onSubmit={event => event.preventDefault()}>
        <input
          className="radius"
          spellCheck="false"
          placeholder="Search Artists"
          name="search"
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </form>
      <Loading show={props.loading} />
    </section>
  );
}
