import React from 'react';

function RightController({ handleSelection, handleAtack, handleReset }) {
    const actionButtonClass = 'h-8 w-8 rounded-full border-2 border-black bg-zinc-900 hover:bg-zinc-700';

    return (
        <div className="flex h-full w-full flex-col items-center justify-between rounded-[2.2rem] border-4 border-black bg-red-600 px-4 py-5 shadow-xl">
            <div className="flex w-full items-center justify-between">

                <div className="relative flex h-11 w-11 items-center justify-center" aria-hidden="true">
                    <span className="absolute h-3 w-11 rounded-full bg-black/80 shadow-sm" />
                    <span className="absolute h-11 w-3 rounded-full bg-black/80 shadow-sm" />
                </div>
                <div/>

            </div>

            <div className="relative h-24 w-24 text-[10px] font-bold text-white">
                <button type="button" aria-label="X" onClick={handleAtack} className={`absolute left-1/2 top-0 -translate-x-1/2 ${actionButtonClass}`}>X</button>
                <button type="button" aria-label="A"  onClick={handleSelection} className={`absolute right-0 top-1/2 -translate-y-1/2 ${actionButtonClass}`}>A</button>
                <button type="button" aria-label="Y"  className={`absolute left-0 top-1/2 -translate-y-1/2 ${actionButtonClass}`}>Y</button>
                <button type="button" aria-label="B"  className={`absolute left-1/2 bottom-0 -translate-x-1/2 ${actionButtonClass}`}>B</button>
            </div>

            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-black bg-zinc-800 shadow-inner">
                <div className="h-11 w-11 rounded-full border-2 border-zinc-700 bg-zinc-900" />
            </div>


            <button
                type="button"
                aria-label="Home button"
                onClick={handleReset}
            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-zinc-900"
            >
                <span className="h-3 w-3 rounded-full border border-zinc-400" />
            </button>
        </div>
    );
}

export default RightController;