import React, { useEffect, useState } from 'react';
import Directory from './Utils/Directory.js';

export default function Browse() {

    const [results, setResults] = useState([]);
    const [artist, setArtist] = useState('');

    const handleSearch = async(e) => {
      e.preventDefault();
      try{
      await fetch(`http://localhost:5000/searchArtist/${artist}`)
      .then((res) => res.json())
      .then((data) => {
      console.log(data.results)
      setResults(data.results)
      })
      } catch (error) {
        console.log(error);
      }
    }
  

    const handleChange = (e) => {
      setArtist(e.target.value);
    };

  return (
    <div>
      <h1>Browse</h1>
        <div className = "query">
          <input 
            type="text" 
            id="artistName" 
            name="artistName" 
            value={artist}
            onChange={handleChange}>
          </input>
          <button onClick={handleSearch}>Search</button>
        </div>
        <Directory artists={results}/>
    </div>
)}