import React from 'react';
import { HealthBar } from './index.js';

/**
 * Tarjeta visual de un pokemon en la pantalla de batalla.
 * @param {Object} pokemon - Objeto pokemon con name y sprites.
 * @param {string} label - Etiqueta que aparece arriba ("Tu" / "PC").
 */
const PokemonCard = ({ pokemon, label, hp }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-bold text-white/70 uppercase tracking-widest">{label}</p>
            <p className="text-lg font-bold text-white capitalize">{pokemon.name}</p>
            <img
                src={pokemon.sprites?.front_default}
                alt={pokemon.name}
                className="w-45 h-45"
            />
            <HealthBar hp={hp} label={label} />
        </div>
    );
}


function GameScreen({ miSeleccion, pcSeleccionado, myHP, pcHP, battleLog }) {

    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-8 rounded-xl border-4 border-black p-6 bg-cover bg-center" style={{ backgroundImage: 'url("/image.jpg")', contain: "size" }}>
            <div className="flex w-full items-center justify-around">
                <PokemonCard pokemon={miSeleccion} label="Tu" hp={myHP} />
                <span className="text-4xl font-black text-white">VS</span>
                <PokemonCard pokemon={pcSeleccionado} label="PC" hp={pcHP} />
            </div>
            {battleLog && (
                <div className="border-2 border-white/30 rounded-lg bg-black/60 px-6 py-2 text-white text-lg text-center font-bold">
                    {battleLog}
                </div>
            )}
        </div>
    );
}

export default GameScreen;