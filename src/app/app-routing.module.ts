import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EPaths } from './shared/enums';

const routes: Routes = [
  {
    path: EPaths.HOME,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: EPaths.PRODUCT,
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
