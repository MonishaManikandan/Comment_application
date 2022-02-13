import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Crudmodel } from './Crudmodel';
import { CrudmodelService } from './crudmodel.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { CommentComponent } from './comment/comment.component';
import { PasswordComponent } from './password/password.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    CommentComponent,
    PasswordComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [CrudmodelService,Crudmodel],
  bootstrap: [AppComponent]
})
export class AppModule { }
