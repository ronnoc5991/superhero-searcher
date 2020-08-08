import React, { useState } from 'react';

function Hero (props) {

    return (
        <div>
            { props.hero.name ? 
                <>
                    <p> { props.hero.name } </p>
                    <div className="appearance">
                        <p> Gender: { props.hero.appearance.gender } </p>
                        <p> Eye Color: { props.hero.appearance.eyeColor } </p>
                        <p> Hair Color: { props.hero.appearance.hairColor } </p>
                        <p> Height: { props.hero.appearance.height[0] } { props.hero.appearance.height[1] } </p>
                        <p> Race: { props.hero.appearance.race } </p>
                        <p> Weight: { props.hero.appearance.weight[0] } { props.hero.appearance.weight[1] }</p>
                    </div>
                    <div className="biography">
                        <p> { props.hero.biography.fullName } </p>
                        <p> { props.hero.biography.placeOfBirth } </p>
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