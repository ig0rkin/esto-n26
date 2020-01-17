import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CreditCardModule } from '@shared/credit-card/credit-card.module';
import { AnimateOnScrollDirective } from './directives/animate-on-scroll.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AnimateOnScrollDirective
  ],
  imports: [
    CommonModule,

    CreditCardModule
  ],
  exports: [
    CommonModule,

    HeaderComponent,
    FooterComponent,
    AnimateOnScrollDirective,

    CreditCardModule
  ]
})
export class SharedModule {
}
