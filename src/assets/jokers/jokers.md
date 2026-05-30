

---

### 1. El Mapeador de Assets Locales (Jokers)

En React (utilizando Vite o Next.js), cuando dejas archivos dentro de `src/assets/`, necesitas que el empaquetador conozca sus rutas reales tras compilar. Crearemos un archivo de configuración llamado `jokersData.js` para mapear las imágenes y guardar las reglas del multiplicador que investigaste:

Crea `src/data/jokersData.js`:

```javascript
// Importamos las imágenes locales de los jokers
import ChaoticJokerImg from '../assets/jokers/Chaotic Joker.png';
import SadJokerImg from '../assets/jokers/Sad Joker.png';
import WishfulJokerImg from '../assets/jokers/Wishful Joker.png';

export const JOKERS_CONFIG = {
  'chaotic_joker': {
    name: 'Chaotic Joker',
    image: ChaoticJokerImg,
    suitTarget: 'D', // ♦️ Diamantes
    description: 'Aumenta el puntaje según la cantidad de cartas de diamantes en la mano.'
  },
  'sad_joker': {
    name: 'Sad Joker',
    image: SadJokerImg,
    suitTarget: 'C', // ♣️ Tréboles
    description: 'Aumenta el puntaje según la cantidad de cartas de tréboles en la mano.'
  },
  'wishful_joker': {
    name: 'Wishful Joker',
    image: WishfulJokerImg,
    suitTarget: 'S', // ♠️ Picas
    description: 'Aumenta el puntaje según la cantidad de cartas de picas en la mano.'
  }
};

/**
 * 1.1 & 1.2 Cálculo del multiplicador matemático
 * Formula: 1 + (cantidad_cartas_del_palo * 0.5)
 */
export const calculateJokerMultiplier = (count) => {
  return 1 + (count * 0.5);
};

/**
 * 1.3 Aplicación en el puntaje total
 */
export const calculateFinalScore = (baseScore, cardsSum, multiplier) => {
  return (baseScore + cardsSum) * multiplier;
};

```

---

### 2. Componente de React para el Joker (`JokerCard.jsx`)

Este componente recibe el ID del joker que está activo en la mesa, cuenta cuántas cartas del palo requerido tiene el jugador en la mano actual (las cuales vendrán desde tus enlaces de Cloudinary), muestra la imagen local y calcula en tiempo real el estado del multiplicador.

Crea `src/components/JokerCard.jsx`:

```jsx
import React from 'react';
import { JOKERS_CONFIG, calculateJokerMultiplier } from '../data/jokersData';

export const JokerCard = ({ jokerId, playerHand = [] }) => {
  const joker = JOKERS_CONFIG[jokerId];

  if (!joker) return null;

  // Contamos cuántas cartas en la mano del jugador coinciden con el palo del Joker
  // playerHand debe ser un array de objetos ej: [{rank: 'A', suit: 'S'}, {rank: 'T', suit: 'D'}]
  const matchingCardsCount = playerHand.filter(card => card.suit.toUpperCase() === joker.suitTarget).length;
  
  // Obtenemos el multiplicador (x1.0, x1.5, x2.0, etc.)
  const currentMultiplier = calculateJokerMultiplier(matchingCardsCount);

  return (
    <div className="border border-gray-700 bg-gray-900 text-white p-4 rounded-xl shadow-xl w-48 text-center flex flex-col items-center gap-2">
      <h3 className="font-bold text-md text-amber-400">{joker.name}</h3>
      
      {/* Imagen Local del Joker */}
      <img 
        src={joker.image} 
        alt={joker.name} 
        className="w-28 h-auto object-contain my-2 drop-shadow-[0_4px_6px_rgba(255,255,255,0.1)]"
      />
      
      <p className="text-xs text-gray-400 px-1">{joker.description}</p>
      
      {/* Badge del multiplicador en base a tu tabla de valores */}
      <div className="mt-2 px-3 py-1 bg-amber-500 text-slate-950 font-black rounded-md text-sm animate-pulse">
        Mult: x{currentMultiplier.toFixed(1)}
      </div>
      <span className="text-[10px] text-gray-500">({matchingCardsCount} cartas de {joker.suitTarget})</span>
    </div>
  );
};

```

---

### 3. Ejemplo de integración completa en tu Tablero de Juego

Aquí puedes ver cómo interactúan tus **Jokers locales** con las **cartas estándar que optimizaste en Cloudinary**:

```jsx
import React, { useState } from 'react';
import { JokerCard } from './components/JokerCard';
import { calculateFinalScore, JOKERS_CONFIG, calculateJokerMultiplier } from './data/jokersData';

// Helper de Cloudinary que construimos en el paso anterior
const getCloudinaryUrl = (rank, suit) => 
  `https://res.cloudinary.com/dkrjxumbb/image/upload/balatro/face/${rank.toUpperCase()}${suit.toUpperCase()}_2x.png`;

export const BalatroBoard = () => {
  // Simulamos la mano del jugador (valores de ejemplo)
  const [manoDelJugador, setManoDelJugador] = useState([
    { rank: 'T', suit: 'D' }, // 10 de Diamantes (viene de tu URL de Cloudinary)
    { rank: 'A', suit: 'D' }, // As de Diamantes
    { rank: 'K', suit: 'H' }, // Rey de Corazones
    { rank: '7', suit: 'D' }, // 7 de Diamantes
  ]);

  // Joker actualmente activo en la ranura de comodines
  const jokerActivo = 'chaotic_joker'; // El joker de Diamantes
  
  // Valores base para el cálculo del score (Simulación de Balatro)
  const puntajeBase = 10;
  const sumaCartas = 27; // Ejemplo numérico de la suma del valor de las cartas jugadas

  // Calcular puntaje final usando las reglas exportadas
  const targetSuit = JOKERS_CONFIG[jokerActivo].suitTarget;
  const cantCartasPalo = manoDelJugador.filter(c => c.suit === targetSuit).length;
  const multActual = calculateJokerMultiplier(cantCartasPalo);
  const totalScore = calculateFinalScore(puntajeBase, sumaCartas, multActual);

  return (
    <div className="p-8 bg-slate-950 min-h-screen text-white flex flex-col gap-8">
      
      {/* Zona de Jokers (Locales) */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-amber-500">Mis Jokers Activos</h2>
        <JokerCard jokerId={jokerActivo} playerHand={manoDelJugador} />
      </section>

      {/* Zona de Mano de Cartas (Cloudinary CDN) */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-blue-400">Mano del Jugador</h2>
        <div className="flex gap-4">
          {manoDelJugador.map((carta, index) => (
            <img 
              key={index}
              src={getCloudinaryUrl(carta.rank, carta.suit)} 
              alt={`${carta.rank} de ${carta.suit}`}
              className="w-24 h-auto rounded-lg shadow-md border border-slate-800"
            />
          ))}
        </div>
      </section>

      {/* Marcador de Puntaje */}
      <section className="bg-slate-900 p-4 rounded-lg max-w-sm border border-slate-800">
        <h2 className="text-sm uppercase tracking-wider text-gray-400">Puntaje de la Mano</h2>
        <p className="text-2xl font-black text-green-400 mt-1">{totalScore} PTS</p>
        <p className="text-xs text-gray-500 mt-1">
          Formula: ({puntajeBase} Base + {sumaCartas} Fichas) x {multActual.toFixed(1)} Multiplicador
        </p>
      </section>

    </div>
  );
};

```

### Ventajas de este enfoque mixto:

1. **Rendimiento óptimo:** Como los Jokers son pocos archivos y son críticos para la interfaz táctica del juego, cargan de forma instantánea al estar compilados localmente en el bundle de React.
2. **Control matemático centralizado:** Si en el futuro decides cambiar el multiplicador (por ejemplo, a `0.6` por carta), solo modificas `jokersData.js` y toda tu UI de React se adaptará de inmediato de forma reactiva.