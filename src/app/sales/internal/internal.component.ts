import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.css']
})
export class InternalComponent implements OnInit {

  constructor(
    private readonly route: Router,
    private readonly location: Location
  ) { }

  ngOnInit(): void {
  }

  goExternal() {
    this.route.navigate(['/sales/external', {sessionId: '123'}]);

  }

  goBack() {
    this.location.back();
  }

}
