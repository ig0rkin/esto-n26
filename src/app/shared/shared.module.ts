import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CreditCardComponent } from './credit-card/credit-card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CreditCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,

    HeaderComponent,
    FooterComponent,
    CreditCardComponent
  ]
})
export class SharedModule {
}
