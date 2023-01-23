import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductManagementComponent } from './product-management/product-management.component';

const routes: Routes = [
  {path: 'product-management', component: ProductManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
