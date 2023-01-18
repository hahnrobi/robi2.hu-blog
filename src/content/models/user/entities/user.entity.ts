
import {UserPassword} from '../../userPassword/entities/userPassword.entity'


export class User {
  id: string ;
name: string ;
email: string ;
password?: UserPassword[] ;
}
