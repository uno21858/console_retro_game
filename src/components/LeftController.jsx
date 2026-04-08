import React from 'react';

function LeftController({ handleDirection }) {
    const dPadButtonClass = 'absolute h-8 w-8 rounded-md border-2 border-black bg-zinc-900 hover:bg-zinc-700';

    return (
        <div className="flex h-full w-full flex-col items-center justify-between rounded-[2.2rem] border-4 border-black bg-red-600 px-4 py-5 shadow-xl">
            {/* Parte superior del controlador */}
            <div className="flex w-full items-center justify-between">
                <div className="h-3 w-8 rounded-full bg-black/80" />
                <div className="h-4 w-4 rounded-full border-2 border-black bg-red-400" />
            </div>

            {/* Joystick o botón central */}
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-black bg-zinc-800 shadow-inner">
                <div className="h-11 w-11 rounded-full border-2 border-zinc-700 bg-zinc-900" />
            </div>

            {/* Botones direccionales */}
            <div className="relative h-24 w-24">
                <button
                    type="button"
                    aria-label="Mover arriba"
                    onClick={() => handleDirection?.('up')}
                    className={`${dPadButtonClass} left-1/2 top-0 -translate-x-1/2`}
                />
                <button
                    type="button"
                    aria-label="Mover izquierda"
                    onClick={() => handleDirection?.('left')}
                    className={`${dPadButtonClass} left-0 top-1/2 -translate-y-1/2`}
                />
                <button
                    type="button"
                    aria-label="Mover derecha"
                    onClick={() => handleDirection?.('right')}
                    className={`${dPadButtonClass} right-0 top-1/2 -translate-y-1/2`}
                />
                <button
                    type="button"
                    aria-label="Mover abajo"
                    onClick={() => handleDirection?.('down')}
                    className={`${dPadButtonClass} bottom-0 left-1/2 -translate-x-1/2`}
                />
            </div>

            {/* Botón de captura o acción */}
            <button
                type="button"
                aria-label="Botón de captura"
                className="h-7 w-7 rounded-md border-2 border-black bg-zinc-900 hover:bg-zinc-700"
            >

            </button>
        </div>
    );
}

export default LeftController;