// Un cliente nos ha contado su caso y le gustaría que le propusiéramos una base de datos acorde a los que nos ha comentado y ver que tan eficaz es CAP, por lo cual nos comenta lo siguiente que hay que tener en cuenta.
// Nos comentan que quieren hacer una aplicación para poder gestionar proyectos y saber sobre que dificultad estarán para saber estimar el coste que deberán decirles a sus clientes.

// Sabemos que usan las siguientes tecnologías HTML, CSS, Java, SAP UI5, JavaScript.
// Según la tecnología que escojan y el nivel de dificultad (BAJO, MEDIO Y ALTO) en el sistema será más complicado o menos complicado.
// Los niveles de dificultad serán de entre 1, 3 Y 5.
// Solo se podrá especificar una tecnología con un numero de cargas
// El Cliente quiere almacenar la información sobre sus clientes.


// ID (UUID o un INTEGER)
//  MD (Sera un campo que se calculara según la tecnología y la dificultad (1,2,3))
//  technology (sera unos datos Maestros que no cambiaran
// SAPUI5, CAP(Node JS))
//  difficulty (BAJA, MEDIA y ALTA)

using {
  cuid,
  managed
} from '@sap/cds/common';

namespace myTecnologias;

entity Clientes : cuid, managed {
  nombre    : String;
  proyectos : Association to many Proyectos
                on proyectos.cliente = $self;
}

entity Proyectos : cuid, managed {
      nombre     : String;
      tecnologia : Association to Tecnologias;
  key cliente    : Association to Clientes;
}

entity Tecnologias {
  key ID         : Integer;
      nombre     : String;
      dificultad : Integer enum {
        baja  = 1;
        media = 2;
        alta  = 3;
      };
}
