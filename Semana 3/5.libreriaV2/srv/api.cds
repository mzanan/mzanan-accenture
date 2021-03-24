using {myLibreria as my} from '../db/schema';

service api {
  entity Libros    as projection on my.Libros;

  entity Clientes  as
    select from my.Clientes {
      *
    }
    // excluding {
    //   dni
    // }
    ;

  entity Usuarios  as projection on my.Usuarios;

  entity Autores   as
    select from my.Autores
    // excluding {
    //   fecha,
    //   ventaDirecta
    // }
    ;

  entity Editorial as projection on my.Editoriales;

  entity View      as
    select from my.Clientes {
      nombre,
      librosComprados,
      librosComprados.editorial.nombre as autorEditorial
    };
}
