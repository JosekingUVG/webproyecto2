
---

### 1. El Diccionario de Nomenclatura Estándar

Para construir la URL de cualquier carta en tu código, la estructura fija es:
`https://res.cloudinary.com/dkrjxumbb/image/upload/balatro/[CARPETA]/[ARCHIVO]`

El nombre del archivo se compone de: **[Rango][Palo]_[Resolución].png**

* **Carpetas:** `face` (para las caras de las cartas), `back` (reversos).
* **Palos:** `C` (Tréboles $\clubsuit$), `D` (Diamantes $\diamondsuit$), `H` (Corazones $\heartsuit$) y `S` (Picas $\spadesuit$).
* **Resolución:** `1x`, `2x` o `3x`.

---

### 2. Función Helper para tu Frontend (JavaScript / TypeScript)

Esta función centraliza la lógica. Solo le pasas las propiedades de la carta y ella se encarga de armar la URL de Cloudinary de forma automática:

```javascript
/**
 * Genera la URL definitiva de Cloudinary para los assets de Balatro
 * @param {string} folder - Carpeta en Cloudinary ('face', 'back')
 * @param {string} rank - Rango de la carta ('2'-'9', 'T', 'J', 'Q', 'K', 'A') o 'joker'
 * @param {string} suit - Palo de la carta ('C', 'D', 'H', 'S'). Vacío si no aplica.
 * @param {string} resolution - Resolución de la imagen ('1x', '2x', '3x')
 * @returns {string} URL lista para usar en la etiqueta <img />
 */
function getBalatroAssetUrl(folder, rank, suit = '', resolution = '2x') {
  const CLOUD_NAME = "dkrjxumbb";
  
  // Base URL apuntando a la carpeta principal 'balatro' que creaste
  const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/balatro/${folder}`;
  
  // Caso 1: Si estás pidiendo un reverso (back)
  if (folder === 'back') {
    // Asumiendo que tus archivos en 'back' se llaman por ejemplo 'blue_1x.png', 'red_2x.png', etc.
    // Ajusta el prefijo (rank) según cómo los hayas nombrado localmente
    return `${BASE_URL}/${rank.toLowerCase()}_${resolution}.png`;
  }


  // Caso 3: Cartas estándar en 'face' (ej: TD_1x.png, AC_2x.png)
  const cleanRank = rank.toUpperCase();
  const cleanSuit = suit.toUpperCase();
  
  return `${BASE_URL}/${cleanRank}${cleanSuit}_${resolution}.png`;
}

```

---

### 3. Ejemplos de uso rápido

* **Para el 10 de Diamantes a 1x (la de tu prueba):**
```javascript
getBalatroAssetUrl('face', 'T', 'D', '1x');
// Retorna: https://res.cloudinary.com/dkrjxumbb/image/upload/balatro/face/TD_1x.png

```


* **Para el As de Picas a 2x:**
```javascript
getBalatroAssetUrl('face', 'A', 'S', '2x');
// Retorna: https://res.cloudinary.com/dkrjxumbb/image/upload/balatro/face/AS_2x.png

```




### 4. Implementación en un componente de React / Next.js

Si necesitas renderizar las cartas dinámicamente en tu interfaz, puedes integrarlo directamente en un componente reutilizable:

```jsx
import React from 'react';

export const BalatroCard = ({ rank, suit, resolution = '2x' }) => {
  const imageUrl = getBalatroAssetUrl('face', rank, suit, resolution);
  const cardName = rank.toLowerCase() === 'joker' ? 'Joker' : `${rank} de ${suit}`;

  return (
    <div className="inline-block p-2">
      <img 
        src={imageUrl} 
        alt={cardName}
        className="w-32 h-auto drop-shadow-md transition-transform duration-200 hover:-translate-y-2"
        loading="lazy"
      />
    </div>
  );
};

```
Con esta configuración, cada vez que quieras mostrar una carta, solo necesitas usar el componente `<BalatroCard />` y pasarle las propiedades correctas. Esto mantiene tu código limpio, organizado y fácil de mantener a medida que tu proyecto crece.