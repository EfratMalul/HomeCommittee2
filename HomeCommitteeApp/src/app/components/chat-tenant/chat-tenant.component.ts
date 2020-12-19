import { ElementRef,ViewChild,Component, OnInit } from '@angular/core';

import { ConversationalForm } from 'conversational-form';
@Component({
  selector: 'app-chat-tenant',
  templateUrl: './chat-tenant.component.html',
  styleUrls: ['./chat-tenant.component.scss']
})
export class ChatTenantComponent implements OnInit {

  @ViewChild('myCF') myCF: ElementRef;
  cf:any;

  formFields = [
    {
      'tag': 'input',
      'type': 'text',
      'name': 'firstname',
      'cf-questions': ' אנחנו שמחים שבחרת להשתתף בשיח דיירים',
      'cf-input-placeholder':'דעתך בנושא:',
      },
    
    {
      'tag': 'input',
      'type': 'text',
      'name': 'lastname',
      'cf-questions': 'What is your lastname?'
    }
  ];
  constructor() { }

  ngOnInit(): void {

    console.log('init', this)
    this.cf = ConversationalForm.startTheConversation({
      options: {
        submitCallback: this.submitCallback.bind(this),
        preventAutoFocus: true,
      },
      tags: this.formFields
    });
    this.myCF.nativeElement.appendChild(this.cf.el);
  }
  submitCallback() {
    var formDataSerialized = this.cf.getFormData(true);
    console.log("Formdata, obj:", formDataSerialized);
    this.cf.addRobotChatResponse("You are done. Check the dev console for form data output.")
  }
}
