




const Screen = ({pokemones}) => {

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl px-64 py-8 ring shadow-xl ring-gray-900/5 border-20 border-solid">
            {pokemones?.map((pokemon) => (
                <p key={pokemon.name}>{pokemon.name}</p>
            ))}
        </div>
    )

}


export default Screen