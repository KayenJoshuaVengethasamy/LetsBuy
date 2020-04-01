import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { LoginComponent } from './login/login.component';
import { PmComponent } from './pm/pm.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

import { AdminHomeComponent } from './admin/admin-home/admin-home.component';



const routes: Routes = [
  {
      path: 'home',
      component: MainHomeComponent
  },
  {
      path: 'user',
      component: UserComponent
  },
  {
      path: 'pm',
      component: PmComponent
  },
  {
      path: 'admin',
      component: AdminHomeComponent
  },
  {
      path: 'auth/login',
      component: LoginComponent
  },
  {
      path: 'signup',
      component: RegisterComponent
  },
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
