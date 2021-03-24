using {
      cuid,
      managed
} from '@sap/cds/common';

namespace myLibrary;

entity Books : cuid {
      name : String(30);
}

entity Log : cuid, managed {
      book_ID  : String(36);
      bookName : String(30);
      method   : String(6);
}
