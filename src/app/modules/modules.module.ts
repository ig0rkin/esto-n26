import { NgModule } from '@angular/core';

import { AccountModule } from './account/account.module';
import { PlansModule } from './plans/plans.module';


@NgModule({
  declarations: [],
  imports: [
    AccountModule,
    PlansModule
  ]
})
export class ModulesModule {
}
