import React from 'react';
import BattleTitle from './BattleTitle';
import Podium from './Podium';
import './styles.css';
import Statistics from './Statistics';

const Battle = ({battle, handleClick}) => {
    return(
        <div className="battle" onClick={handleClick(battle.id)}>
            <BattleTitle description={battle.description} date={battle.date}></BattleTitle>
            <div className="battle-result">
                <Statistics battles={battle.battles} fighters={battle.fighters}></Statistics>
                <Podium first={battle.first} second={battle.second} third={battle.third}></Podium>
            </div>
        </div>
    );
}

export default Battle;