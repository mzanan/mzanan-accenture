using {
  cuid,
  managed
} from '@sap/cds/common';

namespace myOrders;

entity Products {
  key ProductID       : Integer;
      ProductName     : String;
      QuantityPerUnit : String;
      UnitPrice       : Decimal(10, 3);
      UnitsInStock    : Integer;
      UnitsOnOrder    : Integer;
      Discontinued    : Boolean;
      details         : Association to many Order_Details on details.ProductID = $self;
}

entity Orders {
  key OrderID        : Integer;
      OrderDate      : DateTime;
      RequiredDate   : DateTime;
      ShippedDate    : DateTime;
      ShipVia        : Integer;
      Freight        : Decimal(10, 3);
      ShipName       : String;
      ShipAddress    : String;
      ShipCity       : String;
      ShipRegion     : String;
      ShipPostalCode : String;
      ShipCountry    : String;
      Region_Date    : String;
      details        : Association to many Order_Details on details.OrderID = $self;
}

entity Order_Details {
  key ProductID : Association to Products;
  key OrderID   : Association to Orders;
      UnitPrice : Decimal(10, 3);
      Quantity  : Integer;
      Discount  : Decimal(10, 3);
}
