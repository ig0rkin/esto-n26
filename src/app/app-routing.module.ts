import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlansComponent } from './modules/plans/plans.component';

const routes: Routes = [
  { path: '', redirectTo: '/plans', pathMatch: 'full' },
  { path: 'plans', component: PlansComponent },
  { path: '**', redirectTo: '/plans' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
