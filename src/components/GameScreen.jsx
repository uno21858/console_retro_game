import React from 'react';

/**
 * Tarjeta visual de un pokemon en la pantalla de batalla.
 * @param {Object} pokemon - Objeto pokemon con name y sprites.
 * @param {string} label - Etiqueta que aparece arriba ("Tu" / "PC").
 */
const PokemonCard = ({ pokemon, label }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-bold text-white/70 uppercase tracking-widest">{label}</p>
            <p className="text-lg font-bold text-white capitalize">{pokemon.name}</p>
            <img
                src={pokemon.sprites?.front_default}
                alt={pokemon.name}
                className="w-45 h-45"
            />
        </div>
    );
}


function GameScreen({ miSeleccion, pcSeleccionado }) {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-8 rounded-xl border-4 border-black p-6 bg-cover bg-center" style={{ backgroundImage: 'url("/image.jpg")', contain: "size" }}>
            <div className="flex w-full items-center justify-around">
                <PokemonCard pokemon={miSeleccion} label="Tu" />
                <span className="text-4xl font-black text-white">VS</span>
                <PokemonCard pokemon={pcSeleccionado} label="PC" />
            </div>
        </div>
    );
}

export default GameScreen;