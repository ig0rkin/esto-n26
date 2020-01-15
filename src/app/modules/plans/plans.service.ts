import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ICreditCard } from '@core/models/credit-card';
import { CreditCardType } from '@core/enums/credit-card-type.enum';
import { CreditCardColor } from '@core/enums/credit-card-color.enum';
import { PlanType } from '@core/enums/plan-type.enum';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private creditCards: ICreditCard[] = [
    {
      type: CreditCardType.STANDARD,
      planType: PlanType.PERSONAL,
      imageUrls: [
        // tslint:disable-next-line:max-line-length
        'https://images.ctfassets.net/q33z48p65a6w/2DqC4xSMtayA6kmOo64I0E/3ffc778485421fda7b68b01f554700e0/n26-cards-mastercard-uk.png?fit=thumb&fm=png&q=90&w=275'
      ],
      name: 'N26',
      colors: [
        CreditCardColor.TRANSPARENT
      ]
    },
    {
      type: CreditCardType.STANDARD,
      planType: PlanType.PERSONAL,
      imageUrls: [
        // tslint:disable-next-line:max-line-length
        'https://images.ctfassets.net/q33z48p65a6w/63bHYeBzGel7qMrWS50qal/643862fbfbd72ca876f384d5ad0944c6/n26-cards-mastercard-petrol-de.png?fit=thumb&fm=webp&q=90&w=275',
        // tslint:disable-next-line:max-line-length
        'https://images.ctfassets.net/q33z48p65a6w/1YbcSNwYlw3Iyr5X829IyL/93601386f27bc5f9f48fc7f9f64c9ff8/n26-cards-mastercard-wheat-de.png?fit=thumb&fm=webp&q=90&w=275',
        // tslint:disable-next-line:max-line-length
        'https://images.ctfassets.net/q33z48p65a6w/7oZQg0OqfYNupp1lv9g5Cj/e3494d100fd0331940f1b4d5a12de668/n26-cards-mastercard-rhubarb-de.png?fit=thumb&fm=webp&q=90&w=275',
        // tslint:disable-next-line:max-line-length
        'https://images.ctfassets.net/q33z48p65a6w/7bHsCLfXHvoqnBWbuSNXQo/932381bf72732b4cf1c082f0cf773ca2/n26-cards-mastercard-teal-de.png?fit=thumb&fm=webp&q=90&w=275',
        // tslint:disable-next-line:max-line-length
        'https://images.ctfassets.net/q33z48p65a6w/WRQclrxOxjtVThiH3pm2H/9d0f83f0df7fac785b98e34f84e29c0d/n26-cards-mastercard-raven-de.png?fit=thumb&fm=webp&q=90&w=275'
      ],
      name: 'N26 You',
      colors: [
        CreditCardColor.PETROL,
        CreditCardColor.WHEAT,
        CreditCardColor.RHUBARB,
        CreditCardColor.TEAL,
        CreditCardColor.ASH
      ]
    },
    {
      type: CreditCardType.METAL,
      planType: PlanType.PERSONAL,
      imageUrls: [
        // tslint:disable-next-line:max-line-length
        'https://images.ctfassets.net/q33z48p65a6w/4tH5CPvCzm6eWusOuACoaU/bc5e6d4e6ab790cce10052fd55b5e4f1/n26-cards-mastercard-metal-charcoalblack.png?fit=thumb&fm=webp&q=90&w=275',
        // tslint:disable-next-line:max-line-length
        'https://images.ctfassets.net/q33z48p65a6w/1WVYdUNU7q84ISMKMsgwaK/1b64435a702939ea46dbe8938d972df5/n26-cards-mastercard-metal-quartzrose.png?fit=thumb&fm=webp&q=90&w=275',
        // tslint:disable-next-line:max-line-length
        'https://images.ctfassets.net/q33z48p65a6w/6F8ki0yHtuSUCwEeCeWMq8/792891200a1f50ad300356e798abb9ca/n26-cards-mastercard-metal-slategrey.png?fit=thumb&fm=webp&q=90&w=275'
      ],
      name: 'N26 Metal',
      colors: [
        CreditCardColor.CHARCOAL_BLACK,
        CreditCardColor.QUARTZ_ROSE,
        CreditCardColor.SLATE_GREY
      ]
    }
  ];
  private creditCardsSource$: BehaviorSubject<ICreditCard[]> = new BehaviorSubject(this.creditCards);

  constructor() {
  }

  public getCreditCardsAsObservable(): Observable<ICreditCard[]> {
    return this.creditCardsSource$.asObservable();
  }
}
