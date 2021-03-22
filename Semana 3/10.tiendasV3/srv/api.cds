using {myStores as my} from '../db/schema';

service api {
  entity Owners   as projection on my.Owners
  entity Stores   as projection on my.Stores
  entity Products as projection on my.Products;
  action updatePrices(product : array of my.Products) returns String;
};
