import React from 'react'

function CategoryBar({ setCategory, setSearch, setSearchQuery }) {
  return (<>
    <div className="category-bar">
      <button onClick={() => {
    setCategory("All");
    setSearch("");
    setSearchQuery("");
  }}>All</button>
      <button onClick={() => {
    setCategory("Technology");
    setSearch("");
    setSearchQuery("");
  }}>Technology</button>
      <button onClick={() => {
    setCategory("Business");
    setSearch("");
    setSearchQuery("");
  }}>Business</button>
      <button onClick={() => {
    setCategory("Sports");
    setSearch("");
    setSearchQuery("");
  }}>Sports</button>
      <button onClick={() => {
    setCategory("Entertainment");
    setSearch("");
    setSearchQuery("");
  }}>Entertainment</button>
      <button onClick={() => {
    setCategory("Health");
    setSearch("");
    setSearchQuery("");
  }}>Health</button>
      <button onClick={() => {
    setCategory("Science");
    setSearch("");
    setSearchQuery("");
  }}>Science</button>
    </div>
   
    </>
  );
}

export default CategoryBar;