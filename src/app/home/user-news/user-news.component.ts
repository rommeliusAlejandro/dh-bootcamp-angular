import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {BaseNews} from "../base-news";

@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.component.html',
  styleUrls: ['./user-news.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class UserNewsComponent implements OnInit, BaseNews {

  @Output()
  eventEmitter: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  userId: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  emitValue() {
    this.eventEmitter.emit(true);
  }

}
