
const Screen = ({pokemones}) => {

    return (
        <div className="h-full w-full rounded-xl bg-white ring-1 ring-gray-900/5 shadow-xl border-4 border-black p-4 overflow-auto">
            {pokemones?.map((pokemon) => (
                [     //  Garcias a q se pueden usar los `[]`
                    <p key={pokemon.name}>{pokemon.name}</p>,
                    <img src={pokemon?.sprites?.front_default} className="w-40 h-40" alt={"pokemon Img smn"}/>
                ]
            ))}
        </div>
    )

}


export default Screen