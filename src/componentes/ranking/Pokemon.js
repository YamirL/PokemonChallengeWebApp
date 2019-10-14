import React from 'react';
import './styles.css'

const Pokemon = ({id, name, url, types}) => {
    return(
        <div className="pokemon-container">
            <div className="pokemon-icon">
                <img src={url} alt=""></img>
            </div>
            <div>{name}</div>
            <div>{`#${('000' + id).slice(-3)}`}</div>
            <div>{name}</div>
        </div>
    );
}

export default Pokemon;