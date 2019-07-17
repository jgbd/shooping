import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { StoreComponent } from './store/store.component';
import { RegisterComponent } from './register/register.component';
import { CardShoppingComponent } from './card-shopping/card-shopping.component';

@NgModule({
  declarations: [StoreComponent, AdminComponent, RegisterComponent, CardShoppingComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
  ],
  exports: [],
})
export class ShopModule { }
