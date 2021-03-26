using {myOrders as my} from '../db/schema';

service api {
  entity Products      as
    select from my.Products {
      *
    };

  entity Orders        as
    select from my.Orders {
      *
    };

  entity Order_Details as
    select from my.Order_Details {
      *
    };

    entity View as
    select from my.Order_Details {
      *,
    };
}
