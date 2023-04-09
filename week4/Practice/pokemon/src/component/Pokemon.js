import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';

const Pokemon = () => {
    const { pokeName } = useParams() //destructuring 
    // console.log(pokeName)

    const [poke, setPoke] = useState(null) //can be null until we assign value

    useEffect(()=>{
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((response) => {
            console.log(response.data)
            setPoke(response.data.sprites.front_shiny)
        })
        .catch((err) => {
            console.log("Something went wrong:",err)
        })
    }, []);

    return (
        <div>
            {
                poke ? <img src={poke} alt="Pokemon Image"/> : <h2>...Awaiting Pokemon</h2>
            }
        </div>
    );
}

export default Pokemon;
