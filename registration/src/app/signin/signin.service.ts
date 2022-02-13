import { EventEmitter, Injectable } from '@angular/core';
import { Crudmodel } from '../Crudmodel';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  $isLoggedIn = new EventEmitter()
  crudmodel_obj = new Crudmodel;
  constructor() { }

   user_id: any;
  set_userid(user_id: any){
    this.user_id=user_id;
  }
  get_userid()
  {
    return  this.user_id;
  }

}
