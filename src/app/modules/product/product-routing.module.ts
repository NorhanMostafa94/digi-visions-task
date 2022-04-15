import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EProductPaths } from './enums';
import {
  AddEditProductComponent,
  ProductDetailsComponent,
  ProductListComponent
} from './pages';

const COMPONENTS = [
  ProductListComponent,
  AddEditProductComponent,
  ProductDetailsComponent
]

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: EProductPaths.LIST,
        component: ProductListComponent
      },
      {
        path: EProductPaths.DETAILS,
        component: ProductDetailsComponent
      },
      {
        path: EProductPaths.ADD,
        component: AddEditProductComponent
      },
      {
        path: EProductPaths.EDIT,
        component: AddEditProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
