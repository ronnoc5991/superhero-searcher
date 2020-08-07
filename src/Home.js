import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './Hero';

function Home() {

    useEffect(() => {
        getSuperhero(currentHero);
    }, [])

    const [currentHero, setCurrentHero] = useState('bruce wayne')
    const [heroData, setHeroData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

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


  return (
    <div className="home">
        { isLoading ? <div>Loading</div> : <Hero hero={ heroData } /> }
    </div>
  );
}

export default Home;