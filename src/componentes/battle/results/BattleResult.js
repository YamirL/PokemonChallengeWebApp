import React from 'react';
import BattleTitle from './BattleTitle';
import Podium from './Podium';
import './styles.css';
import Statistics from './Statistics';

const BattleResult = ({ battle, onBattleClick }) => {
    return (
        <div className="battle" onClick={onBattleClick}>
            <BattleTitle description={battle.description}></BattleTitle>
            <div className="battle-result">
                <Statistics battles={battle.battles} fighters={battle.fighters} arena={"Paleta Town"} date={""}></Statistics>
                <Podium first={battle.first} second={battle.second} third={battle.third}></Podium>
            </div>
        </div >
    );
}

export default BattleResult;