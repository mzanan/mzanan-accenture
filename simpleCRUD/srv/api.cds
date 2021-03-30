using {myData as my} from '../db/schema';

service api {
  entity Data as projection on my.Data order by age
}
