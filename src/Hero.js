import React, { useState } from 'react';

function Hero (props) {

    if (props.hero.name) {
        console.log(props.hero)
    }

    return (
        <div>
            { props.hero.name ? 
                <>
                    <h1> { props.hero.name } </h1>
                    <div className="appearance">
                        <h2> Gender: { props.hero.appearance.gender } </h2>
                        <h2> Eye Color: { props.hero.appearance.eyeColor } </h2>
                        <h2> Hair Color: { props.hero.appearance.hairColor } </h2>
                        <h2> Height: { props.hero.appearance.height[0] } { props.hero.appearance.height[1] } </h2>
                        <h2> Race: { props.hero.appearance.race } </h2>
                        <h2> Weight: { props.hero.appearance.weight[0] } { props.hero.appearance.weight[1] }</h2>
                    </div>
                    <div className="biography">
                        <h2> { props.hero.biography.fullName } </h2>
                        <h2> { props.hero.biography.placeOfBirth } </h2>
                    </div>
                    <img src={ props.hero.images.sm } alt=""/>
                </>
                :
                ''
            }
        </div>
    );
}

export default Hero;