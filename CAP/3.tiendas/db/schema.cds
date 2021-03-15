using {cuid} from '@sap/cds/common';

namespace myStores;

aspect Price {
  value : Decimal(10, 3);
}

entity Owners : cuid {
  name  : String(30);
  store : Association to many Owners_Store
            on store.own = $self;
}

entity Stores : cuid { // muchos dueños y productos
      name     : String(30);
      products : Association to many Store_Products
                   on products.sto = $self;
  key storeOwn : Association to Owners;
}

entity Products : cuid, Price { // varias tiendas.
  name  : String(30);
  price : Price
}

entity Owners_Store {
  key own : Association to Owners;
  key sto : Association to Stores;
}

entity Store_Products {
  key sto : Association to Stores;
  key pro : Association to Products;
}
