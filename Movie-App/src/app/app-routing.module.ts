import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomepageComponent } from './components/homepage/homepage.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomepageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
