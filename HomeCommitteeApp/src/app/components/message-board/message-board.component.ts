import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/classes/message';
import { MessagesService } from 'src/app/service/message.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {
  messagesDB: Message[] = [];
  message: Message = new Message();
  builing_id: number;
  userId;

  constructor(private userService: UserService,
    public sessionService: MessagesService) {
    this.builing_id = userService.user.buildingId;
    this.sessionService.getAllSessions(this.builing_id).subscribe(res => {
      this.messagesDB = res;
    })
  }

  sendMessage() {
    this.message.date = new Date();
    this.message.building_id = this.builing_id;
    this.sessionService.addMessage(this.message).subscribe(p=>{
      this.sessionService.getAllSessions(this.builing_id).subscribe(res => {
        this.messagesDB = res;
      })
    })
  }

  ngOnInit(): void {
  }

}
