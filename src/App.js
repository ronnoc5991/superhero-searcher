import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './Hero'
import {ReactComponent as Fingerprint} from './fingerprint3.svg'

function App() {

  const [currentHero, setCurrentHero] = useState('bruce wayne')
  const [heroData, setHeroData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState('');

  useEffect(() => {
      getSuperhero(currentHero);
  }, [currentHero])

  const getSuperhero = (superhero) => {
      setIsLoading(true);
      fetch(`https://superhero-search.p.rapidapi.com/?hero=${superhero}`, {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "superhero-search.p.rapidapi.com",
              "x-rapidapi-key": "32779bda32msh30d521a6e84afcep1369cdjsn9d3b76d57039"
          }
          })
          .then(response => response.json())
          .then(data => setHeroData(data))
          .then(setIsLoading(false));
  }

  function handleSearch (e) {
      setSearch(e.target.value);
  }

  function handleSubmit (e) {
      e.preventDefault();
      setCurrentHero(search);
      setSearch('')
  }


return (
  <div className="App">
    <div className="top-left"></div>
    <div className="top-middle">
    <form className="search-bar">

              <input type="text" value={ search } onChange={ handleSearch } />
          
          <button onClick={ handleSubmit } >
              Submit
          </button>
      </form>
    </div>
    <div className="top-right"></div>
    <div className="middle-left">
      <Fingerprint />
    </div>
      { isLoading ? <div>Loading</div> : <Hero hero={ heroData } /> }
      <div className="middle-right">
        <img src="./photos/fingerprint2.png" alt=""/>
      </div>
      <div className="bottom-left"></div>
      <div className="bottom-middle"></div>
      <div className="bottom-right"></div>
  </div>
);
}

export default App;