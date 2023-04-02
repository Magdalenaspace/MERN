// import PokeLogo from ".../assets/pokeLogo.png"
const Display = (props) => {

    const { pokemonCard, setPokemonCard } = props
    var log = console.log.bind(console)
    log("DISPALY PROPS:", pokemonCard)

    //MAP CHECK up if this []
    log(Array.isArray(pokemonCard))

    const deleteHandler = (cardFromMap) => {
        setPokemonCard(pokemonCard.filter((allOtherCards) => allOtherCards !== cardFromMap) )
    }

    const faintHandler = (cardFromMap) => {
        cardFromMap.checked = !cardFromMap.checked
        setPokemonCard([...pokemonCard])
        log(cardFromMap.checked)

    return (
            <div className="poke-party">
            {pokemonCard.map((card,idx) => (
                <div id="cards" key={idx}>
                    {/* <img id="logo" src={pokeLogo} alt="poke image"/> */}
                    <h4> {card.pokemon} </h4>
                    {/* <img id="pokemon" src={card.sprites}/> */}
                    {/* <h4>{card.type}</h4> */}
                    <div className="delete-update">
                        <button onClick= {() => deleteHandler(card)}>Delete</button>
                        <input type="checkbox" name="faint" onChange={() => faintHandler(card)}></input>
                    </div>
                </div>
            ))}
            </div>
        );
}
}
export default Display;