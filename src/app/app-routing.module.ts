import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { PasswordComponent } from './password/password.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",redirectTo:"signin",pathMatch:"full"},
  {path:"signup",component:SignupComponent},
  {path:"signin",component:SigninComponent},
  {path:"forgetpassword",component:PasswordComponent},
  {path:"comment",component:CommentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
