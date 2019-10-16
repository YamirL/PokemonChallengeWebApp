import React from 'react';
import './styles.css';

const data = {
    id: 132,
    name: "Ditto",
    order: 197,
    height: 3,
    weight: 69,
    ability: "overgrow",
    sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    },

};


const Pokemon = ({ data }) => {
    console.log("pokemon");
    console.log(data);

    const getProp = (name, value) => (
        <div>
            <h3>{name}</h3>
            <h4>{value}</h4>
        </div>
    );

    const getPokemon = (data) => {
        return (
            <div>
                <div className="container-general-info">
                    <div className="item-title">
                        <h3>{`${data.name} #${('000' + data.id).slice(-3)}`}</h3>
                    </div>
                    <div className="item-icon">
                        <img src={data.sprites.front_default} alt=""></img>
                    </div>
                    {getProp("Height", data.height)}
                    {getProp("Weight", data.weight)}
                    {getProp("Ability", data.ability)}

                </div>
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