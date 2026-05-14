# 🎮 Cómo Jugar

Esta sección describe el flujo general del juego desde la perspectiva del usuario.

---

## 1. Menú principal

Al iniciar el juego, se muestra un menú con las siguientes opciones:

* **Jugar**
* **Reglas**
* **Puntajes**

---

## 2. Inicio de una partida

Al seleccionar la opción **Jugar**, el usuario accede a la pantalla principal de la ronda.

En esta pantalla se muestran:

* El **score objetivo** de la ronda actual
* Las **8 cartas disponibles**
* Controles para **seleccionar cartas** y formar una mano

---

## 3. Selección de cartas

El jugador debe seleccionar **exactamente 5 cartas** de las 8 disponibles para formar una mano válida de poker.

Una vez seleccionadas, se calcula el puntaje utilizando la siguiente fórmula:

score_final = (puntaje_base + suma_cartas) * multiplicador_joker

Donde:

* `puntaje_base`: valor asignado según el tipo de mano formada
* `suma_cartas`: suma de los valores de las cartas seleccionadas
* `multiplicador_joker`: modificador aplicado por el joker activo (por defecto = 1)

---

## 4. Resultado de la ronda

* Si el **score_final ≥ score objetivo**, el jugador avanza a la siguiente ronda.
* Si el **score_final < score objetivo**, la partida termina (**Game Over**).

---

## 5. Tienda de Jokers

Al finalizar una ronda exitosa, el jugador accede a una pantalla de selección de jokers.

En esta pantalla:

* Se muestran **dos opciones de joker**
* El jugador debe elegir **uno**
* El joker seleccionado se aplicará en la siguiente ronda

---

## 6. Progresión del juego

Después de seleccionar un joker:

* Inicia una nueva ronda
* Se genera un nuevo **score objetivo**
* Se reparten **nuevas cartas**
* Se repite el proceso

---

## 7. Fin del juego

El juego continúa hasta que el jugador no logre alcanzar el score objetivo en una ronda.

---

## 8. Resumen del flujo

1. Iniciar partida
2. Recibir 8 cartas
3. Seleccionar 5 cartas
4. Calcular puntaje
5. Comparar con score objetivo
6. Elegir joker (si gana)
7. Repetir
