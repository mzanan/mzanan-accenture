using {myStores as my} from '../db/schema';

service api {
  entity Owners         as projection on my.Owners;
  entity Stores         as projection on my.Stores;
  entity Products       as projection on my.Products;
  entity Owners_Store   as projection on my.Owners_Store;
  entity Store_Products as projection on my.Store_Products;

  // ---------------------------------------------------------> V2 desde acá
  // Crear una vista para producto donde se puedan ver además: tipo, subtipo y marca. Se debe permitir filtrar por estos mismos datos.
  // Crear una vista donde muestre los productos por rangos de precio.

  entity ProductType    as projection on my.ProductType;
  entity SubTypes       as projection on my.SubTypes;
  entity Brands         as projection on my.Brands;

  entity ProductView    as
    select from Products {
      *,
      productType.name as productType,
      brands.name      as brand
    }
    where
          precio > 0
      and precio < 5
    order by
      precio;
}
