import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {BaseNews} from "../base-news";

@Component({
  selector: 'app-organization-news',
  templateUrl: './organization-news.component.html',
  styleUrls: ['./organization-news.component.css']
})
export class OrganizationNewsComponent implements OnInit, BaseNews, OnChanges {

  @Output()
  eventEmitter: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  userId: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.warn(this.userId);
  }

  emitValue() {
    this.eventEmitter.emit('Hello from Organization');
  }

}
