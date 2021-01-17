import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Menu } from 'src/app/classes/menu';

@Component({
  selector: 'app-home-side-nav',
  templateUrl: './home-side-nav.component.html',
  styleUrls: ['./home-side-nav.component.scss']
})
export class HomeSideNavComponent implements OnInit {
open:boolean=false;
show: boolean = true;
@Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  menu:Menu[]=[
    {id:1,name:"הוצאות",link:"mainExpenditure",icon:"menu"},
    {id:2,name:"תקלות",link:"mainFault",icon:"menu"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  open_menu(e): void {
    this.open = !this.open;
  }

  close_nav(e): void {
    this.show = !this.show;
    if (!this.show)
      this.open = false;
    this.onClose.emit(this.show);
  }

}
