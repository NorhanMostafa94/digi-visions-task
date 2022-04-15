import { Component, Input, OnInit } from '@angular/core';
import { ILink } from 'src/app/shared/models';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {

  @Input('link') link?: ILink;

  constructor() { }

  ngOnInit(): void {
  }

}
