import { useState } from "react"
import axios from 'axios'
//  Axios is a popular Promise-based HTTP client for making asynchronous requests i
const Form = (props) => {

    const {pokemonCard, setPokemonCard} = props

    var log = console.log.bind(console)
    log("Form Props:", pokemonCard, setPokemonCard)

    const [pokeName, setPokemonName] = useState("")

    const changeHandler = (e) => {
        // key             // value
        setPokemonName({[e.target.value]: e.target.value})    
    }

    const submitHandler = (e) => {
        e.preventDefault()

        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName.pokeSearch}/`)
            // for interpolation and multi-line strings use backticks (`)

            // handling the response via promises
            // capture info -> lift -> display
            .then((res) => {
                console.log(res.data)
                setPokemonCard([...pokemonCard, {
                    'pokemon' : res.data.name,
                    'sprites': res.data.sprites.front_data,
                    'type': res.data.types[0].name,
                    'checked' : false
                }]) 
            })
            .catch((err) => console.log('something went wrong:', err))

    }
    // The spread operator (...) is used to create a new array that 
    // contains all the elements of the previous pokemonCard array, 
    // followed by the new pokeName element.

    return (
        <form onSubmit= { submitHandler } id="poke-form">
            <h1>I choose You!</h1>
            <div className="form-group">
                <label htmlFor="pokeSearch">Search: </label>
                <input type="text" name="pokeSearch" placeholder='...awaiting pokemon name' 
                onChange={ changeHandler }/>
                <input type="submit" value="Generate Pokemon Card" />
            </div>
        </form>
    )

}

export default Form;