# 🏗️ Arquitectura del Proyecto

## Arquitectura seleccionada: Arquitectura Basada en Componentes (CBA)

El proyecto utiliza una **Arquitectura Basada en Componentes (Component-Based Architecture, CBA)**, un enfoque de diseño que organiza la aplicación en componentes independientes, reutilizables y especializados.

Cada componente encapsula una funcionalidad específica y puede comunicarse con otros componentes mediante propiedades (`props`), estados y funciones compartidas.

Esta arquitectura es especialmente adecuada para aplicaciones desarrolladas con React, ya que React está diseñado bajo el paradigma de componentes reutilizables.

---

## Tecnologías utilizadas

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Node.js
* Express

---

## Justificación de la elección

La arquitectura basada en componentes fue seleccionada por las siguientes razones:

### 1. Reutilización

Permite reutilizar componentes en diferentes partes del proyecto, reduciendo la duplicación de código y facilitando el mantenimiento.

Ejemplo:

* Un componente de carta puede utilizarse tanto en la pantalla principal como en futuras expansiones del juego.

---

### 2. Separación de responsabilidades

Cada componente tiene una responsabilidad específica, lo que mejora la organización del código y facilita su comprensión.

Ejemplo:

* Un componente se encarga únicamente de mostrar cartas.
* Otro componente calcula el puntaje.
* Otro controla la interfaz del usuario.

---

### 3. Escalabilidad

La estructura permite agregar nuevas funcionalidades sin modificar gran parte del proyecto.

Ejemplo:

* Nuevos jokers
* Nuevos efectos
* Nuevas pantallas
* Nuevas reglas

---

### 4. Mantenimiento

La división del proyecto en carpetas y componentes facilita la detección y corrección de errores.

---

### 5. Compatibilidad con React

React trabaja naturalmente con componentes reutilizables, por lo que esta arquitectura se adapta de forma ideal a las tecnologías utilizadas en el proyecto.

---

# 📂 Estructura de Directorios

## 📂 docs/

Contiene toda la documentación del proyecto.

Incluye:

* Reglas del juego
* Sistema de puntuación
* Jokers
* Arquitectura
* Guía de uso

Esta carpeta facilita la organización y comprensión del proyecto.

---

## 📂 src/assets/

Contiene los recursos visuales y multimedia utilizados por la aplicación.

### Subdirectorios:

* `cards/` → imágenes de cartas
* `jokers/` → imágenes de jokers
* `ui/` → elementos visuales de interfaz
* `sounds/` → efectos de sonido y música

---

## 📂 src/components/

Contiene componentes reutilizables de React.

Ejemplos:

* Carta individual
* Mano del jugador
* Joker
* Botones
* Scoreboard

Estos componentes representan piezas pequeñas e independientes de la interfaz.

---

## 📂 src/screens/

Contiene las pantallas principales del juego.

Ejemplos:

* Menú principal
* Pantalla de juego
* Tienda de jokers
* Pantalla de Game Over

Cada pantalla organiza múltiples componentes para formar una vista completa.

---

## 📂 src/data/

Contiene datos estáticos y configuraciones utilizadas por el juego.

Ejemplos:

* Valores de manos
* Definición de jokers
* Información de cartas
* Configuración de puntajes

---

## 📂 src/utils/

Contiene la lógica principal del juego.

Ejemplos:

* Detectar manos de poker
* Calcular puntajes
* Aplicar efectos de jokers
* Generar y mezclar mazos

Esta carpeta representa el núcleo lógico del proyecto.

---

## 📂 src/styles/

Contiene los archivos de estilos globales y variables visuales.

Ejemplos:

* Estilos globales
* Variables CSS
* Temas visuales

---

# 🧠 Flujo General de la Arquitectura

La aplicación sigue el siguiente flujo lógico:

screens
↓
components
↓
utils + data

### Explicación:

* Las pantallas (`screens`) organizan la interfaz principal.
* Los componentes (`components`) representan elementos reutilizables.
* Las utilidades (`utils`) contienen la lógica del juego.
* Los datos (`data`) almacenan configuraciones y valores constantes.

---

# 📁 Arquitectura Final del Proyecto

```plaintext
project-root/
│
├── README.md
│
├── docs/
│
├── src/
│   │
│   ├── assets/
│   │   ├── cards/
│   │   ├── jokers/
│   │   ├── ui/
│   │   └── sounds/
│   │
│   ├── components/
│   ├── screens/
│   ├── data/
│   ├── utils/
│   ├── styles/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── package.json
└── vite.config.js
```
