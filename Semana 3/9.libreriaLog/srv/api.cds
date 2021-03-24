using {myLibrary as my} from '../db/schema';

service api {
  entity Books as
    select from my.Books {
      *
    };

  entity Log   as
    select from my.Log {
      *
    };

//action insertBook(book : Books) returns String;
}
