import React from 'react';

function WinnerScreen({ winner, loser }) {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 rounded-xl border-4 border-black p-6 bg-black">
            <h1 className="text-4xl font-black text-white uppercase tracking-widest">
                ¡Batalla terminada!
            </h1>
            <div className="flex gap-8 mt-4">
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-yellow-400 bg-yellow-400/10">
                    <img src={winner.sprites?.front_default} alt={winner.name} className="w-24 h-24" />
                    <p className="text-white font-bold capitalize">{winner.name}</p>
                    <p className="text-yellow-400 text-xs font-bold">GANADOR</p>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-gray-700 bg-gray-800/40 opacity-50">
                    <img src={loser.sprites?.front_default} alt={loser.name} className="w-24 h-24 grayscale" />
                    <p className="text-white font-bold capitalize">{loser.name}</p>
                    <p className="text-red-400 text-xs font-bold">PERDEDOR</p>
                </div>
            </div>
            <p className="text-white/40 text-xs mt-2">Presiona el botón Home para reiniciar</p>
        </div>
    );
}

export default WinnerScreen;