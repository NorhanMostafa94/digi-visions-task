import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import {
  ProductListComponent,
  AddEditProductComponent,
  ProductDetailsComponent
} from './pages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const BASEMODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  ProductRoutingModule,
];

const MODULES = [
  MatPaginatorModule,
  MatTableModule
];

const COMPONENTS = [
  ProductListComponent,
  AddEditProductComponent,
  ProductDetailsComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...BASEMODULES,
    ...MODULES
  ]
})
export class ProductModule { }
