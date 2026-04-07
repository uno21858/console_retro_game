import React from 'react';

function LeftController() {
    return (
    <div className="flex w-full h-full items-center gap-x-4 rounded-xl bg-red-700 p-4 shadow-lg outline outline-black/5">
      <h1>Left control</h1>
        <div>
            <div className="h-32 w-32 rounded-full bg-black"/>
        </div>
    </div>
    );
}

export default LeftController;
