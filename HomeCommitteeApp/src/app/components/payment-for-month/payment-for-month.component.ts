import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExpenditureBuilding } from 'src/app/classes/expenditureBuilding';
import { Payment } from 'src/app/classes/payment';
import { ExpenditureService } from 'src/app/service/expenditure.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-payment-for-month',
  templateUrl: './payment-for-month.component.html',
  styleUrls: ['./payment-for-month.component.scss']
})
export class PaymentForMonthComponent implements OnInit {

  currentDate: Date;
  currentDateString: string;
  payment: Payment = new Payment();
  expenditureBuilding = new ExpenditureBuilding();
  formPayment = new FormGroup(
    {
      payForDate: new FormControl(''),
    });

  constructor(private userService: UserService, private expenitureServise: ExpenditureService) { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.currentDateString = this.currentDate.getMonth() + 1 + "";
  }
  onSubmit() {
this.expenditureBuilding.buildingId=this.userService.user.buildingId;
this.expenditureBuilding.month=this.formPayment.get("payForDate").value;
    this.expenitureServise.calcPayForMonth(this.expenditureBuilding).subscribe(res => {
      this.payment.sum = Number(res);
      alert(this.payment.sum);

    });

  }
}