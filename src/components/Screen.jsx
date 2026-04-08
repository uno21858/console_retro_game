const Screen = ({ pokemones, position }) => {
    return (
        <>
            <div className=" h-120 border-4 border-solid overflow-y-auto border-20 border-solid rounded-t-xl">
                <div className={"flex flex-wrap justify-center"}>
                    {pokemones?.map((pokemon, index) => (
                        <div key={index}
                             style={{color: position === pokemon.id ? "red" : "White"}}
                             className="flex flex-col border-2" >
                            <p>{pokemon.name}</p>
                            <img
                                src={pokemon?.sprites?.front_default}
                                alt={pokemon.name}
                                className="w-40 h-40"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Screen;