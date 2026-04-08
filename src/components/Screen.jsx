import { useEffect, useRef } from 'react';


const Screen = ({ pokemones, position }) => {
    const selectedPokemon = useRef(null);

    useEffect(() => {
        selectedPokemon.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, [position]);


    return (
        <>
            <div className="h-120 overflow-y-auto border-20 border-solid rounded-t-xl">
                <div className="flex flex-wrap justify-center">
                    {pokemones?.map((pokemon, index) => (
                        <div
                            key={index}
                            ref={position === pokemon.id ? selectedPokemon : null}
                            style={{ color: position === pokemon.id ? 'red' : 'white' }}
                            className="flex flex-col border-2 m-1.5"
                        >
                            <p>{pokemon.name}</p>
                            <img
                                src={pokemon?.sprites?.front_default}
                                alt={pokemon.name}
                                className="w-50 h-50"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Screen;
