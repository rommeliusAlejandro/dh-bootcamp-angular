import { Component } from '@angular/core';
import {ChatMessage} from "@dh-rall/ui-components/lib/model/chat/chat-message";
import {MenuItem} from "@dh-rall/ui-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dh-bootcamp-angular';

  chatMessages: ChatMessage[] = [];

  menuItems: MenuItem[] = [];

  active!: string;

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

    this.menuItems = [
      {
        path: '/home', label: 'Home'
      },
      {
        path: '/users', label: 'Users'
      },
      {
        path: '/users/1', label: 'Get User'
      },
      {
        path: '/users', label: 'Get User Query', query: {firstName: 'Rommel', lastName: 'Loayza'}
      },
      {
        path: '/sales', label: 'Sales'
      }
    ]
  }

  handleMessages(chatMessage: ChatMessage) {
    this.chatMessages.push(chatMessage);
  }

  handler(label: string): void {
    this.active = label;
  }
}
