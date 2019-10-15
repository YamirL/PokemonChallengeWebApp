import axios from 'axios';
const API_POKE_INFO = "https://pokeapi.co/api/v2/pokemon/2";

export const getPokemonInfo = (id) => {
    axios.get(API_POKE_INFO)
        .then(res => {
            return res.data;
        });
}