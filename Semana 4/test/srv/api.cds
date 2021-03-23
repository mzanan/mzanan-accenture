using {myActors as my} from '../db/schema';

service api {
  entity Actors     as
    select from my.Actors {
      *
    };

  entity Categories as
    select from my.Categories {
      *
    };

  entity Movies     as
    select from my.Movies {
      *
    };

  entity View       as
    select from my.Movies {
      actor.name          as actor,
      actor.ID            as ID,
      name                as movie,
      actor.category.name as category
    }
    order by
      actor;
}
