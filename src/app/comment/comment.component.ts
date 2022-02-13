import { Component, Input, OnInit } from '@angular/core';
import { Crudmodel } from '../Crudmodel';
import { CrudmodelService } from '../crudmodel.service';
import { SigninService } from '../signin/signin.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  sign_service_obj : SigninService = new SigninService;
  crudmodel_obj = new Crudmodel;
  
  constructor(private crudservice_obj : CrudmodelService) { }

  ngOnInit(): void {
  }
  save_comment()
  {
    this.crudmodel_obj.user_id=this.sign_service_obj.get_userid();   
    this.crudservice_obj.save_comment(this.crudmodel_obj).subscribe();
    this.crudmodel_obj.comment="";
    alert("Comment Saved");
    
  }

}
