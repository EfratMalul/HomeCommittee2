import { Component, OnInit } from '@angular/core';
import { Fault } from 'src/app/classes/fault';
import { FaultService } from 'src/app/service/fault.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-fault',
  templateUrl: './fault.component.html',
  styleUrls: ['./fault.component.scss']
})
export class FaultComponent implements OnInit {

faults:Fault [] ;
// =[
  //   {id:1,description:"פיצוץ בצנרת",status:true,user_id:1},
  //   {id:2,description:"נזילה בחדר מדרגות ",status:false,user_id:5},
  //   {id:3,description:" דלת חדר עגלות התפרקה",status:true,user_id:4},
  //   {id:4,description:"להחליף תאורה במעלית ",status:false,user_id:1},
   
  // ]
  constructor(private faultService:FaultService,private userService:UserService) { }

  ngOnInit(): void {
    this.faultService.getAllFault(this.userService.user.buildingId).subscribe(f=>this.faults=f);

    
  }

}
