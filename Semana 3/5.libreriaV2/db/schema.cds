using {
  cuid,
  managed
} from '@sap/cds/common';

namespace myLibreria;

define type Nombre : String(40);
define type Fecha : Date;

aspect usuarioContrasena {
  nombre     : Nombre;
  contrasena : String(30); //no mostrar;
}

entity Libros : cuid, managed {
  nombre           :      Nombre;
  fechaPublicacion :      Fecha;
  editorial        :      Association to Editoriales;
  autor            :      Association to Autores;
  puntaje          :      Integer;
  criticas         : many String;
  parent           :      Association to Clientes;
}

entity Clientes : cuid, managed {
  nombre          : Nombre;
  fechaNacimiento : Fecha;
  dni             : Integer;
  librosComprados : Association to many Libros
                      on librosComprados.parent = $self;
}

entity Usuarios : cuid, managed, usuarioContrasena {
  email    : many String; // array
  puntos   :      Integer;
  estado   :      Integer enum {
    activo    = 1;
    baja      = 2;
    pendiente = 3;
  };
  clientes :      Composition of Clientes;
}

entity Autores : cuid, managed {
  nombre             : Nombre;
  fecha              : Fecha;
  genero             : String default 'Novela';
  nacionalidad       : String(30);
  cantidadPublicados : Integer;
  ventaDirecta       : Boolean;
  editorial          : Association to many Editoriales
                         on editorial.parent = $self;
}

entity Editoriales : cuid, managed {
  parent       : Association to Autores;
  nombre       : String(30);
  nacionalidad : String(30);
  autor        : Association to Autores;
}

/*
Puntos a tener en cuenta:
- Para los elementos nombre (nombre y apellido) y fecha cree un tipo y utilice el mismo en donde sea necesario.
- Nombre de usuario y contraseña se deben encontrar en un aspecto y consumir el mismo.
- Usar CUID y MANAGE
- Mostrar una entidad que tenga el resumen de que libros compraron los Clientes, con datos tanto del autor como de la editorial
- Determine cuando usar as SELECT from o as projection on.
*/
