import React, {Component} from 'react';
import Battle from './battle';

const battles = [
    {id: 1, description: "Paleta Tournamente", date: "10-Oct-2019", battles: 10, fighters: 15, first: "Pikachu", second: "Bulbasour", third:"Charmander"},
    {id: 2, description: "Kanto Tournament", date: "10-Oct-2019", battles: 23, fighters: 9, first: "Charizad", second: "Bulbasour", third:"Charmander"},
    {id: 3, description: "Paleta Tournamente", date: "10-Oct-2019", battles: 8, fighters: 15, first: "Onix", second: "Bulbasour", third:"Charmander"},
    {id: 4, description: "Paleta Tournamente", date: "9-Sep-2019", battles: 10, fighters: 15, first: "Miau", second: "Bulbasour", third:"Charmander"},
];
class BattleContainer extends Component{

    handleSelectedBattle = (id) => {
        console.log("Test click");
    }

    getBattles = () => {
        return battles.map( item => (
            <Battle battle={item} handleClick={(id) => this.handleSelectedBattle(id)} key={item.id}></Battle>
        ));
    }

    render(){
        return(
            <div>{this.getBattles()}</div>
        );
    }
}

export default BattleContainer;