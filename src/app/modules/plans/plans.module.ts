import { NgModule } from '@angular/core';
import { PlansComponent } from './plans.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PlansModule {
}
