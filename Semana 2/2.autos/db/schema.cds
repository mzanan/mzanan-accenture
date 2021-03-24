  using {cuid} from '@sap/cds/common';

namespace misAutos;

entity Marcas : cuid {
  nombre  : String(30);
  pais    : String(30);
  coment  : String(50);
  modelos : Composition of many Modelos
              on modelos.parent = $self;
}

entity Modelos {
  key parent : Association to Marcas;
      nombre : String(30);
      tipo   : String(50);
}
