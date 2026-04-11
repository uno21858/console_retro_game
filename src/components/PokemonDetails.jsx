import React from 'react';

function PokemonDetails({ actual }) {
    if (!actual || actual.length === 0) return null;

    const pokemon = actual[0];

    return (
        <div className="border-4 border-black rounded-xl bg-gray-900 p-4 flex gap-6 w-full max-w-4xl">


            {/* Imagenes */}
            <div className="flex flex-col items-center gap-2">
                <div className="border-2 border-yellow-400 rounded-lg p-2 bg-gray-800">
                    <img
                        src={pokemon.sprites?.front_default}
                        alt={`${pokemon.name} frente`}
                        className="w-45 h-45"
                    />
                </div>
                <div className="border-2 border-gray-500 rounded-lg p-2 bg-gray-800">
                    <img
                        src={pokemon.sprites?.back_default}
                        alt={`${pokemon.name} espalda`}
                        className="w-45 h-45"
                    />
                </div>
            </div>



            {/* Info */}
            <div className="flex flex-col flex-2 ">
                <div>
                    <h2 className="text-white font-bold text-2xl capitalize">{pokemon.name}</h2>
                    <p className="text-gray-400 text-sm">ID: #{pokemon.id}</p>
                </div>


                {/* Movimientos */}
                <div className="border-t border-gray-700 pt-2">
                    <p className="text-yellow-400 text-xs font-bold mb-2">MOVIMIENTOS</p>
                    <div className="flex flex-col gap-1">
                        {pokemon.moves?.slice(0, 10).map((m) => (
                            <div
                                key={m.move.name}
                                className="flex justify-between border border-gray-600 rounded px-3 py-1"
                            >
                                <span className="text-white text-sm capitalize">{m.move.name}</span>
                                <span className="text-yellow-400 text-sm font-bold">ATK {m.attack}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </div>
    );
}

export default PokemonDetails;