


export const Attacks = (moves) => {

    const move = moves[Math.floor(Math.random() * moves.length)];
    return {
        move: move.move.name,
        damage: move.attack
    };


}