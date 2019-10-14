import React from 'react';
import BattleTitle from './BattleTitle';
import Podium from './Podium';
import './styles.css';
import Statistics from './Statistics';

const Battle = ({id, description, date, battles, fighters, first, second, third}) => {
    return(
        <div className="battle">
            <BattleTitle description={description} date={date}></BattleTitle>
            <div className="battle-result">
                <Statistics battles={battles} fighters={fighters}></Statistics>
                <Podium first={first} second={second} third={third}></Podium>
            </div>
        </div>
    );
}

export default Battle;