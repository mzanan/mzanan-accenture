using {myRedSocial as my} from '../db/schema';

service api {
  entity Usuario            as projection on my.Usuario;
  entity Perfil             as projection on my.Perfil;
  entity Mensajes           as projection on my.Mensajes;
  entity Publicaciones      as projection on my.Publicaciones;
  entity Comentarios        as projection on my.Comentarios;

  entity vistaPublicaciones as
    select from my.Usuario {
      user,
      publicaciones.titulo,
      publicaciones.tipo
    };

  entity vistaPerfil        as
    select from my.Perfil {
      *,
      usuario.user,
      publicaciones.titulo,
      publicaciones.tipo,
      publicaciones.compartido
    }
    where
      publicaciones.compartido > 100;

  entity vistaArg           as
    select from my.Usuario {
      user,
      perfil.pais
      amigos
    }
    where perfil.pais = 'AR' AND amigos > 200;
}
