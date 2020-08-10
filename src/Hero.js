import React from 'react';

function Hero (props) {

    var IMAGE_STYLES = {};

    if (props.hero.name) {
        IMAGE_STYLES = {
            backgroundImage: `url(${props.hero.images.md})`,
        }
    }

    return (
        <div className="hero-container" >
            { props.hero.name ? 
                <>
                <div className="image-container">
                    <div className="filter"></div>
                    <div className="hero-image" style={IMAGE_STYLES}></div>
                </div>
                    <div className="hero-information">
                        <div className="insert-1" ></div>
                            <p> Known As: { props.hero.name } </p>
                            <p> Full Name: { props.hero.biography.fullName } </p>
                            <p> Gender: { props.hero.appearance.gender } </p>
                            <p> Eye Color: { props.hero.appearance.eyeColor } </p>
                            <p> Hair Color: { props.hero.appearance.hairColor } </p>
                            <p> Height: { props.hero.appearance.height[1] } </p>
                            <p> Race: { props.hero.appearance.race } </p>
                            <p> Weight: { props.hero.appearance.weight[1] }</p>
                            <p> Place of Birth: { props.hero.biography.placeOfBirth } </p>
                        <div className="insert-2" ></div>
                    </div>
                </>
                :
                ''
            }
        </div>
    );
}

export default Hero;