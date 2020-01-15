import { Component, OnInit } from '@angular/core';

import { PlansService } from '@modules/plans/plans.service';
import { Observable } from 'rxjs';

import { ICreditCard } from '@core/models/credit-card';

@Component({
  selector: 'n26-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  public creditCards$: Observable<ICreditCard[]>;


  constructor(public plansService: PlansService) {
  }

  ngOnInit() {
    this.creditCards$ = this.plansService.getCreditCardsAsObservable();
  }
}
