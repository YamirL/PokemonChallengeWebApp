import React from 'react';
import './styles.css';
const ICONS_PATH = "./resources/icons";

const Podium = ({first, second, third}) => {
    return (
        <div className="battle-podium">
            <div className="podium-item gold">
                <img src={`${ICONS_PATH}/gold.png`} alt="1th"></img>
                <span>{first}</span>
            </div>
            <div className="podium-item silver">
                <img src={`${ICONS_PATH}/silver.png`} alt="1th"></img>
                <span>{second}</span>
            </div>
            <div className="podium-item bronze">
                <img src={`${ICONS_PATH}/bronze.png`} alt="1th"></img>
                {third}
            </div>
        </div>
    );
} 
export default Podium;