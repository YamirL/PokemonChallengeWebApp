import React from 'react';
import './styles.css';
import Pokemon from './Pokemon';

const ICONS_PATH = "./resources/icons";

const getPositions = (pos) => {
    let image ="draw-arrow.png";
    if(pos>0){
        image = "up_green_arrow.png";
    }
    if(pos<0){
        image = "down_red_arrow.png";
    }

    return(
        <div>
            <div className="item-position">
                {image&&<img src={`${ICONS_PATH}/${image}`} alt=""></img>}
                <span>{pos}</span>
            </div>
        </div>
    );
}
const Item = ({rnk, positions}) => {
    return(
        <div className="grid-container">
            <div>{rnk}</div>
            <div><Pokemon id={1} name={"Pikachu"} url={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"}></Pokemon></div>
            <div>4</div>
            <div>3</div>
            <div>{getPositions(positions)}</div>
        </div>
    );
}

export default Item;