import React from 'react';
import Header from './Header';
import Item from './Item';
const Items = [
    {id: 1, name: "Picachu", ranking: 1, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
     battles:2, defaultRanking:4},
     {id: 2, name: "Charmander", ranking: 2, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
     battles:2, defaultRanking:4},
     {id: 3, name: "Picachu", ranking: 3, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
     battles:2, defaultRanking:4},
     {id: 4, name: "Onix", ranking: 4, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
     battles:2, defaultRanking:4},
     {id: 5, name: "Onix", ranking: 5, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
     battles:2, defaultRanking:4}
];

const Ranking = () => {
    const getItems = () => {
        return Items.map(item => (
            <Item key={item.id} data={item}></Item>
        ));
    }
    return(
        <div>            
            <Header></Header>
            {getItems()}
        </div>
    );
}

export default Ranking;