import { NgModule } from '@angular/core';

import { SwiperModule } from 'ngx-swiper-wrapper';

import { CreditCardComponent } from '@shared/credit-card/credit-card.component';
import { CreditCardService } from '@shared/credit-card/credit-card.service';


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
