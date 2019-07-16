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
    title: 'store'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
