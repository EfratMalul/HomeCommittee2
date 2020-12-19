import { Pipe, PipeTransform } from '@angular/core';
import { Payment } from './classes/payment';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(payments: any[],...args: any[]): any[] {
  //  category -expendeture or tenant- payment
    
  // return (payments.filter(payment=>payment.))

  // DATE
    if (args[0] != undefined && args[0] !="") {
      if (args[1] == 0)
        return payments.filter(payment => payment.date_payment.getMonth() == (args[0]));
      else
        return payments.filter(payment => (new Date(payment.date).getMonth()+1) == (args[0]));

    }
    return payments;
  }

}
