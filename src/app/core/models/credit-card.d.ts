import { CreditCardType } from '@core/enums/credit-card-type.enum';
import { CreditCardColor } from '@core/enums/credit-card-color.enum';
import { PlanType } from '@core/enums/plan-type.enum';


export interface ICreditCard {
  type: CreditCardType;
  planType: PlanType;
  imageUrls: string[];
  name: string;
  colors: CreditCardColor[];
}
