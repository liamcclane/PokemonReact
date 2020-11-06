import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default props => {
    const [pokemons, setPokemons] = useState([]); 
    
    useEffect(()=>{
        axios.get(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_POKIII)
            .then(response => {
                setPokemons(response.data.results);
            })
    },[]);

    let pokiess = <h1>No Pokies Sorry</h1>;
    if(pokemons.length > 0) {
        pokiess = pokemons.map((pokemon, ind) => (
            <li key={ind} >{pokemon.name}!</li>
        ));
    }

    return (
        <div className="righty">
            <h1>Pokemon!!</h1>
            <ul>
                {pokiess}
            </ul>
        </div>
    )
}
