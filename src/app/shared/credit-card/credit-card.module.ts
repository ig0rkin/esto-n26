import { NgModule } from '@angular/core';

import { SwiperModule } from 'ngx-swiper-wrapper';

import { CreditCardComponent } from './credit-card.component';
import { CreditCardService } from './credit-card.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CreditCardComponent
  ],
  imports: [
    SwiperModule,
    RouterModule
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
