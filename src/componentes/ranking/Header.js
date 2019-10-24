import React from 'react';
import './styles.css';

const Header = () => {
    return (
        <div>
            <div className="grid-container grid-container-header">
                <div>#</div>
                <div>Pokemon</div>
                <div>Battles</div>
                <div>Default Ranking</div>
                <div>Positions</div>
            </div>
        </div>
    );
}

export default Header;