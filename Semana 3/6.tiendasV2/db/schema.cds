using {cuid} from '@sap/cds/common';

namespace myStores;

aspect Price {
  precio : Decimal(10, 3);
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
  name        : String(30);
  productType : Association to ProductType;
  brands      : Association to Brands;
}

entity Owners_Store {
  key own : Association to Owners;
  key sto : Association to Stores;
}

entity Store_Products {
  key sto : Association to Stores;
  key pro : Association to Products;
}

// ---------------------------------------------------------> V2 desde acá
entity Brands : cuid {
  // 1. Quiere añadir las marcas de los productos.
  // 2. Una marca puede tener varios productos, pero un producto puede tener una marca.
  name     : String(30);
  products : Association to many Products
               on products.brands = $self;
}

entity ProductType : cuid {
  // 3. Quiere un sistema de tipos y subtipos para poder clasificar los productos
  // 4. Un tipo puede tener muchos subtipos y un subtipo puede tener solo un tipo.
  name     : String(30);
  subTypes : Association to many SubTypes
               on subTypes.parent = $self;
}

entity SubTypes : cuid {
  key parent : Association to ProductType;
      name   : String(30);
}
