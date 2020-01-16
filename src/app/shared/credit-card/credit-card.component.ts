import { Component, Input, OnInit } from '@angular/core';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { ICreditCard } from '@core/models/credit-card';
import { CreditCardService } from './credit-card.service';

@Component({
  selector: 'n26-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  @Input() card: ICreditCard;

  public swiperConfig: SwiperConfigInterface;

  constructor(private creditCardService: CreditCardService) {
  }

  ngOnInit() {
    this.swiperConfig = this.creditCardService.getSwiperConfig(this.card.colors);
  }

}
