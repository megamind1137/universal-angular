import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VerifyComponent } from './verify/verify.component';
import { AuthGuardService } from './_auth/auth-guard.service';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', canActivate: [AuthGuardService], component: HomeComponent },
  { path: 'footer', canActivate: [AuthGuardService], component: FooterComponent },
  { path: 'header', canActivate: [AuthGuardService], component: HeaderComponent },
  { path: 'verify', canActivate: [AuthGuardService], component: VerifyComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
