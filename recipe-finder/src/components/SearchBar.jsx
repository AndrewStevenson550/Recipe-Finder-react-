import "../styles/searchbar.css";

function SearchBar({ onSearchChange }) {
  return (
    <>
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" onChange={onSearchChange} />
      </div>
    </>
  );
}

export default SearchBar;
