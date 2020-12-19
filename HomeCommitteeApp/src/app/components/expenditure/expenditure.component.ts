import { Component, OnInit } from '@angular/core';
import { Expenditure } from 'src/app/classes/expenditure';
import { ExpenditureService } from 'src/app/service/expenditure.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.scss']
})
export class ExpenditureComponent implements OnInit {
  myserch: any = '';
  value = 'f';
  // exppenditure_arr: Expenditure[] = [
  //   { id: 1, sum: 200, date: new Date(), destination: "אנסטלטור", description: "בעקבות פיצוץ בצנרת", building_id: 2 },
  //   { id: 2, sum: 50, date: new Date(), destination: "טמבור", description: "קניית ידית", building_id: 4 },
  //   { id: 3, sum: 120, date: new Date(), destination: "מינימרכול השכונתי", description: " קניית חומרי נקיון", building_id: 3 },

  // ]
  // const date: Date = new Date(2018, 0O5, 0O5, 17, 23, 42, 11);

  exppenditure_arr: Expenditure[];
  constructor(private expenditureService: ExpenditureService, private userService: UserService) {
  }




  ngOnInit(): void {

    // this.exppenditure_arr=e
    this.expenditureService.getAllExpenditure(this.userService.user.buildingId).subscribe(e =>
       {
      this.exppenditure_arr = e;
      
    

      var dt = (new Date(this.exppenditure_arr[2].date));
      var dtm = dt.getMonth()+1;
      console.log( "month  "+dtm);
    });

  }

}
