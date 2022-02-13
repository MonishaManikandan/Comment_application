import { Component, OnInit } from '@angular/core';
import { Crudmodel } from '../Crudmodel';
import { CrudmodelService } from '../crudmodel.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Crudmodel_obj : Crudmodel = new Crudmodel;
  constructor (private crudservice_obj : CrudmodelService)
  {

  }

  signup()
  {
   
    this.crudservice_obj.signup(this.Crudmodel_obj).subscribe(); // Calling service for save functionality
    this.Crudmodel_obj.mail_id="";
    this.Crudmodel_obj.password="";
    this.Crudmodel_obj.secret_code="";
    alert("User account created");
    window.location.href = "signin"; // To redirect to signin page
  }

  ngOnInit(): void {
  }

}
