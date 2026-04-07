import React from 'react';

function RightController() {
    return (
        <div className={" flex w-full h-full items-center gap-x-4 rounded-xl bg-blue-950 p-4 shadow-lg outline outline-black/5"}>
            <h1>Right controller</h1>
            <div className={'h-32 w-32 rounded-full bg-black'}> </div>
        </div>
    );
}

export default RightController;