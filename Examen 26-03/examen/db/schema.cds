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
      ReorderLevel    : Integer;
      Discontinued    : Boolean;
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
}

entity Order_Details {
  key OrderID   : Integer;
  key ProductID : Integer;
      UnitPrice : Decimal(10, 3);
      Quantity  : Integer;
      Discount  : Decimal(10, 3);
}
