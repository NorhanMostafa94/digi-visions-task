import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages';
import { HomeCardComponent } from './components';

const BASEMODULES = [
  CommonModule,
  HomeRoutingModule,
  RouterModule
];

const COMPONENTS = [
  HomeCardComponent
];

const PAGES = [
  HomeComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PAGES,
  ],
  imports: [
    ...BASEMODULES
  ]
})
export class HomeModule { }
