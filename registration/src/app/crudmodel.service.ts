import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudmodelService {

  constructor(private httpclientobi : HttpClient) { }

  signin(cruddatamodel:any)
  {
    //return this.httpclientobi.post("http://localhost:8080/getdata",cruddatamodel);
    return this.httpclientobi.post("http://localhost:8080/getdata", cruddatamodel);
  }

  reset_password(cruddatamodel:any)
  {
    //return this.httpclientobi.post("http://localhost:8080/getdata",cruddatamodel);
    return this.httpclientobi.post("http://localhost:8080/reset_password", cruddatamodel);
  }
 
   signup(cruddatamodel:any)
  {
    return this.httpclientobi.post("http://localhost:8080/save",cruddatamodel);
   // return this.httpclientobi.post("http://localhost:8080/save", cruddatamodel , { responseType: 'text' as 'json'});
    
  }
  save_comment(cruddatamodel:any)
  {
    return this.httpclientobi.post("http://localhost:8080/save_comment",cruddatamodel);
   // return this.httpclientobi.post("http://localhost:8080/save", cruddatamodel , { responseType: 'text' as 'json'});
    
  }
}
