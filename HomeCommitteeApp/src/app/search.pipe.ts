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
      //payment-0
        return payments.filter(payment =>(new Date(payment.payForDate).getMonth()+1)  == (args[0]));
        
      else  if (args[1] == 1)
      //expendiure-1
        return payments.filter(expendiure => (new Date(expendiure.date).getMonth()+1) == (args[0]));

        //tenant-2
        else
        return payments.filter(tenant => (tenant.first_name.includes(args[0])));

    }
    return payments;
  }

}
