const Screen = ({ pokemones, position }) => {
    return (
        <>
            <div className=" h-120 border-4 border-solid overflow-y-auto border-4 border-solid rounded-t-xl">
                <div className={"flex flex-wrap justify-center"}>
                    {pokemones?.map((pokemon, index) => (
                        <div key={index}
                             style={{color: position === pokemon.id ? "red" : "White"}}
                             className="flex flex-col border-2" >
                            <p>{pokemon.name}</p>
                            <img
                                src={pokemon?.sprites?.front_default}
                                alt={pokemon.name}
                                className="w-25 h-25"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Screen;