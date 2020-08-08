import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './Hero';

function Home() {

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
    <div className="home">
        <form>
            <label>
                <input type="text" value={ search } onChange={ handleSearch } />
            </label>
            <button onClick={ handleSubmit } >
                Submit
            </button>
        </form>
        { isLoading ? <div>Loading</div> : <Hero hero={ heroData } /> }
    </div>
  );
}

export default Home;

// create a database that looks like a terminal from out of a nineties movie
// home screen starts with no hero displayed and a form and other dummy information
// upon searching... the information loads
// blinking cursor in the search bar like in a terminal