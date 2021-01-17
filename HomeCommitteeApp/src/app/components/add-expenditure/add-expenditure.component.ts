import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Expenditure } from 'src/app/classes/expenditure';
import { Payment } from 'src/app/classes/payment';
import { ExpenditureService } from 'src/app/service/expenditure.service';
import { PaymentService } from 'src/app/service/payment.service';
import { TenantService } from 'src/app/service/tenant.service';
import { UserService } from 'src/app/service/user.service';
import { DialogData } from '../maim/maim.component';

@Component({
  selector: 'app-add-expenditure',
  templateUrl: './add-expenditure.component.html',
  styleUrls: ['./add-expenditure.component.scss']
})
export class AddExpenditureComponent implements OnInit {
  type: number;
  expenditure: Expenditure;
  formAddExpenditure = new FormGroup({

    sum: new FormControl(),
    date: new FormControl(''),
    destination: new FormControl(),
    description: new FormControl(''),
    // building_id:new FormControl('')
    type: new FormControl('')

  });
  p: Payment;

  constructor(public expenditureService: ExpenditureService, private userService: UserService, private tenantService: TenantService,
    private paymentService: PaymentService, @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<AddExpenditureComponent>) { }
  onSubmit() {
    this.expenditure = new Expenditure();
    this.expenditure.sum = this.formAddExpenditure.get("sum").value;
    this.expenditure.date = this.formAddExpenditure.get("date").value;
    this.expenditure.destination = (this.formAddExpenditure.get("destination").value) - 1;
    this.expenditure.description = this.formAddExpenditure.get("description").value;
    this.expenditure.building_id = this.userService.user.buildingId;

    // let element1 = <HTMLInputElement>document.getElementById("irregular");
    // let element2 = <HTMLInputElement>document.getElementById("regular");
    // this.expenditure.type=document.getElementById("irregular").checked==true?1:0
    this.expenditure.type = this.formAddExpenditure.get("type").value== 1 ? 1 : 0;
    this.expenditureService.addExpenditure(this.expenditure).subscribe(x => {
      alert("האוביקט נוסף בהצלחה");
      this.onNoClick();
    })

    // var buildingId=this.userService.user.buildingId;
    // var sum = this.expenditure.sum;
    // var numTenant= this.tenantService.GetNumTenant(buildingId).subscribe(t=> parseInt(t));

    // this.p=new Payment(){id:1,building_id:buildingId,sum:sum,date_payment:this.expenditure.date,this.expenditure.description}

    //  this.paymentService.AddPayment()



    // this.expenditureService.addExpenditure(this.expenditure).subscribe((x => {
    //   console.log(this.expenditure);



  }
  onNoClick(): void {
    this.dialogRef.close();
    this.formAddExpenditure.reset({ value: "" });
  }


  ngOnInit(): void {
  }

}
