using {myTecnologias as my} from '../db/schema';

service api {
  entity Clientes    as
    select from my.Clientes {
      *
    };

  entity Proyectos   as
    select from my.Proyectos {
      *
    };

  entity Tecnologias as
    select from my.Tecnologias {
      *
    };
}
