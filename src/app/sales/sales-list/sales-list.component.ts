import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  sales = [
    {id: 1, value: 'Producto 1'},
    {id: 2, value: 'Producto 2'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
