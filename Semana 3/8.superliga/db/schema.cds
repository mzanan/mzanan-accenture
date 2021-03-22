using {
  cuid,
  managed
} from '@sap/cds/common';

namespace miSuperLiga;

entity Partidos : cuid, managed {
  cantidadEspectadores : Integer;
  arbitro              : String;
  relator              : String;
  clasico              : Boolean;
  fecha                : Date;
  equipoLocal          : Association to Equipos;
  equipoVisitante      : Association to Equipos;
  puntajes             : Association to Puntajes;
  estadio              : Association to Estadios;
  resultado            : Composition of Resultados
                           on resultado.partido = $self;
}

entity Resultados : cuid, managed {
  local     : Integer;
  visitante : Integer;
  partido   : Association to Partidos;
}

entity Equipos : cuid {
  nombre            : String;
  division          : String;
  puntos            : Integer;
  cantidadJugadores : Integer;
  presupuesto       : Integer;
  jugadores         : Composition of many Jugadores
                        on jugadores.equipo = $self;
  estadio           : Association to Estadios;
}

entity Jugadores : cuid {
  nombre       : String;
  valorMercado : String;
  apodo        : String;
  posicion     : String;
  pais         : String;
  numeroRemera : Integer;
  equipo       : Association to Equipos;
  puntajes     : Association to Puntajes;
}

entity Estadios : cuid {
  nombre    : String;
  direccion : String;
  capacidad : Integer;
  partidos  : Association to many Partidos
                on partidos.estadio = $self;
}

entity Puntajes : cuid {
  goles       : Integer;
  asistencias : Integer;
  salvadas    : Integer;
  partido     : Association to Partidos;
  jugador     : Association to Jugadores;
}
