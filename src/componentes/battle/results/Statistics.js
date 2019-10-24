import React from 'react';

const Statistics = ({ battles, fighters, date, arena }) => {
    return (
        <div className="battle-stats">
            <span><b>Fighters: </b>{fighters}</span><br></br>
            <span><b>Battles: </b>{battles}</span><br></br>
            <span><b>Arena: </b>{arena}</span><br></br>
            <span><b>Date: </b>{date}</span><br></br>
        </div>
    );
}

export default Statistics;