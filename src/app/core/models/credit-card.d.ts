import { CreditCardType } from '@core/enums/credit-card-type.enum';
import { CreditCardColor } from '@core/enums/credit-card-color.enum';
import { CreditCardCategory } from '@core/enums/credit-card-category.enum';


export interface ICreditCard {
  type: CreditCardType;
  category: CreditCardCategory;
  imageUrls: string[];
  name: string;
  colors: CreditCardColor[];
}
