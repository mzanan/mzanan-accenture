//using {cuid} from '@sap/cds/common';

namespace myActors;

/*
Se está haciendo un seguimiento de actores (nombre, edad) que actúan en películas (nombre, género).

Una película puede tener varios actores y estos pueden estar en varias películas.

También cada actor está en una categorías (nombre, salario) según experiencia (puede haber varios actores en cada categoría).

Hacer un type para la variable “nombre” y usarlo en todas las entidades.

Hacer una vista que solo muestre el nombre del actor, las películas en las que estuvo y el nombre de su categoría.

Mostrar la vista ordenada de A-Z por el nombre de los actores.
*/

using {cuid} from '@sap/cds/common';

define type Name : String(40);

entity Actors : cuid { // one to one (actors-categories)
  name     : Name;
  age      : Integer;
  category : Association to Categories;
}

entity Categories : cuid {
  name       : Name;
  salary     : Integer;
  experience : String(40);
}

entity Movies : cuid { // one to many (movies-actors)
  name   : Name;
  gender : String(40);
  actor  : Association to Actors;
}
