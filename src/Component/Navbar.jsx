import React  from 'react'
function Navbar({search,setSearch,setSearchQuery}) {
  return (
    <nav className="navbar">
      <div className="logo">
        News<span>X</span>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Latest</a>
        <a href="#">Trending</a>
      </div>
<div className="search-box">
  <input
    type="text"
    placeholder="Search news..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    onKeyDown={(e) => {
  if (e.key === "Enter") {
    setSearchQuery(search);
  }
}}
    
  />

  <button
    className="search-btn"
    onClick={() => setSearchQuery(search)}

  >
    Search
  </button>
</div>     
    </nav>
  );
}

export default Navbar;