using {myOrders as my} from '../db/schema';

service api {
  entity Products      as projection on my.Products
  entity Orders        as projection on my.Orders
  entity Order_Details as projection on my.Order_Details

  entity View          as
    select from my.Products {
      *,
      details.OrderID,
      details.UnitPrice,
      details.Quantity,
      details.Discount
    };
}
