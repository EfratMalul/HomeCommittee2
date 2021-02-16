import { ElementRef, ViewChild, Component, OnInit } from '@angular/core';

import { ConversationalForm } from 'conversational-form';
import { Session } from 'src/app/classes/session';
import { SesionService } from 'src/app/service/sesion.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-chat-tenant',
  templateUrl: './chat-tenant.component.html',
  styleUrls: ['./chat-tenant.component.scss']
})
export class ChatTenantComponent implements OnInit {

  messagesDB: Session[] = [];
  message: Session = new Session();
  builing_id: number;
  userId;

  constructor(private userService: UserService,
    public sessionService: SesionService) {
    this.builing_id = userService.user.buildingId;
    this.userId = userService.user.id;
    this.sessionService.getAllSessions(this.builing_id).subscribe(res => {
      this.messagesDB = res;
    })
  }

  sendMessage() {
    this.message.date = new Date();
    this.message.building_id = this.builing_id;
    this.message.user_id = this.userId;
    this.sessionService.addMessage(this.message).subscribe(p=>{
      this.sessionService.getAllSessions(this.builing_id).subscribe(res => {
        this.messagesDB = res;
      })
    })
  }

  ngOnInit(): void {
  }
}
