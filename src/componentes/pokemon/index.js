import React from 'react';
import convert from 'convert-units';
import './styles.css';
import * as util from '../../services/util';

const Pokemon = ({ data }) => {

    const getTypes = (types) => {
        console.log(types);
        return types.map(item => (<div className={"pokemon-type " + item} key={item}>{item}</div>));
    }

    const getStat = (item, max) => {
        const width = Math.trunc((item.base_stat / max) * 100);
        let className = "";

        if (width < 30) {
            className = "fighting";
        } else if (width < 50) {
            className = "rock";
        }
        else if (width < 80) {
            className = "grass";
        }
        else {
            className = "water";
        }

        return <div className="stat-group">

            <div key={item.name} className={"stat-bar " + className} style={{ width: width + '%' }}>{`${util.capitalize(item.name)}: ${item.base_stat}`}</div>
        </div>
    }
    const getStatistics = stats => {
        const values = stats.map(item => (item.base_stat));
        const max = Math.max(...values);

        return (<div>
            {stats.map(item => getStat(item, max))}


        </div>);
    }
    const transformData = (data) => {
        /* Height */
        const height_m = data.height / 10; // to meters
        let height_ft = convert(height_m).from("m").to("ft"); // to foot
        let height_in = convert(height_ft - Math.trunc(height_ft)).from("ft").to("in"); // inches
        height_in = Math.round(height_in);
        height_ft = Math.trunc(height_ft);

        /* weight */
        const weight_km = data.weight / 10; // to kg
        const weight_lb = Math.round(convert(weight_km).from('kg').to('lb') * 10) / 10; // to lbs

        /* Abilities */
        const abilities = data.abilities.filter(item => item.is_hidden === "false");
        /* Types */
        const types = data.types.map(item => (item.type.name));
        /* Stats */
        //const stats = [{ base_state: 50, name: "speed" }, { base_state: 70, name: "special-defense" }, { base_state: 30, name: "HP" }]
        const stats = data.stats.map(item => ({ base_stat: item.base_stat, name: item.stat.name }));


        const info = {
            height: `${height_m} m (${height_ft}'${height_in}")`,
            weight: `${weight_km} kg (${weight_lb} lbs)`,
            url: `https://img.pokemondb.net/artwork/${data.name}.jpg`,
            id: `${('000' + data.id).slice(-3)}`,
            name: util.capitalize(data.name),
            ability: util.capitalize(abilities[0].ability.name),
            types,
            stats,
        }

        console.log(info);
        return info;
    }

    const getPokemon = (data) => {
        const pokeInfo = transformData(data);
        return (
            <div>
                <div className="header-title">
                    <h3>{pokeInfo.name}</h3>
                </div>
                <div className="pokemon-pic">
                    <img src={pokeInfo.url} alt={pokeInfo.name}></img>
                </div>

                <div className="container-general-info">
                    <div className="prop-name">Number</div>
                    <div className="prop-value">{pokeInfo.id}</div>
                    <div className="prop-name">Height</div>
                    <div className="prop-value">{pokeInfo.height}</div>
                    <div className="prop-name">Weight</div>
                    <div className="prop-value">{pokeInfo.weight}</div>
                    <div className="prop-name">Ability</div>
                    <div className="prop-value">{pokeInfo.ability}</div>
                    <div className="prop-name">Types</div>
                    <div>                        {getTypes(pokeInfo.types)}</div>

                </div>
                <br></br>
                <div><b>Base Stats</b></div>
                {getStatistics(pokeInfo.stats)}
                <div className="stat-bar" style={{ minwidth: 250 + 'px' }}>50</div>
            </div>
        );
    }
    return (
        <div>
            {data ? getPokemon(data) : null}
        </div>
    );
}

export default Pokemon;