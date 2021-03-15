using {myStores as my} from '../db/schema';

service api {
  entity Owners         as
    select from my.Owners {
      *
    };

  entity Stores         as
    select from my.Stores {
      *
    };

  entity Products       as
    select from my.Products {
      *
    };

  entity Owners_Store   as
    select from my.Owners_Store {
      *
    };

  entity Store_Products as
    select from my.Store_Products {
      *
    };

  entity View           as
    select from Stores {
      name               as storeName,
      products.pro.name  as productName,
      products.pro.price as productPrice,
      storeOwn.name      as storeOwner
    };
};
