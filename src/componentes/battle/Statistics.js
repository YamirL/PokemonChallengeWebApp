import React from 'react';

const Statistics = ({battles, fighters, mostChallenged}) => {
    return(
        <div className="battle-stats">
            <span>Fighters: {fighters}</span><br></br>
            <span>Battles: {battles}</span><br></br>
            <span>Most challenged: {mostChallenged}</span><br></br>
        </div>
    );
}

export default Statistics;