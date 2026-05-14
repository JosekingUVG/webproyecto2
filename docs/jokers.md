# 🃏 Jokers

Los jokers son modificadores especiales que alteran el puntaje final de la mano del jugador.

Cada joker aplica un efecto basado en un **multiplicador dinámico**, el cual depende de las cartas utilizadas en la mano.

---

## Funcionamiento general

* El jugador solo puede tener **un joker activo por ronda**.
* El efecto del joker se aplica **al puntaje final**.
* Solo se consideran las **5 cartas seleccionadas para formar la mano**.

---

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

## 1.3 Aplicación en el puntaje

El joker modifica el puntaje final de la siguiente forma:

score_final = (puntaje_base + suma_cartas) * multiplicador

---

## 1.4 Ejemplo

### Situación:

El jugador tiene el **Joker de Picas (♠️)** y forma la siguiente mano:

* Cartas: 9♠, J♠, K♠, 5♦, 5♣
* Tipo de mano: Pareja

---

### Paso 1: Puntaje base

Pareja = 30 puntos

---

### Paso 2: Suma de cartas

9 + 11 + 13 + 5 + 5 = 43

---

### Paso 3: Contar cartas del palo (♠️)

Hay 3 cartas de picas

---

### Paso 4: Calcular multiplicador

multiplicador = 1 + (3 * 0.5) = 2.5

---

### Paso 5: Puntaje final

score_final = (30 + 43) * 2.5 = 73 * 2.5 = 182.5

---

## 1.5 Consideraciones

* Solo se cuentan las cartas utilizadas en la mano final.
* El multiplicador mínimo siempre es x1 (sin efecto).
* Este sistema incentiva estrategias basadas en palos específicos.
