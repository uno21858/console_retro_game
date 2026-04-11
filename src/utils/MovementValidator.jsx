// Definido por el tama;o de la pantalla q estoy usando
const COLS = 6;


/**
 * Valida el movimiento de seleccion de pokemon
 * @param current Seleccion actual de mi pokemon
 * @param direction Pa donde quiero moverlo
 * @param total Cuantos pokemosnes hay en total de los que se descargaron
 * @returns {number|*}
 */
export function validateMovement(current, direction, total) {
  let next = current;

  switch (direction) {
    case 'right': next = current + 1; break;
    case 'left':  next = current - 1; break;
    case 'up':    next = current - COLS; break;
    case 'down':  next = current + COLS; break;
    default: return current;
  }

  if (next < 1) return 1;
  if (next > total) return total;
  return next;
}