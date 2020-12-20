import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Expenditure } from 'src/app/classes/expenditure';
import { ExpenditureService } from 'src/app/service/expenditure.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-expenditure',
  templateUrl: './add-expenditure.component.html',
  styleUrls: ['./add-expenditure.component.scss']
})
export class AddExpenditureComponent implements OnInit {

  expenditure: Expenditure;
  formAddExpenditure = new FormGroup({

    sum: new FormControl(),
    date: new FormControl(''),
    destination: new FormControl(),
    description: new FormControl(''),
    // building_id:new FormControl('')
  });


  constructor(public expenditureService: ExpenditureService, private userService: UserService) { }
  onSubmit() {
    this.expenditure = new Expenditure();
    this.expenditure.sum = this.formAddExpenditure.get("sum").value;
    this.expenditure.date = this.formAddExpenditure.get("date").value;
    this.expenditure.destination = this.formAddExpenditure.get("destination").value;
    this.expenditure.description = this.formAddExpenditure.get("description").value;
    this.expenditure.building_id = this.userService.user.buildingId;

    this.expenditureService.addExpenditure(this.expenditure).subscribe((x => {
      console.log(this.expenditure);
      alert("האוביקט נוסף בהצלחה");
    }));

  }

  ngOnInit(): void {
  }

}
