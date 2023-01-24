import React, { useEffect, useState } from 'react';
import Directory from './Utils/Directory.js';
import RecDir from './Utils/RecDir.js';

export default function Browse() {

    const [results, setResults] = useState([]);
    const [artist, setArtist] = useState('');
    const [records, setRecords] = useState([]);
    const [artId, setArtId] = useState(0);
    const [seeRecords, setSeeRecords] = useState(false);

    //Search for artists
    const handleSearch = async(e) => {
      e.preventDefault();
      try{
      await fetch(`http://localhost:5000/searchArtist/${artist}`)
      .then((res) => res.json())
      .then((data) => {
      console.log(data.results)
      setResults(data.results)
      setSeeRecords(false)
      setArtId(0)
      })
      } catch (error) {
        console.log(error);
      }
    }
  
    //Handle change artists - State
    const handleChange = (e) => {
      setArtist(e.target.value);
    };
    
    //Get records by artist Id on Id change
    const getRecords = async() => {
      try{
        await fetch(`http://localhost:5000/searchReleasesByArtist/${artId}`)
        .then((res) => res.json())
        .then((data) => {
      console.log(data)
      setRecords(data.releases)
      })
      } catch (error) {
        console.log(error);
      }
    } 

    useEffect(() => {
      if(artId !== 0) getRecords();
    }, [artId]);


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
        <p>{artId}</p>
        {!seeRecords?<Directory artists={results} artId={artId} setArt={setArtId} setSeeRecords={setSeeRecords}/>:
        <RecDir records={records}/>}
    </div>
)}
