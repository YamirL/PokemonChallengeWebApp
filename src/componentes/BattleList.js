import React from 'react';
import Battle from './battle';

const initData = [
    { id: 1, description: "--", date: "00-xxx-0000", battles: 0, fighters: 0, first: "--", second: "--", third: "--" },
];
const BattleList = ({ battles, onSelectedBattle }) => {

    const handleSelectedBattle = (battle) => {
        console.log("Test click");
        console.log(battle);
        onSelectedBattle(battle);
    }

    const getBattles = () => {
        if (battles) {
            return battles.map(item => (
                <Battle battle={item} onBattleClick={() => handleSelectedBattle(item)} key={item.id}></Battle>
            ));
        }
        else {
            return "Loading battles..."
        }
    }


    return (
        <div>{getBattles()}</div>
    );

}

export default BattleList;