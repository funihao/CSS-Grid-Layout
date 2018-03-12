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
  // grid-template: rows / columns;
  grid-template: 300px 150px / 25% 200px 25%;

```

## Displays
Grid Layout va a traer nuevos `displays`, como repetir el grid del padre en una celda hijo, `display: subgrid` repetirá todo el grid del padre. Vendrán mas tipos de _displays_ pero eso será en el futuro.

## Espaciado
Para conseguir el espaciado de los elementos del layout podemos usar la propiedad `margin`. Pero *grid Layout* nos trae un mejor modo de espaciar los diferentes elementos. La forma de hacerlo es con `grid-column-gap` y `grid-row-gap` o en modo compacto, `grid-gap`.

```css
.container
  display: grid;
  grid-template: 300px 150px / 50% 200px 25%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

```

```css
.container
  display: grid;
  grid-template: 300px 150px / 50% 200px 25%;
  // grid-gap: row / column;
  grid-gap: 20px / 20px;

```

## Fracciones y Funciones
Asi como tenemos pixels, porcentajes, etc.; *CSS Grid* nos proporciona una nueva medida, las fracciones, designadas por `fr`.

```css
.container
  display: grid;
  // grid-template: 300px 150px / 50% 200px 25%;
  grid-template: 300px 150px / 1fr 1fr 1fr;
  grid-gap: 20px / 20px;

```
O también, en automático.

```css
.container
  display: grid;
  // grid-template: 300px 150px / 1fr 1fr 1fr
  grid-template: 300px 150px / auto auto auto;
  grid-gap: 20px / 20px;

```

*Grid Layout* nos proporciona un par de funciones para facilitarnos la tarea de crear layout. Cuando tenemos que repetir columnas o filas podemos usar la función `repeat(num, size)`. También podemos usar la función `minmax(min, max)` para determinar los valores máximo y mínimo de los elementos. Grid tratara de mantenerse en esos extremos siendo responsivo.

```css
.container
  display: grid;
  grid-template: 300px 150px / repeat(4, minmax(200px, 1fr));
  grid-gap: 20px / 20px;

```

## Áreas de contenido
Definimos el layout de un área en el contenedor padre mediante `grid-template-areas` y luego se relaciona con el elemento que ocupará una área.

```css
.container
  display: grid;
  grid-template: 100px 1fr 150px / 200px 1fr;
  grid-template-areas: "header header"
                       "left content"
                       "footer footer";
  grid-gap: 10px / 10px;


.header
  grid-area: header;

.left
  grid-area: left;

.content
  grid-area: content;

.footer
  grid-area: footer;

```
