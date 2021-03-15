using {
  cuid,
  managed
} from '@sap/cds/common';

namespace myLibrary;

entity Authors {
  key ID      : Integer;
      name    : String(30);
      country : String(30);
}

entity Books {
  key ID      : Integer;
      name    : String(30);
      comment : String(30);
      author  : Association to Authors;
}

entity Stock : managed {
  key ID      : Integer;
      book    : Association to Books;
      amount  : Integer;
      price   : Decimal(3, 2);
      comment : String(36);
}
