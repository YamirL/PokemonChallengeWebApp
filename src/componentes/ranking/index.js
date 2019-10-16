import React from 'react';
import Header from './Header';
import Item from './Item';

const Ranking = ({ ranking, onSelectedItem }) => {
    const handleSelectedItem = (pokemon) => {
        console.log("Test click");
        console.log(pokemon);
        onSelectedItem(pokemon);
    }

    const getItems = () => {
        return ranking.map(item => (
            <Item key={item.newRanking} data={item} onItemClick={() => handleSelectedItem(item.pokemon)}></Item>
        ));
    }
    return (
        <div>
            {ranking ? <Header></Header> : null}
            {ranking ? getItems() : <h1>Select a Battle</h1>}
        </div>
    );
}

export default Ranking;