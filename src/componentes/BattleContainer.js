import React, { Component } from 'react';
import BattleList from './BattleList';

class BattleContainer extends Component {
    render() {
        return (
            <div>
                <BattleList
                    battles={battles}
                    onSelectedBattle={this.handleSelectedBattle}>
                </BattleList>
            </div>
        );
    }
}

export default BattleContainer;