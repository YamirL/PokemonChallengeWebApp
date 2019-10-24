import React from 'react';
import * as util from '../../../services/util'
import './styles.css';
const ICONS_PATH = "./resources/icons";

const Podium = ({ first, second, third }) => {
    return (
        <div className="battle-podium">
            <div className="podium-item gold">
                <img src={`${ICONS_PATH}/gold.png`} alt="1th"></img>
                <span>{util.capitalize(first)}</span>
            </div>
            <div className="podium-item silver">
                <img src={`${ICONS_PATH}/silver.png`} alt="2th"></img>
                <span>{util.capitalize(second)}</span>
            </div>
            <div className="podium-item bronze">
                <img src={`${ICONS_PATH}/bronze.png`} alt="3th"></img>
                <span>{util.capitalize(third)}</span>
            </div>
        </div>
    );
}
export default Podium;