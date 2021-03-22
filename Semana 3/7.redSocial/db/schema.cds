using {
  cuid,
  managed
} from '@sap/cds/common';

namespace myRedSocial;

aspect Usuario_Info {
  @mandatory nombre   : String(30);
  @mandatory apellido : String(30);
  @mandatory pais     : String(3);
  genero              : Integer enum {
    Femenino  = 1;
    Masculino = 2;
    Otro      = 3;
  };
  telefono            : String(30);
  fechaNacimiento     : Date;
  correo              : many { // usar structured type
    usuario           : String;
    dominio           : String;
    full              : String;
  };
}

entity Usuario : cuid {
  @mandatory user     : String(30);
  @mandatory password : String(30);
  amigos              : Integer;
  estado              : Boolean;
  mensajes            : Composition of many Mensajes
                          on mensajes.usuario = $self;
  publicaciones       : Association to many Publicaciones
                          on publicaciones.usuario = $self;
  comentarios         : Association to many Comentarios
                          on comentarios.usuario = $self;
  perfil              : Association to Perfil;
}

entity Perfil : cuid, Usuario_Info {
  titulo        : String(30);
  descripcion   : String(30);
  antiguedad    : Integer enum {
    Carbon   = 0;
    Bronce   = 1;
    Plata    = 2;
    Oro      = 3;
    Diamante = 4;
  };
  usuario       : Association to Usuario;
  publicaciones : Association to many Publicaciones
                    on publicaciones.perfil = $self;
}

entity Mensajes : cuid {
  usuario              : Association to Usuario;
  @mandatory remitente : String(30);
  contenido            : String;
  leido                : Boolean;
  multimedia           : many {
    tipo               : String;
    tamano             : Decimal(7, 3);
  };
}

entity Publicaciones : cuid, managed {
  usuario     : Association to Usuario;
  perfil      : Association to Perfil;
  titulo      : String(30) default 'titulo';
  compartido  : Integer;
  tipo        : Integer enum {
    Texto = 0;
    Foto  = 1;
    Video = 2;
    URL   = 3;
  };
  preview     : Boolean;
  likes       : Integer;
  comentarios : Association to many Comentarios
                  on comentarios.publicacion = $self;
}

entity Comentarios : cuid, managed {
  usuario     : Association to Usuario;
  publicacion : Association to Publicaciones;
  contenido   : String(300);
}
