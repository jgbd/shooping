import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [StoreComponent, AdminComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
  ],
  exports: [],
})
export class ShopModule { }
