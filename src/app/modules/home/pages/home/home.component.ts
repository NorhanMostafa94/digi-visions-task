import { Component, OnInit } from '@angular/core';
import { ILink } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links: ILink[] = [];

  constructor() { }

  ngOnInit(): void {
    this.links = [
      {
        text: 'Products list',
        link: '/product/list'
      },
      {
        text: 'Add Product',
        link: '/product/add'
      }
    ];
  }

}
