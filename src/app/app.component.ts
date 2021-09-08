import { Component } from '@angular/core';
import {ChatMessage} from "@dh-rall/ui-components/lib/model/chat/chat-message";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dh-bootcamp-angular';

  chatMessages: ChatMessage[] = [];


  constructor() {
    this.chatMessages = [
      {
        id: '1',
        recipient: 'A',
        sender: 'B',
        body: 'Hola!'
      },
      {
        id: '2',
        recipient: 'B',
        sender: 'C',
        body: 'Como estas!'
      },
      {
        id: '3',
        recipient: 'B',
        sender: 'C',
        body: 'Todo bien?!'
      }
    ];
  }

  handleMessages(chatMessage: ChatMessage) {
    this.chatMessages.push(chatMessage);
  }
}
