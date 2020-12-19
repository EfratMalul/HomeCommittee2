import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/classes/menu';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent implements OnInit {
isOpen:boolean=false;
  menu:Menu[]=[
    {id:1,name:"הוצאות",link:"mainExpenditure",icon:"payment"},
    {id:2,name:"תקלות",link:"mainFault",icon:"build"},
    {id:3,name:"תשלומים",link:"mainPayment",icon:" monetization_on"},
    {id:4,name:"ניהול דיירים",link:"manageTenant",icon:"group"},
    {id:5,name:"דשבורד",link:"dashboard",icon:"pie_chart"},
    {id:6,name:"שיח דיירים",link:"chatTenant",icon:"message"},
    {id:7,name:"לוח הודעות",link:"messageBoard",icon:"event"},
    {id:8,name:"סקרים ",link:"survey",icon:"event_note"},
    {id:9,name:"דוחות",link:"reports",icon:"equalizer"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
