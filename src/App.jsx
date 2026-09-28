import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import CategoryBar from './Component/CategoryBar'
import NewsList from "./Component/NewsList";
import { useState } from 'react'







function App() {

const [category, setCategory] = useState("India");
const [country, setCountry] = useState("in");
const [search, setSearch] = useState("");
const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
   <Navbar search={search} setSearch={setSearch}  setSearchQuery={setSearchQuery} />
  <CategoryBar setCategory={setCategory}
    setSearch={setSearch}
  setSearchQuery={setSearchQuery}
  />
<NewsList category={category} country ={country} search={search} searchQuery={searchQuery} />

  
    </>
  )
}

export default App
