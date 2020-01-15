import { Component, Input, OnInit } from '@angular/core';
import { ICreditCard } from '@core/models/credit-card';

@Component({
  selector: 'n26-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  @Input() card: ICreditCard;
  @Input('enableSwiper') isSwiperEnabled: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
