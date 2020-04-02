import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { LoginComponent } from './login/login.component';
import { PmComponent } from './pm/pm.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

import { CreateProductComponent } from './admin/products/create-product/create-product.component';

import { ProductDetailsComponent } from './admin/products/product-details/product-details.component';
import { ProductListComponent } from './admin/products/product-list/product-list.component';
import { UpdateProductComponent } from './admin/products/update-product/update-product.component';



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
  },
  {
      path: 'admin/product/add',
      component: CreateProductComponent
  },
  {
      path: 'admin/product/details',
      component: ProductDetailsComponent
  },
  {
      path: 'admin/product/list',
      component: ProductListComponent
  },
  {
      path: 'admin/product/update',
      component: UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
