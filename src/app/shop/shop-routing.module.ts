import { CardShoppingComponent } from './card-shopping/card-shopping.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';

const routes: Routes = [{
  path: '',
  component: StoreComponent,
  data: {
    title: 'store'
  }
},
{
  path: 'admin',
  component: AdminComponent,
  data: {
    title: 'admin'
  }
},
{
  path: 'register',
  component: RegisterComponent,
  data: {
    title: 'register'
  }
},
{
  path: 'cart-shop',
  component: CardShoppingComponent,
  data: {
    title: 'car'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
