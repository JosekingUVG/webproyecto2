// data/rules/jokers.js

const score = `
# 🎯 Sistema de Puntuación

El puntaje del jugador se calcula en base a la mano de poker que forme utilizando 5 cartas seleccionadas.

El puntaje final se compone de tres partes:

1. Puntaje base de la mano
2. Suma de valores de las cartas
3. Modificadores (Jokers)

---

## 1. Puntaje base por tipo de mano

Cada tipo de mano tiene un valor base asignado:

* Escalera Real: 300 puntos
* Escalera de Color: 250 puntos
* Poker: 200 puntos
* Full House: 160 puntos
* Color: 120 puntos
* Escalera: 100 puntos
* Trío: 70 puntos
* Doble Pareja: 50 puntos
* Pareja: 30 puntos
* Carta Alta: 10 puntos

Estos valores están balanceados para que el puntaje total sea alcanzable dentro de los rangos definidos por ronda.

---

## 2. Valor de las cartas

Cada carta tiene un valor numérico:

* As (A): 14
* Rey (K): 13
* Reina (Q): 12
* Jota (J): 11
* Cartas numéricas: su valor (2–10)

### 2.1 Suma de cartas

La suma de cartas es la suma de los valores de las 5 cartas utilizadas en la mano.

Ejemplo:

* Mano: 10, J, Q, K, A
* Suma = 10 + 11 + 12 + 13 + 14 = 60

---

## 3. Fórmula de puntaje final

El puntaje final se calcula con la siguiente fórmula. En caso de no contar con un joker (como ocurre en la ronda 1), el multiplicador se considera igual a 1, por lo que no afecta el resultado final.

score_final = (puntaje_base + suma_cartas) * multiplicador_joker

Donde:

* puntaje_base = valor según la mano formada
* suma_cartas = suma de los valores de las cartas usadas
* multiplicador_joker = valor del joker (por defecto = 1 si no hay joker)

---

## 4. Jokers (modificadores)

Los jokers afectan el puntaje final mediante multiplicadores u otros efectos.

Ejemplo:

* Sin joker → multiplicador = 1
* Joker de x2 → multiplicador = 2

El efecto del joker se aplica **al resultado total**, no solo a una parte.

---
`;

export default score;