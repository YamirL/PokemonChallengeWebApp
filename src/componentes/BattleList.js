import React from 'react';
import BattleResult from './battle/results/BattleResult';

const BattleList = ({ battles, onSelectedBattle }) => {

    const handleSelectedBattle = (battle) => {
        onSelectedBattle(battle);
    }

    const getBattles = () => {
        if (battles) {
            return battles.map(item => (
                <BattleResult battle={item} onBattleClick={() => handleSelectedBattle(item)} key={item.id}></BattleResult>
            ));
        }
        else {
            return "Loading battles..."
        }
    }


    return (
        <div className="layout">
            <div className="header-title">Battles</div>
            {getBattles()}
        </div>
    );

}

export default BattleList;