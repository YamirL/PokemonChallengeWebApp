import React, {Component} from 'react';
import Battle from './battle';

const battles = [
    {id: 1, description: "Paleta Tournamente", date: "10-Oct-2019", battles: 10, fighters: 15, first: "Pikachu", second: "Bulbasour", third:"Charmander"},
    {id: 2, description: "Paleta Tournamente", date: "10-Oct-2019", battles: 23, fighters: 9, first: "Charizad", second: "Bulbasour", third:"Charmander"},
    {id: 3, description: "Paleta Tournamente", date: "10-Oct-2019", battles: 8, fighters: 15, first: "Onix", second: "Bulbasour", third:"Charmander"},
    {id: 4, description: "Paleta Tournamente", date: "10-Oct-2019", battles: 10, fighters: 15, first: "Miau", second: "Bulbasour", third:"Charmander"},
];
class BattleContainer extends Component{

    getBattles = () => {
        return battles.map( item => (
            <Battle></Battle>
        ));
    }

    render(){
        return(
            <div>{getBattles()}</div>
        );
    }
}

export default BattleContainer;