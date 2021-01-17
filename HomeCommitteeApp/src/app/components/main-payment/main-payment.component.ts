import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-main-payment',
  templateUrl: './main-payment.component.html',
  styleUrls: ['./main-payment.component.scss']
})
export class MainPaymentComponent implements OnInit {
  active = 1;
  isCommittee:boolean=false;
  constructor(private userServise:UserService) { }

  ngOnInit(): void {
    this.isCommittee=this.userServise.user.permission==1?true:false;
  }

}
