import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CreditCardModule } from '@shared/credit-card/credit-card.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,

    CreditCardModule
  ],
  exports: [
    CommonModule,

    HeaderComponent,
    FooterComponent,

    CreditCardModule
  ]
})
export class SharedModule {
}
