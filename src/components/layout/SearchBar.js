import React from 'react';

export default function SearchBar({ handleSubmit, setQuery }) {
  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input type="text" className="input-lg" placeholder="Search for a movie title" onChange={(e) => setQuery(e)} data-testid="input_search" />
        <button type="submit" className="button-lg" data-testid="submit_search">Search</button>
      </form>
    </div>
  )
}
