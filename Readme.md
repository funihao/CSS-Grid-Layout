# Curso CSS Grid Layout
Para controlar nuestros layout mediante "CSS Grid Layout" es muy sencillo. Primero un contenedor que va a contener nuestro layout. Le damos la propiedad `display: grid`. A partir de aquí controlamos las filas y columnas medinte las propiedades: `grid-template-columns` y `grid-template-rows`.

```css
display: grid;
grid-tempalte-columns: 25% 200px 25%;
grid-template-rows: 300px 150px;

```

En forma condensada:

```css
display: grid;
grid-tempalte: 300px 150px / 25% 200px 25%;

```
