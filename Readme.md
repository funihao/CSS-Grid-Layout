# Curso CSS Grid Layout
Para controlar nuestros layout mediante "CSS Grid Layout" es muy sencillo. Primero un contenedor que va a contener nuestro layout. Le damos la propiedad `display: grid`. A partir de aquí controlamos las filas y columnas medinte las propiedades: `grid-template-columns` y `grid-template-rows`.

```css
.container
  display: grid;
  grid-template-columns: 25% 200px 25%;
  grid-template-rows: 300px 150px;

```

En forma condensada:

```css
.container
  display: grid;
  // grid-template: rows / columns
  grid-template: 300px 150px / 25% 200px 25%;

```

## Displays
Grid Layout va a traer nuevos `displays`, como repetir el grid del padre en una celda hijo, `display: subgrid` repetirá todo el grid del padre. Vendrán mas tipos de _displays_ pero eso será en el futuro.

## Espaciado
Para conseguir el espaciado de los elementos del layout podemos usar la propiedad `margin`. Pero *grid Layout* nos trae un mejor modo de espaciar los diferentes elementos. La forma de hacerlo es con `grid-column-gap` y `grid-row-gap` o en modo compacto, `grid-gap`.

```css
.container
  display: grid
  grid-template: 300px 150px / 50% 200px 25%
  grid-column-gap: 20px
  grid-row-gap: 20px

```

```css
.container
  display: grid
  grid-template: 300px 150px / 50% 200px 25%
  // grid-gap: row / column
  grid-gap: 20px / 20px

```
