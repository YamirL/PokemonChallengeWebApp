import React from 'react';
import './styles.css';

const BattleTitle = ({description, date}) => {
    return(
        <div className="battle-title">
            <span className="title">{description}</span><br></br>
            <span>{date}</span>
        </div>
    )
}

export default BattleTitle;