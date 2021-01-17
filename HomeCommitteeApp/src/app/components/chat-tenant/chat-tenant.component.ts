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
  messages: any[] = [];
  builing_id: number;
  userId;

  constructor(private userService: UserService,
    public sessionService: SesionService) {
    this.builing_id = userService.user.buildingId;
    this.userId=userService.user.id;
    this.sessionService.getAllSessions(this.builing_id).subscribe(res => {
      this.messagesDB = res;
      debugger;
    })
    //this.messages = this.chatShowcaseService.loadMessages();
  }

  sendMessage(event: any) {
    debugger
    this.messages.push({
      text: event.message,
      date: new Date(),
      type: 'text',
      user: 'Jonh Doe'
    });
    //const botReply = this.chatShowcaseService.reply(event.message);
    //if (botReply) {
    //setTimeout(() => { this.messages.push(event.message) }, 500);
    //}
  }

  ngOnInit(): void {
  }
}
