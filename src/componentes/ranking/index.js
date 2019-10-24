import React from 'react';
import Header from './Header';
import Item from './Item';
const Ranking = ({ ranking, onSelectedItem }) => {
    const handleSelectedItem = (pokemon) => {
        onSelectedItem(pokemon);
    }

    const getItems = () => {
        return ranking.map(item => (
            <Item key={item.newRanking} data={item} onItemClick={() => handleSelectedItem(item.pokemon)}></Item>
        ));
    }
    return (

        <div className="ranking-layout">
            <div className="header-title">Overall Standings</div>
            <div className="ranking-container">
                {ranking ? <Header></Header> : null}
                <div >
                    {ranking ? getItems() : <div className="header-title">Select a Battle</div>}
                </div>
            </div>
        </div>
    );
}

export default Ranking;
