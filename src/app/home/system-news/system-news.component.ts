import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {BaseNews} from "../base-news";

@Component({
  selector: 'app-system-news',
  templateUrl: './system-news.component.html',
  styleUrls: ['./system-news.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SystemNewsComponent implements OnInit, BaseNews {

  @Output()
  eventEmitter: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  userId: string = '';


  constructor() {
  }

  ngOnInit(): void {
  }

  emitValue() {
    this.eventEmitter.emit(1945);
  }
}
