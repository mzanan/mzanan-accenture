using {myLibrary as my} from '../db/schema';

service api {
  entity Authors as
    select from my.Authors {
      *
    };

  entity Books   as
    select from my.Books {
      *
    };


  entity Stock   as
    select from my.Stock {
      *,
      book.name,
      book.author.ID,
      book.author.name as name_author
    };

  action modInven(book : Books : ID, amount : Integer) returns String;
  action insertOrder(book : array of my.Stock) returns String;
}
