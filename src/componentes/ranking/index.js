import React from 'react';
import Header from './Header';
import Item from './Item';

const Ranking = () => {
    return(
        <div>            
            <Header></Header>
            <Item id={1} positions={1}></Item>
            <Item positions={0}></Item>
            <Item positions={-2}></Item>
            <Item positions={-2}></Item>
        </div>
    );
}

export default Ranking;