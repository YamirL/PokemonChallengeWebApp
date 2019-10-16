import React from 'react';
import './styles.css';
import Pokemon from './Pokemon';

const ICONS_PATH = "./resources/icons";

const getPositions = (pos) => {
    let image = "draw-arrow.png";
    if (pos > 0) {
        image = "up_green_arrow.png";
    }
    if (pos < 0) {
        image = "down_red_arrow.png";
    }

    return (
        <div>
            <div className="item-position">
                {image && <img src={`${ICONS_PATH}/${image}`} alt=""></img>}
                <span>{pos}</span>
            </div>
        </div>
    );
}
const Item = ({ data, onItemClick }) => {
    return (
        <div className="grid-container" onClick={onItemClick}>
            <div>{data.newRanking + 1}</div>
            <div><Pokemon id={data.pokemon.id} name={data.pokemon.name} url={data.pokemon.sprites.front_default}></Pokemon></div>
            <div>{data.battles}</div>
            <div>{data.defaultRanking + 1}</div>
            <div>{getPositions(data.defaultRanking - data.newRanking)}</div>
        </div>
    );
}

export default Item;