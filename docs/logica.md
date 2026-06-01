
---

### `src/utils/...` - Lógica de Juego

# 🃏 Arquitectura Lógica de Not-Balatro

Este directorio contiene el motor matemático, las reglas de póker y los sistemas de puntuación que manejan el estado interno del juego. Toda la lógica está separada del ciclo de vida de React, lo que permite que sea agnóstica, fácil de probar y de integrar en los componentes del frontend.

---

## 📁 Estructura de Módulos

### 1. 🎴 Gestión de Cartas (`/cards`)

Se encarga de la creación física del mazo, el barajado aleatorio y el peso de los naipes.

* **`createDeck.js`**: Genera un mazo estándar de 52 cartas. Cada carta es un objeto que contiene su rango (`rank`) y su palo (`suit`). Mapea internamente el valor `10` con el carácter `'T'` para ser compatible con las imágenes de la interfaz y Cloudinary.
* **`shffleDeck.js`**: Toma un mazo de cartas y altera el orden de sus elementos de forma aleatoria (algoritmo de barajado).
* **`drawCards.js`**: Recibe un mazo y una cantidad específica $N$. Extrae aleatoriamente esa cantidad de cartas y devuelve dos cosas: un arreglo con las cartas robadas (la mano) y un arreglo con las cartas sobrantes (el mazo actualizado).
* **`getCardValue.js`**: Convierte el rango de cualquier carta en su peso numérico equivalente para hacer cálculos matemáticos (desde el `2` hasta el As, que equivale a `14`). Resuelve el carácter `'T'` devolviendo un valor de `10`.

### 2. 📊 Motor de Puntuación (`/score`)

Calcula los puntos, identifica las jugadas de póker tradicionales y procesa el balanceo del score.

* **`detectHand.js`**: El cerebro del reconocedor de jugadas. Evalúa un grupo de hasta 5 cartas y determina cuál es la combinación de póker más alta presente (desde `highCard` hasta `royalFlush`). Cuenta con soporte para la escalera baja del As ($A, 2, 3, 4, 5$).
* **`handValues.js`**: Archivo de configuración centralizada que contiene los puntos base otorgados por cada tipo de mano (ej: Pareja = 30 pts, Full House = 160 pts). Cambiar los números aquí altera el balanceo de todo el juego.
* **`calculateCardSum.js`**: Recibe un grupo de cartas seleccionadas y acumula secuencialmente el valor numérico individual de cada una (`suma_cartas`).
* **`calculateHandScore.js`**: El punto de entrada principal para el cálculo del score. Coordina la detección de la mano, extrae su valor base, le suma los puntos de las cartas individuales y aplica el multiplicador total de los Jokers activos para retornar el puntaje final de la jugada.

### 3. 🃏 Configuración de Jokers (`/jokers`)

Define las propiedades estéticas y el impacto matemático de los modificadores de la partida.

* **`jokerConfig.js`**: Almacena el diccionario global de los Jokers disponibles en el juego (`Chaotic Joker`, `Sad Joker`, `Wishful Joker`, `Puzzled Joker`), asociando sus textos descriptivos, palos objetivos y las rutas relativas de sus assets visuales.
* **`calculateMultiplier.js`**: Analiza cuáles Jokers tiene equipados el jugador en su inventario. Cuenta cuántas cartas en la mesa coinciden con el palo objetivo de cada Joker y calcula el multiplicador total acumulado aplicando la fórmula matemática de bonificación por carta coincidente.

### 4. 🎮 Ciclo de Juego (`/game`)

Controla la progresión, las metas por ronda y el descarte de naipes.

* **`generateTargetScore.js`**: Define la dificultad del juego. Genera un puntaje objetivo aleatorio utilizando rangos preestablecidos según la ronda actual (ej: de 100 a 200 en la Ronda 1) y garantiza rigurosamente que la meta actual sea superior al score objetivo de la ronda anterior.
* **`discardCards.js`**: Administra la mecánica de descartes. Remueve las cartas que el jugador seleccionó, calcula cuántas le hacen falta para completar su mano original de 8 naipes, y roba de forma aleatoria el sustituto exacto directamente desde el mazo restante, garantizando que no existan duplicados.
* **`canAdvanceRound.js`**: Evalúa si el puntaje acumulado actual cumple o supera el objetivo de la ronda para habilitar la transición a la siguiente fase del juego.

---

## 🔄 Flujo de Datos Recomendado en React

Para implementar este motor en el frontend, se sugiere que el estado central de la aplicación (o un Contexto global) maneje el ciclo de vida de la siguiente manera:

```
[Inicio de Ronda] 
       ↓
 Generar Meta (generateTargetScore) + Crear y Mezclar Mazo (createDeck -> shuffleDeck)
       ↓
 Robar 8 Cartas Iniciales (drawCards) -> Guardar en el estado de la Mano
       ↓
  ¿El jugador selecciona cartas y presiona "Descartar"?
       ↳ SÍ: Ejecutar (discardCards) -> Actualizar mano y mazo -> Restar 1 descarte disponible.
       ↳ NO: Continúa...
       ↓
  ¿El jugador selecciona cartas y presiona "Jugar Mano"?
       ↳ SÍ: Pasar las cartas seleccionadas y los Jokers activos a (calculateHandScore).
             Sumar los puntos al Score Acumulado de la ronda.
             Restar 1 mano disponible.
             Robar cartas del mazo (drawCards) hasta volver a tener 8 en la mano.
       ↓
[Evaluación de Fin de Ronda]
       ↳ ¿Score Acumulado >= Meta?: Ganar Ronda -> Avanzar Ronda y limpiar tablero.
       ↳ ¿Manos Disponibles === 0 y Score < Meta?: Gatillar estado de GAME OVER.

```

---

Con este documento en el repositorio, el equipo encargado de hacer los componentes visuales de las cartas, el tablero y los botones solo tendrá que preocuparse por mapear los clics de los usuarios y conectar los resultados directamente a los contenedores de texto.