import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'n26-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public cardTitle: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cardTitle = this.route.snapshot.queryParamMap.get('title');
  }
}
