import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../../model/card.model';

@Component({
  selector: 'app-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.css']
})
export class SideCardComponent implements OnInit {
  @Input() personData :Card;

  constructor() { }

  ngOnInit() {
    console.log(this.personData);
  }

}
