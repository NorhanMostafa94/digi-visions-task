import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const BASEMODULES = [
  CommonModule,
  HttpClientModule
]

@NgModule({
  declarations: [],
  imports: [
    ...BASEMODULES,
  ]
})
export class CoreModule { }
