import { NgModule } from '@angular/core';

import { SwiperModule } from 'ngx-swiper-wrapper';

import { CreditCardComponent } from './credit-card.component';
import { CreditCardService } from './credit-card.service';


@NgModule({
  declarations: [
    CreditCardComponent
  ],
  imports: [
    SwiperModule
  ],
  exports: [
    CreditCardComponent
  ],
  providers: [
    CreditCardService
  ]
})
export class CreditCardModule {
}
