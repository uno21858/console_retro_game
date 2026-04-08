import React from 'react';

function RightController({ handleSelection }) {
  const actionButtonClass = 'h-8 w-8 rounded-full border-2 border-black bg-zinc-900 hover:bg-zinc-700';

  return (
    <div className="flex h-full w-full flex-col items-center justify-between rounded-[2.2rem] border-4 border-black bg-blue-600 px-4 py-5 shadow-xl">
      <div className="flex w-full items-center justify-between">
        <div className="h-4 w-4 rounded-full border-2 border-black bg-blue-400" />
        <div className="h-3 w-8 rounded-full bg-black/80" />
      </div>

      <div className="relative h-24 w-24 text-[10px] font-bold text-white">
        <button type="button" aria-label="X"  className={`absolute left-1/2 top-0 -translate-x-1/2 ${actionButtonClass}`}>X</button>
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
        className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-zinc-900"
      >
        <span className="h-3 w-3 rounded-full border border-zinc-400" />
      </button>
    </div>
  );
}

export default RightController;