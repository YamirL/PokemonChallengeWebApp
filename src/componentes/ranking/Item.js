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
const Item = ({data}) => {
    return(
        <div className="grid-container">
            <div>{data.ranking}</div>
            <div><Pokemon id={data.id} name={data.name} url={data.url}></Pokemon></div>
            <div>{data.battles}</div>
            <div>{data.defaultRanking}</div>
            <div>{getPositions(data.ranking - data.defaultRanking)}</div>
        </div>
    );
}

export default Item;