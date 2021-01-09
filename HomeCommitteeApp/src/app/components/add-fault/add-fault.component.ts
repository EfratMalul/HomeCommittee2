import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Fault } from 'src/app/classes/fault';
import { FaultService } from 'src/app/service/fault.service';
import { UserService } from 'src/app/service/user.service';
import { DialogData } from '../maim/maim.component';

@Component({
  selector: 'app-add-fault',
  templateUrl: './add-fault.component.html',
  styleUrls: ['./add-fault.component.scss']
})
export class AddFaultComponent implements OnInit {
  fault:Fault;
  formAddFault = new FormGroup({
  
    description:new FormControl(''),
 
    });
  constructor(private faultServise:FaultService,private userService:UserService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<AddFaultComponent>) { }

  onSubmit(){
    this.fault=new Fault();
    this.fault.user_id=this.userService.user.id;
    this.fault.description=this.formAddFault.get("description").value;
    this.fault.status=false;
    this.fault.building_id=this.userService.user.buildingId;
 
   
    this.faultServise.addFault(this.fault).subscribe((x=>{
      console.log(this.fault);
      alert("האוביקט נוסף בהצלחה");
    }));
    this.onNoClick();
  };

  onNoClick(): void {
    this.dialogRef.close();
    this.formAddFault.reset({ value: "" });
  }
  ngOnInit(): void {
  }

}
// <!-- id:number;
// user_id:number;
// description:string;
// status:boolean; -->