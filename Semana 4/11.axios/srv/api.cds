using {myAxios as my} from '../db/schema';

service api {
  entity getService as projection on my.getService;
}
