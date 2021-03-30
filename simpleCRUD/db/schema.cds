using {cuid} from '@sap/cds/common';

namespace myData;

entity Data : cuid {
  city : String;
  name : String;
  age  : Integer;
}
