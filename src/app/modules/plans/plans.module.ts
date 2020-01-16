import { NgModule } from '@angular/core';

import { PlansComponent } from './plans.component';

import { SharedModule } from '@shared/shared.module';
import { PlansRoutingModule } from '@modules/plans/plans-routing.module';


@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    SharedModule,
    PlansRoutingModule
  ]
})
export class PlansModule {
}
