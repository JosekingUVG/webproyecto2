// data/rules/jokers.js

const cards = `
# 4. Formación de manos

El jugador debe formar manos de poker utilizando las cartas disponibles.

## 🔴 Regla importante:

El jugador debe seleccionar **exactamente 5 cartas** de las 8 disponibles para formar una mano válida.

Las manos posibles son:

### Escalera Real (10, J, Q, K, A del mismo palo)

### Escalera de Color (5 cartas consecutivas del mismo palo)

### Poker (4 cartas del mismo valor)

### Full House (3 cartas iguales + 1 pareja)

### Color (5 cartas del mismo palo)

### Escalera (5 cartas consecutivas)

### Trío (3 cartas iguales)

### Doble Pareja (2 pares)

### Pareja (2 cartas iguales)

### Carta Alta (ninguna de las anteriores, se puntúa por la carta más alta)

---

`;

export default cards;