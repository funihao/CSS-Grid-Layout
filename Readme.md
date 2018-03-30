# Curso CSS Grid Layout ([Platzi](https://platzi.com/))
Este es mi repositorio personal del curso de **[Platzi](https://platzi.com/)** pero realizado con **webpack**, ***stylus*** y **pug**.

<div align="center">
  <a href="https://webpack.js.org">
    <img width="100" height="100" align="center" src="https://webpack.js.org/assets/icon-square-big.svg">&nbsp;
  </a>
  <a href="http://stylus-lang.com">
    <img width="100" height="100 align="center"" src="http://stylus-lang.com/img/stylus-logo.svg">
  </a>&nbsp;
<a href="https://pugjs.org"><img src="https://cdn.rawgit.com/pugjs/pug-logo/eec436cee8fd9d1726d7839cbe99d1f694692c0c/SVG/pug-final-logo-_-colour-128.svg" height="100" align="center"></a>  
<br>
</div>

Las últimas clases con los ejercicios prácticos están cada una en una rama, [instagram](https://github.com/funihao/CSS-Grid-Layout/tree/instagram), [pinterest](https://github.com/funihao/CSS-Grid-Layout/tree/pinterest) y [platzi](https://github.com/funihao/CSS-Grid-Layout/tree/platzi). Los desafíos en próximas ramas ...

Controlar nuestros layouts mediante "CSS Grid Layout" es muy sencillo. Primero necesitamos un contenedor que va a contener nuestro layout. Le damos la propiedad `display: grid`. A partir de aquí controlamos las filas y columnas medinte las propiedades: `grid-template-columns` y `grid-template-rows`.

```Stylus
.container
  display: grid;
  grid-template-columns: 25% 200px 25%;
  grid-template-rows: 300px 150px;

```

En forma condensada:

```Stylus
.container
  display: grid;
  // grid-template: rows / columns;
  grid-template: 300px 150px / 25% 200px 25%;

```

## Displays
_Grid Layout_ va a traer nuevos `displays`, como repetir el grid del padre en una celda hijo, `display: subgrid` repetirá todo el grid del padre. Vendrán mas tipos de __*displays*__ pero eso será en el futuro.

## Espaciado
Para conseguir el espaciado de los elementos del layout podemos usar la propiedad `margin`. Pero _Grid Layout_ nos trae un mejor modo de espaciar los diferentes elementos. La forma de hacerlo es con `grid-column-gap` y `grid-row-gap` o en modo compacto, `grid-gap`.

```Stylus
.container
  display: grid;
  grid-template: 300px 150px / 50% 200px 25%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

```

```Stylus
.container
  display: grid;
  grid-template: 300px 150px / 50% 200px 25%;
  // grid-gap: row / column;
  grid-gap: 20px / 20px;

```

## Fracciones y Funciones
Asi como tenemos pixels, porcentajes, etc.; *CSS Grid* nos proporciona una nueva medida, las fracciones, designadas por `fr`.

```stylus
.container
  display: grid;
  // grid-template: 300px 150px / 50% 200px 25%;
  grid-template: 300px 150px / 1fr 1fr 1fr;
  grid-gap: 20px / 20px;

```
O también, en automático.

```stylus
.container
  display: grid;
  // grid-template: 300px 150px / 1fr 1fr 1fr
  grid-template: 300px 150px / auto auto auto;
  grid-gap: 20px / 20px;

```

*Grid Layout* nos proporciona un par de funciones para facilitarnos la tarea de crear layout. Cuando tenemos que repetir columnas o filas podemos usar la función `repeat(num, size)`. También podemos usar la función `minmax(min, max)` para determinar los valores máximo y mínimo de los elementos. Grid tratara de mantenerse en esos extremos siendo responsivo.

```stylus
.container
  display: grid;
  grid-template: 300px 150px / repeat(4, minmax(200px, 1fr));
  grid-gap: 20px / 20px;

```

## Áreas de contenido
Definimos el layout de un área en el contenedor padre mediante `grid-template-areas` y luego se relaciona con el elemento que ocupará una área.

```Stylus
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

## Controlando el tamaño de columnas y filas
CSS Grid permite el control total sobre el tamaño de columnas y filas para poder encajar cualquier layout de diseño pensado.
Ademas de las áreas podemos controlar individualmente cada elemento del grid, especificando donde comienza y donde termina o cual es su ancho o alto.

Vamos a jugar con un layout de 5 columnas.

```pug
section
  .container
    .item Contenido #1
    .item Contenido #2
    .item Contenido #3
    .item Contenido #4
    .item Contenido #5

```
Y el CSS para controlar la posición y tamaño de los elementos será:

```css
.container {
  display: grid;
  grid-gap: 2px;
  grid-template: repeat(2, 200px) / repeat(7, 1fr);
  height: 100vh;
}
```
Cada uno de los `item`'s los controlamos mediante **`grid-column-start`**, **`grid-column-end`** o en forma abreviada **`grid-column start / end`**. El final también se puede expresar como un **`span`**. En formato _*stylus*_ sería algo así:

```Stylus

.item
  background lightblue
  border 1px solid red
  padding 10px

  &:nth-of-type(1)
    background lightcoral
    grid-column 1 /span 3
    grid-row 1 / span 2

  &:nth-of-type(2)
    // background lightcoral
    grid-column 4 / span 2
    grid-row 1 / span 2

  &:nth-of-type(3)
    background lightcoral
    grid-column 6 / span 2

```

Lo anterior lo podemos realizar poniendo nombres a las líneas de que separan las columnas y/o filas:
  > **Nota**: _Stylus_ no reconoce la asignación de nombres en los grid's. Tampoco reconoce las funciones `repeat()`,`minmax()`. Por lo que usando _Stylus_, es necesario marcarlo como css literal mediante `@css {}`.

  ```css
  .container {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: [inicio] 1fr [lc2] 1fr [lc3] 1fr [fin-dest] 1fr [lc5] 1fr [lc6] 1fr [lc7] 1fr [fin-c];
    grid-template-rows: [lf1] 200px [lf2] 200px [fin-f];
    height: 100vh;
  }

  .item {
    background: lightblue;
    border: 1px solid red;
    padding: 10px;
  }

  .item:nth-of-type(1) {
    background: lightcoral;
    grid-column: inicio / fin-dest;
    grid-row: lf1 / span 2;}

  .item:nth-of-type(2) {
    grid-column: fin-dest / lc6;
    grid-row: lf1 / fin-f;}

  .item:nth-of-type(3) {
    background: lightcoral;
    grid-column: lc6 / fin-c;}
  ```
## Manejando el grid implícito
Como ya se ha podido observar **_CSS Grid_** va colocando todos los elementos según se especifíca y todo aquello que sobra o desborda lo pasa por defecto a una nueva fila. A esto se le conoce como grid ímplicito y es la forma en que va ordenando todo aquello que sobra o no tiene definición explícita.

El grid implícito lo podemos controlar mediante un par de propiedades. Con **`grid-auto-flow`** definimos como se van a tratar los elementos "_sobrantes"_. Por defecto se tratan pasandolos a una nueva fila pero podríamos apilarlos en columnas estableciendo `grid-auto-flow: column;`.

Vamos a añadir mas columnas para ver el efecto:
```pug
section
  .container
    .item Contenido #1
    .item Contenido #2
    .item Contenido #3
    .item Contenido #4
    .item Contenido #5
    .item Contenido #6
    .item Contenido #7
    .item Contenido #8
    .item Contenido #9
    .item Contenido #10
    .item Contenido #11
    .item Contenido #12
```

Ahora vamos a cambiar el tratamiento por defecto para que coloque los elementos por columnas:

```css
.container {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: [inicio] 1fr [lc2] 1fr [lc3] 1fr [fin-dest] 1fr [lc5] 1fr [lc6] 1fr [lc7] 1fr [fin-c];
  grid-template-rows: [lf1] 200px [lf2] 200px [fin-f];
  height: 100vh;

  grid-auto-flow: column;
}
```

Las columnas a partir de la sexta no tienen una definición explícita, así que las va colocando a la derecha y en dos filas, asignándole un espacio mínimo para albergar el contenido.
Si cambiamos `grid-auto-flow: column;` por `grid-auto-flow: row;`, veremos como vuelve al comportamiento por defecto, colocando los elementos por filas y pasando a una nueva fila los elementos a partir del sexto.

También podemos definir un espacio para las nuevas columnas o filas donde se colocaran los elementos que no tienen una definición explicita. Probemos con `grid-auto-colums: 100px 50px;` para definir dos anchos de columnas si tenemos `grid-auto-flow: column;` o `grid-auto-rows: 100px 50px;` si estamos manejando el grid implícito por filas.

## Alineando el Contenido
Para alinear el contenido dentro de su espacio continente, _**CSS Grid**_ nos proporciona un par de propiedades. Podemos alinear el contenido de todos los elementos si en el padre (el contenedor) utilizamos las propiedades **`justify-items`** y **`align-items`**. La primera para la posición horizontal y la segunda para la posición vertical (parecido a como lo hacemos con `flex-box`), tomando los valores **`start|end|center|strech`**. Este último es el valor por defecto. Creemos una plantilla con 12 elementos, como en la lección anterior y juguemos con esos valores a ver que pasa.

```pug
section
  .container
    .item Contenido #1
    .item Contenido #2
    .item Contenido #3
    .item Contenido #4
    .item Contenido #5
    .item Contenido #6
    .item Contenido #7
    .item Contenido #8
    .item Contenido #9
    .item Contenido #10
    .item Contenido #11
    .item Contenido #12
```


```css
.container {
  display: grid;
  grid-gap: 2px;
  grid-template: repeat(4, 1fr) / repeat(3, 1fr);
  height: 100vh;

  justify-items: center; // start|end|center|strech
  align-items: center;   // start|end|center|strech
}
```
Para controlar el posicionamiento de cada uno de los elementos dentro espacio asignado podemos usar las propiedades **`justify-self`** y **`align-self`** tomando los mismos valores que para el contenedor padre, **`start|end|center|strech`**. Añadimos estas propiedades a las clases de los elementos que deseamos controlar y juguemos con ellas.

```css
.item:nth-of-type(3) {
  background: lightcoral;
  align-self: start;      // start|end|center|strech
  justify-self: end;      // start|end|center|strech
}
```

## Alineando filas y columnas
En la lección anterior hemos jugado con la alineación del contenido dentro de cada uno de los elementos pero también podemos controlar la alineación de los elementos entre sí. Para esto tenemos las propiedades: **`justify-content`** y **`align-content`** con los valores **`start|end|center|strech|space-around|space-between|space-evenly`**. Estas propiedades se deben aplicar en el contenedor padre.

```css
.container {
  display: grid;
  grid-gap: 2px;
  grid-template: repeat(4, 1fr) / repeat(3, 1fr);
  height: 100vh;

  justify-content: center; // start|end|center|strech|space-around|
                           // space-between|space-evenly
  align-content: space-evenly;   
}
```

# Desafíos
Se plantean dos desafíos a maquetar mediante _*CSS-Grid*_. En la carpeta de desafíos se encuentran las maquetaciones en formato imagen _'jpg'_.

## Movie.es
La siguiente imagen muestra el aspecto a conseguir. Adicionalmente he realizado la modificación de los menus para un comportamiento responsivo, usando el mínimo javascript y con el apoyo de _*JQuery*_.

<div align="center">
  <a href="src/desafios/movi_es.jpg">
    <img width="300" align="center" src="src/desafios/movi_es.jpg">
  </a>
  <br>
  <br>
</div>

La implementación se ha realizado con dos _*grids*_, una cabecera `header`, una barra lateral `side-bar` y el contenedor principal del contenido `post`. En este último contenedor se crea otro _*grid*_.
