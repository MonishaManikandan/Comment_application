import { Component, OnInit } from '@angular/core';
import { Crudmodel } from '../Crudmodel';
import { CrudmodelService } from '../crudmodel.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  Crudmodel_obj : Crudmodel = new Crudmodel;
  result:any;

  constructor (private crudservice_obj : CrudmodelService)
  {

  }

  reset_password()
  {
   
    this.crudservice_obj.reset_password(this.Crudmodel_obj).subscribe(fetchvalue=>{this.result=fetchvalue //getting data from update fuction if user found
      if(this.result==0) // Condition if user is correct and updated
      {
        this.Crudmodel_obj.mail_id="";
        this.Crudmodel_obj.password="";
        this.Crudmodel_obj.secret_code="";
        alert("mail id or Secret code incorrect");
      }
      else
      {
        this.Crudmodel_obj.mail_id="";
        this.Crudmodel_obj.password="";
        this.Crudmodel_obj.secret_code="";
        alert("Password Resetted");
        window.location.href = "signin";
      }
    });
  }
  
  ngOnInit(): void {
  }

}
