import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../../model/card.model';

@Component({
  selector: 'app-c-card',
  templateUrl: './c-card.component.html',
  styleUrls: ['./c-card.component.css']
})
export class CCardComponent implements OnInit {
  @Input() personData: Card;
  constructor() { }

  ngOnInit() {
    console.log(this.personData)
  }

}
