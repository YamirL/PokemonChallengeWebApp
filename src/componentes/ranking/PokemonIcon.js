import React from 'react';
import './styles.css'
import * as util from '../../services/util'

const Pokemon = ({ id, name, url, types }) => {

    return (
        <div className="pokemon-container">

            <div className="pokemon-icon">
                {<img src={url} alt=""></img>}
            </div>
            <div className="pokemon-attribs">
                <span>
                    {util.capitalize(name)}<br></br>
                    {`#${('000' + id).slice(-3)}`}
                </span>
            </div>
        </div>
    );
}

export default Pokemon;