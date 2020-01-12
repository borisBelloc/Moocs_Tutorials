import { Component, OnInit } from '@angular/core';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  // Declares a public messageService property.
  // Angular will inject the singleton MessageService into that property when it creates the MessagesComponent
  // The messageService property must be public because you're going to bind to it in the template.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
