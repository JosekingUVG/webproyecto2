// data/rules/jokers.js

const jokers = `
# Sistema de Jokers

Al finalizar cada ronda, el jugador puede elegir **uno de dos jokers disponibles**.

* Cada joker otorga una ventaja o modificación al puntaje.
* El joker seleccionado **solo aplica en la siguiente ronda**.
* Los jokers **no se acumulan**.

Los jokers son modificadores especiales que alteran el puntaje final de la mano del jugador.

Cada joker aplica un efecto basado en un **multiplicador dinámico**, el cual depende de las cartas utilizadas en la mano.

## 1. Jokers por palo (multiplicadores dinámicos): 

Cada joker está asociado a un palo específico y aumenta el puntaje según la cantidad de cartas de ese palo en la mano.

---

### ♥️ Joker de Corazones

Aumenta el puntaje según la cantidad de cartas de corazones en la mano.

---

### ♦️ Joker de Diamantes

Aumenta el puntaje según la cantidad de cartas de diamantes en la mano.

---

### ♣️ Joker de Tréboles

Aumenta el puntaje según la cantidad de cartas de tréboles en la mano.

---

### ♠️ Joker de Picas

Aumenta el puntaje según la cantidad de cartas de picas en la mano.

---

## 1.1 Cálculo del multiplicador

Para todos los jokers de palo, el multiplicador se calcula de la siguiente forma:

multiplicador = 1 + (cantidad_cartas_del_palo * 0.5)

---

## 1.2 Valores del multiplicador

Dependiendo de la cantidad de cartas del palo correspondiente:

* 0 cartas → x1.0
* 1 carta → x1.5
* 2 cartas → x2.0
* 3 cartas → x2.5
* 4 cartas → x3.0
* 5 cartas → x3.5

---

`;

export default jokers;