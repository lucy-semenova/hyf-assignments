import "./EventSearch.css";

function EventSearch({ searchQuery, setSearchQuery }) {
  return (
    <div className="eventSearch">
      <span className="searchIcon">🔍</span>

      <input
        type="text"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default EventSearch;