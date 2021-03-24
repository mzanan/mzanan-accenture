using {miSuperLiga as my} from '../db/schema';

service api {
  entity Partidos     as projection on my.Partidos;
  entity Resultados   as projection on my.Resultados;
  entity Equipos      as projection on my.Equipos;
  entity Jugadores    as projection on my.Jugadores;
  entity Estadios     as projection on my.Estadios;
  entity Puntajes     as projection on my.Puntajes;

  entity VistaGoleada as
    select from my.Resultados {
      local,
      visitante,
      partido.equipoLocal,
      partido.equipoVisitante
    }
    where
         local > visitante
      or local < visitante;
}

/*
Una vista que desde jugador me muestre los partidos que anoto más de 3 goles
 Quiero ver los partidos que terminaron en goleada (3 o mas goles de diferencia)
 Quiero ver el arquero con mas salvadas de la liga
 Agreguen alguna vista que les parezca que este buena, ya que hay mucho para jugar
*/
