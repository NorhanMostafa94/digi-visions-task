import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IProductPaths } from './enums';
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
        path: IProductPaths.LIST,
        component: ProductListComponent
      },
      {
        path: IProductPaths.DETAILS,
        component: ProductDetailsComponent
      },
      {
        path: IProductPaths.ADD,
        component: AddEditProductComponent
      },
      {
        path: IProductPaths.EDIT,
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
