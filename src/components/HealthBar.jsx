import React from 'react';

function HealthBar({ hp, maxHP = 100, label }) {
    const porcentaje = (hp / maxHP) * 100;

    const colorBarra = porcentaje > 50 ? 'bg-green-500' : porcentaje > 25 ? 'bg-yellow-400' : 'bg-red-500';

    return (
        <div className="bg-gray-800 p-2 rounded-lg border border-gray-600 w-40">
            <p className="text-white text-xs font-bold mb-1">{label} — HP: {hp}/{maxHP}</p>
            <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                <div
                    className={`h-full transition-all duration-300 ${colorBarra}`}
                    style={{ width: `${porcentaje}%` }}
                />
            </div>
        </div>
    );
}

export default HealthBar;