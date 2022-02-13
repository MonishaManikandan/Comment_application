import { Component, OnInit } from '@angular/core';
import { Crudmodel } from '../Crudmodel';
import { CrudmodelService } from '../crudmodel.service';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  crudmodel_obj = new Crudmodel;
  sign_service_obj : SigninService = new SigninService;
  message:any;
  
  constructor(private crudservice_obj : CrudmodelService) { }
  ngOnInit(): void {
  }

  signin()
  {
    
      this.crudservice_obj.signin(this.crudmodel_obj).subscribe(fetchvalue=>{this.message=fetchvalue // Fetching the value of the user by passing mail id and password
    
      if(this.message>0) // Checking for valid user
      {
        alert("Welcome"); 
        window.location.href = "comment"; // To redirect to commentt page

        this.sign_service_obj.set_userid(this.message);
      }
      else{
        alert("Incorrect username or password");
        this.crudmodel_obj.mail_id="";
        this.crudmodel_obj.password="";
      }
    });
  }
}


